import React, {useContext} from 'react';
import { useHistory } from 'react-router';
import AuthContext from './Componentes/store/auth-context';
import Admin from './view/Admin';
import Docente from './view/Docente';
import Estudiante from './view/Estudiante';


function Pagina (props) {
	// const handlerSubmit =(e) => {
	// 	props.onLogin();
	// 	e.preventDefault();
	// }
	const history = useHistory();
	const ctx = useContext(AuthContext);
	if(!ctx.authUser){
		history.push('/login');
	}
	switch(ctx.authUser.role){
		case 'admin': return <Admin />;
		case 'docente': return <Docente />;
		case 'estudiante': return <Estudiante />;
		default: history.push('/login'); return <div>Vacio</div>;
	}
 }
			
export default Pagina;
