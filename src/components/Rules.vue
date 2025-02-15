<script setup>
import { ref } from "vue";

const isActive = ref(false);
</script>

<template>
  <section class="rules">
    <div class="rules__container container">
      <div class="rules__title-container" @click="isActive = !isActive">
        <p class="rules__open title">{{ isActive ? "−" : "+" }}</p>
        <h1 class="rules__title title">Какие знаки можно вводить для расчета</h1>
      </div>
      <transition name="fade">
        <ul class="rules__list list-reset" v-if="isActive">
          <li class="rules__item text">+ (сложение)</li>
          <li class="rules__item text">- (вычитание)</li>
          <li class="rules__item text">* (умножение)</li>
          <li class="rules__item text">/ (деление)</li>
        </ul>
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
    gap: 20px;
    cursor: pointer;
    position: relative;
  }
  &__open {
    position: absolute;
    font-size: 40px;
  }
  &__title{
    margin-left: 40px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
