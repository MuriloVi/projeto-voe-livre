import axios from 'axios'

const api = axios.create({
    baseURL:'https://webservice.voelivre.com.br/v2',
    withCredentials: true,
    headers: { Authorization: "Bearer " },
    
})

export default api;