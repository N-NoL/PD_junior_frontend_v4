class Store {
    constructor(num) {
        this.favoritePhotos = localStorage.getItem("favoritePhotos") ?
            JSON.parse(localStorage.getItem("favoritePhotos")) : {};
    }
    addFavoritePhoto(photo) {
        this.favoritePhotos[photo.id] = photo;
        this.localStorageUpdate();
    }
    removeFavoritePhoto(id) {
        delete this.favoritePhotos[id];
        this.localStorageUpdate();
        const favorite_photo = document.querySelector(`#favorite_photo-${id}`);
        if (favorite_photo) favorite_photo.remove();
        if (Object.keys(this.favoritePhotos).length === 0)
            document.querySelector("favorite-photos").render();
    }
    localStorageUpdate() {
        localStorage.setItem("favoritePhotos", JSON.stringify(this.favoritePhotos));
    }
}

export default new Store();