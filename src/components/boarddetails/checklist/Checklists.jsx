import { Flex, Text, Button, Box, Input, Progress } from "@chakra-ui/react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { useState, useEffect } from "react";
import AddList from "../AddList";
import CheckItems from "./CheckItems";
import apiRequest from "../../../services/services";

const Checklists = ({ title, id, handleDelete, handleEditClick, cardId }) => {
  const [titleUpdate, setTitleUpdate] = useState(title);
  const [checkItems, setCheckItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    apiRequest
      .getCheckListItems(id)
      .then((data) => setCheckItems(data))
      .catch((err) => console.log(err));
  }, []);

  const addCheckItem = (checkListId, itemName) => {
    if (inputValue.trim() !== "") {
      apiRequest
        .createCheckItem(checkListId, itemName)
        .then((data) => setCheckItems([...checkItems, data]));
      setInputValue("");
    }
  };

  const handleTitleChange = (value, listId, itemId, cardId) => {
    if (value.trim() === "") {
      alert("item title is mandatory");
      return;
    }

    apiRequest
      .updateChecklistItem(cardId, listId, itemId, value)
      .then((data) => {
        const updateTitleValue = checkItems.map((item) => {
          if (item.id === itemId) item.name = value;
          return item;
        });

        setCheckItems(updateTitleValue);
      });
  };

  const handleItemDelete = (listId, itemId) => {
    apiRequest.deleteCheckListItem(listId, itemId).then((data) => {
      const updateItems = checkItems.filter((item) => {
        return item.id !== itemId;
      });

      setCheckItems(updateItems);
    });
  };

  const handleChecked = (value, listId, itemId, cardId) => {
    const stateValue = value === true ? "complete" : "incomplete";
    apiRequest.updateStateItem(stateValue, cardId, listId, itemId)
    .then(data => {
      const updateCheckedItem = checkItems.map((item) => {
        if (item.id === itemId) item.state = value;
        return item;
      });
  
      setCheckItems(updateCheckedItem);
    })
  };

  console.log(checkItems);

  return (
    <Box mb="1rem">
      <Flex alignItems="center" justifyContent="space-between" mb="1rem">
        <Flex alignItems="center" gap="0.8rem">
          <AiOutlineCheckSquare style={{ width: "25px", height: "25px" }} />
          <Input
            type="text"
            value={titleUpdate}
            border="none"
            outline="none"
            w="100%"
            _focus={{ outline: "none" }}
            onChange={(e) => {
              setTitleUpdate(e.target.value);
              handleEditClick(e.target.value, id);
            }}
          />
        </Flex>
        <Button
          fontSize="0.8rem"
          background="blue"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </Button>
      </Flex>

      <Progress
        value={
          (checkItems.filter((item) => item.state === "complete" || item.state === true).length * 100) /
          checkItems.length
        }
        mb="1rem"
      />

      <Box>
        {checkItems.length > 0 &&
          checkItems.map((item) => {
            return (
              <CheckItems
                title={item.name}
                key={item.id}
                id={item.id}
                listId={id}
                cardId={cardId}
                stateValue={item.state === "complete" ? true : false}
                handleTitleChange={handleTitleChange}
                handleDelete={handleItemDelete}
                handleChecked={handleChecked}
              />
            );
          })}
      </Box>

      <AddList
        id={id}
        title="Add Item"
        inputValue={inputValue}
        setInputValue={setInputValue}
        addItem={addCheckItem}
        btnWidth="270px"
      />
    </Box>
  );
};

export default Checklists;
