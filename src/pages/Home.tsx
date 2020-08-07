import React, { useState, createContext } from "react";
import logo from "../tenor.gif";
import "../App.css";
import Guilds from "../components/Guilds";
import Files from "../components/Files";

export const channelContext = createContext({
    channel: "",
    changeChannel: (channel: string) => {},
});

export default function Home() {
    const [channel, setChannel] = useState<string>("621035571057524737"); //This should be global state, mobx vs redux?

    const state = {
        channel: channel,
        changeChannel: (channel: string) => {
            setChannel(channel);
        },
    };

    return (
        <channelContext.Provider value={state}>
            <div className="home-layout">
                <Files />
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
                                    `https://www.api.weirdchamp.wtf/api/bot/random/${channel}`
                                );
                            }}
                        >
                            Random {channel}
                        </button>
                    </header>
                </div>
                <Guilds />
            </div>
        </channelContext.Provider>
    );
}
