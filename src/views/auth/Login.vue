<script setup>

import { useAuthStore } from '../../store/auth-store';
 import { reactive } from 'vue';

 const authStore = useAuthStore();

 const user = reactive({
    email: '',
    password: ''
 });

 const login = () => {
    authStore.login(user)
 }

</script>
<template>
    <div class="min-h-screen bg-base grid place-content-center">
        <div class="card w-96 bg-white dark:bg-slate-800 shadow-xl border">
            <div class="card-body">
                <div class="card-title text-gray-800 mx-auto">
                    <router-link to="/"><p class="dark:text-white">Karaoke Hub</p></router-link>
                </div>
                <hr class="my-3">
                <form @submit.prevent="login" class="space-y-3">
                    <div class="form-control">
                        <label for="email" class="text-gray-800 dark:text-white">Email</label>
                        <input type="text" id="email" name="email" class="input input-bordered border-gray-500 rounded-2xl focus:border-2 text-gray-800 focus:border-cyan-500" placeholder="fujikawachiai@gmail.com">
                    </div>
                    <div class="form-control">
                        <label for="password" class="text-gray-800 dark:text-white">Kata Sandi</label>
                    <input type="password" id="password" name="email" class="input input-bordered border-gray-500 rounded-2xl focus:border-2 text-gray-800 focus:border-cyan-500" placeholder="*****">
                    </div>
                    <div class="flex flex-nowrap justify-between">
                        <div>
                            <label class="label cursor-pointer">
                                <span class="label-text mr-3 text-gray-800 dark:text-white">Remember me</span> 
                                <input type="checkbox" checked="checked" class="checkbox checkbox-cyan-600 border-gray-800" />
                            </label>
                        </div>
                        <div class="mt-2">
                            <router-link to="/forgot-password" class=" text-sm text-cyan-500 dark:text-amber-500 dark:hover:font-bold">Lupa Password?</router-link>
                        </div>
                    </div>
                    <button class="btn btn-md w-full border-none bg-cyan-600 hover:bg-cyan-700 text-white capitalize text-base">Masuk</button>
                </form>
                <hr class="my-3">
                <router-link to="/register" class="mt-2 text-sm text-gray-800 text-center dark:text-white">Belum punya akun? <span class="text-cyan-500 dark:text-amber-500">Daftar</span></router-link>
            </div>
        </div>
    </div>
</template>
