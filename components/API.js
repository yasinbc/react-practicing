import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const API = () => {

    const [equipo, setEquipo] = useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async() =>{
        const data = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");
        const users = await data.json();
        console.log(users)
        setEquipo(users.civilizations)
    }
    
    return (
        <div>
            <h1>API</h1>
            <ul>
                {
                    equipo.map(item => (
                        <li key={item.id}>
                            <Link to={`/API/${item.id}`}>
                                {item.name} - {item.expansion}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default API;