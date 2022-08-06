<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Starter App for start vue3, vitejs, ts, bluma',
})
</script>

<template>
  <LandingLayout theme="light">
    <div class="landing-page-wrapper">
      <!-- content component-->

      <!-- Back To Top Button -->
      <div id="backtotop">
        <a href="#" aria-label="back to top">
          <i aria-hidden="true" class="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  </LandingLayout>
</template>

<style lang="scss">
@import '/@src/scss/_demo/landing';
</style>
