import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import ViewNotes from "./pages/ViewNotes.jsx";
import CreateNote from "./pages/CreateNote.jsx";
import CreateTag from "./pages/CreateTag.jsx";

function App() {
  return (
    <Router>
      <Box p={4}>
        <Flex mb={4} justifyContent="space-between">
          <Link to="/">Home</Link>
          <Link to="/view-notes">View Notes</Link>
          <Link to="/create-note">Create Note</Link>
          <Link to="/create-tag">Create Tag</Link>
        </Flex>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/view-notes" element={<ViewNotes />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/create-tag" element={<CreateTag />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;