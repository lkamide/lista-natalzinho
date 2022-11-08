import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Theme } from "carbon-components-react";
import "./App.scss";
import "./components/style.css";


import HeaderComponent from "./components/header";
import HomeComponent from "./components/home";
import ListComponent from "./components/lista";
function App() {
  return (
    <Theme theme="g90">
      <div className="App content">
        <section className="theme-section">
          <HeaderComponent />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeComponent />}/>
              <Route path="/lista" element={<ListComponent />}/>
            </Routes>
          </BrowserRouter>
        </section>
      </div>
    </Theme>
  );
}

export default App;
