import axios from 'axios';

class API {
	axiosInstance = null;

	constructor() {
		/* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
		const axiosInstance = axios.create({
			baseURL: 'https://kwitter-api.herokuapp.com/',
			timeout: 30000,
			headers: { Authorization: `Bearer ${getToken()}` }
		});

		// Add a request interceptor to attach a
		axiosInstance.interceptors.request.use(
			(config) => ({
				...config,
				headers: {
					...config.headers,
					Authorization: `Bearer ${getToken()}`
				}
			}),
			(error) => Promise.reject(error)
		);

		// Add a response interceptor
		axiosInstance.interceptors.response.use(({ data }) => data, (error) => Promise.reject(error));

		this.axiosInstance = axiosInstance;
	}

	async login({ username, password }) {
		try {
			const result = await this.axiosInstance.post('/auth/login', {
				username,
				password
			});
			return result;
		} catch (err) {
			// Instructor is logging you out because this failed
			helpMeInstructor(err); // comedian eh?
			return err;
		}
	}

	async logout() {
		try {
			await this.axiosInstance.get('/auth/logout');
		} catch (err) {
			helpMeInstructor(err);
			return err;
		}
	}

	async getUserInfo(username) {
		try {
			const response = await this.axiosInstance.get(`/users/${username}`);
			return response;
		} catch (err) {
			helpMeInstructor(err);
		}
	}

	async messageList() {
		try {
			await this.axiosInstance.get('/messages').then(function(dataMessages) {
				// handle success
				return dataMessages;
			});
		} catch (err) {
			helpMeInstructor(err);
		}
	}

	async createUser({ username, displayName, password }) {
		try {
			await this.axiosInstance.post('/users', {
				username,
				displayName,
				password
			});
		} catch (err) {
			helpMeInstructor(err);
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

	async updateUser({ password, about, displayName }) {
		try {
			console.log({ password, about, displayName });
			const response = await this.axiosInstance.PATCH(`/users/${displayName}`, {
				password,
				about,
				displayName
			});
			
			return response
		} catch (err) {
			console.log(err)
			return err;
		}
	}

	// Unsure how image data needs to be sent, check documentation on Kwitter API for PUT User Picture
	async getUserPicture(username) {
		try {
			console.log(username);
			await this.axiosInstance.get(`/users/${username}/picture`);
		} catch (err) {
			console.log(err);
			return err;
		}
	}

	async putUserPicture(username) {
		try {
			await this.axiosInstance.put(`/users/${username}/picture`);
		} catch (err) {
			return err;
		}
	}

	async postMessage({ text }) {
		try {
			await this.axiosInstance.post('/messages', {
				text
			});
		} catch (err) {
			return err;
		}
	}

	async postlike({ messageId }) {
		try {
			await this.axiosInstance.post('/likes', {
				messageId
			});
		} catch (err) {
			return err;
		}
	}

	async deleteLike({ likeId }) {
		try {
			await this.axiosInstance.delete(`/likes/${likeId}`);
		} catch (err) {
			return err;
		}
	}
}

// WARNING.. do not touch below this line if you want to have a good day =]

function helpMeInstructor(err) {
	console.info(
		`
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
    Check the Kwitter docs 👉🏿 https://kwitter-api.herokuapp.com/docs/#/
    Check the Axios docs 👉🏿 https://github.com/axios/axios
    TODO: troll students
  `,
		err
	);
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
