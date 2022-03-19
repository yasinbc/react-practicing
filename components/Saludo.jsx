import React, { Component } from 'react';


const Saludo = (props) => {
    return(
        props.persona ? <h2>Hola {props.persona}</h2>
        : props.adjetivo ? <h2>{props.persona} Tu gata es muy {props.adjetivo}</h2>
        : props.cosa ? <h2>Esta es nuestra {props.cosa} </h2>
        : props.edad ? <h2>Tengo {props.edad}</h2>
        :<h2> Aqui no ha pasado na de na </h2>
    );
}

export default Saludo;