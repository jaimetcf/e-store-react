import React from 'react';
import './UserDropdown.css';


const UserDropdown = (props) => {
    // This function can receive the following parameters, if any
    // props.userName
    // props.avatarUrl

    if(props.userName) {  // There is a user logged in
        return(
            <div className="user-dropdown">
                <div className="ui icon top right pointing dropdown">
                    <img className="ui avatar image" src={props.avatarUrl}/>
                    <span>{props.userName}</span>
                    <div className="ui menu">
                        <div className="ui item">Conta</div>
                        <div className="ui item">Sair</div>
                    </div>
                </div>
            </div>
        );
    }
    else {                // No user logged in
        return(
            <div className="user-dropdown">
                <div className="ui simple dropdown button">
                    <i className="ui user icon"></i>
                    <i className="ui dropdown icon"></i>
                    <div className="menu">
                        <div className="item">Cadastro</div>
                        <div className="item">Entrar</div>
                    </div>
                </div>
            </div>
        );
    }
}


export default  UserDropdown;
