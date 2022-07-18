<template>
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><router-link to="/" class="btn bg-transparent btn-md text-md text-gray-900 border-none hover:bg-transparent hover:text-cyan-500 capitalize">Home</router-link></li>
        <li><router-link to="/" class="btn bg-transparent btn-md text-md text-gray-900 border-none hover:bg-transparent hover:text-cyan-500 capitalize">About Us</router-link></li>
        <li><router-link to="/" class="btn bg-transparent btn-md text-md text-gray-900 border-none hover:bg-transparent hover:text-cyan-500 capitalize">Contact Us</router-link></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl text-gray-900 hover:bg-transparent hover:text-cyan-500">Karaoke Hub</a>
  </div>

  <div class="navbar-end hidden lg:flex px-5">
    <ul class="menu menu-horizontal p-2">
        <li><router-link to="/" class="btn bg-transparent btn-md text-md mt-2 text-gray-900 border-none hover:bg-transparent hover:text-cyan-500 capitalize">Home</router-link></li>
        <li><router-link to="/" class="btn bg-transparent btn-md text-md mt-2 text-gray-900 border-none hover:bg-transparent hover:text-cyan-500 capitalize">About Us</router-link></li>
        <li><router-link to="/" class="btn bg-transparent btn-md text-md mt-2 text-gray-900 border-none hover:bg-transparent hover:text-cyan-500 capitalize">Contact Us</router-link></li>
    <div class="space-x-4 py-2 flex  invisible md:visible ">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-20 rounded-full">
          <img src="@/assets/images/profile/fujikawa.jpg" />
        </div>
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-auto">
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/profile">Logout</router-link></li>
      </ul>
    </div>
    </div>
    </ul>
  </div>

</div>


</template>
