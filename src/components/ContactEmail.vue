<template>
  <a :href="obfuscatedEmailLink" class="text-naranjaitws-400 text-xl">
    <svg class="inline fill-naranjaitws-400 w-5 mr-2" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fill-rule="evenodd"/>
    </svg>
    {{ obfuscatedEmail }}
  </a>
</template>
<script>
  export default {
    name: "Footer",
    computed: {
      obfuscatedEmail(){
        return atob("Y29udGFjdEBpdHdvcmtzLnNvbHV0aW9ucw==")
      },
      obfuscatedEmailLink(){
        return atob("bWFpbHRvOmNvbnRhY3RAaXR3b3Jrcy5zb2x1dGlvbnM=")
      }
    }
  };
</script>