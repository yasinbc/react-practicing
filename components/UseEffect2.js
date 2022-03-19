import React, {useState, useEffect} from 'react'

const UseEffect2 = () =>{
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    
    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    
    return(
        <React.Fragment>
            <h1>{windowWidth}</h1>  
        </React.Fragment>
    )
}

export default UseEffect2;