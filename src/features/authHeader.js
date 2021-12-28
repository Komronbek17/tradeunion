import Cookies from 'js-cookie'
const AUTH_TOKEN = Cookies.get("___authorization___token___");
export const authHeader = () => {

    if (AUTH_TOKEN) {
        return {
            AUTH_TOKEN
        }
    }

    return "";
}
