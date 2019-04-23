import React from 'react';
import img from './images/preloader.gif';
import {Image} from './styled';

const Preloader = () => {
    return (
        <Image src={img} alt="preloader"/>
    );
};

export default Preloader;