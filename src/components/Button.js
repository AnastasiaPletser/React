import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

const Button = (props) => {
    return (
        <>
            <button className='btn btn-light'>{props.text}</button>
        </>
    );
};

export default Button
