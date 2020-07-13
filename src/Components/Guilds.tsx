import React, { useState, useEffect } from "react";

interface Guild {
  id: number;
  name: string;
  members: number[];
  iconURL: string;
}

export default function Guilds() {
  const [guilds, setGuilds] = useState<Guild[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchGuilds = async () => {
      const json: Response = await fetch(
        `https://www.api.weirdchamp.wtf/api/bot/guilds`
      );
      const data: any = await json.json();
      const cachedGuilds: Guild[] = data.cache;
      setGuilds(cachedGuilds);
    };

    fetchGuilds();
  }, []);

  if (guilds.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(guilds);
  return (
    <div>
      <ul className="App-header">
        {guilds?.map((guild) => {
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
