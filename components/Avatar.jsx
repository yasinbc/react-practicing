import React, { Fragment } from 'react';


const Avatar = ({urlImagenAvatar}) => {
    return(
        <Fragment>
            <img src={urlImagenAvatar} alt="" className="mr-3"/>
        </Fragment>
    );
}

export default Avatar;