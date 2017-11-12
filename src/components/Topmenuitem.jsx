import React from 'react';

import {NavLink} from 'react-router-dom';

function Topmenuitem(props) {
    return (
        <NavLink exact to={props.to} activeClassName='top-menu-active' className="topmenu__link">
            {props.children}
        </NavLink>
    );
}

export default Topmenuitem;