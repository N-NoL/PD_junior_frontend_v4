const host = "https://json.medrating.org";
const users = ({ host }) => `${host}/users?_end=10/`;
const albums = ({ host, userId }) => `${host}/albums?userId=${userId}`;
const photos = ({ host, albumId }) => `${host}/photos?albumId=${albumId}`;

const GET_REQUEST = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("response status is not ok");
  return await response.json();
};

class GET {
  constructor(host) {
    this.host = host;
  }
  users() {
    const url = users({ host: this.host });
    return GET_REQUEST(url);
  }
  albums(userId) {
    const url = albums({ host: this.host, userId });
    return GET_REQUEST(url);
  }
  photos(albumId) {
    const url = photos({ host: this.host, albumId });
    return GET_REQUEST(url);
  }
}

export const get = new GET(host);
