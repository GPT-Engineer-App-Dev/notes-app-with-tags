import { Box, Input, Button, VStack, Heading } from '@chakra-ui/react';

const CreateTag = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading mb={4}>Create New Tag</Heading>
        <Input placeholder="Tag Name" />
        <Button colorScheme="blue">Create Tag</Button>
      </VStack>
    </Box>
  );
};

export default CreateTag;