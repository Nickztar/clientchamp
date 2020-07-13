import React, { useState } from "react";
import logo from "../tenor.gif";
import "../App.css";

export default function Home() {
	const [channel, setChannel] = useState<string>("621035571057524737");
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<input
					value={channel}
					onChange={(val) => setChannel(val.target.value)}
				/>
				<button
					className="App-link"
					onClick={async () => {
						await fetch(`https://www.api.weirdchamp.wtf/api/random/${channel}`);
					}}
				>
					Random {channel}
				</button>
			</header>
		</div>
	);
}
