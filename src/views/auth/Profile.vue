<template>
<div class="min-h-screen relative bg-white">
    <!-- navbar -->
    <div class="w-full fixed top-0 bg-white" style="z-index: 999;">
        <div class="max-w-screen-2xl mx-auto ">  
            <NavbarSection />
        </div>
    </div>
    <div class="max-w-screen-2xl mx-auto">

<div class="bg-white flex flex-col overflow-hidden m-10 mt-0">
<div class="m-10" />
<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 ">

<div class="form-control">
  <label class="label">
    <span class="label-text">Email</span>
  </label>
  <label class="input-group">
    <input type="text" placeholder="fujikawachiai@gmail.com" class="input input-bordered focus:border-cyan-500 w-full" />
  </label>
</div>

<div class="form-control">
  <label class="label">
    <span class="label-text">Password (Opsional)</span>
  </label>
  <label class="input-group">
    <input type="password" class="input input-bordered focus:border-cyan-500 w-full" />
  </label>
</div>

<div class="form-control">
  <label class="label">
    <span class="label-text">Nama</span>
  </label>
  <label class="input-group">
    <input type="text" placeholder="Fujikawa Chiai" class="input input-bordered focus:border-cyan-500 w-full" />
  </label>
</div>

<div class="form-control">
  <label class="label">
    <span class="label-text">Nomor Handphone</span>
  </label>
  <label class="input-group">
    <input type="number" placeholder="081234567890" class="input input-bordered focus:border-cyan-500 w-full" />
  </label>
</div>


<div class="form-control">
  <label class="label">
    <span class="label-text">Jenis Kelamin</span>
  </label>
  <div class="input-group">
    <select class="select select-bordered focus:border-cyan-500 w-full">
      <option>Pria</option>
      <option>Wanita</option>
    </select>
  </div>
</div>

<div class="form-control">
  <label class="label">
    <span class="label-text">Photo Profile</span>
  </label>
  <div class="input-group">
<input class="w-full input input-bordered" type="file">
  </div>
</div>

<button type="submit" class="btn btn-md bg-cyan-500 border-none hover:bg-cyan-600 w-6/12"> Ubah Profile  </button>


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