<template>
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a class="btn bg-transparent btn-md text-md text-gray-900 border-none hover:bg-transparent hover:text-cyan-500 capitalize">Home</a></li>
        <li><a class="btn bg-transparent btn-md text-md text-gray-900 border-none hover:bg-transparent hover:text-cyan-500 capitalize">About Us</a></li>
        <li><a class="btn bg-transparent btn-md text-md text-gray-900 border-none hover:bg-transparent hover:text-cyan-500 capitalize">Contact Us</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl text-gray-900 hover:bg-transparent hover:text-cyan-500">Karaoke Hub</a>
  </div>
  <div class="navbar-end hidden lg:flex px-5">
    <ul class="menu menu-horizontal p-2">
        <li><a class="btn bg-transparent btn-md text-md text-gray-900 border-none hover:bg-transparent hover:text-cyan-500 capitalize">Home</a></li>
        <li><a class="btn bg-transparent btn-md text-md text-gray-900 border-none hover:bg-transparent hover:text-cyan-500 capitalize">About Us</a></li>
        <li><a class="btn bg-transparent btn-md text-md text-gray-900 border-none hover:bg-transparent hover:text-cyan-500 capitalize">Contact Us</a></li>
          <div class="space-x-4 py-2 flex  invisible md:visible ">
      <div class="relative">
        <router-link to="/login"
          class="btn bg-cyan-500 btn-sm text-sm text-white border-none hover:bg-cyan-600 hover:text-white rounded capitalize">
        Login
        </router-link>
      </div>
      <div class="relative">
        <router-link to="/register"
          class="btn bg-transparent btn-sm text-sm text-cyan-600 border-cyan-500 hover:bg-cyan-600 hover:text-white hover:border-none rounded capitalize">
        Register
        </router-link>
      </div>
    </div>
    </ul>
  </div>

</div>
</template>
