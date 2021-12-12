// NOTE: Context technically wasn't needed here, but makes it easier for me.
import { createContext } from "react";
import { ChannelType } from "./types";

type GlobalContextType = {
  data: ChannelType[];
  dataLength: number;
};

const initialState = {
  data: [],
  dataLength: 0,
};

// NOTE: Would split contexts in a real world application
const GlobalContext = createContext<GlobalContextType>(initialState);

export default GlobalContext;
