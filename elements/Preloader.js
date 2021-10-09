class Preloader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="preloader${this.dataset.screen ? "_screen" : ""}">
      <img class="preloader__image" src="/static/loader.gif"></img>
    </div>
    `;
  }
}

export default Preloader;
