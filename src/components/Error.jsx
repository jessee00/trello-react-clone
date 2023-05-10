import { Heading, Box, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <Box p="2rem" mt={{ base: "5rem", md: "7.5rem" }} mb="1rem">
        <Heading size="md" mb="3rem">Page Not Found...</Heading>
        <Link to="/">
            <Button background="blue" w="300px">Back to HomePage</Button>
        </Link>
    </Box>
  )
}

export default Error