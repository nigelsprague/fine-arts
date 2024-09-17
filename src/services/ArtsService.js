import { api } from "./AxiosService"

class ArtsService{
  async getArt() {
    const response = await api.get('api/artworks')
    console.log((response).data)
  }
}

export const artsService = new ArtsService()