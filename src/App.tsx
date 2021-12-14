import { ThemeProvider } from "styled-components";
import WidgetContainer from "./components/WidgetContainer/WidgetContainer";
import GlobalStyle from "./styles/globalStyles";
import { theme } from "./styles/theme";

// IMPROVE: Remove all selected
// NOTE: add Container for widget to keep App clean for Auth, Routing etc
// NOTE: would usually follow atomic structure, but not any resuable atoms in this widget.
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <WidgetContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
