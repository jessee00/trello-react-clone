import { Flex, Checkbox, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const CheckItems = ({
  title,
  id,
  handleChecked,
  handleTitleChange,
  handleDelete,
  listId,
  cardId,
  stateValue,
}) => {
  const [titleUpdate, setTitleUpdate] = useState(title);
  const [isChecked, setIsChecked] = useState(stateValue);
  
  return (
    <Flex mb="1rem">
      <Checkbox
        defaultChecked={isChecked}
        onChange={(e) => {
          handleChecked(e.target.checked, listId, id, cardId);
          setIsChecked(e.target.checked);
        }}
      ></Checkbox>
      <Input
        type="text"
        value={titleUpdate}
        border="none"
        outline="none"
        w="100%"
        textDecoration={isChecked ? "line-through" : "none"}
        readOnly={isChecked ? true : false}
        _focus={{ outline: "none" }}
        onChange={(e) => {
          setTitleUpdate(e.target.value);
          handleTitleChange(e.target.value, listId, id, cardId);
        }}
      />

      <Button
        fontSize="0.8rem"
        onClick={() => {
          handleDelete(listId, id);
        }}
      >
        Delete
      </Button>
    </Flex>
  );
};

export default CheckItems;
