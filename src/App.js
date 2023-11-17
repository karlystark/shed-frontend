
import './App.css';
import Nav from './Nav.js';
import RoutesList from './RoutesList.js';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
