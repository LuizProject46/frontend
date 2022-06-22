import React from 'react'
import {Route,BrowserRouter as Router} from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import Home from './views/Home'
import Login from './views/Login'
import Signup from './views/Singup/Signup'



export default function Routes(){
    return(
        
        <Router>
           
            <Route path='/login' exact={true} component={Login} />
            <Route path='/signup' exact={true} component={Signup} />
            <Route path='/app' exact={true} component={Home} />
        
        </Router>
           
        
    )
}