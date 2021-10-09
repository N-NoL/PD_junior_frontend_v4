class Tabs extends HTMLElement {
  constructor() {
    super();
    this.routes = {};
    document.querySelectorAll(".tab__content").forEach((element) => {
      this.routes[`#${element.id}`] = element;
    });
  }
  routeHandler() {
    document.querySelectorAll(".tab__link_active").forEach((link) => {
      link.className = "tab__link";
    });
    document.querySelectorAll(".tab__link").forEach((link) => {
      link.className =
        location.href === link.href ? "tab__link_active" : "tab__link";
    });
    if(!document.querySelector(".tab__link_active"))
      window.location.hash="catalog";
  }
  connectedCallback() {
    this.render();
    this.routeHandler();
    window.addEventListener("hashchange", () => this.routeHandler());
  }
  render() {
    this.innerHTML = `
    <nav class="tab__navigation">
      <div class="tab"><a class="tab tab__link" href="#catalog">Каталог</a></div>
      <div class="tab"><a class="tab tab__link" href="#favorites">Избранное</a></div>
    </nav>
    `;
  }
}

export default Tabs;
