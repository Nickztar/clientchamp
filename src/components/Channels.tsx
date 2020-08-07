import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { Channel } from "../utils/interfaces";
import { ChannelType } from "../utils/enums";
import { channelContext } from "../utils/context";

export default function Channels({ snowflake }: { snowflake: number }) {
    const { changeChannel } = useContext(channelContext);

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
                if (channel.type === ChannelType.Voice) {
                    return (
                        <p
                            key={channel.id}
                            onClick={() => {
                                return changeChannel(channel.id.toString());
                            }}
                            className="channel"
                        >
                            {channel.name}
                        </p>
                    );
                } else {
                    return (
                        <p
                            key={channel.id}
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
