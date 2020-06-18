import React from 'react';
import './AppLogo.css';


const AppLogo = (props) => {
    return(
        <a className='app-logo' href={props.url}>
            <i className="ui violet tag big icon"></i>
        </a>
    );
}

/*
const AppLogo = (props) => {
    return(
        <a className='app-logo' href={props.url}>
            <img src={props.url} />
        </a>
    );
}
*/

export default  AppLogo;