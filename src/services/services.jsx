import axios from "axios";

const apiKey = "1d29dbddb90494e570f76972c7455a28";
const apiToken =
  "ATTAdf900b137c952095ec3aaa87443f1d0aa72530d0555078fd27121a7c2ff655e6B8A5BE1C";

const getBoards = () => {
  return axios
    .get(
      `https://api.trello.com/1/members/me/boards?key=${apiKey}&token=${apiToken}`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const getSingleBoard = (boardId) => {
  return axios
    .get(
      `https://api.trello.com/1/boards/${boardId}?key=${apiKey}&token=${apiToken}`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const createBoard = (boardName, backgroundValue) => {
  return axios
    .post(
      `https://api.trello.com/1/boards?name=${boardName}&prefs_background=${backgroundValue}&key=${apiKey}&token=${apiToken}`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const getListsofBoard = (boardId) => {
  return axios
    .get(
      `https://api.trello.com/1/boards/${boardId}/lists?key=${apiKey}&token=${apiToken}`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const createList = (boardId, listName) => {
  return axios
    .post(
      `https://api.trello.com/1/boards/${boardId}/lists?name=${listName}&key=${apiKey}&token=${apiToken}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

const updateList = (listId, updateTitle) => {
  return axios
    .put(
      `https://api.trello.com/1/lists/${listId}?name=${updateTitle}&key=${apiKey}&token=${apiToken}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

const deleteList = (listId) => {
  return axios
    .put(
      `https://api.trello.com/1/lists/${listId}/closed?&key=${apiKey}&token=${apiToken}&value=true`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

const getCards = (listId) => {
  return axios
    .get(
      `https://api.trello.com/1/lists/${listId}/cards?key=${apiKey}&token=${apiToken}`
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const createCard = (listId, cardName) => {
  return axios
    .post(
      `https://api.trello.com/1/cards?idList=${listId}&name=${cardName}&key=${apiKey}&token=${apiToken}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

const updateCard = (cardId, updateValue) => {
  return axios
    .put(
      `https://api.trello.com/1/cards/${cardId}?name=${updateValue}&key=${apiKey}&token=${apiToken}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

const deleteCard = (cardId) => {
  return axios
    .delete(
      `https://api.trello.com/1/cards/${cardId}?key=${apiKey}&token=${apiToken}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

const getCheckLists = (cardId) => {
  return axios
    .get(
      `https://api.trello.com/1/cards/${cardId}/checklists?key=${apiKey}&token=${apiToken}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

const createCheckList = (cardId, checkListName) => {
  return axios
    .post(
      `https://api.trello.com/1/cards/${cardId}/checklists?&name=${checkListName}&key=${apiKey}&token=${apiToken}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

const updateCheckList = (listId, updateValue) => {
  return axios
    .put(
      `https://api.trello.com/1/checklists/${listId}?name=${updateValue}&key=${apiKey}&token=${apiToken}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

const deleteCheckList = (checkListId) => {
  return axios
    .delete(
      `https://api.trello.com/1/checklists/${checkListId}?key=${apiKey}&token=${apiToken}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

const getCheckListItems = (checkListId) => {
  return axios
    .get(
      `https://api.trello.com/1/checklists/${checkListId}/checkItems?key=${apiKey}&token=${apiToken}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

const createCheckItem = (checkListId, itemName) => {
  return axios
    .post(
      `https://api.trello.com/1/checklists/${checkListId}/checkItems?name=${itemName}&key=${apiKey}&token=${apiToken}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

const updateChecklistItem = (cardId, checkListId, checkItemId, updateValue) => {
  return axios
    .put(
      `https://api.trello.com/1/cards/${cardId}/checklist/${checkListId}/checkItem/${checkItemId}?name=${updateValue}&key=${apiKey}&token=${apiToken}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

const deleteCheckListItem = (checkListId, checkListItemId) => {
  return axios
    .delete(
      `https://api.trello.com/1/checklists/${checkListId}/checkItems/${checkListItemId}?key=${apiKey}&token=${apiToken}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

const updateStateItem = (stateValue, cardId, checkListId, checkItemId) => {
  return axios
    .put(
      `https://api.trello.com/1/cards/${cardId}/checklist/${checkListId}/checkItem/${checkItemId}?state=${stateValue}&key=${apiKey}&token=${apiToken}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export default {
  getBoards,
  createBoard,
  getListsofBoard,
  createList,
  updateList,
  deleteList,
  getCards,
  createCard,
  updateCard,
  deleteCard,
  getCheckLists,
  createCheckList,
  deleteCheckList,
  getCheckListItems,
  createCheckItem,
  updateChecklistItem,
  updateCheckList,
  deleteCheckListItem,
  updateStateItem,
  getSingleBoard,
};
