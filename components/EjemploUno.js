import React from "react";
import { useForm } from "react-hook-form";

export default function EjemploUno() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,event) => {
        console.log(data)
        event.target.reset()
    }

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}






// import React from 'react';
// import {useForm} from 'react-hook-form';

// const EjemploUno = () => {

//     const {register, errors, handleSubmit} = useForm();
    
//     const onSubmit = (data, evento) => console.log(data); 
    
//     return (
//         <React.Fragment>
//             <h1>Ejemplo #1</h1>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input 
//                     name="titulo"
//                     placeholder="Ingrese titulo"
//                     className="form-control my-2"
//                     ref={
//                         register({
//                             required: {value: true, message: "Campo obligatorio"}
//                         })
//                     }
//                 />
                
//                 <input 
//                     name="descripcion"
//                     placeholder="Ingrese descripcion"
//                     className="form-control my-2"
//                 />
//                 <button className="btn btn-primary">Agregar</button>
//             </form>
//         </React.Fragment>
//     );
// }

// export default EjemploUno;