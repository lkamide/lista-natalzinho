import './App.scss';
import HeaderComponent from "./components/header"
import HomeComponent from "./components/home"
import './components/style.css'

import { Theme } from 'carbon-components-react';

function App() {
  return (
    <Theme theme="g90">
      <div className="App content">
        <section className="theme-section">
          <HeaderComponent />
          <HomeComponent />
        </section>
      </div>
    </Theme>
  );
}

export default App;
