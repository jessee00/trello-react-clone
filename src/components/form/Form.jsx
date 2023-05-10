import {
  Flex,
  FormControl,
  Heading,
  Input,
  FormLabel,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";
import { useReducer, useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const actions = {
  SET_NAME: "setName",
  SET_EMAIL: "setEmail",
  SET_PASSWORD: "setPassword",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    case actions.SET_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case actions.SET_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    default:
      return { ...state };
  }
};

const Form = ({ formType, handleLoginSubmit }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: actions.SET_NAME,
      payload: {
        name: "",
      },
    });

    dispatch({
      type: actions.SET_EMAIL,
      payload: {
        email: "",
      },
    });

    dispatch({
      type: actions.SET_PASSWORD,
      payload: {
        password: "",
      },
    });
    handleLoginSubmit(state.email, state.password, state.name);
  };

  return (
    <Flex w="100%" h="100vh" alignItems="center" justifyContent="center">
      <Stack
        spacing="1rem"
        background="lightgrey"
        p="1rem"
        borderRadius="5px"
        w={{ base: "300px", md: "400px" }}
      >
        <Heading size="md" textAlign="center">
          Welcome
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing="1rem">
            {formType === "SignUp" && (
              <FormControl>
                <FormLabel>Name : </FormLabel>
                <Input
                  type="text"
                  placeholder="Enter user name..."
                  name="name"
                  value={state.name}
                  onChange={({ target }) => {
                    dispatch({
                      type: actions.SET_NAME,
                      payload: {
                        name: target.value,
                      },
                    });
                  }}
                />
              </FormControl>
            )}
            <FormControl>
              <FormLabel>Email : </FormLabel>
              <Input
                type="email"
                placeholder="Enter email..."
                value={state.email}
                name="email"
                onChange={({ target }) => {
                  dispatch({
                    type: actions.SET_EMAIL,
                    payload: {
                      email: target.value,
                    },
                  });
                }}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password : </FormLabel>
              <Input
                type="password"
                placeholder="Enter password..."
                value={state.password}
                name="password"
                onChange={({ target }) => {
                  dispatch({
                    type: actions.SET_PASSWORD,
                    payload: {
                      password: target.value,
                    },
                  });
                }}
                required
              />
            </FormControl>
            <FormControl>
              <Button type="submit" colorScheme="teal">
                {formType}
              </Button>
            </FormControl>
          </Stack>
        </form>

        {formType === "Login" ? (
          <Text fontSize="0.8rem" textAlign="center">
            New User?{" "}
            <Link to="/signup" style={{ color: "blue" }}>
              SignUp
            </Link>
          </Text>
        ) : (
          <Text fontSize="0.8rem" textAlign="center">
            Back to{" "}
            <Link to="/" style={{ color: "blue" }}>
              SignIn
            </Link>
          </Text>
        )}
      </Stack>
    </Flex>
  );
};

export default Form;
