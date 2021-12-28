import axios from "axios";
import {authHeader} from "../features/authHeader";
const {AUTH_TOKEN} = authHeader();
const _axios = axios.create({ baseURL: process.env.VUE_APP_BACKEND_BASE_URL });

class Api {
    get(url, body = {}) {
        return _axios.get(url, {
            headers: {
                'Authorization': 'Bearer ' + AUTH_TOKEN
            },
            body
        });
    }

    post(url, body = {}) {
        return _axios.post(url, {
            headers: {
                'Authorization': 'Bearer ' + AUTH_TOKEN
            },
            body
        });
    }

    put(url, body = {}) {
        return _axios.put(url, {
            headers: {
                'Authorization': 'Bearer ' + AUTH_TOKEN
            },
            body
        });
    }

    delete(url, body = {}) {
        return _axios.delete(url, {
            headers: {
                'Authorization': 'Bearer ' + AUTH_TOKEN
            },
            body
        });
    }
}

export default Api;
