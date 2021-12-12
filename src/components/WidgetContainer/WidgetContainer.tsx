import React, { useEffect, useState } from "react";
import GlobalContext from "../../data/GlobalContext";
import { ChannelType } from "../../data/types";
import { Pagination } from "../Pagination/Pagination";

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
      <Pagination channels={data} channelsLimit={15} pageLimit={5} />
      {error && <p>{error}</p>}
    </Provider>
  );
};

export default WidgetContainer;
