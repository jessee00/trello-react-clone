import { Box } from "@chakra-ui/react";
import BoardLists from "./BoardLists";
import { useParams } from "react-router-dom";
import apiRequest from "../../services/services";
import { useEffect, useState } from "react";

const BoardDetail = () => {
  const boardData = useParams();
  const [boardLists, setBoardLists] = useState([]);
  const [background, setBackground] = useState({});

  useEffect(() => {
    const boardLists = apiRequest.getListsofBoard(boardData.boardId);
    const boardDetail = apiRequest.getSingleBoard(boardData.boardId);

    Promise.all([boardLists, boardDetail])
      .then((responses) => {
        setBoardLists(responses[0]);
        setBackground({
          backgroundClr: responses[1].prefs.backgroundColor,
          backgroundImg: responses[1].prefs.backgroundImage,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box
      p="0"
      mt={{ base: "3.5rem", md: "3.5rem" }}
      mb="1rem"
      overflowX="auto"
      minH="90vh"
      overflowY="auto"
      backgroundImage={
        background.backgroundImg !== null
          ? `url(${background.backgroundImg})`
          : ""
      }
      background={
        background.backgroundClr !== null ? background.backgroundClr : ""
      }
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <BoardLists
        id={boardData.boardId}
        boardLists={boardLists}
        setBoardLists={setBoardLists}
      />
    </Box>
  );
};

export default BoardDetail;
