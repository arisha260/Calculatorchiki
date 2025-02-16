<script setup>
import { ref } from "vue";

const isActive = ref(false);
</script>

<template>
  <section class="rules">
    <div class="rules__container container">
      <div class="rules__title-container" @click="isActive = !isActive">
        <h1 class="rules__title title">Какие знаки можно вводить для расчета {{ isActive ? "−" : "+" }}</h1>
      </div>
      <transition name="fade">
        <div class="rules__content" v-if="isActive">
          <ul class="rules__list list-reset">
            <li class="rules__item text">+ (сложение)</li>
            <li class="rules__item text">- (вычитание)</li>
            <li class="rules__item text">* (умножение)</li>
            <li class="rules__item text">/ (деление)</li>
          </ul>
          <ul class="rules__list list-reset">
            <li class="rules__item text">^ (Возведение в степень)</li>

          </ul>
        </div>
      </transition>
    </div>
  </section>
</template>

<style scoped lang="scss">
.rules {
  &__container {
    position: relative;
  }
  &__title-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    cursor: pointer;
    position: relative;
  }
  &__open {
    font-size: 40px;
  }
  &__content{
    display: flex;
    gap: 30px;
  }
}
</style>
