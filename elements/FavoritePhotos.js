import store from "../store.js";
class FavoritePhotos extends HTMLElement {
  constructor() {
    super();
  }
  get photos() {
    return Object.values(store.favoritePhotos);
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML =
      this.photos.length === 0
        ? `<error-element 
          data-screen=true 
          data-src="/static/empty.png" 
          data-text="Список избранного пуст" 
          data-sub="Добавляйте изображения, нажимая на звездочки"
        >
        </error-element>`
        : `
      <div class="grid favorite_photos">
        ${this.photos
          .map(
            (photo) =>
              `
              <div id='favorite_photo-${photo.id}'>
                <album-photo 
                data-id=${photo.id} 
                data-title='${photo.title}' 
                data-thumbnail-url='${photo.thumbnailUrl}' 
                data-url='${photo.url}'
                >
                </album-photo>
                <p class="favorite__photo__text">${photo.title}</p>
              </div>
              `
          )
          .join("")}
      </div>
    `;
  }
}

export default FavoritePhotos;
