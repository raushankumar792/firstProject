import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [services, setServices] = useState("");

  useEffect(() => {
    if (token && !user) {
      // Fetch the user data if the token is present but user data is not in state
      userAuthentication();
    }
  }, [token]);

  const storeTokenInLs = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); // Update the token state
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIN", isLoggedIn);

  //tracling the logout user functionality
  const LogoutUser = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  //jwt authentication - to get the currently loggedIN user data

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);

        setUser(data.userData);
        localStorage.setItem("user", JSON.stringify(data)); // Persist user data
        return data;
      } else {
        // Token might be invalid, handle logout
        LogoutUser();
      }
    } catch (error) {
      console.error("Error fetching user data");
      LogoutUser();
    }
  };

  // to fetch the services data from the database
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/data/service", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`services frontend error`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLs, LogoutUser, user, services }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
