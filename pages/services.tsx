import React, { ReactElement } from 'react';
import { Box, Flex, Icon, Text, HStack, Grid, GridItem } from '@chakra-ui/react';
import LineHeading from '@/components/LineHeading';
import { researchItems } from '@/data/researchItems';
import ResearchCard from '@/components/ResearchCard';
import { PhoneIcon } from '@chakra-ui/icons';
import { FaCogs } from 'react-icons/fa';
import { NextSeo } from 'next-seo';

export default function Research(): ReactElement {
  return (
    <Box px={3} minH='100vh' height='full' mx='auto' maxW='6xl' py='28'>
      <NextSeo title='Services' />
      <Flex direction='column' alignItems='center' width='full' px={3} height='full' mx='auto'>
        <LineHeading fontSize={{ base: `5xl`, md: `6xl` }} mx='auto' textAlign='center'>
          Services
        </LineHeading>
        <Text mt={3}>Some Services I give as a freelancer</Text>
      </Flex>
      <Grid autoRows='repeat(2, 1fr)' spacing={6}>
        {researchItems.map(item => (
        <GridItem rowSpan={2}>
          <ResearchCard  key={item.id} {...item} />
        </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
