import React, { useState, createContext } from "react";
import logo from "../tenor.gif";
import "../App.css";
import Guilds from "../Components/Guilds";

export const channelContext = createContext({
    channel: "",
    changeChannel: (channel: string) => {},
});

export default function Home() {
    const [channel, setChannel] = useState<string>("621035571057524737"); //This should be global state, mobx vs redux?

    const initialContext = {
        channel: "621035571057524737",
        changeChannel: (channel: string) => {
            setChannel(channel);
        },
    };

    return (
        <div className="home-layout">
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Play a random sound at this channel:</p>
                    <input
                        value={channel}
                        onChange={(val) => setChannel(val.target.value)}
                    />
                    <button
                        className="App-link"
                        onClick={async () => {
                            await fetch(
                                `https://www.api.weirdchamp.wtf/api/random/${channel}`
                            );
                        }}
                    >
                        Random {channel}
                    </button>
                </header>
            </div>
            <channelContext.Provider value={initialContext}>
                <Guilds />
            </channelContext.Provider>
        </div>
    );
}
