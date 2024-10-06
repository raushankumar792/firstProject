import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from "./pages/company";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Login from "./pages/login";
import Register from "./pages/register";
import Logout from "./pages/logout";
import Navbar from "./components/Navbar";
// import "bootstrap/dist/css/bootstrap.min.css";
const app = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Company />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default app;
