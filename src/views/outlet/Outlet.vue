<script setup>
import { DatePicker } from 'v-calendar';
import NavigationSection from '@/components/Navigation.vue';


import { useOutletStore } from '@/store';
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { reactive } from 'vue';

import { useBookingStore } from '../../store/booking-store';

const outletStore = useOutletStore()
const bookingStore = useBookingStore();


const outlets = computed(() => outletStore.getOutlet);
const BASEURL = 'http://159.89.192.152/'

const date = new Date()
const hours = new Date().getHours().toString().padStart(2, '0');
function convert(){
  return `${hours}:00:00`
}


 const order = reactive({
    days: new Date()
 });



onMounted(() => {
    outletStore.fetchOutlet();
})


</script>


<template>
<div class="min-h-screen relative bg-white">
<div class="max-w-max-2xl mx-auto">
<div>
    <p>
      Silahkan Pilih Tanggal
    </p>
 <DatePicker locale="id" class="inline-block h-full" v-model="order.days" :min-date='new Date()'>
    <template v-slot="{ inputValue, togglePopover }">
      <div class="flex items-center">
        <button
          class="p-2 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-cyan-700 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
          @click="togglePopover()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            class="w-4 h-4 fill-current"
          >
            <path
              d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
            ></path>
          </svg>
        </button>
        <input
          :value="inputValue"
          class="bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
          readonly
        />
      </div>
    </template>
  </DatePicker> 
</div>

  <div class="grid grid-cols-1 gap-5 p-2 mb-20">
    <div class="card card-compact w-full bg-base-100 border border-neutral" v-for="outlet in outlets" :key="outlet.id">
      <form action="#" @submit.prevent="bookingStore.booking(order, outlet.id_outlet)">
      <div class="card-body">
      <div class="grid grid-cols-2 place-content-stretch">
      <div class="text-start">
      <h2 class="font-extrabold text-2xl"> {{ outlet.outlet_name  }}</h2>
        <p class="font-light text-xs">Operasional {{ convert() }} : {{ outlet.opening_hours }} - {{ outlet.closing_hours }} </p>
        <p class="font-light mt-4 text-xs">
        </p>
        <div class="pt-12" v-if='convert() >= outlet.closing_hours'> 
        
        <button class="btn btn-sm  btn-error no-animation text-white capitalize font-semibold" disabled>Tutup</button>
        <button class="btn ml-2 btn-sm no-animation text-white capitalize font-semibold" disabled>Reservasi</button>
        </div>
      <div class="pt-12" v-else> 
        
        <button class="btn btn-sm  btn-success no-animation text-white capitalize font-semibold">Buka</button>
        <button type="submit" class="btn ml-2 btn-sm btn-info text-white capitalize font-semibold">Reservasi</button>
        </div>
      </div>
    <div v-for="image in outlet.outlet_image">
        <figure><img class="h-72 rounded object-cover" :src="`${BASEURL}${image.photo_outlet}`" alt="photo_product"/></figure>
    </div>
  </div>
  </div>
  </form>
</div>





</div>
    </div>
  
  <div class="w-full fixed bottom-0 " style="z-index: 999;">
      <NavigationSection />
  </div>
</div>
</template>