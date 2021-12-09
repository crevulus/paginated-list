import { createContext } from "react";
import { ChannelType } from "./types";

type GlobalContextType = {
  data: ChannelType[];
  dataLength: number;
} | null;

const GlobalContext = createContext<GlobalContextType>(null);

export default GlobalContext;
