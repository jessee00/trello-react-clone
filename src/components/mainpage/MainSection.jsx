import { Flex, Heading } from "@chakra-ui/react";
import UserBoards from "./UserBoards";
import apiRequest from "../../services/services";
import { useEffect, useState } from "react";

const MainSection = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    apiRequest.getBoards().then((data) => setBoards(data));
  }, []);

  const starredBoards = [...boards.filter((board) => board.starred)];
  return (
    <Flex
      direction="column"
      gap="1rem"
      px={{ base: "1rem" }}
      mt={{ base: "5rem", md: "5rem" }}
      mb="1rem"
      overflowY="auto"
      maxW="768px"
      mx="auto"
    >
      {starredBoards.length === 0 ? (
        ""
      ) : (
        <UserBoards title="Starred" boardList={starredBoards} />
      )}
      {boards.length === 0 ? (
        <Heading size="md">Loading Data...</Heading>
      ) : (
        <UserBoards title="Your" boardList={boards} setBoards={setBoards} />
      )}
    </Flex>
  );
};

export default MainSection;
