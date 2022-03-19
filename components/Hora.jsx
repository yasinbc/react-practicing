import React, {Fragment} from 'react';
import { Component } from 'react';


//! PRUEBA DE RELOJ SIN TERMINAR !//


class Hora extends React.Component{

    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }

    inicioComponente(){
        this.timerID = setInterval(
            () => this.tick, 1000
        );
    }

    componenteSeDesmontara(){
        clearInterval(this.timerID);
    }
    
    tick(){
        this.setState(
            {date: new Date()}
        );
    }
    

    render(){
        return(
            <Fragment>
                <h1>Qué hora es?</h1>
                <h2>Son las {this.state.date.toLocaleTimeString()} </h2>
            </Fragment>
        );
    }
}

export default Hora;