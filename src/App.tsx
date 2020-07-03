import React from "react";
import logo from "./tenor.gif";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<button
					className="App-link"
					onClick={async () => {
						await fetch("http://165.22.118.168:8080/random/621035571057524737");
					}}
				>
					Random MarketPlace
				</button>
			</header>
		</div>
	);
}

export default App;
