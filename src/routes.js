import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Contact from './pages/contact'

// parametro exact para só chamar essa rota se a URI digitada for exatamente apenas o endereço mais uma /
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/register" component={Contact} />
            <Route exact path="/" component={Main} />
        </Switch>
    </BrowserRouter>
);

export default Routes;