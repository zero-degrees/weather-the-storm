import {Link, useLocation} from 'react-router-dom';

import Search from 'components/Search';
import NavigationLink from 'components/Navigation/NavigationLink';

const Navigation = ({zip, searchCallback}) => {
    const location = useLocation();

    return (
        <div className="row mb-2">
            <div className="col-sm-12">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">Weather</Link>
                        <ul className={`navbar-nav me-auto ${location.pathname === '/' ? 'visually-hidden' : ''}`}>
                            <NavigationLink href="/current">Now</NavigationLink>
                            <NavigationLink href="/fiveday">5 Days</NavigationLink>
                        </ul>
                        <div className="d-flex">
                            <Search callback={searchCallback} />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navigation;