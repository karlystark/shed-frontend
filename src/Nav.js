import './Nav.css';
import { ReactComponent as Logo } from './shed.svg';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar bg-body-body" role="navigation">
      <div className="container-fluid d-flex">
        <div className="Nav-title navbar-brand">
          <Link to="/"><Logo className="Nav-logo" /></Link>
          <p> shed </p>
        </div>
        <div className="Nav-links">
          <Link to="/about" className="nav-link">about</Link>
          <Link to="/users/karlystark" className="nav-link">my shed</Link>
          <Link to="/resources" className="nav-link">resource list</Link>
          <Link to="/signup" className="nav-link">signup</Link>
          {/* <Link to="/friends" className="nav-link">friends</Link> */}
          <Link to="/logout" className="nav-link">logout</Link>
        </div>
      </div>
      {/* {isLoggedIn ?
     <div className="Nav-links">
    <Link to="">about</Link>
    <Link to="">resource list</Link>
    <Link to="">friends</Link>
    </div>
    :
    <div className="Nav-links">
    <Link to="/about"> about </Link>
    <Link to="/signup"> sign up </Link>
    <Link to="/login"> log in </Link>
    </div>
    } */}
    </nav>
  );

}

export default Nav;