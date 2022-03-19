import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {

    const {id} = useParams()
    console.log(id)

    const [pueblo, setPueblo] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    },[pueblo])

    const obtenerDatos = async() =>{
        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        const users = await data.json()
        setPueblo(users)
    }
        
    return (
        <div>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.team_bonus}</p>
        </div>
    )
}

export default Users
