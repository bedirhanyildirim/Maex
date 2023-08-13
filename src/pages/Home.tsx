import {Link} from "react-router-dom";
import {useEffect} from "react";

export default function Home() {

  return (
    <div>
      <Link to="/profile">Profile</Link>
      <div>Home Page, welcome!</div>
    </div>
  )
}