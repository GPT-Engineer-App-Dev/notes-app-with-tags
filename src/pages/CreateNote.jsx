import { Box, Input, Textarea, Button, VStack, Heading } from '@chakra-ui/react';

const CreateNote = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading mb={4}>Create New Note</Heading>
        <Input placeholder="Title" />
        <Textarea placeholder="Write your note here..." />
        <Button colorScheme="blue">Save Note</Button>
      </VStack>
    </Box>
  );
};

export default CreateNote;