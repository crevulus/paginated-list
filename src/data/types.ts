export type ChannelType = {
  key: string;
  label: string;
  country: string;
  trustScore: number;
  recentRevenue: number;
};

// NOTE: I love enums.
export enum FilterCountryOptions {
  One = "NL",
  Two = "DE",
  Three = "FR",
}
