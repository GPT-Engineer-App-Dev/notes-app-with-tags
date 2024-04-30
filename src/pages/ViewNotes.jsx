import { Box, Text, Select, VStack, Heading } from '@chakra-ui/react';

const ViewNotes = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading mb={4}>View Notes</Heading>
        <Select placeholder="Filter by tag">
          <option value="tag1">Tag 1</option>
          <option value="tag2">Tag 2</option>
        </Select>
        <Text>No notes to display</Text>
      </VStack>
    </Box>
  );
};

export default ViewNotes;