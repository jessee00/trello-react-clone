import { Flex } from "@chakra-ui/react";
import AddList from "./AddList";
import { useState } from "react";
import ListDetails from "./ListDetails";
import apiRequest from "../../services/services";

const BoardLists = ({ id, boardLists, setBoardLists }) => {
  const [listTitle, setListTitle] = useState("");

  const addList = (boardId, listTitle) => {
    if (listTitle.trim() !== "") {
      apiRequest.createList(boardId, listTitle).then((data) => {
        setBoardLists([...boardLists, data]);
      });
      setListTitle("");
    }
  };

  const handleUpdateTitle = (value, updateId) => {
    if (value.trim() === "") {
      alert("List title is mandatory");
      return;
    }

    apiRequest
      .updateList(updateId, value)
      .then((data) => {
        const updatedBoardLists = boardLists.map((list) => {
          if (list.id === updateId) {
            return { ...list, name: value };
          }
          return list;
        });
        setBoardLists(updatedBoardLists);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (deleteId) => {
    apiRequest.deleteList(deleteId).then((data) => {
      const updateItems = boardLists.filter((item) => {
        return item.id !== deleteId;
      });
      setBoardLists(updateItems);
    });
  };

  return (
    <Flex
      p={{ base: "1rem", md: "1.5rem" }}
      direction={{ base: "column", md: "row" }}
      gap="1rem"
      height="fit-content"
    >
      {boardLists.length > 0 &&
        boardLists.map((list) => {
          return (
            <ListDetails
              key={list.id}
              listId={list.id}
              listTitle={list.name}
              setListTitle={setListTitle}
              handleUpdateTitle={handleUpdateTitle}
              handleDelete={handleDelete}
            />
          );
        })}

      <AddList
        inputValue={listTitle}
        setInputValue={setListTitle}
        addItem={addList}
        id={id}
        title="Add Another List"
      />
    </Flex>
  );
};

export default BoardLists;
