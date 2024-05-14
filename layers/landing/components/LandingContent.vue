<style>
li {
  color: rgb(var(--color-muted-400));
}

.datalog {
  margin-top: 15%;
  margin-bottom: 12%;
}

.emerg {
  margin-top: 6%;
  margin-bottom: 6%;
}

.grw {
  margin-top: -2%;
  margin-bottom: 2%;
}

.marketing {
  margin-bottom: 2%;
}

@media (max-width: 1080px) {
  .banner {
    width: 100%;
    display: flexbox;
    justify-content: center;
    align-items: center;
  }
}
</style>
<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-2">
      <div class="mb-10 max-w-2xl">
        <BaseText size="3xl" class="text-primary-500 dark:text-muted-100 mx-auto mb-4">Bombas y Pozos</BaseText>
        <BaseHeading as="h4" size="2xl" weight="light" lead="normal"
          class="text-muted-800 mx-auto mb-4 dark:text-white">
          Especialista en todo tipo de bombas para pozo y piscina. Accesorios en
          general, También perforaciones de pozos
        </BaseHeading>
      </div>

      <div class="mb-10 grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-8 md:gap-y-16" id="row-1">
        <div class="relative">
          <BaseCard rounded="lg" class="p-6" id="support" name="support">
            <BaseHeading as="h3" size="sm" weight="bold" lead="tight"
              class="text-muted-800 center mb-2 text-center align-middle dark:text-white">
              Soporte Técnico 🖥 🛠
            </BaseHeading>

            <BaseParagraph id="pa2" name="pa2" size="sm" lead="tight" class="text-muted-400">
              <BaseList>
                <BaseListItem title="Equipos"
                  subtitle="Mantenimiento preventivo. (Servidores, Torres, Laptops y redes computacionales)">
                  <Icon name="ph:monitor-bold" class="text-info-500 size-6" />
                </BaseListItem>
              </BaseList>
            </BaseParagraph>
          </BaseCard>
        </div>
        <div class="relative">
          <BaseCard rounded="lg" class="p-6" id="admin" name="admin">
            <BaseHeading as="h3" size="lg" weight="bold" lead="tight"
              class="text-muted-800 center mb-2 text-center align-middle dark:text-white">
              Instalacion 📊
            </BaseHeading>

            <BaseParagraph id="pa3" name="pa3" size="sm" lead="tight" class="text-muted-400">
              <BaseList>
                <BaseListItem title="Instalacion de equipos" subtitle="Experiencia...">
                  <Icon name="ph:database-fill" class="text-info-500 size-6" />
                </BaseListItem>
                <BaseListItem title="Base de datos Relacionales" class="text-muted-400 ps-6">
                </BaseListItem>
                <BaseList class="text-muted-400 ps-10" style="font-size: small">
                  <li>prueba</li>
                </BaseList>
              </BaseList>
            </BaseParagraph>
          </BaseCard>
        </div>
        <div class="relative">
          <BaseCard rounded="lg" class="p-6" id="develop" name="develop">
            <BaseHeading as="h3" size="lg" weight="bold" lead="tight"
              class="text-muted-800 center mb-2 text-center align-middle dark:text-white">
              Personal Capacitado
            </BaseHeading>

            <BaseParagraph id="pa4" name="pa4" size="sm" lead="tight" class="text-muted-400">
              <BaseList>
                <BaseListItem title="Capacitacion a medida" subtitle="Implemnatmos equipos ">
                  <Icon name="ph:terminal-duotone" class="text-info-500 size-6" />
                </BaseListItem>
              </BaseList>
            </BaseParagraph>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const clients = [
  {
    icon: '/img/fyt.png',
    title: 'Fund Your Trades',
  },
  {
    icon: '/img/luckyraffle.png',
    title: 'Lucky Raffle',
  },
  {
    icon: '/img/tasmania.png',
    title: 'Sabores de Tasmania',
  },
]

const topics = [
  {
    icon: '/img/stacks/cplus.svg',
    title: 'Cplus',
  },
  {
    icon: '/img/stacks/csharp.svg',
    title: 'C-sharp',
  },
  {
    icon: '/img/stacks/java.svg',
    title: 'Java',
  },
  {
    icon: '/img/stacks/python.svg',
    title: 'Python',
  },
  {
    icon: '/img/stacks/github.svg',
    title: 'Github',
  },
  {
    icon: '/img/stacks/framework/azure.svg',
    title: 'Azure',
  },
  {
    icon: '/img/stacks/framework/aws.svg',
    title: 'AWS',
  },
  {
    icon: '/img/stacks/framework/docker.svg',
    title: 'Docker',
  },
  {
    icon: '/img/stacks/framework/k8s.svg',
    title: 'Kubernetes',
  },
  {
    icon: '/img/stacks/framework/terraform.svg',
    title: 'Terraform',
  },

  {
    icon: '/img/stacks/language/javascript.svg',
    title: 'Javascript',
  },
  {
    icon: '/img/stacks/language/typescript.svg',
    title: 'Typescript',
  },
  {
    icon: '/img/stacks/nodejs.svg',
    title: 'Nodejs',
  },
  {
    icon: '/img/stacks/nuxt.svg',
    title: 'Nuxt',
  },
  {
    icon: '/img/stacks/vuejs.svg',
    title: 'Vuejs',
  },
  {
    icon: '/img/stacks/html5.svg',
    title: 'Html',
  },
]
</script>
