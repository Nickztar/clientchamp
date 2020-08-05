import React from "react";
import Channels from "./Channels";
import useFetch from "../Hooks/useFetch";
import { Guild } from "../Interfaces/types";

export default function Guilds({
    setChannel,
}: {
    setChannel: React.Dispatch<React.SetStateAction<string>>;
}) {
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
                            <Channels
                                setChannel={setChannel}
                                snowflake={guild.id}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
