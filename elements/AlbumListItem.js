class AlbumListItem extends HTMLElement {
  constructor() {
    super();
    this.isOpen = false;
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <li id=user-${this.dataset.id} class=${
      this.isOpen ? "album__list__item_open" : "album__list__item"
    }>
      <span class='album__list__item__text'>${this.dataset.title}</span>
    </li>
    ${
      this.isOpen
        ? `<user-album data-album-id=${this.dataset.id}></user-album>`
        : ""
    }
    `;
    const text = this.children[0].children[0];
    text.onclick = () => {
      this.isOpen = !this.isOpen;
      this.render();
    };
  }
}
export default AlbumListItem;
