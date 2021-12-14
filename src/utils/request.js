export const API_HOST = 'http://localhost:8000/api/';

const request = (uri, options) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_HOST}${uri}`, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            ...options  
        }).then(resp => {
            resp.json().then(data => {
                resolve(data);
            }).catch(err=>reject(err));
        }).catch(err=>reject(err));
    })
};

export default request;