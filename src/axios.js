import axios from 'axios'

const instance = axios.create({
    baseURL: "..." // the api (cloud function) url
});

export default instance;