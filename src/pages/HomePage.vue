<script setup>
import { artsService } from "@/services/ArtsService.js";
import Pop from "@/utils/Pop";
import { onMounted } from "vue";

onMounted(() => {
  getArt()
})

async function getArt() {
  try {
    await artsService.getArt()
  }
  catch (error){
    Pop.meow(error);
  }
}
</script>

<template>
  <div class="container">
    <section class="row">
      <div class="col-md-9">
        <h1 class="my-3">Codeworks Institute of Art</h1>
        <section class="row">
          <div class="col-md-3">

          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
</style>
