import { createApp as createClientApp } from 'vue'

import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createRouter } from './router'
import StartApp from './StartApp.vue'
import './styles'

import { createApi } from '/@src/composable/useApi'

const plugins = import.meta.glob('./plugins/*.ts')

export type StartAppContext = Awaited<ReturnType<typeof createApp>>
export type StartPlugin = (starter: StartAppContext) => void | Promise<void>

// this is a helper function to define plugins with autocompletion
export function definePlugin(plugin: StartPlugin) {
  return plugin
}

export async function createApp() {
  const app = createClientApp(StartApp)
  const router = createRouter()
  const api = createApi()

  const head = createHead()
  app.use(head)

  const pinia = createPinia()
  app.use(pinia)

  const starter = {
    app,
    api,
    router,
    head,
    pinia,
  }

  app.provide('starter', starter)

  for (const path in plugins) {
    try {
      const { default: plugin } = await plugins[path]()
      await plugin(starter)
    } catch (error) {
      console.error(`Error while loading plugin "${path}".`)
      console.error(error)
    }
  }

  // use router after plugin registration, so we can register navigation guards
  app.use(starter.router)

  return starter
}
