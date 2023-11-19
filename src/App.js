
import './App.css';
import Nav from './Nav.js';
import RoutesList from './RoutesList.js';
import { BrowserRouter } from "react-router-dom";


function App() {
 const resources = [
  {
    id: 1,
    user: "karlystark",
    user_img: "ksnpr.JPG",
    title: "hand saw",
    description: "7 inch corona foldable hand saw w safety latch.",
    image: "corona.jpg",
    quantity: 1
  },
  {
    id: 2,
    user: "karlystark",
    user_img: "ksnpr.JPG",
    title: "focusrite scarlett 2i2 interface",
    description: "a music production interface with two inputs, for all your recording needs.",
    image: "scarlett.jpeg",
    quantity: 1
  },
  {
    id: 3,
    user: "karlystark",
    user_img: "ksnpr.jpg",
    title: "spice cake slices",
    description: "I made a cake! please eat some! it's spice cake with mascarpone whipped cream frosting and raspberry jam.",
    image: "cake.jpeg",
    quantity: 3
  },
  {
    id: 4,
    user: "karlystark",
    user_img: "ksnpr.jpg",
    title: "pet care",
    description: "I can feed your cat or hang with your dog any time you're away! my job is basically cats!",
    image: "darla.jpeg",
    quantity: 1
  },
  {
    id: 5,
    user: "karlystark",
    user_img: "ksnpr.jpg",
    title: "REI Passage 2 tent",
    description: "A two-person REI Passage 2 tent.",
    image: "passage2.jpeg",
    quantity: 1
  },
  {
    id: 6,
    user: "karlystark",
    user_img: "ksnpr.jpg",
    title: "wooden spoons",
    description: "I whittle so many of these, have some!",
    image: "spoons.jpeg",
    quantity: 10
  },

 ]

 function handleAddResource(data){
  console.log("wow added!");
 }


  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <RoutesList resources={resources} handleAddResource={handleAddResource}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
