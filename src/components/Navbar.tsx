import '../styles/Navbar.scss';

import searchImage from '../assets/images/search.png';
import { useEffect } from 'react';

interface NavbarProperties {
    currentPage: 'home' | 'docs';
}

const Navbar = ({ currentPage }: NavbarProperties) => {
    useEffect(() => {
        if (currentPage) document.querySelector(`.navbar nav a.${currentPage}-nav`)?.classList.add('current-page');
    }, [currentPage]);

    return (
        <div className="navbar">
            <div className="left-group">
                <nav>
                    <a className="home-nav" href="/">
                        Home
                    </a>
                    <a className="docs-nav" href="/docs">
                        Documentation
                    </a>
                </nav>
            </div>

            <div className="right-group">
                <img className="search-icon" src={searchImage} alt="search icon" />
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    );
};

export default Navbar;
