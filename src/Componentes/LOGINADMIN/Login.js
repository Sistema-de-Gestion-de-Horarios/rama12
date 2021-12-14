import React, {useState, useContext, useReducer} from "react";
import Card from "../UI/Card";
import {useHistory} from 'react-router-dom';
import AuthContext from "../store/auth-context";



const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.val,
            isValid: true
        };
    }
    return {
        value: "",
        isValid: false,
    };
};

const Login = (props) => {
    const history = useHistory();
    const ctx = useContext (AuthContext);
    // const [email, setEmail] = useState(""); 
    console.log(ctx.authUser);
    if(ctx.authUser){
        history.push('/Pagina');
    }
    const [password, setPassword] = useState("");
    const [email, dispatchEmail] = useReducer (emailReducer, {
       value: "",
       isValid: null,
   }); 
    const emailChangeHandler = (e) => { 
        // console.log(e.target.value);
        // setEmail(e.target.value);
        dispatchEmail({
            val: e.target.value,
            type: "USER_INPUT",
        });
    };
    const passwordChangeHandler = (e) => { 
        // console.log(e. target. value); 
        setPassword(e.target.value);
    };
    const handlerSubmit = (e) => { 
        e.preventDefault();
        if (email.isValid) {
            ctx.onLogin(email.value, password, () => {
                history.push('/Pagina');
            });
            // 
        }
        else {
            console.log("email no valido");
        }
    };
    return (
        <Card>
            <form onSubmit ={handlerSubmit}>
                <label>User</label>
                <input type="text "  onChange={emailChangeHandler} />
                <label>Password</label> 
                <input type="password" onChange={passwordChangeHandler} />
                <button>Login</button>
            </form>
           
        </Card>
        
    );
};

export default Login;


	


	
