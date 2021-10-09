import { get } from "../api.js";
class AlbumList extends HTMLElement {
  constructor() {
    super();
    this.albums = [];
    this.loading = false;
    this.error = false;
  }
  connectedCallback() {
    this.loading = true;
    this.render();
    get
      .albums(this.dataset.userId)
      .then((albums) => {
        this.albums = albums;
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
      ? `<error-element 
        data-src="/static/error.png" 
        data-text="Сервер не отвечает" 
        data-sub="Уже работаем над этим"
      >
      </error-element>`
      : `
      <ul>
        ${this.albums
          .map(
            (album) =>
              `<album-list-item 
                data-id=${album.id} 
                data-title='${album.title}'
              >
              </album-list-item>`
          )
          .join("")}
      </ul>
    `;
  }
}

export default AlbumList;
