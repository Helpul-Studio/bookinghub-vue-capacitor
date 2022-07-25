<template>
<div class="min-h-screen relative bg-white">
<div class="max-w-screen-2xl mx-auto">
<div class="grid-flow-col gap-5 p-2">

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

<div class="form-control">
<button type="submit" class="btn btn-md bg-cyan-500 border-none hover:bg-cyan-600 w-6/12"> Ubah Profile  </button>
</div>


</div>
</div>

    <div class="w-full fixed bottom-0 " style="z-index: 999;">
       <NavigationSection />
    </div>
    </div>
</template>
<script setup>
import FooterSection from '@/components/Footer.vue';
import NavbarSection from '@/components/NavbarAfterLogin.vue';
import HeroSection from '@/components/Hero.vue';
import AboutSection from '@/components/About.vue';
import FacilitySection from '@/components/Facility.vue';
import NavigationSection from '@/components/Navigation.vue';
</script>