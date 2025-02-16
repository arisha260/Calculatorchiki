<script setup>
  defineProps({
    text: String,
    text1: String,
    to: String,
  })
</script>

<template>
  <router-link :to="{name: to}" class="types__type">
    <p class="types__text text">{{ text }}</p>
    <p class="types__text text">{{ text1 }}</p>
  </router-link>
</template>

<style lang="scss">

</style>