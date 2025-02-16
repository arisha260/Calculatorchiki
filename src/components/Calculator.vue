<script setup>

  import { defineEmits } from "vue";

  const emit = defineEmits(["updateInput"]); // Создаём событие
  const handleClick = (value) => {
    emit("updateInput", value); // Передаём нажатую кнопку в родительский компонент
  };

</script>

<template>
  <div class="calculator">
    <p class="text calculator__text calculator__num" @click="handleClick(null)">Удалить все</p>
    <div class="calculator__numbers">
      <p class="text calculator__text calculator__num" @click="handleClick('7')">7</p>
      <p class="text calculator__text calculator__num" @click="handleClick('8')">8</p>
      <p class="text calculator__text calculator__num" @click="handleClick('9')">9</p>
      <p class="text calculator__text calculator__num" @click="handleClick('/')">/</p>
      <p class="text calculator__text calculator__num" @click="handleClick('4')">4</p>
      <p class="text calculator__text calculator__num" @click="handleClick('5')">5</p>
      <p class="text calculator__text calculator__num" @click="handleClick('6')">6</p>
      <p class="text calculator__text calculator__num" @click="handleClick('*')">*</p>
      <p class="text calculator__text calculator__num" @click="handleClick('1')">1</p>
      <p class="text calculator__text calculator__num" @click="handleClick('2')">2</p>
      <p class="text calculator__text calculator__num" @click="handleClick('3')">3</p>
      <p class="text calculator__text calculator__num" @click="handleClick('-')">-</p>
      <p class="text calculator__text calculator__num" @click="handleClick('0')">0</p>
      <p class="text calculator__text calculator__num" @click="handleClick('.')">.</p>
      <p class="text calculator__text calculator__num" @click="handleClick('%')">%</p>
      <p class="text calculator__text calculator__num" @click="handleClick('+')">+</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.calculator {
  max-width: 330px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  &__numbers {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 2px;
  }
  &__num {
    border: 2px solid var(--dark-color);
    padding: 10px;
    text-align: center;
    transition: .1s;
    &:hover{
      transform: scale(1.01);
    }
  }
}

</style>