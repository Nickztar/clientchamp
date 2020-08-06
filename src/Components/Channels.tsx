import React, { useContext } from "react";
import useFetch from "../Hooks/useFetch";
import { Channel } from "../TS/interfaces";
import { ChannelType } from "../TS/enums";
import { channelContext } from "../Pages/Home";

export default function Channels({ snowflake }: { snowflake: number }) {
    const state = useContext(channelContext);
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
                            onClick={() => {
                                return state.changeChannel(
                                    channel.id.toString()
                                );
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
