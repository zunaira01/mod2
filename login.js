
import Header from "./header";
import { useState } from "react";

const Login = () => {
  const { login } = useState("");
  const handleLogin = () => {
    login();
  };
  return (
    <div className="login">
      <Header/>
    <div className="container">
         <div className="grid">
            <h2> welcome to ZUPRO Social</h2>
            <p> we are happy to see you. We hope you will enjoy your time with us! </p>
            <span> Don't have an account?</span>
            <button className="loginbtn1" >REGISTER</button>
                <h2> Login</h2>
                <form>
            <input type="text" placeholder="Username" />
            <br></br>
            <input type="password" placeholder="Password" />
            <br></br>
            <button  className="loginbtn2" onClick={handleLogin}>Login</button>
            <br></br>
          </form>
            </div>
    </div>
    </div>
  )
}
export default Login;