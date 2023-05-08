import * as axios from 'axios';
import { BASE_URL } from './baseService';


const HEADERS_NOT_AUTHORIZATION = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
};

const api = {
    getPost: axios.default.get(BASE_URL + '/posts', { header: HEADERS_NOT_AUTHORIZATION }).then(function (res) {
        console.log(res.status);
        console.log(res.data);
        console.log(res.headers);
        return res.data;
    }).catch(function (err) {
        console.log(err.status);
        console.log(err);
        return err;
    }),
}
 export const login = {
    getPost: axios.default.get(BASE_URL + '/login', { header: HEADERS_NOT_AUTHORIZATION }).then(function (res) {
        console.log(res.status);
        console.log(res.data);
        console.log(res.headers);
        return res.data;
    }).catch(function (err) {
        console.log(err.status);
        console.log(err);
        return err;
    }),
}
// const api = axios.default.get(BASE_URL + '/posts', { header: HEADERS_NOT_AUTHORIZATION })
    // .then(function (res) {
    //     console.log(res.status);
    //     console.log(res.data);
    //     console.log(res.headers);
    //     return res;
    // }).catch(function (err) {
    //     console.log(err.status);
    //     console.log(err);
    //     return err;
    // })

// const api_authen = axios.default.post(BASE_URL + '/auth', { header: HEADERS_NOT_AUTHORIZATION, data: { useName: "thang", password: "123456" } })
//     .then(function (res) {
//         console.log(res.status);
//         console.log(res.data);
//         console.log(res.headers);
//         return res;
//     }).catch(function (err) {
//         console.log(err.status);
//         console.log(err);
//         return err;
//     })

export default api;