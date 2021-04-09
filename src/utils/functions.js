


const functions = {


    http: {

        isOK: (response) => {
            return (response.status && (response.status >= 200 && response.status < 300))
        },

        url: (url, data) => {

            let formattedUrl = `https://upnetce.com/api/clearmac/${ url }`
    
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    formattedUrl = formattedUrl.replace(`{${ key }}`, data[key])
                }
            }
    
            return formattedUrl
        }
    },


    string: {
        isNumber: (obj) => {
            return !isNaN(parseFloat(obj)) && isFinite(obj)
        }
    }
}



export default functions
