<template>
  <div class="container mx-auto p-4 pt-6 pb-6 md:p-6 md:pt-10 md:pb-10">
    <div class="flex flex-col md:flex-row justify-between items-center pb-4">
      <h2 class="text-2xl font-bold mb-4 md:mb-0 text-center md:text-left">
        Блог
      </h2>
      <button
        class="border border-black rounded-full py-2 px-4 text-sm flex items-center gap-2 hover:bg-black hover:text-white"
      >
        Перейти в блог
        <svg
          width="15"
          height="12"
          viewBox="0 0 15 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 6H14M14 6L9 11M14 6L9 1" stroke="#454545" />
        </svg>
      </button>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-b-2"
    >
      <div
        v-for="benefit in benefits"
        :key="benefit.title"
        class="bg-white text-center shadow-md rounded-lg overflow-hidden"
      >
        <div class="mb-4">
          <img
            :src="benefit.imageSrc"
            alt=""
            class="w-full h-48 object-cover"
          />
        </div>
        <div class="px-4 py-4 text-left">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-semibold">{{ benefit.title }}</h3>
            <div class="flex justify-end cursor-pointer">
              <router-link to="/blog"
                ><svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1H17M17 1V17M17 1L1 17"
                    stroke="black"
                    stroke-width="2"
                  /></svg
              ></router-link>
            </div>
          </div>
          <p class="text-gray-500">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const benefits = [
  {
    title: "Как правильно освещать дом снаружи?",
    description: "01.01.2024",
    imageSrc: "/images/house1.png",
  },
  {
    title: "Как правильно освещать дом снаружи?",
    description: "01.01.2024",
    imageSrc: "/images/house2.png",
  },
  {
    title: "Как правильно освещать дом снаружи?",
    description: "01.01.2024",
    imageSrc: "/images/house3.png",
  },
];
</script>

<style scoped></style>
