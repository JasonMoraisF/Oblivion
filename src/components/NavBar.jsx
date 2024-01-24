import React, { useEffect, useState } from 'react';
import {
  RiHomeFill,
  RiPlayList2Fill,
  RiHeart3Fill,
  RiSettings4Fill,
} from 'react-icons/ri';
import {
  ChakraProvider,
  Box,
  VStack,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

export const NavBar = () => {
  return (
    <ChakraProvider>
      <VStack bgColor={'#0F0E0E'} borderRadius={'50px'}>
        <IconButton
          icon={<RiHomeFill />}
          aria-label="Home Button"
          colorScheme="white"
          color={'white'}
        />
        <IconButton
          icon={<RiPlayList2Fill />}
          aria-label="Playlist Button"
          colorScheme="white"
          color={'white'}
        />
        <IconButton
          icon={<RiHeart3Fill />}
          aria-label="Favorite Button"
          colorScheme="white"
          color={'white'}
        />
        <IconButton
          icon={<RiSettings4Fill />}
          aria-label="Settings Button"
          colorScheme="white"
          color={'white'}
        />
      </VStack>
    </ChakraProvider>
  );
};
