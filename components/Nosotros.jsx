import React, {useEffect} from 'react'

const Nosotros = () => {

    const [equipo, setEquipo] = React.useState([])

    useEffect(() => {
        obtenerDatos()
    }, [])
    
    const obtenerDatos = async() => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await data.json();
        setEquipo(users)
    }
    
    return (
        <React.Fragment>
            <ul>
                {
                    equipo.map(e => (
                        <li key={e.id}>{e.name} - {e.email}</li>
                    ))
                }
            </ul>
        </React.Fragment>
    );
}

export default Nosotros;