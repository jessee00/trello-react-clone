import { Box } from "@chakra-ui/react";
import TopNav from "./TopNav";
import MainSection from "./MainSection";
import { Outlet } from "react-router-dom";

const AppStart = () => {
  return (
    <Box p="0">
      <TopNav />
      <Outlet />
    </Box>
  );
};

export default AppStart;
