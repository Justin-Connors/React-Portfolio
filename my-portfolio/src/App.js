import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// const App = () => <PortfolioContainer />;

function App() {
  return (
    <div>
      <div className="mb-4">
        <NavBar />
      </div>
      <div>
        <PortfolioContainer />
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
}

export default App;
