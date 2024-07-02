import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Button } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { Meta } from '../components/work'
import P from '../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'


export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemA = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <Button href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </Button>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemNoImg = ({ children, href, title, textAlign }) => (
  <Box w="100%" textAlign={textAlign}>
    <LinkBox cursor="pointer">
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail, meta1, meta2, meta_color_1, meta_color_2 }) => (
  <Box w="100%" textAlign="left">
    <LinkBox
      as={NextLink}
      href={`/works/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <LinkOverlay as="div" href={`/works/${id}`}>
        <Text mt={2} fontSize={18}>
        {title}
        <span> </span>
        <Meta color={meta_color_1}>
        {meta1}
        </Meta>
        <Meta color={meta_color_2}>
        {meta2}
        </Meta>
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const LinkGridItem = ({ children, id, title, href, meta1, meta2, meta_color_1, meta_color_2 }) => (
  <Box w="100%" textAlign="left">
    <LinkBox
      as={NextLink}
      href={href}
      scroll={false}
      cursor="pointer"
      target="_blank"
    >
      <LinkOverlay as="div" href={href} target='_blank'>
        <Text mt={2} fontSize={18}>
        {title}
        <span> </span>
        <Meta color={meta_color_1}>
        {meta1}
        </Meta>
        <Meta color={meta_color_2}>
        {meta2}
        </Meta>
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItemExternal = ({ children, href, id, title, thumbnail, meta1, meta2, meta_color_1, meta_color_2 }) => (
  <Box w="100%" textAlign="left">
    <LinkBox
      as={NextLink}
      href={href}
      target='blank_'
      scroll={false}
      cursor="pointer"
    >
      <LinkOverlay as="div" href={href}>
        <Text mt={2} fontSize={18}>
        {title}
        <span> </span>
        <Meta color={meta_color_1}>
        {meta1}
        </Meta>
        <Meta color={meta_color_2}>
        {meta2}
        </Meta>
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItemNoLink = ({ children, id, title, meta1, meta2, meta_color_1, meta_color_2 }) => (
  <Box w="100%" textAlign="left">
    <Box
      scroll={false}
    >
        <Text mt={2} fontSize={18}>
        {title}
        <span> </span>
        <Meta color={meta_color_1}>
        {meta1}
        </Meta>
        <Meta color={meta_color_2}>
        {meta2}
        </Meta>
        </Text>
      <Text fontSize={14}>{children}</Text>
    </Box>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
