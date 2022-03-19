import React, {useState, useEffect} from 'react'

const ContactCard = (props) =>{
    const [showAge, setShowAge] = useState(() => true)
    console.log(props)
    return (
        <div className="container contact-card">
            <img src={props.avatarUrl} alt="profile-img"/>
            <div className="user-details">
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <button onClick={() => setShowAge(!showAge)} className="btn btn-primary ml-3">Show age</button>
                {showAge && <p>Age: {props.age}</p>}
            </div>
        </div>
    )
}

export default ContactCard