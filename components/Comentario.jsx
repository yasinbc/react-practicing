import React, { Fragment } from 'react';
import Avatar from './Avatar';
import Texto from './Texto';


const Comentario = ({sujeto}) => {
    return(
        <Fragment>
            <h1>Comentarios</h1>
            <hr/>
            <div className="media">
                {/* <img src={sujeto.urlImagen} alt="" className="mr-3"/> */}
                <Avatar urlImagenAvatar={sujeto.urlImagen}/>
                <div className="media-body">
                    <h5 className="mt-0">{sujeto.nombre}</h5>
                    <Texto texto={sujeto.texto}/>
                </div>
            </div>
        </Fragment>
    );
}

export default Comentario;