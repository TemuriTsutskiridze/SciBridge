import ReactHelmet from "./components/ReactHelmet";
import GlobalStyles from "./Globals";
import HomePage from "./pages/HomePage";

import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <ReactHelmet />
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
