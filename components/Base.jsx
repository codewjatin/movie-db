import { Box, HStack, Image, Tag, Text, VStack } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

export default function Base({
  Title,
  imdbRating,
  Rated,
  Year,
  Runtime,
  Genre,
  Poster,
}) {
  return (
    <Box display="flex" flexDir={{ base: 'column', md: 'row' }} gap={6}>
      <Image
        alt="Alt"
        src={Poster}
        h={['auto', 300]}
        w={[250, 'auto']}
        mx="auto"
        mt={['1rem', '0']}
        borderRadius="md"
      />
      <VStack my="auto" spacing="1rem">
        <Text
          flexWrap="nowrap"
          display="flex"
          fontSize="4xl"
          textAlign="center"
          maxW="350px"
          fontWeight="semibold">
          {Title}
        </Text>
        <HStack>
          <FaStar size="20px" color="orange" />
          <Text fontWeight="bold" fontSize="20px">
            {imdbRating}
          </Text>
        </HStack>
        <HStack spacing="1rem" fontWeight="medium">
          <Text letterSpacing="wide">{Rated}</Text>
          <Text>{Year}</Text>
          <Text>{Runtime}</Text>
        </HStack>
        <HStack spacing="2rem">
          {Genre.split(',').map((genre) => {
            return (
              <Tag key={genre} variant="subtle" px="3">
                {genre}
              </Tag>
            );
          })}
        </HStack>
      </VStack>
    </Box>
  );
}
