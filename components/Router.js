import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";
import API from './API'
import Users from './Users';

    const RouterLink = () => {
    return(
            <Router>
                <div className="container mt-5">
                    <div className="btn-group">
                        <Link to="/base-de-datos" className="btn btn-dark">Base de datos</Link>
                    </div>
                    <div className="btn-group">
                        <Link to="/servidor" className="btn btn-dark ml-2">Servidor</Link>
                    </div>
                    <div className="btn-group">
                        <Link to="/API" className="btn btn-dark ml-2">API</Link>
                    </div>
                    <div>
                        <hr/>
                        <Switch>
                            <Router path="/API/:id" exact>
                                <Users />
                            </Router>
                            <Router path="/base-de-datos">
                                Desde aquí tienes acceso a toda la base de datos
                            </Router>
                            <Route path="/servidor">
                                Aquí se encuentra el servidor y todas las rutas HTTPS
                            </Route>
                            <Route path="/API">
                                Puedes consumir la API perfectamente desde esta página:
                                <API/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
    );
}

export default RouterLink