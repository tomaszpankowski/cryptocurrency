import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Dashboard from "./views/dashboard";
import Error from "./views/error";
import History from "./views/history";
import Home from "./views/home";
import Login from "./views/login";
import PrivacyPolicy from "./views/privacy";
import Register from "./views/register";
import Stats from "./views/stats";
import Trade from "./views/trade";

const appCfg = {
    routes:[
        {navItem:true, exact:true, path:"/",name:"Home",view:<Home/>},
        {navItem:true, exact:true, path:"/stats",name:"Stats",view:<Stats/>},
        {navItem:true, exact:true, path:"/dashboard",name:"Dashboard",view:<Dashboard/>},
        {navItem:true, exact:true, path:"/trade",name:"Trade",view:<Trade/>},
        {navItem:true, exact:true, path:"/history",name:"History",view:<History/>},        
        {navItem:true, exact:true, path:"/contact",name:"Contact",view:<Contact/>},
        {navItem:true, exact:true, path:"/login",name:<span className="fa fa-user-circle"></span>,view:<Login backLink={{name:" Register now!",href:"/register"}}/>},        
        {navItem:false, exact:true, path:"/comingsoon",name:"Comingsoon",view:<Comingsoon/>},
        {navItem:false, exact:true, path:"/register",name:"Register",view:<Register backLink={{name:" Login now!",href:"/login"}}/>},
        {navItem:false, exact:false, path:"/error",name:"Error",view:<Error backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:true, path:"/privacy",name:"Privacy",view: <PrivacyPolicy backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:false, path:"*",name:"any",view:<Error backLink={{name:"back to Home",href:"/"}}/>}
    ]
};

const APP_LINKS = {
    messages: "",
    users: ""
};

const MESSAGES = {
    comingSoon:{
        title:"Starting soon",
        text:"Hi, we are not ready yet, however we are starting soon. Please visit us again in a while."
    },    
    error404:{        
        title:"Page not found!",
        text:""
    }
};

export {
    appCfg,
    APP_LINKS,
    MESSAGES
}
