<template>
<div class="min-h-screen relative bg-white">
    <!-- navbar -->
    <div class="w-full fixed top-0 bg-white" style="z-index: 999;">
        <div class="max-w-screen-2xl mx-auto ">  
            <NavbarSection />
        </div>
    </div>
    <div class="max-w-screen-2xl mx-auto">
        <HeroSection />
        <FacilitySection />
       <AboutSection />
    </div>
    <div class="max-w-screen-2xl mx-auto">
       <FooterSection />
    </div>
</div>
</template>
<script setup>
import FooterSection from '@/components/Footer.vue';
import NavbarSection from '@/components/Navbar.vue';
import HeroSection from '@/components/Hero.vue';
import AboutSection from '@/components/About.vue';
import FacilitySection from '@/components/Facility.vue';
</script>