import React from 'react';
import "font-awesome/css/font-awesome.min.css";


const Heart = (props) => {
    const baseClass = 'fa fa-heart';

    return (
        <i onClick={props.clicked}
            style={{ cursor: 'pointer' }}
            className={props.movie.liked ? `${baseClass}` : `${baseClass}-o`} />

    );
}

export default Heart;