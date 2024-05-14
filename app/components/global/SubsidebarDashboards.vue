<script setup lang="ts">
const navigation = [
  /* {
    name: 'Personal',
    children: [
      {
        name: 'Personal V1',
        icon: 'ph:coffee-duotone',
        to: '/dashboards',
        exact: true,
      },
      {
        name: 'Personal V2',
        icon: 'ph:chart-pie-slice-duotone',
        to: '/dashboards/personal-2',
      },
      {
        name: 'Personal V3',
        icon: 'ph:cactus-duotone',
        to: '/dashboards/personal-3',
      },
    ],
  } */
]
</script>

<template>
  <TairoSubsidebar>
    <template #header>
      <TairoSubsidebarHeader />
    </template>
    <TairoSubsidebarMenu :navigation="navigation" />
  </TairoSubsidebar>
</template>
