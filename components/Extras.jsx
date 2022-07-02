import { Stack, Text } from '@chakra-ui/react';

export default function Extras({ Plot, Actors }) {
  return (
    <>
      <Stack w={{ base: 'xs', md: 'lg' }}>
        <Text fontSize="xl" fontWeight="semibold">
          Plot:
        </Text>
        <Text color="gray.500" noOfLines="2">
          {Plot}
        </Text>
      </Stack>
      <Stack w={{ base: 'xs', md: 'lg' }}>
        <Text fontSize="xl" fontWeight="semibold">
          Cast:
        </Text>
        <Text color="gray.500">{Actors}</Text>
      </Stack>
    </>
  );
}
