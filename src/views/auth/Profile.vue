<script setup>
import NavigationSection from '@/components/Navigation.vue';

import { useAuthStore } from "@/store";
import axios from 'axios';
import { reactive } from 'vue';

import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { onUpdated } from 'vue';


const authStore = useAuthStore();
const user = computed(() => authStore.getUser)

onMounted(() => {
    authStore.fetchUsers();
})

const updateUser = reactive({
    name : '',
    email : '',
    password : '',
    gender: ''
});
const update = () => {
    authStore.updateProfile(updateUser)
}
</script>

<template>
<div class="min-h-screen relative bg-white">
<div class="max-w-screen-2xl mx-auto">
<div class="grid-flow-col gap-5 p-2">
<form @submit.prevent="update" class="p-2">

<div class="form-control">
  <label class="label">
    <span class="label-text">Nama : {{ user.name }}</span>
  </label>
  <label class="input-group">
    <input type="text" placeholder="" class="input input-bordered focus:border-cyan-500 w-full" v-model="updateUser.name">
  </label>
</div>


<div class="form-control">
  <label class="label">
    <span class="label-text">Email : {{ user.email }}</span>
  </label>
  <label class="input-group">
    <input type="email" placeholder="" class="input input-bordered focus:border-cyan-500 w-full" v-model="updateUser.email" />
  </label>
</div>


<div class="form-control">
  <label class="label">
    <span class="label-text">Password (Opsional)</span>
  </label>
  <label class="input-group">
    <input type="password" class="input input-bordered focus:border-cyan-500 w-full" v-model="updateUser.password"/>
  </label>
</div>

<div class="form-control">
  <label class="label">
    <span class="label-text">Jenis Kelamin : {{ user.gender }}</span>
  </label>
  <div class="input-group">
    <select class="select select-bordered focus:border-cyan-500 w-full" v-model="updateUser.gender">
      <option value="pria" selected>Pria</option>
      <option value="wanita" selected>Wanita</option>
    </select>
  </div>
</div>


<!-- 



<div class="form-control">
  <label class="label">
    <span class="label-text">Photo Profile</span>
  </label>
  <div class="input-group">
<input class="w-full input input-bordered" type="file">
  </div>
</div> -->

<div class="form-control">
<button type="submit" class="btn btn-md bg-cyan-500 border-none hover:bg-cyan-600 w-6/12 mx-auto mt-2"> Ubah Profile  </button>
</div>
</form>

</div>
</div>

    <div class="w-full fixed bottom-0 " style="z-index: 999;">
       <NavigationSection />
    </div>
    </div>
</template>
