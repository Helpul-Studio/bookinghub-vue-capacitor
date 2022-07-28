<script setup>
import FooterSection from '@/components/Footer.vue';
import NavbarSection from '@/components/NavbarAfterLogin.vue';

import { onMounted } from 'vue';


onMounted(() => {
    const midtransScriptUrl = 'https://app.sandbox.midtrans.com/snap/snap.js'; 
    const myMidtransClientKey = 'SB-Mid-client-I7rK35u06itpjyf9'; 

    let scriptTag = document.createElement('script');
    scriptTag.src = midtransScriptUrl;

    scriptTag.setAttribute('data-client-key', myMidtransClientKey);


    document.body.appendChild(scriptTag);
});



function showSnap () {
        window.snap.pay('TRANSACTION_TOKEN_HERE');

}



</script>



<template>
<div class="min-h-screen relative bg-white">
<div class="max-w-screen-2xl mx-auto">
    <p>
    Pilih Metode Pembayaran
    </p>
<div class="grid grid-cols-1 gap-5 p-2">

<button @click="showSnap"> 
<div class="card card-compact w-full bg-cyan-600 border" >
  <div class="card-body">
  <div class="text-center">
   <h2 class="font-extrabold text-2xl text-white">Midtrans</h2>
  </div>
  </div>
</div>
</button>

<button @click="$router.push('invoice')"> 
<div class="card card-compact w-full bg-green-600 border" >
  <div class="card-body">
  <div class="text-center">
   <h2 class="font-extrabold text-2xl text-white">Cash Payment</h2>
  </div>
  </div>
</div>
</button>

</div>
</div>


    </div>
    <div class="max-w-screen-2xl mx-auto">
       <FooterSection />
    </div>
</template>
