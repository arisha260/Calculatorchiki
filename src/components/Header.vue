<script setup>

</script>

<template>
  <section class="header">
    <div class="header__container container">
      <router-link to="home">
        <img src="/logo.png" alt="Site logo" width="300px">
      </router-link>
    </div>
  </section>
</template>

<style scoped lang="scss">

  .header{
    background-color: var(--light-color);
    &__container{
      padding: 1.25rem 0;
    }
  }

</style>