import React from 'react'
import {
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  Link as ChakraLink,
} from '@chakra-ui/react'

import Link from 'next/link'
import { ChevronDownIcon } from '@chakra-ui/icons'
import ToggleTheme from './ToggleTheme'

function DesktopNav({ links }: { links: any }): JSX.Element {
  const { colorMode } = useColorMode()

  return (
    <HStack spacing={8} display={{ base: `none`, md: `flex` }}>
      {links.map((linkItem: any, index: number) => {
        if (linkItem.type !== `dropdown`) {
          return (
            <Link href={linkItem.link} key={index.toString()} passHref>
              <ChakraLink
                key={index.toString()}
                color={colorMode === 'light' ? `gray.800` : `white`}
                fontSize='lg'
                fontWeight='semibold'
                position='relative'
                textTransform='capitalize'
                _after={{
                  transition: `all 0.25s ease-in-out`,
                  content: `''`,
                  /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                  outline: `1px solid transparent`,
                  width: `0%`,
                  height: `30%`,
                  position: `absolute`,
                  bottom: 1,
                  left: 0,
                  bg: colorMode === 'light' ? `brand.200` : `brand.700`,
                  zIndex: -1,
                }}
                _hover={{
                  _after: {
                    width: `100%`,
                  },
                }}
              >
                {linkItem.name}
              </ChakraLink>
            </Link>
          )
        }
        if (linkItem.type === `dropdown`) {
          return (
            <Menu key={index.toString()}>
              <MenuButton
                key={index.toString()}
                color={colorMode === 'light' ? `gray.800` : `white`}
                fontSize='lg'
                fontWeight='semibold'
                position='relative'
                textTransform='capitalize'
                _after={{
                  transition: `all 0.25s ease-in-out`,
                  content: `''`,
                  /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                  outline: `1px solid transparent`,
                  width: `0%`,
                  height: `30%`,
                  position: `absolute`,
                  bottom: 1,
                  left: 0,
                  bg: colorMode === 'light' ? `brand.200` : `brand.900`,
                  zIndex: -1,
                }}
                _hover={{
                  _after: {
                    width: `100%`,
                  },
                  color: colorMode === 'light' ? `gray.800` : `white`,
                }}
              >
                {linkItem.name}
                <Icon as={ChevronDownIcon} />
              </MenuButton>
              <MenuList>
                {linkItem.links.map((item: any, i: number) => (
                  <Link href={item.link} key={`${i.toString()}MenuLink`} passHref>
                    <MenuItem as='a' sx={{ cursor: `pointer` }} key={i.toString()}>
                      {item.name}
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
          )
        }
        return null
      })}
      <HStack spacing={2}>
        <ToggleTheme />
      </HStack>
    </HStack>
  )
}

export default DesktopNav
