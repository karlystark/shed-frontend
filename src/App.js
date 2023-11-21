
import './App.css';
import Nav from './Nav.js';
import RoutesList from './RoutesList.js';
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const resources = [
    {
      id: 1,
      user: "karlystark",
      user_img: "ksnpr.JPG",
      title: "hand saw",
      description: "7 inch corona foldable hand saw w safety latch.",
      image: "corona.jpg",
      alt: "a foldable handsaw against a white background",
      quantity: 1
    },
    {
      id: 2,
      user: "karlystark",
      user_img: "ksnpr.JPG",
      title: "focusrite scarlett 2i2 interface",
      description: "a music production interface with two inputs, for all your recording needs.",
      image: "scarlett.jpeg",
      alt: "a scarlett interface",
      quantity: 1
    },
    {
      id: 3,
      user: "karlystark",
      user_img: "ksnpr.jpg",
      title: "spice cake slices",
      description: "I made a cake! please eat some! it's spice cake with mascarpone whipped cream frosting and raspberry jam.",
      image: "cake.jpeg",
      alt: "a slice of spice cake on a plate",
      quantity: 3
    },
    {
      id: 4,
      user: "karlystark",
      user_img: "ksnpr.jpg",
      title: "pet care",
      description: "I can feed your cat or hang with your dog any time you're away! my job is basically cats!",
      image: "darla.jpeg",
      alt: "darla licks karly's face as they sit on a porch",
      quantity: 1
    },
    {
      id: 5,
      user: "karlystark",
      user_img: "ksnpr.jpg",
      title: "REI Passage 2 tent",
      description: "A two-person REI Passage 2 tent.",
      image: "passage2.jpeg",
      alt: "a passage 2 tent sits in a field",
      quantity: 1
    },
    {
      id: 6,
      user: "karlystark",
      user_img: "ksnpr.jpg",
      title: "wooden spoons",
      description: "I whittle so many of these, have some!",
      image: "spoons.jpeg",
      alt: "a collection of hand carved wooden spoons on a table",
      quantity: 10
    },

  ];

  function handleAddResource(data) {
    console.log("wow added!");
  }

  function handleLogin(data) {
    console.log("wow logged in!");
  }

  function handleAddUser(data) {
    console.log("welcome!");
  }

  function fetchUser(data) {
    console.log("here is where i call the API to get the logged in user's info - probably in a useContext");
  }

  function fetchResources(data) {
    console.log("likewise, will also fetch all the resources within the user's network on load");
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList resources={resources}
          handleAddResource={handleAddResource}
          handleAddUser={handleAddUser}
          isLoggedIn={isLoggedIn}
          handleLogin={handleLogin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
