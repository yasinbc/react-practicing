import React from 'react';

const Lista = () => {

    const [arrayNumero, setNumero] = React.useState([1,2,3,4,5]);

    const [numero, setSuma] = React.useState(6);

    //? este trozo sustituye la suma actual en agregarElementos()
    // const sumaUno = (arg) => {
    //     return arg + 1
    // } 
    // sumaUno(arrayNumero.length);
    
    const agregarElemento = () => {
        setSuma(numero + 1)
        console.log("click");
        setNumero([...arrayNumero, numero ]);
    }
    
    return (
        <React.Fragment>
            <button onClick={agregarElemento}>Agregar</button>
            <h1>Aqui hay una matriz {arrayNumero.map((item, index) =>
                <p key={index}>{item} - {index}</p>)}</h1>
        </React.Fragment>
    );
}

export default Lista;