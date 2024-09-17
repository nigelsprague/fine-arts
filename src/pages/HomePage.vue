<script setup>
import { AppState } from "@/AppState";
import ArtworkCard from "@/components/globals/ArtworkCard.vue";
import { artworksService } from "@/services/ArtworksService.js";
import Pop from "@/utils/Pop";
import { computed, onMounted } from "vue";

onMounted(() => {
  getArt()
})

const artworks = computed(() => AppState.artwork)
const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

async function getArt() {
  try {
    await artworksService.getArt()
  }
  catch (error){
    Pop.meow(error);
  }
}

async function changePage(pageNumber) {
  try {
    await artworksService.changePage(pageNumber)
  }
  catch (error){
    Pop.meow(error);
  }
}

</script>

<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-md-2">
        <section class="row">
          <div class="align-items-end my-3">
            <span class="col-12 fs-5 text-center">Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="changePage(currentPage - 1)" class="col-12 btn btn-outline-dark my-3">Previous</button>
            <button @click="changePage(currentPage + 1)" class="col-12 btn btn-outline-dark">Next</button>
          </div>
        </section>
      </div>
      <div class="col-md-10">
        <h1 class="my-3">Codeworks Institute of Art</h1>
        <section class="row">
            <div v-for="art in artworks" :key="art.id" :artwork="art" class="col-md-3 mb-3">
              <ArtworkCard :art-prop="art" />
            </div>
        </section>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
  img {
   height: 100%;
   object-fit: cover;
   box-shadow: 1px 1px 5px black
  }
</style>
