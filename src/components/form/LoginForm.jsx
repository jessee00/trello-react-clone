import Form from "./Form";

import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "@chakra-ui/react";

const LoginForm = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const handleLoginSubmit = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        localStorage.setItem(
          "trello-clone-user-email",
          JSON.stringify(userCredential.user.email)
        );
        toast({
          title: "Logged in",
          description: "Successfully logged in",
          duration: 5000,
          isClosable: true,
          status: "success",
          position: "top",
        });
        navigate("/");
      })
      .catch((err) => {
        toast({
          title: err.message,
          description: err.message,
          duration: 5000,
          isClosable: true,
          status: "error",
          position: "top",
        });
      });
  };

  return (
    <>
      <Form formType="Login" handleLoginSubmit={handleLoginSubmit} />
    </>
  );
};

export default LoginForm;
