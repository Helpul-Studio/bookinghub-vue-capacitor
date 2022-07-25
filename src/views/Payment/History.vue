<script setup>
import NavigationSection from '@/components/Navigation.vue';
</script>

<template>
<div class="min-h-screen relative bg-white">
<div class="max-w-screen-2xl mx-auto">
<div>
    <h2 class="font-semibold text-3xl">
      History Transaksi
    </h2>
    </div>

  <div class="grid grid-cols-1 gap-10 mb-32">
  <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body">
    
    <h2 class="card-title text-gray-800  text-sm">Kode Pesanan #ORDER1934993 </h2>
    <h2 class="place-self-start text-gray-800 text-sm">22 Februari 2022 </h2>
    <p class="place-self-start">Outlet :  Plaza Balikpapan</p>
    <p class="place-self-start">Harga :  RP 250.000</p>
    <div class="card-actions justify-start">
      <button class="btn btn-success btn-sm text-white capitalize no-animation">Transaksi Berhasil</button>
    </div>
    </div>
  </div> 

  
  <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body">
    
    <h2 class="card-title text-gray-800  text-sm">Kode Pesanan #ORDER1934993 </h2>
    <h2 class="place-self-start text-gray-800 text-sm">22 Februari 2022 </h2>
    <p class="place-self-start">Outlet :  Plaza Balikpapan</p>
    <p class="place-self-start">Harga :  RP 250.000</p>
    <div class="card-actions justify-start">
      <button class="btn btn-warning btn-sm text-white capitalize no-animation">Transaksi Pending</button>
    </div>
    </div>
  </div> 

    <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body">
    
    <h2 class="card-title text-gray-800  text-sm">Kode Pesanan #ORDER1934993 </h2>
    <h2 class="place-self-start text-gray-800 text-sm">22 Februari 2022 </h2>
    <p class="place-self-start">Outlet :  Plaza Balikpapan</p>
    <p class="place-self-start">Harga :  RP 250.000</p>
    <div class="card-actions justify-start">
      <button class="btn btn-error btn-sm text-white capitalize no-animation">Transaksi Gagal</button>
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