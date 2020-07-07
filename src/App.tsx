import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";

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
					<Route path="/about">
						<About />
					</Route>
					<Route path="/login">
						<Users />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function About() {
	return <h2>About</h2>;
}

function Users() {
	return <h2>Users</h2>;
}

// import React from "react";
// import logo from "./tenor.gif";
// import "./App.css";

// function App() {
// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p>
// 					Edit <code>src/App.tsx</code> and save to reload.
// 				</p>
// 				<button
// 					className="App-link"
// 					onClick={async () => {
// 						await fetch("http://165.22.118.168:8080/random/621035571057524737");
// 					}}
// 				>
// 					Random MarketPlace
// 				</button>
// 			</header>
// 		</div>
// 	);
// }
