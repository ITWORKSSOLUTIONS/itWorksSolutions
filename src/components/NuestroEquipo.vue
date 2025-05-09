<template>
  <section class="bg-gray-100 ">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-naranjaitws-400 ">
          Nuestro equipo
        </h2>
        <p class="font-light text-gray-500 sm:text-xl ">
          Conoce al equipo que te llevará al éxito en tu transformación digital.
        </p>
      </div> 
      <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div
          v-for="item in equipo"
          :key="item"
          class="text-center text-gray-500 "
        >
          <img
            class="mx-auto mb-4 w-36 h-40 rounded-full border-solid border-1 border-naranjaitws-400"
            :src="item.img"
            :alt="`Portada de ${item.nombre}`"
          >
          <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900">
            <a href="#">{{ item.nombre }}</a>
          </h3>
          <i class="text-naranjaitws-400">{{ item.cargo }}</i>
          <p class="mt-2 text-sm">
            {{ item.descripcion }}
          </p>
        </div>
      </div>  
    </div>
  </section>
</template>
<script setup>
const equipo = [
  {
    nombre: 'Borja Serrano',
    cargo: 'Co-fundador',
    img: new URL('@/assets/equipo/borja.jpg', import.meta.url).href,
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eaque quia autem est vel velit a exercitationem in quis, aliquam facilis, fuga molestias quos quo. Voluptatibus, neque! Perferendis, sapiente nemo?'
  },
  {
    nombre: 'Baymax',
    cargo: 'Developer',
    img: new URL('@/assets/equipo/baymax.png', import.meta.url).href,
    descripcion: 'Blockchain, Smartcontracts, Ethereum, Solidity, Bitcoin, Ruby, Rails, Sinatra, Go, Python, Cryptography'
  },
  {
    nombre: 'Elías',
    cargo: 'CTO',
    img: new URL('@/assets/equipo/elias.png', import.meta.url).href,
    descripcion: 'Full-time Peanut Eater'
  }
];
</script>
