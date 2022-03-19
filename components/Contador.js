import React, {useState, Fragment} from 'react';

const Contador = () => {

    const [numero, setNumero] = useState(Math.PI);

    const aumentar = () => {
        console.log("Hiciste 1 clic")
        setNumero(numero + 1)
    }
    
    return(
        <Fragment> {/* tambien => React.Fragment */}
            <h1>Componente contando {numero}</h1>
            <button onClick={aumentar} className="btn btn-primary">Aumenta en +1</button>
        </Fragment>
    );
}

export default Contador;