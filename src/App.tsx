import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <div className="logo-container">
                        <h1>
                            <span>Weird</span>
                            <span>Champ</span>
                        </h1>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <h2>About</h2>
                    </Route>
                    <Route path="/login">
                        <h2>Login</h2>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
