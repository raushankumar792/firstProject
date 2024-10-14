import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth.jsx";

const login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLs } = useAuth();
  //handling the input value
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setLogin({
      ...login,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(login);
    try {
      const response = await fetch(`http://localhost:4000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      const data = await response.json();
      console.log(data.extraDetails);
      console.log(response);
      if (response.ok) {
        //Parse the json response to get the token
        alert("Login successfully...");
        storeTokenInLs(data.token); // store the token localstorage
        navigate("/home");
      } else {
        alert(data.extraDetails ? data.extraDetails : data.message);
      }
    } catch (error) {
      // alert("invalid credential");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="login_page">
          <center>
            <h1>Login</h1>
          </center>
          <div className="login_form">
            <label htmlFor="email">Username</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="email"
              id="email"
              required
              autoComplete="off"
              value={login.email}
              onChange={handleInput}
            />
          </div>
          <div className="login_form">
            <label htmlFor="">password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="password"
              id="password"
              required
              autoComplete="off"
              value={login.password}
              onChange={handleInput}
            />
          </div>
          <br />
          <br />
          <center>
            <button type="submit" className="submit">
              Login
            </button>
          </center>
        </div>
      </form>
    </>
  );
};
export default login;
