export class Artwork{
  constructor(data) {
    this.slug = data.slug
    this.height = data.height
    this.width = data.width
    this.lqImgUrl = data.imgUrls.small
    this.hqImgUrl = data.imgUrls.full
    this.description = data.description
    this.attribution = data.attribution
    this.color = data.color
    this.admirers = data.admirers
  }
}