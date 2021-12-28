import Api from "./core";
import axios from "axios";

const _axios = axios.create({baseURL: process.env.VUE_APP_BACKEND_BASE_URL});

class Request extends Api {
    login(params) {
        return _axios.post('login', params)
    }

    getUsersInfo(page = 0) {
        return this.get(`employee/getallemployee/${page}`)
    }

    getUserMoreInfo(id) {
        return this.get(`employee/getemployeeadditional/${id}`)
    }

    deleteUserFromDatabase(id) {
        return this.delete(`employee/deleteemployee/${id}`)
    }

    getRegions() {
        return this.get('suggestion/region')
    }

    getDistricts(regionId) {
        return this.get(`suggestion/district/${regionId}`)
    }

    getCompanies() {
        return this.get('suggestion/company')
    }

    editEmployeeInfo({id, params}) {
        return this.put(`employee/editemployee/${id}`, params)
    }

    addNewEmployee(params){
        return this.put(`employee/addemployee`, params)
    }
}

export default new Request()

