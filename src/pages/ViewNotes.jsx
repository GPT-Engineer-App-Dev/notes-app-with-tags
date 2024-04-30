import { Box, Text, Select, VStack, Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const ViewNotes = () => {
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState(['tag1', 'tag2']); // Mock tags

  useEffect(() => {
    const mockNotes = [
      { id: 1, title: 'Note 1', content: 'Content of note 1', tags: ['tag1'] },
      { id: 2, title: 'Note 2', content: 'Content of note 2', tags: ['tag2'] }
    ];
    setNotes(mockNotes);
  }, []);

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading mb={4}>View Notes</Heading>
        <Select placeholder="Filter by tag">
          {tags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
        </Select>
        {notes.length > 0 ? (
          notes.map(note => (
            <Box key={note.id} p={4} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{note.title}</Heading>
              <Text mt={4}>{note.content}</Text>
            </Box>
          ))
        ) : (
          <Text>No notes to display</Text>
        )}
      </VStack>
    </Box>
  );
};

export default ViewNotes;