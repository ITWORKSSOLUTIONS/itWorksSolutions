<template>
  <div class="grid sm:grid-cols-2">
    <section 
      v-for="item in frases"
      :key="item"
      class="bg-gray-100 dark:bg-gray-900"
    >
      <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <figure class="max-w-screen-md mx-auto border rounded-lg p-10 border-naranjaitws-400">
          <svg
            class="h-12 mx-auto mb-3 text-naranjaitws-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg> 
          <blockquote>
            <p class="text-2xl font-medium text-gray-900 dark:text-white">
              {{ item.frase }}
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <img
              class="w-6 h-6 rounded-full"
              :src="item.img"
              alt="avatar picture"
            >
            <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div class="pr-3 font-medium text-gray-900 dark:text-white">
                {{ item.autor }}
              </div>
              <div class="pl-3 text-sm font-light text-naranjaitws-400 dark:text-gray-400">
                {{  item.cargo }}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  </div>
</template>
<script setup>
const frases = [
  {
    frase: 'La tecnología no es el destino, es el camino. Nosotros te ayudamos a recorrerlo.',
    autor: 'Borja Serrano',
    cargo: 'CEO at ITWorks! Solutions',
    img: new URL('@/assets/equipo/avatars/borja.png', import.meta.url).href
  },
  {
    frase: 'Estamos especializados en dar soluciones ágiles que funcionen. Así de simple.',
    autor: 'Baymax',
    cargo: 'FSSD at ITWorks! Solutions',
    img: new URL('@/assets/equipo/avatars/baymax.png', import.meta.url).href
  }
];
</script>