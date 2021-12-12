import WidgetContainer from "./components/WidgetContainer/WidgetContainer";
import GlobalStyle from "./styles/globalStyles";

// NOTE: add Container for widget to keep App clean for Auth, Routing etc
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <WidgetContainer />
    </div>
  );
}

export default App;
