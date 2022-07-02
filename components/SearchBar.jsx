import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';

export default function SearchBar({ fetchData }) {
  const [inputVal, setInputVal] = useState('');
  return (
    <Box display="flex" flexDir={['column', 'row']} gap="1rem">
      <Input
        type="search"
        variant="filled"
        value={inputVal}
        onChange={(e) => setInputVal(e.currentTarget.value)}
        placeholder="Try searching any movie"
      />
      <Button onClick={() => fetchData(inputVal)} colorScheme="teal" px="8">
        Search
      </Button>
    </Box>
  );
}
