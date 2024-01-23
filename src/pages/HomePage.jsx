import React from 'react';
import { ChakraProvider, Box, Grid, VStack, Text } from '@chakra-ui/react';
import { NavBar } from '../components/NavBar';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export const HomePage = () => {
  return (
    <ChakraProvider>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Text>Oblivion</Text>
            <NavBar />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
