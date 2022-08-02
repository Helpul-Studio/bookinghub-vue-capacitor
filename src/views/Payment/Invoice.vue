<script setup>
import NavigationSection from '@/components/Navigation.vue';
import checkIcon from '@/assets/icons/Check.vue';
import { computed } from 'vue';
import { useBookingStore } from '../../store';

const bookingStore = useBookingStore()

const orderId = computed(() => bookingStore.getOrderId)

</script>

<template>
<div class="min-h-screen relative bg-white">
<div class="max-w-screen-2xl mx-auto">

    <div class="grid grid-cols-1 gap-5 p-2 my-auto">



  <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body">
    
    <h2 class="place-self-center">  <checkIcon /> </h2>
    <h2 class="card-title text-success place-self-center text-sm"> Berhasil Order </h2>
    <h2 class="text-sm">Nomor Order : #{{orderId.data}} </h2>

    <div> 
    <router-link to="/outlet">
    <button class="btn btn-sm  btn-info no-animation text-white capitalize font-semibold">Reservasi Lagi</button>
    </router-link>
    <router-link to="/history">
    <button class="btn ml-2 btn-sm no-animation btn-success text-white capitalize font-semibold">Lakukan Pembayaran</button>
    </router-link>
    </div>
    </div>
  </div> 
</div>
</div>

    <div class="w-full fixed bottom-0 " style="z-index: 999;">
       <NavigationSection />
    </div>
</div>
</template>