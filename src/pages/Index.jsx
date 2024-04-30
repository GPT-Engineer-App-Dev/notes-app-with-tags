import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Box p={4} textAlign="center">
      <Heading mb={4}>Welcome to GPT Engineer Notes</Heading>
      <Text fontSize="lg" mb={4}>Your simple note-taking app.</Text>
      <Button as={Link} to="/view-notes" colorScheme="teal" size="lg" m={2}>
        View Notes
      </Button>
      <Button as={Link} to="/create-note" colorScheme="teal" size="lg" m={2}>
        Create Note
      </Button>
      <Button as={Link} to="/create-tag" colorScheme="teal" size="lg" m={2}>
        Create Tag
      </Button>
    </Box>
  );
};

export default Index;