import { AiOutlineHome } from "react-icons/ai";
import { Flex, Box, Image, Button, useToast } from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";

const TopNav = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const user = JSON.parse(localStorage.getItem("trello-clone-user-email"));

  const handleClick = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem("trello-clone-user-email");
      toast({
        title: "Signed Out",
        description: "Signed out successfully",
        duration: 5000,
        isClosable: true,
        status: "success",
        position: "top",
      });
      navigate("/login");
    } catch (err) {
      toast({
        title: err.message,
        description: err.message,
        duration: 5000,
        isClosable: true,
        status: "error",
        position: "top",
      });
    }
  };

  return (
    <Flex
      background="#4A92CA"
      py="1rem"
      px={{ base: "1rem", md: "5rem" }}
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="100"
    >
      <Link to="/">
        <Box size="sm">
          <AiOutlineHome style={{ width: "25px", height: "25px" }} />
        </Box>
      </Link>

      <Link to="/">
        <Box>
          <Image
            src="https://a.trellocdn.com/prgb/assets/87e1af770a49ce8e84e3.gif"
            h={22}
            alt="Trello icon"
          />
        </Box>
      </Link>

      <Button onClick={handleClick}>{user}</Button>
    </Flex>
  );
};

export default TopNav;
