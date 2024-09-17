import { Artwork } from "@/models/Artwork"
import { api } from "./AxiosService"
import { AppState } from "@/AppState"

class ArtworksService{
  async changePage(pageNumber) {
    const response = await api.get(`api/artworks?page=${pageNumber}`)
    const newArtworks = response.data.artworks.map(art => new Artwork(art))
    AppState.artwork = newArtworks
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }
  async getArt() {
    const response = await api.get('api/artworks')
    const newArtworks = response.data.artworks.map(art => new Artwork(art))
    AppState.artwork = newArtworks
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }
}

export const artworksService = new ArtworksService()