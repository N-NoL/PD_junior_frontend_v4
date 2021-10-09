import store from "../store.js";
class Photo extends HTMLElement {
    constructor() {
        super();
    }
    get isFavorite() {
        return store.favoritePhotos.hasOwnProperty(this.dataset.id);
    }
    connectedCallback() {
        this.render();
    }
    render(preview = false) {
            this.innerHTML = `
      <span class='photo__tooltip'>${this.dataset.title}</span>
      <div class='grid__item photo__container'>
        <img class='photo'src="${this.dataset.thumbnailUrl}"></img>
        <div class=${
          this.isFavorite ? "photo__star_active" : "photo__star"
        }></div>
      </div>
      ${
        preview
          ? `<photo-preview data-url=${this.dataset.url}></photo-preview>`
          : ""
      }
    `;
    const star = this.children[1].children[1];
    const img = this.children[1].children[0];
    const tooltip = this.children[0];
    star.onclick = () => {
      if (!this.isFavorite) {
        store.addFavoritePhoto(this.dataset);
      } else {
        store.removeFavoritePhoto(this.dataset.id);
      }
      this.render();
    };
    img.onclick = () => {
      this.render(true);
    };
    img.onmousemove = (event) => {
      tooltip.style.top = event.pageY + 20 + "px";
      tooltip.style.left = event.pageX + "px";
    };
    img.onmouseout = () => {
      tooltip.className = "photo__tooltip";
    };
    img.onmouseover = () => {
      tooltip.className = "photo__tooltip_active";
    };
  }
}

export default Photo;