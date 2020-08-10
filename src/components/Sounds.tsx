import React, { useContext } from "react";
import useFetch from "../hooks/useFetch";
import { channelContext } from "../utils/context";
import { Routes } from "../utils/enums";
import Styled from "styled-components";

//Extract styled components to its own file.
const StyledUl = Styled.ul`
    display: flex;
    flex-direction: column;
`;

export default function Sounds() {
    const { channel } = useContext(channelContext);

    const res = useFetch(Routes.Files);

    if (res.error) {
        return <div>Failed</div>;
    }

    if (!res.response) {
        return <div>Loading...</div>;
    }

    const Files = res.response as Array<string>;

    return (
        <div>
            <StyledUl>
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
            </StyledUl>
        </div>
    );
}
