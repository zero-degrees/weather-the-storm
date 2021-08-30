import {NavLink} from 'react-router-dom';

const NavigationLink = props => {
    return (
        <li className="nav-item">
            <NavLink to={props.href} className="nav-link" activeClassName="active" exact>{props.children}</NavLink>
        </li>
    );
};

export default NavigationLink;