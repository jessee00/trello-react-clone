import { Flex, Button, Input, Stack } from "@chakra-ui/react";
import AddList from "./AddList";
import { useState, useEffect } from "react";
import CreateCard from "./CreateCard";
import { AiFillDelete } from "react-icons/ai";
import apiRequest from "../../services/services";

const ListDetails = ({
  listTitle,
  setListTitle,
  listId,
  handleUpdateTitle,
  handleDelete,
}) => {
  const [cards, setCards] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    apiRequest
      .getCards(listId)
      .then((data) => setCards([...data]))
      .catch((err) => console.log(err));
  }, []);

  const addCard = (listId, cardName) => {
    if (inputValue.trim() !== "") {
      apiRequest.createCard(listId, cardName).then((data) => {
        setCards((prevCards) => [...prevCards, data]);
      });
      setInputValue("");
    }
  };

  const handleCardTitleUpdate = (value, cardId) => {
    if (value.trim() === "") {
      alert("Card title is mandatory");
      return;
    }

    apiRequest.updateCard(cardId, value).then((data) => {
      const updateTitleValue = cards.map((item) => {
        if (item.id === cardId) item.name = value;
        return item;
      });

      setCards(updateTitleValue);
    });
  };

  const handleCardDelete = (cardId) => {
    apiRequest.deleteCard(cardId).then((data) => {
      const updateItems = cards.filter((item) => {
        return item.id !== cardId;
      });
      setCards(updateItems);
    });
  };

  return (
    <Stack
      w="340px"
      p="0.5rem"
      borderRadius="5px"
      spacing="0.5rem"
      height="fit-content"
      background="rgba(158,160,160,0.4)"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        borderRadius="3px"
      >
        <Input
          type="text"
          value={listTitle}
          border="none"
          outline="none"
          _focus={{ outline: "none" }}
          onChange={(e) => {
            setListTitle(e.target.value);
            handleUpdateTitle(e.target.value, listId);
          }}
        />
        <Flex>
          <Button
            background="inherit"
            p="0"
            onClick={() => handleDelete(listId)}
          >
            <AiFillDelete style={{ width: "25px", height: "25px" }} />
          </Button>
        </Flex>
      </Flex>

      {cards.length > 0 &&
        cards.map((card) => {
          return (
            <CreateCard
              title={card.name}
              id={card.id}
              key={card.id}
              handleUpdateTitle={handleCardTitleUpdate}
              handleDelete={handleCardDelete}
            />
          );
        })}

      <AddList
        id={listId}
        inputValue={inputValue}
        setInputValue={setInputValue}
        addItem={addCard}
        title="Add a Card"
        btnWidth="320px"
      />
    </Stack>
  );
};

export default ListDetails;
