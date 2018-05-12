import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.less';
import { connect } from 'react-redux';

const AmountInfo = props => <span>({props.totalAmount})</span>;

const mapStateToProps = state => ({
  totalAmount: state.cart.totalAmount,
});

const ConnectedAmountInfo = connect(mapStateToProps)(AmountInfo);

const menuItems = [
  { name: 'Products', NavLinkTo: '/' },
  {
    name: 'Shopping cart',
    NavLinkTo: '/cart',
    noExact: true,
    extra: <ConnectedAmountInfo />,
  },
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
        {item.name} {item.extra}
      </NavLink>
    ))}
  </div>
);

export default Menu;
