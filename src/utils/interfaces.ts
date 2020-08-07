import { ChannelType } from "./enums";

export interface Guild {
    id: number;
    name: string;
    members: number[];
    channels: string[];
    iconURL: string;
}

export interface Channel {
    type: ChannelType;
    deleted: boolean;
    id: number;
    name: string;
    rawPosition: number;
    parentId: string;
    createdTimestamp: number;
}
