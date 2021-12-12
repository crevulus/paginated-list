// NOTE: Context technically wasn't needed here, but makes it easier for me.
import { createContext, Dispatch, SetStateAction } from "react";
import { ChannelType } from "./types";

type GlobalContextType = {
  data: ChannelType[];
  dataLength: number;
  results: ChannelType[];
  setResults: Dispatch<SetStateAction<ChannelType[]>>;
  resultsLength: number;
  setResultsLength: Dispatch<SetStateAction<number>>;
};

// NOTE: Would split contexts in a real world application
const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export default GlobalContext;
