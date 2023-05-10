import { Flex } from "@chakra-ui/react";
import CreateBoardModal from "./CreateBoardModal";

const CreateBoard = ({setBoards, boardList}) => {
  return (
    <Flex
      h="100px"
      borderRadius="5px"
      alignItems="center"
      justifyContent="center"
      background="#F0F2F5"
      cursor="pointer"
    >
      <CreateBoardModal setBoards={setBoards} boardList={boardList} />
    </Flex>
  );
};

export default CreateBoard;
