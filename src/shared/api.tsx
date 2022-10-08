import axios from "axios";



const BASE_URL = 'https://upnetce.com/api';



export function csrf() {
    return axios.create({
        baseURL: BASE_URL,
        timeout: 8000,
        headers: {
            'Content-Type': 'application/json'
        },
    })
}



export function request(csrf: string) {
    return axios.create({
        baseURL: `${ BASE_URL }/clearmac`,
        timeout: 8000,
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrf
        },
    })
}



export function ping(host: string, pong?: Function) {

    const started = new Date().getTime();
    const http = new XMLHttpRequest();
  
    http.open("GET", host, true);
    http.timeout = 1000;

    http.onloadend = function() {

        const ended = new Date().getTime();
        const milliseconds = ended - started;

        if (pong) {
            pong(milliseconds);
        }
    }

    http.ontimeout = function() {
        if (pong) {
            pong(false);
        }
    }

    try {
        http.send(null);
    }
    catch(error: any) {
        console.error(error);
    }
}
