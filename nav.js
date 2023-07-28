import { Link } from "react-router-dom";

 function Nav (props){
  return (
    <div className="nav">
      <nav>
        <button className="b1"><Link to="./login">LOGIN</Link></button>
        <button><Link to="./register">REGISTER</Link></button>
      </nav>
    </div>
  );
};

export default Nav;