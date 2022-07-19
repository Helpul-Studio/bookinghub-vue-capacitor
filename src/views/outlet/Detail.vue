<template>
<div class="min-h-screen relative bg-white">
    <!-- navbar -->
    <div class="w-full fixed top-0 bg-white" style="z-index: 999;">
        <div class="max-w-screen-2xl mx-auto ">  
            <NavbarSection />
        </div>
    </div>

<div class="max-w-screen-2xl mx-auto">
    <div class="grid grid-cols-1 gap-5 p-2">

<div class="card card-compact w-full bg-base-100 border border-gray-800">
  <div class="card-body">
  <div class="grid grid-cols-2 place-content-stretch">
  <div class="text-start">
   <h2 class="font-extrabold text-2xl">Living Plaza</h2>
    <p class="font-light text-xs">Operasional  : 08:00 - 21:30 </p>
    <p class="font-light mt-4">
    Jl. MT Haryono, Gn. Bahagia, Kecamatan Balikpapan Selatan, Kota Balikpapan 76114
    </p>
    <div class="pt-12"> 
    <button class="btn btn-sm  btn-success no-animation text-white capitalize font-semibold">Buka</button>
    <router-link to="/detail/outlet"> 
    <button class="btn ml-2 btn-sm btn-info text-white capitalize font-semibold">Reservasi</button>
    </router-link>
    </div>
  </div>
 <div>
     <figure><img class="h-56 w-auto rounded object-cover" src="@/assets/images/outlet/1.jpg" alt="Shoes" /></figure>
 </div>
  </div>
  </div>
</div>

<div class="card card-compact w-full bg-base-100 border border-gray-800">
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
     <figure><img class="h-56 w-auto rounded object-cover" src="@/assets/images/outlet/1.jpg" alt="Shoes" /></figure>
 </div>
  </div>
  </div>
</div>

<div class="card card-compact w-full bg-base-100 border border-gray-800">
  <div class="card-body">
  <div class="grid grid-cols-2 place-content-stretch">
  <div class="text-start">
   <h2 class="font-extrabold text-2xl">Living Plaza</h2>
    <p class="font-light text-xs">Operasional  : 08:00 - 21:30 </p>
    <p class="font-light mt-4">
    Jl. MT Haryono, Gn. Bahagia, Kecamatan Balikpapan Selatan, Kota Balikpapan 76114
    </p>
    <div class="pt-12">
    <button class="btn btn-sm btn-success no-animation text-white capitalize font-semibold">Buka</button>
    <router-link to="/detail/outlet"> 
    <button class="btn ml-2 btn-sm btn-info text-white capitalize font-semibold">Reservasi</button>
    </router-link>
    </div>
  </div>
 <div>
     <figure><img class="h-56 w-auto rounded object-cover" src="@/assets/images/outlet/1.jpg" alt="Shoes" /></figure>
 </div>
  </div>
  </div>
</div>




</div>


    </div>
    <div class="max-w-screen-2xl mx-auto">
       <FooterSection />
    </div>
</div>
</template>
<script setup>
import FooterSection from '@/components/Footer.vue';
import NavbarSection from '@/components/NavbarAfterLogin.vue';
import HeroSection from '@/components/Hero.vue';
import AboutSection from '@/components/About.vue';
import FacilitySection from '@/components/Facility.vue';
</script>