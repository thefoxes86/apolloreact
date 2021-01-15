import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink activeStyle={{'backgroundColor': 'red'}} exact to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/page">Pagina</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/lists">Lists</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}