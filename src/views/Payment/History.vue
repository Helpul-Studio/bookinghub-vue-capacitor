<script setup>
import NavigationSection from '@/components/Navigation.vue';

import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';

import { useBookingStore } from '../../store/booking-store';

const bookingStore = useBookingStore();

const bookings = computed(() => bookingStore.getOrder);

onMounted(() => {
    bookingStore.fetchBooking();

    const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js'; 
    const myMidtransClientKey = 'SB-Mid-client-brLgewo6gUjfn18W'; 

    let scriptTag = document.createElement('script');
    scriptTag.src = midtransScriptUrl;

    scriptTag.setAttribute('data-client-key', myMidtransClientKey);


    document.body.appendChild(scriptTag);
})

function showSnap (token) {
        window.snap.pay(token);

}


</script>

<template>
<div class="min-h-screen relative bg-white">
<div class="max-w-screen-2xl mx-auto">
<div>
    <h2 class="font-semibold text-3xl">
      History Transaksi
    </h2>
    </div>
  <div class="grid grid-cols-1 gap-10 p-2 mb-20">
  <div class="card w-full bg-base-100 shadow-xl" v-for="booking in bookings" :key="booking.id">
    <div class="card-body">
    <h2 class="card-title text-gray-800  text-sm">Kode Pemesanan #{{ booking.order_id }}</h2>
    <h2 class="place-self-start text-gray-800 text-sm"> {{ booking.days }} </h2>
    <!-- <p class="place-self-start">Outlet :  Plaza Balikpapan</p> -->
    <p class="place-self-start">Harga :  {{ booking.total_payment }}</p>
  <div class="card-actions justify-start" v-if="booking.status == 'pending'">
      <button class="btn btn-warning btn-sm text-white capitalize no-animation"> Menunggu Pembayaran </button>
      <button class="btn btn-info btn-sm text-white capitalize no-animation" @click="showSnap(booking.snap_midtrans.snap_token)"> Bayar  </button> 
  </div>
      <div class="card-actions justify-start" v-else-if="booking.status == 'reject'">
      <button class="btn btn-error btn-sm text-white capitalize no-animation"> Ditolak </button>
    </div>
      <div class="card-actions justify-start" v-else>
      <button class="btn btn-success btn-sm text-white capitalize no-animation"> Berhasil </button>
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