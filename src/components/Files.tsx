import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { channelContext } from "../utils/context";

export default function Files() {
    const { channel } = useContext(channelContext);

    const res = useFetch("https://api.weirdchamp.wtf/api/bot/files/");

    if (res.error) {
        return <div>Failed</div>;
    }

    if (!res.response) {
        return <div>Loading...</div>;
    }

    const Files = res.response as Array<string>;

    return (
        <div>
            <ul style={{ display: "flex", flexDirection: "column" }}>
                {Files.map((file) => {
                    return (
                        <button
                            key={file}
                            onClick={async () => {
                                await fetch(
                                    `https://www.api.weirdchamp.wtf/api/bot/specific?id=${channel}&song=${file}`
                                );
                            }}
                        >
                            <p>{file}</p>
                        </button>
                    );
                })}
            </ul>
        </div>
    );
}
