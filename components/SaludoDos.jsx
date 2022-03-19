import React from 'react';


const SaludoDos = (props) => {

    
    return (
        <React.Fragment>
            <h2>{props.persona} tiene {props.edad} años y es {props.profesion}</h2>
            <div className="media">
                <img src="https://picsum.photos/180/180" className="mr-3 rounded-circle" alt="" />
                <div className="media-bofy">
                    <h5 className="mt-0">Perfil</h5>
                    {props.descripcion}
                </div>
            </div>
            <hr/>
        </React.Fragment>
    );
}

export default SaludoDos;