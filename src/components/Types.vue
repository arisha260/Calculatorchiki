<script setup>

  import Type from "@/components/Reused/Type.vue";
  import {ref} from "vue";

  const isActive = ref(false);

</script>

<template>
  <section class="types">
    <div class="types__container container">
      <h1 class="types__title title" @click="isActive = !isActive">Выберите, что вы хотите посчитать {{ isActive ? "−" : "+" }}</h1>
      <div class="types__content" v-if="isActive">
        <Type to="usual-example" text="2+2x2" text1="Обычный пример"/>
        <Type to="usual-example" text="2+x=4" text1="Простое уравнение"/>
        <Type to="usual-example" text="logaB=x" text1="Логорифм"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">

  .types{
    &__container{}
    &__content{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
      @media (min-width: 48rem){
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width: 64rem){
        grid-template-columns: repeat(4, 1fr);
      }
      //@media (min-width: 75rem){
      //  grid-template-columns: repeat(4, 1fr);
      //}
    }
    &__type {
      padding: 0.625rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px solid var(--dark-color);
      cursor: pointer;
    }
  }

</style>