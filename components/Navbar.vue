<template>
  <div>
    <!-- Navbar for Desktop View -->
    <nav
      class="container mx-auto justify-between items-center lg:flex space-x-6 pt-3 hidden lg:flex"
    >
      <div class="gap-10 flex justify-between">
        <a href="/about" class="text-gray-600 hover:text-gray-900"
          >О компании</a
        >
        <a href="/shipping" class="text-gray-600 hover:text-gray-900"
          >Доставка и оплата</a
        >
        <a href="/return" class="text-gray-600 hover:text-gray-900">Возврат</a>
        <a href="/garant" class="text-gray-600 hover:text-gray-900">Гарантии</a>
        <a href="/contacts" class="text-gray-600 hover:text-gray-900"
          >Контакты</a
        >
        <a href="/blog" class="text-gray-600 hover:text-gray-900">Блог</a>
      </div>
      <div class="gap-10 flex justify-between">
        <span class="text-gray-600">8 (800) 890-46-56</span>
        <a
          href="#"
          @click.prevent="showModal"
          class="text-gray-400 cursor-pointer"
          >Заказать звонок</a
        >
      </div>
      <!-- <ModalCall :isVisible="isModalVisible" @close="isModalVisible = false" /> -->
    </nav>

    <!-- Navbar for Mobile View -->
    <div class="sticky top-0 left-0 backdrop-blur-lg z-10">
      <header
        class="container mx-auto flex justify-between items-center bg-white pt-3"
      >
        <div class="flex items-center">
          <button class="px-6 py-2 rounded-full lg:hidden" @click="toggleMenu">
            <div class="flex justify-between gap-2 items-center">
              <img src="/images/menu.png" alt="Menu" class="h-3" />
            </div>
          </button>
          <nuxt-link to="/">
            <img src="/images/logo.png" alt="NORNLIGHT logo" class="h-8 mr-2" />
          </nuxt-link>
          <nuxt-link to="/catalog"
            ><button
              class="bg-gray-800 text-white px-6 py-2 rounded-full hidden lg:flex"
            >
              <div class="flex justify-between gap-2 items-center">
                <img src="/images/catalog.png" alt="Catalog" class="h-3" />
                Каталог
              </div>
            </button></nuxt-link
          >
        </div>

        <div class="flex items-center pr-5 py-4 space-x-4 lg:hidden">
          <a href="/favorites" class="text-gray-600 hover:text-gray-900">
            <img src="/images/saved.png" alt="Избранное" class="w-5 h-5" />
          </a>
          <a href="/basket" class="text-gray-600 hover:text-gray-900">
            <img src="/images/cart.png" alt="Корзина" class="w-5 h-5" />
          </a>
        </div>

        <div
          class="flex-1 flex items-center justify-center relative px-4 hidden lg:flex"
        >
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Поиск по товарам"
            class="border border-gray-300 rounded-full px-3 py-1 w-full h-10 pl-10"
          />
          <svg
            class="absolute right-7"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 13L17 17M1 7.85714C1 11.6442 4.07005 14.7143 7.85714 14.7143C9.75394 14.7143 11.471 13.9441 12.7123 12.6994C13.9495 11.4591 14.7143 9.74743 14.7143 7.85714C14.7143 4.07005 11.6442 1 7.85714 1C4.07005 1 1 4.07005 1 7.85714Z"
              stroke="#454545"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div class="flex items-center space-x-4 justify-center hidden lg:flex">
          <div class="flex space-x-3 items-center gap-5 py-2">
            <a
              href="/favorites"
              class="flex flex-col items-center text-gray-600 hover:text-gray-900 relative"
            >
              <img
                src="/images/saved.png"
                alt="Избранное"
                class="w-5 h-5 relative z-1"
              />
              <span
                v-if="likedCount > 0"
                class="absolute top-0 right-0 z-10 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                >{{ likedCount }}</span
              >
              Избранное
            </a>
            <a
              href="#"
              class="flex flex-col items-center text-gray-600 hover:text-gray-900"
            >
              <img src="/images/compare.png" alt="Сравнение" class="w-5 h-5" />
              Сравнение
            </a>
            <a
              href="/basket"
              class="flex flex-col items-center text-gray-600 hover:text-gray-900 relative"
            >
              <img src="/images/cart.png" alt="Корзина" class="w-5 h-5" />
              Корзина
              <span
                v-if="basketCount > 0"
                class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                >{{ basketCount }}</span
              >
            </a>
          </div>
        </div>
      </header>
    </div>

    <!-- Collapsible Navbar for Mobile View -->
    <nav
      v-if="isMenuOpen"
      class="container mx-auto flex flex-col items-center text-center lg:hidden space-y-2 pt-3"
    >
      <div class="gap-10 flex flex-col">
        <a href="/about" class="text-gray-600 hover:text-gray-900"
          >О компании</a
        >
        <a href="/shipping" class="text-gray-600 hover:text-gray-900"
          >Доставка и оплата</a
        >
        <a href="/return" class="text-gray-600 hover:text-gray-900">Возврат</a>
        <a href="/garant" class="text-gray-600 hover:text-gray-900">Гарантии</a>
        <a href="/contacts" class="text-gray-600 hover:text-gray-900"
          >Контакты</a
        >
        <a href="/blog" class="text-gray-600 hover:text-gray-900">Блог</a>
      </div>
      <div class="gap-10 flex flex-col pt-5">
        <nuxt-link to="/catalog">
          <button
            class="bg-gray-800 text-white px-6 py-2 rounded-full w-[300px] h-14"
          >
            <div class="flex justify-center gap-3 items-center">
              <img src="/images/catalog.png" alt="Каталог" class="h-3" />
              Каталог
            </div>
          </button>
        </nuxt-link>

        <span class="text-gray-600">8 (800) 890-46-56</span>
        <a
          href="#"
          @click.prevent="showModal"
          class="text-gray-400 cursor-pointer"
          >Заказать звонок</a
        >
      </div>
    </nav>

    <!-- Search Input for Mobile View -->
    <div
      class="flex-1 flex items-center justify-center relative px-4 lg:hidden"
    >
      <input
        type="text"
        placeholder="Поиск по товарам"
        class="border border-gray-300 rounded-full px-3 py-1 w-full h-10 pl-10"
      />
      <svg
        class="absolute right-7"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 13L17 17M1 7.85714C1 11.6442 4.07005 14.7143 7.85714 14.7143C9.75394 14.7143 11.471 13.9441 12.7123 12.6994C13.9495 11.4591 14.7143 9.74743 14.7143 7.85714C14.7143 4.07005 11.6442 1 7.85714 1C4.07005 1 1 4.07005 1 7.85714Z"
          stroke="#454545"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <ModalCall :isVisible="isModalVisible" @close="isModalVisible = false" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { usePiniaStore } from "../../store"; // Adjust the path if necessary
import ModalCall from "./ModalCall.vue";

const toggleLiked = () => {};

const store = usePiniaStore();

const isModalVisible = ref(false);
const isMenuOpen = ref(false);

const showModal = () => {
  isModalVisible.value = true;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const basketCount = computed(() => store.basket.length);
const likedCount = computed(() => store.likedProducts.length);
</script>

<style scoped>
@media (min-width: 1024px) {
  .lg\\:hidden {
    display: none;
  }
  .lg\\:flex {
    display: flex;
  }
}
</style>
