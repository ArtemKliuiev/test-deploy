<script setup lang="ts">
defineProps<{
  id: string
}>()

</script>

<template>
    <svg>
      <use :href="`#${id}`"></use>
    </svg>
</template> 

<style scoped lang="scss">

</style>

