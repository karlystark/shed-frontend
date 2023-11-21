import UserCard from "./UserCard.js";
import "./Home.css";

function Home({ resources, isLoggedIn }) {

  return (
    <div className="Home">
      {isLoggedIn?
      <h1>Welcome back {resources.user}!</h1>
      :
      <div className="Home-new">
      <h1>Welcome to the Shed!</h1>
      <p>Login or create an account to get started.</p>
      </div>}
      {/* <UserCard resources={resources} /> */}
    </div>
  );
}

export default Home;