import React, { useEffect, useState } from "react";
import GlobalContext from "../../data/GlobalContext";
import { ChannelType } from "../../data/types";
import { Filters } from "../Filters/Filters";
import { Pagination } from "../Pagination/Pagination";

const WidgetContainer = () => {
  const [data, setData] = useState<ChannelType[]>([]);
  const [results, setResults] = useState<ChannelType[]>([]);
  const [dataLength, setDataLength] = useState(0);
  const [resultsLength, setResultsLength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchChannels() {
      setIsLoading(true);
      const channelData = await fetch("channels.json")
        .then((response) => response.json())
        .catch((error) => setError(error.message));
      if (channelData) {
        setDataLength(channelData.channelList.length);
        setData(channelData.channelList);
        setIsLoading(false);
      } else {
        setError("Something went wrong, please try again.");
        setIsLoading(false);
      }
    }
    fetchChannels();
  }, []);

  const { Provider } = GlobalContext;

  return (
    <Provider
      value={{
        data,
        dataLength,
        results,
        setResults,
        resultsLength,
        setResultsLength,
      }}
    >
      <Filters />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Pagination
          channels={resultsLength === 0 ? data : results}
          channelsLimit={10}
          pageLimit={5}
        />
      )}
      {error && <p>{error}</p>}
    </Provider>
  );
};

export default WidgetContainer;
