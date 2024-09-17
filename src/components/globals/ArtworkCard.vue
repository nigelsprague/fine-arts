<script setup>
import { Artwork } from '@/models/Artwork';

defineProps({
  artProp: {type: Artwork, required: true}
})
</script>


<template>
  <img :src="artProp.lqImgUrl" :alt="artProp.slug" class="img-fluid">
</template>


<style lang="scss" scoped>
</style>