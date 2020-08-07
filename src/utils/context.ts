import { createContext } from "react";

export const channelContext = createContext({
    channel: "",
    changeChannel: (channel: string) => {},
});
