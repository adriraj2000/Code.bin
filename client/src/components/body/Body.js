import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import ActivationEmail from './auth/ActivationEmail';
import ForgotPass from '../body/auth/ForgotPassword'
import NotFound from '../utils/NotFound/NotFound'
import ResetPass from '../body/auth/ResetPassword'

import {useSelector} from 'react-redux'

function Body() {

    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth

    return (
        <section>
            <Switch>
                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />

                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />
                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />
            </Switch>
        </section>
    )
}

export default Body;