import { useState, useEffect } from 'react';
import { Box, Input, Textarea, Button, VStack, Heading, Select } from '@chakra-ui/react';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    const loadedTags = JSON.parse(localStorage.getItem('tags')) || [];
    setTags(loadedTags);
  }, []);

  const handleSaveNote = () => {
    const newNote = { title, content, tags: selectedTags, id: Date.now() };
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    existingNotes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(existingNotes));
    alert('Note created successfully!');
    setTitle('');
    setContent('');
    setSelectedTags([]);
  };

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      const updatedTags = [...tags, newTag];
      localStorage.setItem('tags', JSON.stringify(updatedTags));
      setTags(updatedTags);
      setNewTag('');
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading mb={4}>Create New Note</Heading>
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder="Write your note here..." value={content} onChange={(e) => setContent(e.target.value)} />
        <Select placeholder="Select tags" multiple value={selectedTags} onChange={(e) => setSelectedTags([...e.target.selectedOptions].map(option => option.value))}>
          {tags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </Select>
        <Input placeholder="Add new tag" value={newTag} onChange={(e) => setNewTag(e.target.value)} />
        <Button colorScheme="blue" onClick={handleAddTag}>Add Tag</Button>
        <Button colorScheme="blue" onClick={handleSaveNote}>
          Save Note
        </Button>
      </VStack>
    </Box>
  );
};

export default CreateNote;