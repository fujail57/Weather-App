import "./App.css";

import WhetherMain from "./components/WeatherMain";
import WeatherProvider from "./context/Weather";

function App() {
  return (
    <div style={{ color: "black" }}>
      <WeatherProvider>
        <WhetherMain />
      </WeatherProvider>
    </div>
  );
}

export default App;
