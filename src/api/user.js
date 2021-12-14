import request from "../utils/request";
import Resource from "./resource";

export default class User extends Resource{
    constructor(){
        super('users');
    }
    login(email, pass){
        return request(this.uri+'/login',{
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: pass
            })
        })
    }
}

export const UserResource = new User();