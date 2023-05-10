import { Box, Flex, Heading, Grid, GridItem } from "@chakra-ui/react";
import UserBoard from "./UserBoard";
import { AiOutlineUser } from "react-icons/ai";
import CreateBoard from "./CreateBoard";
import { Link } from "react-router-dom";

const UserBoards = ({ title, boardList, setBoards }) => {
  return (
    <Box ps="1rem">
      <Flex alignItems="center" gap="1rem">
        <AiOutlineUser style={{ width: "25px", height: "25px" }} />
        <Heading size="sm">{title} Boards</Heading>
      </Flex>
      <Grid
        mt="1rem"
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={4}
      >
        {boardList.map((board) => {
          return (
            <GridItem key={board.id}>
              <Link to={`${board.id}/${board.name}`}>
                <UserBoard
                  id={board.id}
                  name={board.name}
                  title={title}
                  backgroundClr={board.prefs.backgroundColor}
                  backgroundImg={board.prefs.backgroundImage}
                />
              </Link>
            </GridItem>
          );
        })}

        <GridItem>{title === "Your" && <CreateBoard setBoards={setBoards} boardList={boardList} />}</GridItem>
      </Grid>
    </Box>
  );
};

export default UserBoards;