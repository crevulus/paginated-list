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
    text-align: center;
    padding: 1rem;
  }
`;

// NOTE: usually would put this in atoms folder but seemed like overkill for just one atom
export const Button = styled.button`
  background-color: ${(props) => props.theme.magenta};
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  color: white;
`;

export default GlobalStyle;
