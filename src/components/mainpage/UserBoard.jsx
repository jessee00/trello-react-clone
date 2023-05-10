import { Flex, Box, Heading } from "@chakra-ui/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const UserBoard = ({ id, name, title, backgroundClr, backgroundImg }) => {
  const iconStyle = { width: "20px", height: "20px" };

  return (
    <Flex
      h="100px"
      p="0.5rem"
      bgImage={`url(${backgroundImg})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      borderRadius="5px"
      backgroundColor={backgroundClr}
      cursor="pointer"
      justifyContent="space-between"
      position="relative"
    >
      <Heading size="md" color="#ffffff" alignSelf="flex-start">
        {name}
      </Heading>

      <Box alignSelf="flex-end">
        {title === "Starred" ? (
          <AiFillStar style={iconStyle} />
        ) : (
          <AiOutlineStar style={iconStyle} />
        )}
      </Box>
    </Flex>
  );
};

export default UserBoard;
