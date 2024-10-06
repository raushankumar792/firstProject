import { useState, useEffect } from "react";
import { useAuth } from "../store/auth.jsx";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  //This effect will run only once when the component mounts

  const [userData, setUserData] = useState(true);
  const { user } = useAuth();
  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  // const { user } = useAuth();
  // useEffect(() => {
  //   if (user) {
  //     setContact({
  //       username: user.username || "", // Ensure `user.username` exists
  //       email: user.email || "", // Ensure `user.email` exists
  //       message: "",
  //     });
  //   }
  // }, [user]);

  // Handling the input value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);
    try {
      const response = await fetch(`http://localhost:4000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        alert("Form send successfully");
      }
    } catch (error) {
      console.error(error);
      alert("message not send");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="login_page">
          <center>
            <h1>Contact Us</h1>
          </center>
          <div className="login_form">
            <label htmlFor="username">Username</label>
            <br />
            <input
              type="text"
              name="username"
              placeholder="username"
              id="username"
              required
              autoComplete="off"
              value={contact.username}
              onChange={handleInput}
            />
          </div>
          <br />
          <div className="login_form">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="email"
              id="email"
              required
              autoComplete="off"
              value={contact.email}
              onChange={handleInput}
            />
          </div>
          <br />
          <div className="login_form">
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              name="message"
              id="message"
              placeholder="please enter your message"
              required
              autoComplete="off"
              value={contact.message}
              onChange={handleInput}
            ></textarea>
          </div>
          <br />
          <br />
          <center>
            <button type="submit" className="submit">
              Send
            </button>
          </center>
        </div>
      </form>
    </>
  );
};

export default Contact;
