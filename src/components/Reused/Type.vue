<script setup>
  defineProps({
    text: String,
    to: String,
  })
</script>

<template>
  <router-link :to="{name: to}" class="types__type">
    <p class="types__text text">{{ text }}</p>
  </router-link>
</template>

<style lang="scss">

</style>