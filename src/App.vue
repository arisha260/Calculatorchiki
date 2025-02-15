<script setup>
  import Default from "@/components/Default.vue";
  import Footer from "@/components/Footer.vue";
  import Header from "@/components/Header.vue";
  import Rules from "@/components/Rules.vue";
  import Types from "@/components/Types.vue";
  import { useRoute, useRouter, RouterView } from 'vue-router';

</script>

<template>
  <Header />
  <Rules />
  <Types />
  <RouterView />
  <Footer />
</template>

<style scoped lang="scss">

</style>
