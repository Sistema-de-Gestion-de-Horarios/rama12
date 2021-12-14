import request from "../utils/request";

export default class Resource {
    constructor(uri){
        this.uri = uri;
    }
    list(query, options){
        return request(this.uri, {
            method: 'GET',
            params:  {
                query,
                options
            }
        });
    }
    get(id){
        return request(`${this.uri}/${id}`, {
            method: 'GET',
        });
    }
    store(data){
        return request(this.uri, {
            method: 'POST',
            body:  JSON.stringify(data),
        });
    }
    update(id, data){
        return request(`${this.uri}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }
    delete(id){
        return request(`${this.uri}/${id}`, {
            method: 'DELETE',
        });
    }
}