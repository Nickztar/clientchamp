import React from "react";
import useFetch from "../Hooks/useFetch";

interface Guild {
    id: number;
    name: string;
    members: number[];
    channels: string[];
    iconURL: string;
}

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
                            {guild.channels.map((channel) => {
                                return (
                                    <p
                                        onClick={() => {
                                            return setChannel(channel);
                                        }}
                                        className="channel"
                                    >
                                        {channel}
                                    </p>
                                );
                            })}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
