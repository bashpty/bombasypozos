<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="dark:bg-muted-900 border-muted-200 dark:border-muted-700 relative border-t bg-white">
    <div class="ltablet:flex-row mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-8 lg:flex-row">
      <NuxtLink to="/" aria-label="Go to Tairo homepage" class="ltablet:w-1/5 block w-full lg:w-1/5">
        <TairoLogoText class="text-muted-300 ltablet:mx-0 mx-auto h-16 transition-all duration-200 lg:mx-0" />
      </NuxtLink>
      <div class="ltablet:mt-0 ltablet:gap-6 mt-6 flex flex-wrap items-center justify-center gap-5 lg:mt-0 lg:gap-7">
        Contactenos
        <NuxtLink href="tel:+50763798390" target="_blank" rel="noopener"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300">
          <Icon name="ph:phone-bold" size="30" class="text-muted-400 dark:text-muted-500 size-10 block" />
        </NuxtLink>

        <NuxtLink to="https://wa.link/ozvjy8" target="_blank" rel="noopener"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300">
          <Icon name="ph:whatsapp-logo-bold" size="30" class="text-muted-400 dark:text-muted-500 size-10 block" />
        </NuxtLink>
        <NuxtLink to="https://www.instagram.com/bombasypozos/" target="_blank"
          class="text-muted-600 hover:text-primary-500 dark:text-muted-200 dark:hover:text-primary-400 text-sm transition-colors duration-300">
          <Icon name="ph:instagram-logo-bold" size="30" class="text-muted-400 dark:text-muted-500 size-10 block" />
        </NuxtLink>
      </div>
      <div
        class="text-muted-500 dark:text-muted-400 ltablet:w-1/5 ltablet:justify-end ltablet:mt-0 mt-6 flex w-full items-center justify-center text-sm lg:mt-0 lg:w-1/5 lg:justify-end">
        <span>
          © Todos los derechos.
          {{ year }}.
        </span>
      </div>
    </div>
  </footer>
</template>
