import React from 'react'

import Login from './pages/Login'
import Signup from './pages/Signup'
import Room from './pages/Room'
import { AuthProvider } from "./AuthService";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

const App = () => {
    return (
        // 実行順の確かめ。
        console.log("App# return"),
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path='/' component={Room} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App
