import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import React from 'react';


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={12}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Yves Gaetan Nana Teukam" />
        <meta name="keywords" content="Yves Gaetan Nana Teukam, ibm research zurich, computational biology, bioinformatics, molecular machine learning, molml" />
        <title>Yves Gaetan Nana Teuakm - IBM Research Zürich</title>
        <meta
          name="description"
          content="Check Yves Gaetan's work as PhD candidate in Buomedical Engineering at IBM Research Zürich and Eindhoven University of Technology"
          key="desc"
        />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={24}>

        {children}

      </Container>
    </Box>
  )
}

export default Main
