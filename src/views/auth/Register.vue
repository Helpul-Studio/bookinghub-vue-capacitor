<script setup>

import { useAuthStore } from '../../store/auth-store';
 import { reactive } from 'vue';

 const authStore = useAuthStore();

 const user = reactive({
    name: '',
    email: '',
    password: ''
 });

 const register  = () => {
    authStore.register(user)
 }

</script>
<template>
    <div class="min-h-screen bg-base grid py-2 place-content-center">
        <div class="card w-96 bg-white dark:bg-slate-800 border shadow-xl">
            <div class="card-body">
                <div class="card-title text-gray-800 mx-auto">
                    <router-link to="/"><p class="dark:text-white">Karaoke Hub</p></router-link>
                </div>
                <hr class="my-3">
                <form @submit.prevent="register" class="space-y-3">
                    <div class="form-control">
                        <label for="fullname" class="text-gray-800 dark:text-white">Nama</label>
                    <input type="text" v-model="user.name" class="input input-bordered focus:border-cyan-500" placeholder="John Doe">
                    </div>
                    <div class="form-control">
                        <label for="email" class="text-gray-800 dark:text-white">Email</label>
                    <input type="email" v-model="user.email" class="input input-bordered focus:border-cyan-500" placeholder="email@example.com">
                    </div>
                    <div class="form-control">
                        <label for="password" class="text-gray-800 dark:text-white">Kata Sandi</label>
                    <input type="password"  v-model="user.password" class="input input-bordered focus:border-cyan-500" placeholder="*****">
                    </div>
                    <div class="flex flex-nowrap justify-between">
                        <div>
                            <label class="label cursor-pointer">
                                <span class="label-text mr-3 text-gray-800 dark:text-white">Remember me</span> 
                                <input type="checkbox" checked="checked" class="checkbox checkbox-primary border-gray-800" />
                            </label>
                        </div>
                        <div>
                            <label class="label cursor-pointer">
                                <span class="label-text mr-3 text-gray-800">Menyetujui <a href="#" class="text-cyan-500"> aturan</a></span> 
                                <input type="checkbox" required checked="checked" class="checkbox checkbox-primary border-gray-800" />
                            </label>
                        </div>
                    </div>
                    <button class="btn btn-md w-full border-none bg-cyan-600 hover:bg-cyan-700 text-white capitalize text-base">Daftar</button>
                </form>
                <hr class="my-3">
                <router-link to="/login" class="mt-2 text-sm text-gray-800 text-center dark:text-white">Sudah punya akun? <span class="text-cyan-500">Masuk</span></router-link>
            </div>
        </div>
    </div>
</template>
