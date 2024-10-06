import { NavLink } from "react-router-dom";

const erorr = () => {
  return (
    <>
      <section className="error">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page Not Found</h4>
          <p>
            Oops! It seems like the page you'r trying to access does not exist.
            If you believe there is an, fell free to report it ,and we'll look
            into it.
          </p>
          <br />
          <br />
          <div className="btns">
            <NavLink to="/home" className="">
              Return Home
            </NavLink>
            &nbsp;&nbsp;
            <NavLink to="/contact" className="s">
              Report Problem
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
export default erorr;
