<script setup lang="ts">
useSeoMeta({
  ogUrl: 'https://bashpty.com',
  ogImage: '/img/og.png',
  ogTitle: 'Bombas y Pozos',
  ogDescription: 'Your best tech partner',
})
definePageMeta({
  title: 'Bombas y Pozos',
  description: 'Your best tech partner',
  breadcrumb: {
    label: 'Tairo',
  },
  layout: 'landing',
})
</script>

<template>
  <div>
    <LandingContent />
    <LandingFooter />
  </div>
</template>
