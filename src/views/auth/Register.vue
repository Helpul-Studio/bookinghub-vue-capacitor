<template>
    <div class="min-h-screen bg-base grid py-2 place-content-center">
        <div class="card w-96 bg-white dark:bg-slate-800 border shadow-xl">
            <div class="card-body">
                <div class="card-title text-gray-800 mx-auto">
                    <router-link to="/"><p class="dark:text-white">Karaoke Hub</p></router-link>
                </div>
                <hr class="my-3">
                <form action="#" class="space-y-3">
                    <div class="form-control">
                        <label for="fullname" class="text-gray-800 dark:text-white">Nama</label>
                    <input type="text" id="email" name="fullname" class="input input-bordered border-gray-500 rounded-2xl focus:border-gray-800 focus:border-2 text-gray-800 dark:bg-slate-800 dark:text-white dark:focus:border-white" placeholder="John Doe">
                    </div>
                    <div class="form-control">
                        <label for="email" class="text-gray-800 dark:text-white">Email</label>
                    <input type="email" id="email" name="email" class="input input-bordered border-gray-500 rounded-2xl focus:border-gray-800 focus:border-2 text-gray-800 dark:bg-slate-800 dark:text-white dark:focus:border-white" placeholder="email@example.com">
                    </div>
                    <div class="form-control">
                        <label for="password" class="text-gray-800 dark:text-white">Kata Sandi</label>
                    <input type="password" id="password" name="email" class="input input-bordered border-gray-500 rounded-2xl focus:border-gray-800 focus:border-2 text-gray-800 dark:bg-slate-800 dark:text-white dark:focus:border-white" placeholder="*****">
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
                                <span class="label-text mr-3 text-gray-800 dark:text-white">Menyetujui <a href="#" class="border-b border-blue-800 text-blue-800 dark:text-amber-500 dark:border-amber-500">aturan</a></span> 
                                <input type="checkbox" required checked="checked" class="checkbox checkbox-primary border-gray-800" />
                            </label>
                        </div>
                    </div>
                    <button class="btn btn-md w-full bg-black hover:bg-gray-800 text-white capitalize text-base dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">Daftar</button>
                </form>
                <hr class="my-3">
                <router-link to="/login" class="mt-2 text-sm text-gray-800 text-center dark:text-white">Sudah punya akun? <span class="text-blue-800 dark:text-amber-500">Masuk</span></router-link>
            </div>
        </div>
    </div>
</template>
