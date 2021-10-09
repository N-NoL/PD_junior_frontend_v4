class PhotoPreview extends HTMLElement {
  constructor() {
    super();
    this.isOpen = true;
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="modal">
      <div class="modal__content">
        <img class='modal__photo'src="${this.dataset.url}"></img>
        <span class="modal__close">&times;</span>
      </div>
    </div>
    `;
    this.onclick = (event) => {
      if (event.target.className !== "modal__photo") this.remove();
    };
  }
}

export default PhotoPreview;
