import {
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';

export const Music = ({ cover, musicName, artistName, duration, favorite }) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Flex
      justifyContent="space-between"
      fontSize=".9375rem"
      height="3.75rem"
      alignItems="center"
      padding=".9375rem"
    >
      <HStack w="auto" minW="100px">
        <Image w="2.1875rem" src={cover} />
        <IconButton
          bgColor={'transparent'}
          onClick={handleFavorite}
          icon={isFavorite ? <FaHeart /> : <FaRegHeart />}
        />
      </HStack>

      <VStack flex={1} gap="0rem" alignItems={'start'}>
        <Text fontWeight="bold" overflow={'hidden'}>
          {musicName}
        </Text>
        <Text>{artistName}</Text>
      </VStack>
      <Text flex={1}>{duration}</Text>
      <IconButton bgColor={'transparent'} icon={<HiDotsVertical />} />
    </Flex>
  );
};
