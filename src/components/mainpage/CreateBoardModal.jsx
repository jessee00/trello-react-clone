import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import apiRequest from "../../services/services";
import { useState } from "react";

const colors = [
  { id: 1, value: "blue" },
  { id: 2, value: "orange" },
  { id: 3, value: "green" },
  { id: 4, value: "red" },
  { id: 5, value: "purple" },
  { id: 6, value: "pink" },
  { id: 7, value: "lime" },
  { id: 8, value: "grey" },
];

const CreateBoardModal = ({setBoards, boardList}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedColor, setSelectedColor] = useState("blue");
  const [inputVal, setInputVal] = useState("");

  const handleColorClick = (colorValue) => {
    setSelectedColor(colorValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiRequest
      .createBoard(inputVal, selectedColor)
      .then((res) => setBoards([...boardList, res]))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <>
      <Button
        onClick={onOpen}
        fontSize="0.9rem"
        color="grey"
        fontWeight="400"
        _hover={{ background: "inherit" }}
      >
        Create new board
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "xs", md: "sm" }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Board</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={(e) => handleSubmit(e)}>
            <ModalBody pb={6}>
              <FormControl>
                <Flex direction="column" gap="1.5rem">
                  <Box>
                    <FormLabel>Select Theme</FormLabel>
                    <Flex wrap="wrap">
                      {colors.map((color) => (
                        <Box
                          key={color.id}
                          width="50px"
                          height="50px"
                          bg={color.value}
                          borderRadius="3px"
                          margin="2"
                          cursor="pointer"
                          onClick={() => handleColorClick(color.value)}
                          border={
                            selectedColor === color.value
                              ? "2px solid black"
                              : "none"
                          }
                        />
                      ))}
                    </Flex>
                  </Box>

                  <Box>
                    <FormLabel>Board Title</FormLabel>
                    <Input
                      placeholder="Board title"
                      value={inputVal}
                      name="board-title"
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </Box>
                </Flex>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <FormControl>
                <Button type="submit" colorScheme="blue" mr={3} onClick={onClose}>
                  Create
                </Button>
                <Button type="submit" onClick={onClose}>
                  Cancel
                </Button>
              </FormControl>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateBoardModal;
