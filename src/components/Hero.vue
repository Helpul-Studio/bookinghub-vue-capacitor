<script setup>

import { useAuthStore } from '@/store';
import { computed } from 'vue';

const authStore = useAuthStore();
const token = computed(() => authStore.getToken)

const logout = async () => {
    authStore.logout()
}
</script>


<template>
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-16 bg-white">
        <div class="relative px-4" />

      <main class="mx-auto max-w-7xl px-4">
        <div class="sm:text-center">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">Why Be sad? </span>
            <span class="block text-cyan-500 xl:inline">When You Can Sing With Your Friend</span>
          </h1>
          <div class="mt-8 justify-start" v-if="!token">
            <div class="rounded-md shadow">
                <router-link to="/outlet"> 
              <a href="#" class="mr-5 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700"> Booking Now </a>
            </router-link>
            <router-link to="/login"> 
              <a href="#" class="px-8 py-3 border border-transparent text-base font-medium rounded-md text-cyan-700 bg-cyan-100 hover:bg-cyan-200"> Login </a>
            </router-link>
            </div>
          </div>
          <div class="mt-8 justify-start" v-if="token">
            <div class="rounded-md shadow">
                <router-link to="/outlet"> 
              <a href="#" class="mr-5 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700"> Booking Now </a>
            </router-link>
              <a @click="logout" class="px-8 py-3 border border-transparent text-base font-medium rounded-md text-cyan-700 bg-cyan-100 hover:bg-cyan-200"> Logout </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="">
    <img class="h-72 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="@/assets/images/karaoke.jpg" alt="">
  </div>
</template>