import { Box, Text, Select, VStack, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ViewNotes = () => {
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState(['tag1', 'tag2']); // Mock tags

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const storedTags = JSON.parse(localStorage.getItem('tags')) || [];
    setNotes(storedNotes);
    setTags(storedTags);
  }, []);

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading mb={4}>View Notes</Heading>
        <Select placeholder="Filter by tag" onChange={(e) => {
          const tag = e.target.value;
          const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
          const filteredNotes = storedNotes.filter(note => note.tags.includes(tag));
          setNotes(filteredNotes);
        }}>
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