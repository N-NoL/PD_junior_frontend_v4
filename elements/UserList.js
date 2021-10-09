import { get } from "../api.js";
class UserList extends HTMLElement {
  constructor() {
    super();
    this.users = [];
    this.loading = false;
    this.error = false;
  }
  connectedCallback() {
    this.loading = true;
    this.render();
    get
      .users()
      .then((users) => {
        this.users = users;
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
      ? `<preloader-element data-screen=true></preloader-element>`
      : this.error
      ? `
        <error-element 
          data-screen=true 
          data-src="/static/error.png" 
          data-text="Сервер не отвечает" 
          data-sub="Уже работаем над этим"
        >
        </error-element>`
      : `
      <ul></ul>
        ${this.users
          .map(
            (user) =>
              `<user-list-item data-id=${user.id} data-name='${user.name}'></user-list-item>`
          )
          .join("")}
      </ul>
    `;
  }
}

export default UserList;
