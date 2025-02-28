<script setup lang="ts">
import TheFooter from '@/components/base/footers/TheFooter.vue';
import TheHeader from '@/components/base/headers/TheHeader.vue';
import SvgManager from '@/components/base/svg/SvgManager.vue';

</script>

<template>
<TheHeader/>

<main class="main">
    <RouterView/>
</main>

<TheFooter/>

<SvgManager/>
</template>

<style scoped>

</style>
