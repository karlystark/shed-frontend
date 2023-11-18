
import './App.css';
import Nav from './Nav.js';
import RoutesList from './RoutesList.js';
import { BrowserRouter } from "react-router-dom";


function App() {
 const resources = [
  {
    id: 1,
    user: "karlystark",
    title: "hand saw",
    description: "7 inch corona foldable hand saw w safety latch.",
    image: "corona.jpg",
    quantity: 1
  },
  {
    id: 2,
    user: "karlystark",
    title: "focusrite scarlett 2i2 interface",
    description: "a music production interface with two inputs, for all your recording needs.",
    image: "scarlett.jpeg",
    quantity: 1
  },
  {
    id: 3,
    user: "karlystark",
    title: "spice cake slices",
    description: "I made a cake! please eat some! it's spice cake with mascarpone whipped cream frosting and raspberry jam.",
    image: "cake.jpeg",
    quantity: 3

  }
 ]



  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <RoutesList resources={resources}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
