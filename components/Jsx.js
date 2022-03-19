import React from 'react';


const Jsx = () => {

    const temperatura = 1;
        
    return (
        <React.Fragment>
            <h1>Hace frío o calor?</h1>
            <h2>
                {
                    temperatura > 18 ? "Hace calor" : "Hace frío"
                }
            </h2>
        </React.Fragment>
    );
}

export default Jsx;