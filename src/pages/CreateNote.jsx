import { useState } from 'react';
import { Box, Input, Textarea, Button, VStack, Heading } from '@chakra-ui/react';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading mb={4}>Create New Note</Heading>
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder="Write your note here..." value={content} onChange={(e) => setContent(e.target.value)} />
        <Button colorScheme="blue" onClick={() => alert('Note created successfully!')}>
          Save Note
        </Button>
      </VStack>
    </Box>
  );
};

export default CreateNote;