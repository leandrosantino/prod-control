import axios from 'axios'

export const api = axios.create({
    // baseURL: `http://${window.location.host}/`
    baseURL: `http://localhost:3336/api`
})
