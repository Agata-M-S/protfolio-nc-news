import { Link } from "react-router-dom";
import { Topics } from "../pages/Topics";

export const NavBar = ()=>{
  return (
    <div className="nav-bar">
      <Link to={'/topics'}>Topics</Link>
    </div>
  )
}