import React, {useState, useContext} from "react";
import Login from "./Componentes/LOGINADMIN/Login";
import authCtx from "./Componentes/store/auth-context";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pagina from "./Pagina";
import Principal from "./Principal";
import nave from "./Componentes/Navigation/Nave";

function App() {
	const ctx = useContext(authCtx);
	const [isDocenteIn, setDocenteIn] = useState(false);
	const [listDocente, setListDocentes] = useState([]);
	const [isAmbienteIn, setAmbienteIn] = useState(false);
	const [listAmbiente, setListAmbientes] = useState([]);
	const [isMateriaIn, setMateriaIn] = useState(false);
	const [listMateria, setListMaterias] = useState([]);
	const [isEstudianteIn, setEstudianteIn] = useState(false);
	const [listEstudiante, setListEstudiantes] = useState([]);

	const newDocenteHandler =(docenteName, cargaFloat) => {
			setListDocentes((prevListDocentes) => {
			  return [
				  ...prevListDocentes, 
				  {id: Math.trunc(Math.orden() * 100), docenteName, cargaFloat} 
			  ];
			});
	};
	const newAmbienteHandler =(ambienteName, piso, estado) => {
		setListAmbientes((prevListAmbientes) => {
		  return [
			  ...prevListAmbientes, 
			  {id: Math.trunc(Math.orden() * 100), ambienteName, piso, estado} 
		  ];
		});
    };
	const newMateriaHandler =(materiaName, sigla) => {
		setListMaterias((prevListMaterias) => {
		  return [
			  ...prevListMaterias, 
			  {id: Math.trunc(Math.orden() * 100), materiaName, sigla} 
		  ];
		});
    };
	const newEstudianteHandler =(estudianteName, ru) => {
		setListEstudiantes((prevListEstudiantes) => {
		  return [
			  ...prevListEstudiantes, 
			  {id: Math.trunc(Math.orden() * 100), estudianteName, ru} 
		  ];
		});
    };
	const storagedDocenteInfo = localStorage.getItem("isDocenteIn");
	if (storagedDocenteInfo === 1){
		setDocenteIn(true);
	}
	const DocenteHandler = () => {
		console.log("Docente en---");
		localStorage.setItem("isDocenteIn", 1);
		setDocenteIn(true);	
	};	

	const storagedAmbienteInfo = localStorage.getItem("isAmbienteIn");
	if (storagedAmbienteInfo === 1){
		setAmbienteIn(true);
	}
	const AmbienteHandler = () => {
		console.log("Ambiente en---");
		localStorage.setItem("isAmbienteIn", 1);
		setAmbienteIn(true);	
	};
	
	const storagedMateriaInfo = localStorage.getItem("isMateriaIn");
	if (storagedMateriaInfo === 1){
		setMateriaIn(true);
	}
	const MateriaHandler = () => {
		console.log("Materia en---");
		localStorage.setItem("isMateriaIn", 1);
		setMateriaIn(true);	
	};	

	const storagedEstudianteInfo = localStorage.getItem("isEstudianteIn");
	if (storagedEstudianteInfo === 1){
		setEstudianteIn(true);
	}
	const EstudianteHandler = () => {
		console.log("Estudiante en---");
		localStorage.setItem("isEstudianteIn", 1);
		setEstudianteIn(true);	
	};	

    return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Principal />
				</Route>
				<Route path="/Pagina">
					<Pagina />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
			</Switch>
		</BrowserRouter>
     )
 }
export default App;