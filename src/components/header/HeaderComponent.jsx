import React from "react";
import './HeaderComponent.scss';
import { Link } from "react-router-dom";

const HeaderComponent = () => {

    return (<React.Fragment>
        <div className="HeaderComponent">
            <nav class="navbar is-transparent">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                    </a>
                </div>

                <div id="navbarExampleTransparentExample">
                    <div class="navbar-start">
                        <Link class="navbar-item" to="/">
                            Page 1
                        </Link>
                        <Link class="navbar-item" to="/page-two">
                            Page 2
                        </Link>
                        <Link class="navbar-item" to="/page-three">
                            Page 3
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    </React.Fragment>);
}

export default HeaderComponent;