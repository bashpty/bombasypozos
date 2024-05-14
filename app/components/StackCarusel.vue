<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
</script>

<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import type { RouteLocationRaw } from 'vue-router'

export interface CarouselSlideItem {
  icon?: string
  title?: string
  to?: RouteLocationRaw
}

export interface CarouselProps {
  slidesToShow?: number
  slides: CarouselSlideItem[]
}

const props = withDefaults(defineProps<CarouselProps>(), {
  slidesToShow: 3,
  slides: () => [],
})
</script>

<template>
  <label style="font-weight: bolder; font-size: medium">Tecnologías que manejamos...</label>
  <div class="relative">
    <Carousel :items-to-show="slidesToShow" :slides="props.slides" :breakpoints="{
      300: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
      768: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
      900: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
      1024: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
    }">
      <Slide v-for="(slide, index) in props.slides" :key="index">
        <NuxtLink :to="slide.to" class="cursor-pointer">
          <BaseCard shape="curved" :name="'stack_' + index"
            class="text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-500 flex min-w-[100px] items-center justify-center px-2 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div class="text-center">
              <BaseAvatar :src="slide.icon" size="xs" class="mx-auto" />
              <BaseHeading size="xs" weight="medium" lead="tight" class="text-muted-800 dark:text-white">
                {{ slide.title }}
              </BaseHeading>
            </div>
          </BaseCard>
        </NuxtLink>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style lang="pcss" scoped>
.carousel__slide {
  @apply p-1;
}

:deep(.carousel__next--in-active),
:deep(.carousel__prev--in-active) {
  @apply opacity-70;
}

:deep(.carousel__next) {
  @apply end-0;
}

:deep(.carousel__next) svg {
  @apply -end-px;
}

:deep(.carousel__prev) {
  @apply end-8;
}

:deep(.carousel__prev) svg {
  @apply -start-px;
}

:deep(.carousel__next),
:deep(.carousel__prev) {
  @apply absolute -top-5 text-muted-400 transition-colors duration-300;
  left: initial;
}

:deep(.carousel__next) svg,
:deep(.carousel__prev) svg {
  @appy relative w-2 h-2;
}

:deep(.carousel__next:hover),
:deep(.carousel__prev:hover) {
  @apply text-primary-500;
}
</style>
