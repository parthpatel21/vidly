import React, { useEffect } from "react";
import auth from "../services/authService";

const Logout = () => {
  useEffect(() => {
    auth.logout();
    window.location = "/";
  }, []);

  return <></>;
};

export default Logout;
