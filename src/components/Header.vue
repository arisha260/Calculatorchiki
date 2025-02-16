<script setup>

</script>

<template>
  <header class="header">
    <div class="header__container container">
      <router-link to="home">
        <img src="/logo.png" alt="Site logo" class="logo">
      </router-link>
    </div>
  </header>
</template>

<style scoped lang="scss">

  .header{
    background-color: var(--light-color);
    &__container{
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }
  }

</style>