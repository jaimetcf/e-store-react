import { createContext } from 'react';


export const AppContext = createContext({
    appName: '',
    appLogoUrl: '',
    backendDomain: '',    
    userId: '',
    userName: '',
    userAvatar: '',
    token: '',
    loginFun: () => {},
    logoutFun: () => {}
});
  