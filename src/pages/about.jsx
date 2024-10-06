import { NavLink } from "react-router-dom";
import Analytics from "../components/Analitics";
import { useAuth } from "../store/auth";

const about = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid-two-cols">
            <div className="grid-col-1">
              <h1 className="title">About Us</h1>
              <p>Welcome {user.username}</p>
              <p>
                expertise: Our team cosists of experienced IT professionals who
                are passionate about staying up-to-date with the latest
                insdustry trends.
              </p>

              <p>
                Customization: we understand that every bussiness is unique.
                That's why we are create solutions that are tailored to your
                specific needs and goals{" "}
              </p>

              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>

              <p>
                Reliability: Count on us to be there when you need us. we're
                commited to ensuring your IT environment is reliable and
                available 24/7
              </p>
              <center>
                <div className="btn-group">
                  <NavLink to="/contact">
                    <button className="btn">Connect</button>
                  </NavLink>

                  <button className="btn-secondary">Learn more</button>
                </div>
              </center>
            </div>

            <div className="grid-col-2">
              <img src="https://picsum.photos/300/350" alt="about us" />
            </div>
          </div>
        </section>
      </main>
      <br />
      <Analytics />
    </>
  );
};
export default about;
