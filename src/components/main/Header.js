import {Fragment} from "react";
import {Link} from "react-router-dom";

function Header(){
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <Link className="navbar-brand" to="#page-top"><img src="assets/img/navbar-logo.svg" alt="..."/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="#services">CD</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#portfolio">LP</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#team">Team</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">Welcome To Our Studio!</div>
                    <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                    <Link className="btn btn-primary btn-xl text-uppercase" to="#services">Tell Me More</Link>
                </div>
            </header>
        </Fragment>
    )
}

export default Header
