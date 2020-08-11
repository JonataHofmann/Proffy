import axio from 'axios'
const api = axio.create({
    baseURL:'http://192.168.0.14:3333'
})
export default api;