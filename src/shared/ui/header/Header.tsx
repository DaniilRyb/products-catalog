import React from "react";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink to="/" className="nav-link text-uppercase">Shop products</NavLink>

                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                    >
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Главная</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">О нас</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Контакты</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}