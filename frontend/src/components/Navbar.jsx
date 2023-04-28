import { Logo } from './Logo'
import { Link } from 'react-router-dom'


export function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <Logo></Logo>
                </Link>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <Link className="navbar-item" to="/">
                        Inicio
                    </Link>
                    <Link className="navbar-item" to="/about">
                        Acerca de
                    </Link>
                    <Link className="navbar-item" to="/chef">
                        Sobre el Chef
                    </Link>
                    <Link className="navbar-item" to="/team">
                        Nuestro Equipo
                    </Link>
                    <Link className="navbar-item" to="/opinions">
                        Opiniones
                    </Link>
                    <Link className="navbar-item" to="/jobopenings">
                        Vacantes
                    </Link>
                    <Link className="navbar-item" to="/menus">
                        Menus
                    </Link>
                </div>
            </div>
        </nav>
    )
}

