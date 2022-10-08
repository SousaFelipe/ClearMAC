


const utils = {


    http: {

        isOK: (response: any) => {
            return (response.status && (response.status >= 200 && response.status < 300))
        },

        url: (url: string, data: any) => {

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
        isNumber: (obj: any) => {
            return !isNaN(parseFloat(obj)) && isFinite(obj)
        }
    }
}



export default utils;