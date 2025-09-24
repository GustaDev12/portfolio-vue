<script setup lang="ts">
useHead({
  title: 'Portfólio Gustavo Vinicíus',
  meta: [
    { name: 'description', content: 'Portfólio de Gustavo Vinicíus, desenvolvedor front-end' },
    { name: 'keywords', content: 'portfólio, Gustavo Vinicius, gustavo, desenvolvedor front-end, desenvolvedor full stack' },
    { name: 'author', content: 'Gustavo Vinicíus' },
  ]
})
</script>
<template>
  <AppSidebar />
  <div class="container">
    <AppHeroSection />
    <AppSobreMim />
    <AppServicos />
    <AppConhecimentos />
    <AppProjetos />
    <AppDepoimentos />
    <AppFaleComigo />
  </div>
</template>


<style scoped>
:global(html) {
  scroll-behavior: smooth;
}


.container {
  margin-left: 200px;
  transition: margin-left 0.3s ease-in-out;
  min-height: 100vh;
  width: calc(100% - 200px);
  overflow-x: hidden;
}


@media screen and (max-width: 1280px) {
  .container {
    margin-left: 0;
    width: 100%;
  }
}


@media screen and (max-width: 768px) {
  .container {
    margin-left: 0;
    width: 100%;
    padding: 0;
  }
}

@media screen and (max-width: 480px) {
  .container {
    margin-left: 0;
    width: 100%;
    min-height: 100vh;
  }
}

@media screen and (max-width: 360px) {
  .container {
    margin-left: 0;
    width: 100%;
  }
}
</style>