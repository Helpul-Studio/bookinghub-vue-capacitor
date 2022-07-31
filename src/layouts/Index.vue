<template>
<div class="min-h-screen relative bg-white">
    <div class="max-w-screen-2xl mx-auto">
        <HeroSection />
        <FacilitySection />
       <AboutSection />
    </div>
    <div class="w-full fixed bottom-0 " style="z-index: 999;">
       <NavigationSection />
    </div>
</div>
</template>
<script setup>
import NavigationSection from '@/components/Navigation.vue';
import HeroSection from '@/components/Hero.vue';
import AboutSection from '@/components/About.vue';
import FacilitySection from '@/components/Facility.vue';
</script>