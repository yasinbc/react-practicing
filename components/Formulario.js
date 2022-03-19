import React, {useState} from 'react';

const Formulario = () =>{

    const [datos, setDatos] = useState({ nombre: "", apellido: "" });

    const handleInputChange = (event) => {
        setDatos({...datos, [event.target.name]: event.target.value});
    }
    
    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + " " + datos.apellido )
    }
    
    return(
        <React.Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input 
                        placeholder="Ingrese nombre" 
                        className="form-control"
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <input
                        placeholder="Ingrese Apellido"
                        className="form-control"
                        type="text"
                        name="apellido"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary"  type="submit">Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </React.Fragment>
    );
}

export default Formulario;




















{/* import React, {useState} from 'react';

const Formulario = () =>{

    const [datos, setDatos] = useState({ nombre: "", apellido: "" });

    const handleInputChange = (event) => {
        setDatos({...datos, [event.target.name]: event.target.value});
    }
    
    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.nombre + " " + datos.apellido )
    }
    
    return(
        <React.Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input 
                        placeholder="Ingrese nombre" 
                        className="form-control"
                        type="text"
                        name="nombre"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <input
                        placeholder="Ingrese Apellido"
                        className="form-control"
                        type="text"
                        name="apellido"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary"  type="submit">Enviar</button>
                </div>
            </form>
            <h3>{datos.nombre} - {datos.apellido}</h3>
        </React.Fragment>
    );
}

export default Formulario;*/}