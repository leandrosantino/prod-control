import axios from 'axios'

export const api = axios.create({
    // baseURL: `http://${window.location.host}/`
    baseURL: `http://192.168.115.201:3333/`
})
