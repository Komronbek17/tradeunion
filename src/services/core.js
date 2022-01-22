import axios from "axios";

const _axios = axios.create({baseURL: process.env.VUE_APP_BACKEND_BASE_URL});
import Cookies from 'js-cookie'

class Api {

    get(url, body = {}) {
        return _axios.get(url, {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get("___authorization___token___")
            },
            body
        });
    }

    post(url, body = {}) {
        return _axios.post(url, {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get("___authorization___token___")
            },
            body
        });
    }

    put(url, body = {}) {
        console.log(body)
        return _axios.put(url, {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get("___authorization___token___")
            },
            body
        });
    }

    delete(url, body = {}) {
        return _axios.delete(url, {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get("___authorization___token___")
            },
            body
        });
    }
}

export default Api;
