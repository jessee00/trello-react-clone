import Form from "./Form";

import { useNavigate } from "react-router-dom";

import { auth } from "../../services/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useToast } from "@chakra-ui/react";

const SignUpForm = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const handleLoginSubmit = async (email, password, name) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        toast({
          title: "Signed Up",
          description: "Successfully signed up",
          duration: 5000,
          isClosable: true,
          status: "success",
          position: "top",
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
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
      <Form formType="SignUp" handleLoginSubmit={handleLoginSubmit} />
    </>
  );
};

export default SignUpForm;
