import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .App {
    height: 100vh;
    text-align: center;
    padding: 0 1rem;
    background-color: #F7F7F8;
  }
`;

// NOTE: usually would put this in atoms folder but seemed like overkill for just one atom
// NOTE: would normll use a package for a more satisfying darkening effect, as well as other animations
export const Button = styled.button<{ $bgColor?: string }>`
  background-color: ${(props) => props.$bgColor ?? props.theme.magenta};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    filter: brightness(110%);
  }
  &:disabled {
    background-color: ${(props) => props.theme.lightGrey};
    cursor: not-allowed;
    filter: none;
  }
`;

export default GlobalStyle;
