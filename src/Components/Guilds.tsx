import React, { useState, useEffect } from "react";
import useRequest from "../Hooks/UseRequest";
interface Guild {
  id: number;
  name: string;
  members: number[];
  iconURL: string;
}

export default function Guilds() {
  const { data, loading, error } = useRequest(
    `https://www.api.weirdchamp.wtf/api/bot/guilds`
  );

  if (data.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <div>
      <ul className="App-header">
        {data?.map((guild) => {
          return (
            <li key={guild.id}>
              <p>{guild.name}</p>
              <img src={guild.iconURL} alt={guild.name + " icon"} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
