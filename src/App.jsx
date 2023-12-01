import "./styles/app.scss";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage";
import MyWork from "./components/MyWork";
import PortfolioItem from "./components/PortfolioItem";
import portfolioItems from "./js/portfolioData";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/portfolio"
          element={<MyWork portfolioItems={portfolioItems} />}
        />
        <Route
          path="/portfolio/:id"
          element={<PortfolioItem portfolioItems={portfolioItems} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
