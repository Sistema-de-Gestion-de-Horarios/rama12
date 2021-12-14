import {createContext, useState} from "react";
import { UserResource } from "../../api/user";

const AuthContext = createContext (null);
export const AuthContextProvider = (props) => {
  const [authUser, setAuthUser] = useState(undefined);
  const loginHandler = (email, password, cb) => {
    UserResource.login(email, password).then(resp => {
      setAuthUser(resp.serverResponse.user);
      cb();
    }).catch(err => console.log(err));
  };
  const logoutHandler = () => {
   
    setAuthUser(undefined);
  };
  return (
       <AuthContext.Provider 
       value={{
          authUser,
          onLogin: loginHandler,
          onLogout: logoutHandler,
       }}
    >
        {props.children}
        </AuthContext.Provider>
  );
};

export default AuthContext; 



	