<script setup>
import { usePiniaStore } from "../../store";
import { computed } from "vue";

const store = usePiniaStore();

const likedProducts = computed(() => store.likedProducts);
</script>

<template>
  <div class="container mx-auto p-4">
    <div>
      <h1 class="text-5xl mb-4 pt-10">Избранные товары</h1>
    </div>

    <div
      v-if="likedProducts.length"
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div
        v-for="product in likedProducts"
        :key="product.id"
        class="card p-3 bg-white shadow-lg rounded-md"
      >
        <nuxt-link :to="`/products/${product.id}`">
          <img
            :src="product.image"
            alt="image"
            class="w-full h-[150px] object-cover rounded mb-2"
          />
        </nuxt-link>
        <h2 class="text-xl pt-2 h-20">Card title: {{ product.title }}</h2>
        <div class="flex justify-between items-end pt-8">
          <div class="pt-3">
            <p class="text-sm line-through">{{ product.oldPrice }}</p>
            <p class="font-bold text-2xl">{{ product.newPrice }}</p>
          </div>

          <button @click="toggleBasket">
            <svg
              width="55"
              height="33"
              viewBox="0 0 55 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="55" height="33" rx="16.5" fill="#454545" />
              <path
                d="M32.4444 20.4444C31.4626 20.4444 30.6667 21.2404 30.6667 22.2222C30.6667 23.2041 31.4626 24 32.4444 24C33.4263 24 34.2222 23.2041 34.2222 22.2222C34.2222 21.2404 33.4263 20.4444 32.4444 20.4444ZM32.4444 20.4444L26.2222 20.4444C25.6451 20.4772 25.073 20.3215 24.592 20.0009C24.1111 19.6802 23.7473 19.212 23.5556 18.6667L21.7778 8H20M32.4444 20.4444C33.0215 20.4772 33.5937 20.3215 34.0746 20.0009C34.5556 19.6802 34.9194 19.212 35.1111 18.6667L36 12.4444H22.4889M27.1111 22.2222C27.1111 23.2041 26.3152 24 25.3333 24C24.3515 24 23.5556 23.2041 23.5556 22.2222C23.5556 21.2404 24.3515 20.4444 25.3333 20.4444C26.3152 20.4444 27.1111 21.2404 27.1111 22.2222Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div v-else class="container mx-auto flex justify-center p-20">
      <p class="text-2xl">Нет избранных товаров</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
