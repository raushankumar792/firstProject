import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth.jsx";
const register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  // const {storetokenInLs}
  const { storeTokenInLs } = useAuth();
  //handling the input value
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:4000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data.extraDetails);
      if (response.ok) {
        // stored the token in localhost
        storeTokenInLs(data.token);
        console.log("data", data);
        alert("Registration successfully...");
        navigate("/login");
      } else {
        alert(data.extraDetails ? data.extraDetails : data.message);
      }
    } catch (error) {
      console.log("register", error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registraion-image">
                <img
                  src="/images/register.png"
                  alt="Registration Image"
                  width={300}
                  height={400}
                />
              </div>
              {/* let tackle registraion form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration </h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Name</label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      placeholder="Name"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <br />
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <br />

                  <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default register;
