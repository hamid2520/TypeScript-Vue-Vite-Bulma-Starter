/**
 * This is your client vue app entrypoint
 * Its loaded because it is referenced in the vite
 * entrypoint file (index.html located at the root of this project)
 *
 * External css/js files will be loaded as dependencies.
 * You may want to check the vite configuration.
 * Some plugins will register virtual components or lazyload other for us.
 *
 * @see /index.html
 * @see /vite.config.ts
 * @see /app.ts
 * @see /plugins/*.ts
 */
import { createApp } from './app'

/**
 * We create our app and mount it when it is ready
 *
 * @see /@src/app.ts for more detailed informations
 */
createApp().then(async (starter) => {
  // wait for the app to be ready
  await starter.router.isReady()

  // finaly mount the app to the DOM
  starter.app.mount('#app')
})
