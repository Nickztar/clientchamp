import React from "react";
import useFetch from "../Hooks/useFetch";
import { Channel } from "../Interfaces/types";

export default function Channels({
    setChannel,
    snowflake,
}: {
    setChannel: React.Dispatch<React.SetStateAction<string>>;
    snowflake: number;
}) {
    const res = useFetch(
        "https://api.weirdchamp.wtf/api/bot/channels/" + snowflake
    );
    if (res.error) {
        return <div>Failed</div>;
    }
    if (!res.response) {
        return <div>Loading...</div>;
    }

    const Channels = res.response as Array<Channel>;
    return (
        <div>
            {Channels.map((channel) => {
                if (channel.type === "voice") {
                    return (
                        <p
                            onClick={() => {
                                return setChannel(channel.id.toString());
                            }}
                            className="channel"
                        >
                            {channel.name}
                        </p>
                    );
                } else {
                    return (
                        <p
                            className="channel"
                            style={{ color: "grey", cursor: "default" }}
                        >
                            {channel.name}
                        </p>
                    );
                }
            })}
        </div>
    );
}
