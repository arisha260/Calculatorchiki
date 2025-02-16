<script setup>
  import { evaluate } from "mathjs";
  import {ref} from "vue";
  import {useUsualExStore} from "@/stores/UsualEx.js";
  import Calculator from "@/components/Calculator.vue";

  const store = useUsualExStore();

  const input = ref("");
  const result = ref("");

  const isActive = ref(false);

  const calc = () => {
    store.calculate(result, input); // Передаем ref-переменные
  };

  // Функция для добавления символов в input
  const updateInput = (value) => {
    if (value === null) {
      input.value = ''; // Если пустая строка — очищаем поле
      result.value = '';
    } else {
      input.value += value; // Иначе добавляем символ в поле
    }
  };

</script>

<template>
  <section class="usual-ex">
    <div class="usual-ex__container container">
      <h1 class="usual-ex__title title">Введите выражение</h1>
      <div class="usual-ex__calc">
        <h1 class="subtitle" @click="isActive = !isActive">Вывести калькулятор {{ isActive ? "−" : "+" }}</h1>
        <transition name="fade">
          <Calculator v-if="isActive" @updateInput="updateInput"/>
        </transition>

      </div>
      <div class="usual-ex__content">
        <div class="usual-ex__row">
          <input type="text" v-model="input" @keyup.enter="calc"  placeholder="Введите пример" class="input-reset usual-ex__input text">
          <button class="usual-ex__btn btn-reset btn" @click="calc">Получить результат</button>
        </div>
        <p class="usual-ex__text text">Результат: {{ result }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .usual-ex{
    &__container{}
    &__content{
    }
    &__row{
      display: flex;
      align-items: center;
    }
    &__input{
      padding: 0.3125rem;
      width: 100%;
      border-bottom: 2px solid var(--dark-color);
      outline: none;
    }
  }
</style>