import React from "react";
import useFetch from "../Hooks/useFetch";

interface Channel {
    type: string;
    deleted: boolean;
    id: number;
    name: string;
    rawPosition: number;
    parentId: string;
    createdTimestamp: number;
}

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
                        <p className="channel" style={{ color: "grey" }}>
                            {channel.name}
                        </p>
                    );
                }
            })}
        </div>
    );
}
