import { Link } from "react-router-dom";


export const NavBar = ()=>{
  return (
    <div className="nav-bar">
      <Link to={'/'}>Home</Link>
      <Link to={'/topics'}>Topics</Link>
    </div>
  )
}