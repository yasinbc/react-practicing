import React, {useState, useEffect} from 'react'

const RepasandoUseEffect = () => {
    
    const [resourceType, setResourceType] = useState("posts")
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resourceType])
    
    return(
        <React.Fragment>
            <button className="btn btn-primary mr-2" onClick={() => setResourceType("posts")}>Posts</button>
            <button className="btn btn-primary mr-2" onClick={() => setResourceType("users")}>Users</button>
            <button className="btn btn-primary" onClick={() => setResourceType("comments")}>Comments</button>
            <h1>{resourceType}</h1>
            {
                items.map(item => {
                    return <pre key={item.id}>{JSON.stringify(item)}</pre>
                })
            }
        </React.Fragment>
    );
}

export default RepasandoUseEffect