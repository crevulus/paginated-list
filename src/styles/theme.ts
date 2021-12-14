export const theme = {
  lightGrey: "#999",
  magenta: "#E23D8E",
  yellow: "#F9C438",
  blue: "#219DD7",
  lowColor: "ED6A5A",
  highColor: "629677",
  fontSizeSmall: "1.4rem",
  fontSizeLarge: "2rem",
};

export const calcColorBoundary = (
  value: number,
  midThreshhold: number,
  highThreshhold: number
) => {
  if (value > highThreshhold) {
    return theme.blue;
  } else if (value < highThreshhold && value > midThreshhold) {
    return theme.yellow;
  } else {
    return theme.magenta;
  }
};
