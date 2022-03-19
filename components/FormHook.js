import React, {Fragment} from 'react';
import {useForm} from "react-hook-form";

const FormHook = () => {

    const {register, errors, handleSubmit} = useForm();
    
    const onSubmit = (data, event) =>{
        console.log(data)
        event.target.reset()
    }
    
    return(
        <Fragment>
            <h1>Formulario Form Hook</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="titulo"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {value: true, message: "Titulo obligatorio"}
                        })
                    }
                />
                <span className="text-danger text-small d-block mb-2">
                    {/* {errors.usuario && errors.usuario.message} */}
                    {errors?.titulo?.message}
                </span>
                <button className="btn btn-primary form-control">Enviar</button>
            </form>
        </Fragment>
    );
}

export default FormHook;