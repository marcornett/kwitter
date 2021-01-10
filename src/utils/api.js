import axios from 'axios';

class API {
  axiosInstance = null;

  constructor() {
		/* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
    const axiosInstance = axios.create({
      baseURL: "https://kwitter-api.herokuapp.com/",
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    console.log(getToken())
    // Add a request interceptor to attach a
    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }

  async login({ username, password }) {
    try {
      const result = await this.axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return result;
    } catch (err) {
      console.error(err)
      return err;
    }
  }

  async logout() {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async getUserInfo(username) {
    try {
      const response = await this.axiosInstance.get(`/users/${username}`)
      return response;
    } catch (err) {
      console.error(err);
    }
  }


  async messageList() {
    try {
      const response = await this.axiosInstance.get("/messages?limit=100&offset=0")
      return Object.keys(response.messages).map(key => response.messages[key])
    } catch (err) {
      console.error(err);
    }
  }

  async createUser(user) {
    try {
      await this.axiosInstance.post('/users',
        user
      );
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async deleteUser(username) {
    try {
      await this.axiosInstance.delete(`/users/${username}`);
    } catch (err) {
      return err;
    }
  }

  async putUserPicture(username, formData) {
    try {
      await this.axiosInstance.put(`/users/${username}/picture`,
        formData
      );
    } catch (err) {
      return err;
    }
  }

  async postMessage(text) {
    try {
      const response = await this.axiosInstance.post('/messages',
        text
      );
      return response
    } catch (err) {
      return err;
    }
  }

  async postlike(messageId) {
    try {
      const response = await this.axiosInstance.post('/likes', {
        messageId
      });
      return response
    } catch (err) {
      return err;
    }
  }

  async deleteLike(likeId) {
    try {
      const response = await this.axiosInstance.delete(`/likes/${likeId}`);
      console.log(response)
      return response
    } catch (err) {
      return err;
    }
  }

  async updateUser({ password, about, displayName }, username) {
    try {
      const response = await this.axiosInstance.patch(`/users/${username}`,
        { password, about, displayName }
      );
      return response
    } catch (err) {
      console.log(err)
      return err;
    }
  }

  async getUserPicture(username) {
    try {
      await this.axiosInstance.get(`/users​/${username}​/picture`);
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async userList(limit, offset) {
    try {
      const response = await this.axiosInstance.get(`/users?limit=${limit}&offset=${offset}`)
      return response
    } catch (err) {
      console.error(err);
    }
  }

}

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();
