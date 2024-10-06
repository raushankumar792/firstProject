import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();
  return (
    <>
      <div className="main-box">
        <h1
          style={{
            fontSize: "25px",
            padding: "5px",
            borderRadius: "10px 10px 0px 0px",
            color: "white",
            backgroundColor: "rgba(58, 57, 57, 0.9)",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          Service
        </h1>
        <div
          className="sub-box grid-three-cols"
          style={{
            // height: "70vh",
            marginTop: "1px",
            // backgroundColor: "rgba(58, 57, 57, 0.9)",
            padding: "10px",
            gap: "10px",
          }}
        >
          {services.map((curEle, index) => {
            const { price, description, provider, service } = curEle;
            return (
              <div
                className="card"
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  border: "solid 1px white",
                  borderRadius: "10px",
                  padding: "10px",
                  height: "100%",
                  boxShadow: "1px 0px 3px 0px ",
                  backgroundColor: "rgba(58, 57, 57, 0.9)",
                }}
              >
                <div className="card-img">
                  <img
                    src="/images/service1.jpg"
                    width={"100%"}
                    height={"100%"}
                    alt="Service"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="card-details" style={{ color: "white" }}>
                  <p>
                    <strong>Provider:</strong> {provider}
                  </p>
                  <p>
                    <strong>Price:</strong> {price}
                  </p>

                  <p>
                    <strong>Service:</strong> {service}
                  </p>
                  <p>
                    <strong>Description:</strong> {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
