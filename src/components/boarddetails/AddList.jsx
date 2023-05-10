import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Input,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

function AddList({ inputValue, setInputValue, addItem, title, btnWidth, id }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleConsoleWarning = () => {
    console.warn = () => {};
  };

  return (
    <Popover
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      placement="bottom-start"
      onOpen={handleConsoleWarning}
      size="xs"
    >
      <PopoverTrigger>
        <Button
          display="flex"
          alignItems="center"
          borderRadius="4px"
          minW={btnWidth ? btnWidth : "340px"}
          background="rgba(158,160,160,0.1)"
          onClick={handleClick}
        >
          {<AiOutlinePlus />}{" "}
          <Text ps="0.5rem" fontSize="0.8rem" fontWeight="400">
            {title}
          </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent w="340px">
        <PopoverBody>
          <Stack spacing={4}>
            <Input
              type="text"
              value={inputValue}
              placeholder="Enter title..."
              fontSize="0.8rem"
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
            <Flex gap="1rem" alignItems="center">
              <Button
                onClick={() => {
                  addItem(id, inputValue);
                  setIsOpen(false);
                }}
                background="lightblue"
                fontSize="0.9rem"
              >
                Add
              </Button>
              <Button onClick={() => setIsOpen(false)}>{<RxCross2 />}</Button>
            </Flex>
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default AddList;
