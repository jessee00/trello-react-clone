import {
  Flex,
  Input,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { useEffect, useState } from "react";
import Checklists from "./checklist/Checklists";
import AddList from "./AddList";
import apiRequest from "../../services/services";

const CreateCard = ({ title, id, handleUpdateTitle, handleDelete }) => {
  const [titleUpdate, setTitleUpdate] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputValue, setInputValue] = useState("");
  const [checkLists, setCheckLists] = useState([]);

  useEffect(() => {
    apiRequest
      .getCheckLists(id)
      .then((data) => setCheckLists([...data]))
      .catch((err) => console.log(err));
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleModalClick = () => {
    setIsClicked(true);
  };

  const addCheckList = (cardId, checkListName) => {
    if (inputValue.trim() !== "") {
      apiRequest
        .createCheckList(cardId, checkListName)
        .then((data) => {
          setCheckLists([...checkLists, data]);
        })
        .catch((err) => console.log(err));
    }
    setInputValue("");
  };

  const handleCheckListTitleUpdate = (value, checkListId) => {
    if (value.trim() === "") {
      alert("Card title is mandatory");
      return;
    }

    apiRequest.updateCheckList(checkListId, value).then((data) => {
      const updateTitleValue = checkLists.map((item) => {
        if (item.id === checkListId) item.name = value;
        return item;
      });

      setCheckLists(updateTitleValue);
    });
  };

  const handleCheckListDelete = (checkListId) => {
    apiRequest.deleteCheckList(checkListId).then((data) => {
      const updateItems = checkLists.filter((item) => {
        return item.id !== checkListId;
      });

      setCheckLists(updateItems);
    });
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      background="#ffffff"
      boxShadow="0 0 5px rgba(0, 0, 0, 0.2)"
      borderRadius="3px"
    >
      {isEditing ? (
        <Box>
          <Input
            type="text"
            value={titleUpdate}
            border="none"
            outline="none"
            w="100%"
            _focus={{ outline: "none" }}
            onChange={(e) => {
              setTitleUpdate(e.target.value);
            }}
          />
          <Flex gap="1.5rem">
            <Button
              ms="0.7rem"
              mb="0.5rem"
              fontSize="0.8rem"
              background="blue"
              onClick={() => {
                handleUpdateTitle(titleUpdate, id);
                setIsEditing(false);
              }}
            >
              Save
            </Button>

            <Button
              ms="0.7rem"
              mb="0.5rem"
              fontSize="0.8rem"
              background="blue"
              onClick={() => {
                handleDelete(id);
              }}
            >
              Delete
            </Button>
          </Flex>
        </Box>
      ) : (
        <Button
          background="none"
          w="100%"
          fontWeight="400"
          display="flex"
          justifyContent="flex-start"
          _hover={{ background: "none" }}
          ps="1rem"
          onClick={() => {
            handleModalClick();
            onOpen();
          }}
        >
          {titleUpdate}
        </Button>
      )}
      {isEditing === false && (
        <Button background="inherit" p="0" onClick={() => handleEditClick()}>
          <AiOutlineEdit style={{ width: "25px", height: "25px" }} />
        </Button>
      )}

      {isClicked && (
        <>
          <Modal
            onClose={() => {
              onClose();
              setIsClicked(false);
            }}
            isOpen={isOpen}
            isCentered
            size={{ base: "xs", md: "xl" }}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Checklist</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {checkLists.length > 0 &&
                  checkLists.map((item) => {
                    return (
                      <Checklists
                        title={item.name}
                        key={item.id}
                        id={item.id}
                        cardId={item.idCard}
                        handleDelete={handleCheckListDelete}
                        handleEditClick={handleCheckListTitleUpdate}
                      />
                    );
                  })}
                <AddList
                  id={id}
                  title="Add Checklist"
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  addItem={addCheckList}
                  btnWidth="270px"
                />
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </Flex>
  );
};

export default CreateCard;
