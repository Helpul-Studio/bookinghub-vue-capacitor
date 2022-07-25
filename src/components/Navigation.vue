<script setup>
  import userIcon from '../assets/icons/User.vue';
  import homeIcon from '../assets/icons/Home.vue';
  import boardIcon from '../assets/icons/Board.vue';
  import placeIcon from '../assets/icons/Place.vue';
  import ticketIcon from '../assets/icons/Ticket.vue';

</script>

<template>
<footer class="footer items-center p-5 bg-white text-neutral-content">
   <div class="grid-flow-col gap-10 justify-self-center">
    <router-link to="/"><homeIcon/></router-link>
   <router-link to="/outlet"> <placeIcon/> </router-link>
    <router-link to="/invoice"><ticketIcon/></router-link>
    <router-link to="/history"><boardIcon/></router-link>
    <router-link to="/profile"><userIcon/></router-link>
  </div>
</footer>
</template>