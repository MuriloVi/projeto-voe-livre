import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";


//containersImport
import Homepage from './containers/Homepage/Homepage'
import Login from './containers/Login/Login'
import Booking from './containers/Booking/Booking';



const Routes = () => (

    <BrowserRouter >
        < Switch >
        <Route exact path="/" component={Homepage}/>     
        <Route exact path="/login" component={Login}/>
        <Route exact path="/booking" component={Booking}/>
        </Switch>
    </BrowserRouter>

);

export default Routes;