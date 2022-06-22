import React from 'react'
import { Redirect, Route } from 'react-router-dom'


export default function PrivateRoutes({path,exact,component}){

    return localStorage.getItem('logged') == null ? <Redirect to='/login'/> : <Route path={path} exact={exact} component={component}/>

}