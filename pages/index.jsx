import { Box, Center, Container, Divider, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { useState } from 'react';
import Base from '../components/Base';
import Extras from '../components/Extras';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const [movieData, setMovieData] = useState({});
  const fetchData = async (movieName) => {
    if (movieName.trim() === '') return;
    const res = await fetch(`/api/${movieName.trim()}`);
    const data = await res.json();
    setMovieData(data);
  };
  return (
    <Container fontFamily="Poppins" w="max" h="max-content" py={['2rem', '0']}>
      <Head>
        <title>Movie Database</title>
      </Head>
      <Center minH="100vh" w="max">
        <Box
          shadow="lg"
          borderWidth="1px"
          p={[4, 6]}
          borderRadius="xl"
          minW={{ base: 'sm', md: 'lg' }}
          display="flex"
          flexDir={['column-reverse', 'column']}
          gap="1.2rem">
          <SearchBar fetchData={fetchData} />
          <Divider />
          {Object.keys(movieData).length ? (
            <>
              <Base {...movieData} />
              <Divider />
              <Extras Plot={movieData.Plot} Actors={movieData.Actors} />
            </>
          ) : (
            <Text textAlign="center" fontWeight="medium">
              Search for something
            </Text>
          )}
        </Box>
      </Center>
    </Container>
  );
}
