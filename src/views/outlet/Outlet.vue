<script setup>
import { DatePicker } from 'v-calendar';
import NavigationSection from '@/components/Navigation.vue';
</script>


<template>
<div class="min-h-screen relative bg-white">
<div class="max-w-max-2xl mx-auto">
<div>
    <p>
      Silahkan Pilih Tanggal
    </p>
 <DatePicker locale="id" class="inline-block h-full" v-model="date" :min-date='new Date()' mode="dateTime">
    <template v-slot="{ inputValue, togglePopover }">
      <div class="flex items-center">
        <button
          class="p-2 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-cyan-700 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
          @click="togglePopover()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            class="w-4 h-4 fill-current"
          >
            <path
              d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
            ></path>
          </svg>
        </button>
        <input
          :value="inputValue"
          class="bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
          readonly
        />
      </div>
    </template>
  </DatePicker> 
</div>

  <div class="grid grid-cols-1 gap-5 p-2 mb-20">

<div class="card card-compact w-full bg-base-100 border border-neutral">
  <div class="card-body">
  <div class="grid grid-cols-2 place-content-stretch">
  <div class="text-start">
   <h2 class="font-extrabold text-2xl">Plaza Kebun Sayur </h2>
    <p class="font-light text-xs">Operasional  : 08:00 - 21:30 </p>
    <p class="font-light mt-4 text-xs">
Pasar Inpres Kebunsayur, Jl. Letjen Suprapto, Marga Sari, Kec. Balikpapan Bar., Kota Balikpapan, Kalimantan Timur 76132
    </p>
    <div class="pt-12"> 
    <button class="btn btn-sm  btn-success no-animation text-white capitalize font-semibold">Buka</button>
    <router-link to="/payment"> 
    <button class="btn ml-2 btn-sm btn-info text-white capitalize font-semibold">Reservasi</button>
    </router-link>
    </div>
  </div>
 <div>
     <figure><img class="h-72 rounded object-cover" src="@/assets/images/outlet/bunsay.jpg" alt="Shoes" /></figure>
 </div>
  </div>
  </div>
</div>

<div class="card card-compact w-full bg-base-100 border border-neutral">
  <div class="card-body">
  <div class="grid grid-cols-2 place-content-stretch">
  <div class="text-start">
   <h2 class="font-extrabold text-2xl">Living Plaza</h2>
    <p class="font-light text-xs">Operasional  : 08:00 - 21:30 </p>
    <p class="font-light mt-4">
    Jl. MT Haryono, Gn. Bahagia, Kecamatan Balikpapan Selatan, Kota Balikpapan 76114
    </p>
    <div class="pt-12"> 
    <button class="btn btn-sm btn-error no-animation text-white capitalize font-semibold">Tutup</button>
    <button class="btn ml-2 btn-sm no-animation text-white capitalize font-semibold">Reservasi</button>
    </div>
  </div>
 <div>
     <figure><img class="h-72 rounded object-cover" src="@/assets/images/outlet/living.jpg" alt="Shoes" /></figure>
 </div>
  </div>
  </div>
</div>

<div class="card card-compact w-full bg-base-100 border border-neutral">
  <div class="card-body">
  <div class="grid grid-cols-2 place-content-stretch">
  <div class="text-start">
   <h2 class="font-extrabold text-2xl">Plaza Balikpapan</h2>
    <p class="font-light text-xs">Operasional  : 08:00 - 21:30 </p>
    <p class="font-light mt-4">
Jl. Jenderal Sudirman No.1, Klandasan Ilir, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76113
    </p>
    <div class="pt-12">
    <button class="btn btn-sm btn-success no-animation text-white capitalize font-semibold">Buka</button>
    <router-link to="/payment"> 
    <button class="btn ml-2 btn-sm btn-info text-white capitalize font-semibold">Reservasi</button>
    </router-link>
    </div>
  </div>
 <div>
     <figure><img class="h-72 rounded object-cover" src="@/assets/images/outlet/plaza.jpg" alt="Shoes" /></figure>
 </div>
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

<script>
export default {
    data() {
    return {
        date: new Date(),
    }
    }
}
</script>