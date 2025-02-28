<script setup>
defineProps(['srcset', 'src', 'alt', 'width', 'height', 'lazy'])
</script>

<template>
  <picture>
    <source :srcset="srcset" type="image/webp" />
    <img
      :loading="lazy ? 'lazy' : 'eager'"
      :height="height"
      :width="width"
      :src="src"
      :alt="alt ? alt : 'img'"
    />
  </picture>
</template>

<style>
@import "./BasePicture.scss";
</style>