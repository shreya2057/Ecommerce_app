import axios from "axios";

const url = "https://dummyjson.com";

const instance = axios.create({
    baseURL: url
});

export default instance;