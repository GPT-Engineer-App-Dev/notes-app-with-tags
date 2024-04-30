import { Box, Input, Button, VStack, Heading } from '@chakra-ui/react';
import { useState } from 'react';

const CreateTag = () => {
  const [tagName, setTagName] = useState('');
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading mb={4}>Create New Tag</Heading>
        <Input placeholder="Tag Name" value={tagName} onChange={(e) => setTagName(e.target.value)} />
        <Button colorScheme="blue" onClick={() => {
          const existingTags = JSON.parse(localStorage.getItem('tags')) || [];
          if (!existingTags.includes(tagName)) {
            existingTags.push(tagName);
            localStorage.setItem('tags', JSON.stringify(existingTags));
            alert('Tag created successfully!');
            setTagName('');
          } else {
            alert('Tag already exists!');
          }
        }}>
          Create Tag
        </Button>
      </VStack>
    </Box>
  );
};

export default CreateTag;