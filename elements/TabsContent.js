class TabsContent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    window.addEventListener("hashchange", () => this.render());
    this.render();
  }
  disconnectedCallback() {
    window.removeEventListener("hashchange", () => this.render());
  }
  render() {
    this.innerHTML = `
    <content class="tab__content">
      ${window.location.hash === "#catalog" ? "<user-list></user-list>" : ""}
      ${
        window.location.hash === "#favorites"
          ? "<favorite-photos></favorite-photos>"
          : ""
      }
    </content>
    `;
  }
}

export default TabsContent;
