import { get } from "../api.js";
class Album extends HTMLElement {
  constructor() {
    super();
    this.photos = [];
    this.loading = false;
    this.error = false;
  }
  connectedCallback() {
    this.loading = true;
    this.render();
    get
      .photos(this.dataset.albumId)
      .then((photos) => {
        this.photos = photos;
      })
      .catch(() => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
        this.render();
      });
  }
  render() {
    this.innerHTML = this.loading
      ? "<preloader-element></preloader-element>"
      : this.error
      ? `
    <error-element 
      data-src="/static/error.png" 
      data-text="Сервер не отвечает" 
      data-sub="Уже работаем над этим"
    >
    </error-element>
    `
      : `
      <div class="grid">
        ${this.photos
          .map(
            (photo) =>
              `<album-photo 
              data-id=photo-${photo.id} 
              data-title='${photo.title}' 
              data-thumbnail-url='${photo.thumbnailUrl}' 
              data-url='${photo.url}'
              >
              </album-photo>`
          )
          .join("")}
      </div>
    `;
  }
}

export default Album;
