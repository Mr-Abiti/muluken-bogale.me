import { ResearchItem } from '@/data/researchItems';
import { useColorMode } from '@chakra-ui/color-mode';
import { Flex, Box, VStack, Text, HStack, Tag, Avatar, Button, Image } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineEye, AiFillContacts } from 'react-icons/ai';
import BlogBadge from '../BlogBadge';

const ResearchCard = ({ title, tags, abstract, authors, date, id }: ResearchItem): JSX.Element => {
  const { colorMode } = useColorMode();
  return (
    <Box h='400' maxH='400' my={5}>
      <VStack
        bg={colorMode === 'light' ? `white` : `gray.900`}
        px={{ base: 4, md: 8 }}
        py={4}
        height='100%'
        width='97.5%'
        border='1px solid'
        borderColor={colorMode === 'light' ? `gray.200` : `gray.700`}
        borderRadius='2xl'
        boxShadow='xl'
        textAlign='left'
        direction='column'
        justifyContent='flex-start'
        alignItems='flex-start'
        spacing={1}
      >

        <Text fontSize={{ base: `2xl`, md: `4xl` }} fontWeight='bold' isTruncated maxW='100%'>
          {title}
        </Text>
        <Flex py='2' justifyContent='space-between' w='full'>

          <HStack>
            <Avatar name={authors.name} w='200' h='200' ml={-2} mr={2} src={authors.avatar} />
          </HStack>
          <Text fontSize='lg' pl={135}>
            {abstract}
          </Text>
        </Flex>

        <Flex flexWrap='wrap'>
          {tags.map((tag, i) => (
            <BlogBadge tag={tag} key={i.toString()} mr='2' mt='2' />
          ))}
        </Flex>
        <Button
          as='a'
          href={`/research/${id}`}
          alignSelf='flex-end'
          colorScheme='brand'
          variant='outline'
          mt='10px!important'
          leftIcon={<AiFillContacts />}
        >
          Contact
        </Button>

      </VStack>
    </Box>
  );
};

export default ResearchCard;
