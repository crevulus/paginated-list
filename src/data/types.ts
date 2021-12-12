export type ChannelType = {
  key: string;
  label: string;
  country: string;
};

// NOTE: I love enums.
export enum FilterCountryOptions {
  One = "NL",
  Two = "DE",
  Three = "FR",
}
