import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("trello-clone-user-email"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return children;
};

export default ProtectedRoute;
