import { createContext, Dispatch, SetStateAction } from "react";
import { ChannelType } from "./types";

type GlobalContextType = {
  data: ChannelType[];
  dataLength: number;
  results: ChannelType[];
  setResults: Dispatch<SetStateAction<ChannelType[]>>;
  resultsLength: number;
  setResultsLength: Dispatch<SetStateAction<number>>;
  selected: string[];
  setSelected: Dispatch<SetStateAction<string[]>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

// NOTE: Would split contexts in a real world application
const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export default GlobalContext;
