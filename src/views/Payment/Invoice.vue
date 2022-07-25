<script setup>
import NavigationSection from '@/components/Navigation.vue';
import checkIcon from '@/assets/icons/Check.vue';
</script>

<template>
<div class="min-h-screen relative bg-white">
<div class="max-w-screen-2xl mx-auto">

    <div class="grid grid-cols-1 gap-5 p-2">



  <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body">
    
    <h2 class="card-title text-success place-self-center text-sm"> Pembelian Berhasil <checkIcon  /> </h2>
    <h2 class="text-sm">#ORDER1934993 </h2>
    <h2 class="place-self-start text-gray-800 text-sm">22 Februari 2022 </h2>
    <p class="place-self-start">Outlet :  Plaza Balikpapan</p>
    <p class="place-self-start">Harga :  RP 250.000</p>
    <p class="place-self-start">Metode Pembayaran :  Midtrans</p>
    </div>
  </div> 
</div>
</div>

    <div class="w-full fixed bottom-0 " style="z-index: 999;">
       <NavigationSection />
    </div>
</div>
</template>