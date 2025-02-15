<script setup>

import Type from "@/components/Reused/Type.vue";
</script>

<template>
  <section class="types">
    <div class="types__container container">
      <h1 class="types__title title">Выберите, что вы хотите посчитать</h1>
      <div class="types__content">
        <Type to="usual-example" text="Обычный пример"/>
        <Type to="usual-example" text="Обычный пример"/>
        <Type to="usual-example" text="Обычный пример"/>
        <Type to="usual-example" text="Обычный пример"/>
        <Type to="usual-example" text="Обычный пример"/>
        <Type to="usual-example" text="Обычный пример"/>
        <Type to="usual-example" text="Обычный пример"/>
        <Type to="usual-example" text="Обычный пример"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

  .types{
    &__container{}
    &__content{
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 30px;
    }
    &__type {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px solid var(--dark-color);
      box-shadow: 0px 5px 9px 2px rgba(0, 0, 0, 1);
      cursor: pointer;
    }
  }

</style>