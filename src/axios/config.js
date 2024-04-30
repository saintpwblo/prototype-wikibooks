import axios from "axios";

const bookFetch = axios.create({
    // baseURL: 'https://apiwikibooks.onrender.com/books',
    baseURL: 'https://apiwikibooks.onrender.com/books',
    headers:{
        "Content-Type": "application/json"
    }
})

export default bookFetch