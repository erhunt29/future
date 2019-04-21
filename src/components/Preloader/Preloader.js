import React from 'react';
import img from './images/preloader.gif'

const Preloader = () => {
    return (
        <div>
            <img src={img} alt="preloader"/>
        </div>
    );
};

export default Preloader;