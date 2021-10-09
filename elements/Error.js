class Error extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="error${this.dataset.screen ? "_screen" : ""}">
      <img class="error__image" src="${this.dataset.src}"></img>
      <div class="error__info">
        <p class="error__text">${this.dataset.text}</p>
        <p class="error__sub">${this.dataset.sub}</p>
      </div>
    </div>
    `;
  }
}

export default Error;
