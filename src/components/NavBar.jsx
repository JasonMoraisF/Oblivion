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
  const [selected, setSelected] = useState(null);
  const handleIconClick = iconName => {
    setSelected(iconName);
  };

  return (
    <ChakraProvider>
      <VStack bgColor={'#0F0E0E'} borderRadius={'50px'}>
        <IconButton
          icon={<RiHomeFill />}
          aria-label="Home Button"
          colorScheme="white"
          color={selected === 'home' ? 'white' : 'gray'}
          borderRadius={'50px'}
          _hover={{
            color: 'white',
          }}
          onClick={() => handleIconClick('home')}
          _active={{
            boxShadow: '0px 0px 5px white',
            borderColor: 'white',
          }}
        />
        <IconButton
          icon={<RiPlayList2Fill />}
          aria-label="Playlist Button"
          colorScheme="white"
          color={selected === 'playlist' ? 'white' : 'gray'}
          borderRadius={'50px'}
          _hover={{
            color: 'white',
          }}
          onClick={() => handleIconClick('playlist')}
        />
        <IconButton
          icon={<RiHeart3Fill />}
          aria-label="Favorite Button"
          colorScheme="white"
          color={selected === 'favorite' ? 'white' : 'gray'}
          borderRadius={'50px'}
          _hover={{
            color: 'white',
          }}
          onClick={() => handleIconClick('favorite')}
        />
        <IconButton
          icon={<RiSettings4Fill />}
          aria-label="Settings Button"
          colorScheme="white"
          color={selected === 'config' ? 'white' : 'gray'}
          borderRadius={'50px'}
          _hover={{
            color: 'white',
          }}
          onClick={() => handleIconClick('config')}
        />
      </VStack>
    </ChakraProvider>
  );
};
