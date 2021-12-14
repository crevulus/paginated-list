import React, { useEffect, useState } from "react";
import GlobalContext from "../../data/GlobalContext";
import { ChannelType } from "../../data/types";
import { Filters } from "../Filters/Filters";
import { Pagination } from "../Pagination/Pagination";
import { StyledWidgetContainer } from "./WidgetContainer.styles";

const WidgetContainer = () => {
  const [data, setData] = useState<ChannelType[]>([]);
  const [results, setResults] = useState<ChannelType[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
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
        // NOTE: Added trust score because that's what I'd wanna see, could also do revenue in last x months.
        const dataWithScores = channelData.channelList.map(
          (item: ChannelType) => {
            return {
              ...item,
              trustScore: Math.round(Math.random() * 100),
              recentRevenue: Math.round(Math.random() * 10000 * Math.random()),
            };
          }
        );
        setDataLength(dataWithScores.length);
        setData(dataWithScores);
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
        selected,
        setSelected,
      }}
    >
      <StyledWidgetContainer>
        <Filters />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Pagination
            channels={resultsLength === 0 ? data : results}
            channelsLimit={15}
          />
        )}
        {error && <p>{error}</p>}
      </StyledWidgetContainer>
    </Provider>
  );
};

export default WidgetContainer;
