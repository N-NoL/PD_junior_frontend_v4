class UserListItem extends HTMLElement {
  constructor() {
    super();
    this.isOpen = false;
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <li class=${this.isOpen ? "user__list__item_open" : "user__list__item"} 
      id=user-${this.dataset.id}
    >
      <span class='user__list__item__text'>${this.dataset.name}</span>
    </li>
    ${
      this.isOpen
        ? `<album-list data-user-id=${this.dataset.id}></album-list>`
        : ""
    }
    `;
    const text = this.children[0];
    text.onclick = () => {
      this.isOpen = !this.isOpen;
      this.render();
    };
  }
}

export default UserListItem;
