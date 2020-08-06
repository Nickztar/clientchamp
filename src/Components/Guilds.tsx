import React from "react";
import Channels from "./Channels";
import useFetch from "../Hooks/useFetch";
import { Guild } from "../TS/interfaces";
import { channelContext } from "../Pages/Home";

export default function Guilds() {
    const res = useFetch(`https://api.weirdchamp.wtf/api/bot/guilds`);
    if (res.error) {
        return <div>Failed</div>;
    }
    if (!res.response) {
        return <div>Loading...</div>;
    }

    const Guilds = res.response as Array<Guild>;
    return (
        <div>
            <ul>
                {Guilds.map((guild) => {
                    return (
                        <li key={guild.id}>
                            <p>{guild.name}</p>
                            <img
                                src={guild.iconURL}
                                alt={guild.name + " icon"}
                            />
                            <channelContext.Consumer>
                                {(context) => (
                                    <Channels
                                        changeChannel={context.changeChannel}
                                        snowflake={guild.id}
                                    />
                                )}
                            </channelContext.Consumer>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
