<script setup>
defineProps(['to'])
</script>

<template>
  <RouterLink class="link" :to="to">
    <slot></slot>
  </RouterLink>
</template>

<style lang="scss" >
@import './BaseButtonText.scss';
</style>