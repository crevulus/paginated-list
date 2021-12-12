import WidgetContainer from "./components/WidgetContainer/WidgetContainer";
import GlobalStyle from "./styles/globalStyles";

// NOTE: add Container for widget to keep App clean for Auth, Routing etc
// NOTE: would usually follow atomic structure, but not any resuable atoms in this widget.
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <WidgetContainer />
    </div>
  );
}

export default App;
