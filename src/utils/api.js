import axios from 'axios'



export default function () {


    let base_url = 'https://upnetce.com/api/clearmac'
    let csrf_header = { }


    this.root = () => {
        base_url = 'https://upnetce.com/api'
        return this
    } 


    this.token = (token) => {
        csrf_header = {'X-CSRF-TOKEN' : token }
        return this
    }
    

    this.request = () => {
        return axios.create({
            baseURL: base_url,
            headers: csrf_header,
        })
    }
}
