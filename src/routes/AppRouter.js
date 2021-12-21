import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import Cart from './../components/Cart/Cart';
import Products from './../components/Products/Products';

const AppRouter = () => (
  <div className="app-container">
    <BrowserRouter>
      <React.Fragment>
        <Menu />
        <Switch>
          <Route path="/cart" component={Cart} exact={true} />
          <Route component={Products} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  </div>
);

export default AppRouter;
