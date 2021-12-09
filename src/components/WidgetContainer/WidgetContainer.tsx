import React, { useEffect, useState } from "react";
import GlobalContext from "../../data/GlobalContext";
import { ChannelType } from "../../data/types";
import Checkbox from "../Checkbox/Checkbox";

const WidgetContainer = () => {
  const [data, setData] = useState<ChannelType[]>([]);
  const [dataLength, setDataLength] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchChannels() {
      const channelData = await fetch("channels.json")
        .then((response) => response.json())
        .catch((error) => setError(error.message));
      if (channelData) {
        setDataLength(channelData.channelList.length);
        setData(channelData.channelList);
      }
    }
    fetchChannels();
  }, []);

  const { Provider } = GlobalContext;

  return (
    <Provider value={{ data, dataLength }}>
      <ul>
        {data &&
          data.map((channel) => (
            <li key={channel.key}>
              <Checkbox label={channel.label} id={channel.key} />
              <p>{channel.country}</p>
            </li>
          ))}
      </ul>
      {error && <p>{error}</p>}
    </Provider>
  );
};

export default WidgetContainer;
