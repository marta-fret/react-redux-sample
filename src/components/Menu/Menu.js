import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.less';

const menuItems = [
  { name: 'Products', NavLinkTo: '/' },
  { name: 'Shopping cart', NavLinkTo: '/cart', noExact: true },
];

const Menu = () => (
  <div className="menu">
    {menuItems.map((item, index) => (
      <NavLink
        key={index}
        to={item.NavLinkTo}
        exact={!item.noExact}
        className="menu__item"
        activeClassName="menu__item--active"
      >
        {item.name}
      </NavLink>
    ))}
  </div>
);

export default Menu;
