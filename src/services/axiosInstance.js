import axios from 'axios';

export const a = axios.create({
    baseURL: 'https://n0tes.pythonanywhere.com/api/v1/',
    // headers: {
    //     'Content-Type': 'application/json',
    // },
});