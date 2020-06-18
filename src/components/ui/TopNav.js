import React, { useContext } from 'react';

import { AppContext }  from '../../AppContext';
import AppLogo         from './AppLogo';
import UserDropdown    from '../ui/UserDropdown';
import BagIcon         from './BagIcon';
import './TopNav.css';


const TopNav = (props) => {

  // Needed for recovering domain name and user id
  const appContext = useContext(AppContext);

  return (
    <React.Fragment>
      <div className="top-nav" style={{backgroundColor:props.background}}>
        <AppLogo url={props.logoUrl}/>    
        <div className="top-nav-title">
          {props.appName}
        </div>
        <UserDropdown userName={appContext.userName.split(' ')[0]} // Shows just the first name
                      avatarUrl={appContext.userAvatar}>
        </UserDropdown>
        <BagIcon />
      </div>
    </React.Fragment>
  );
};


export default TopNav;
