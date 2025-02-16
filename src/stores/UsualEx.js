import { computed, ref } from 'vue'
import {evaluate} from "mathjs";
import {defineStore} from "pinia";

export const useUsualExStore = defineStore('usualEx', () => {

    const calculate = (result, input) => {
        try {
            result.value = evaluate(input.value); // Безопасно вычисляет выражение
        } catch (e) {
            result.value = "Ошибка!";
        }
    };

    return { calculate }
})