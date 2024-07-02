import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoLinkedin, IoFileTraySharp } from 'react-icons/io5'
import Image from 'next/image'
import { mode } from '@chakra-ui/theme-tools'
import me from '../public/me.jpg'
import { MdOutlineMailOutline } from "react-icons/md"
import { FaGoogleScholar } from "react-icons/fa6";


const Home = () => (
  <Layout>
    <Container maxW="container.md">
      
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading 
          as="h2" 
          variant="page-title"
          style={{'letterSpacing': '-0.3px'}}
          >
            <h1>Yves Gaetan Nana Teukam</h1>
          </Heading>
          <p>Data Scientist</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={0}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderradius="full"
            overflow="hidden"
          >
            <Image
              src={me}
              alt="Profile image"
              borderradius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>

        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph
        
        >
        Hi! I'm a data scientist based in Zürich. I have 4 years of experience in developing 
        AI/ML-based tools to address complex biological problems. I'm currently completing a Ph.D. in Biomedical Engineering 
        with a focus on Language Modelling for Protein Design at <Link as={NextLink} href="https://research.ibm.com/labs/zurich/" target='blank_' passHref scroll={false}> IBM Research Zürich </Link>
        and <Link as={NextLink} href="https://www.tue.nl/en/" target='blank_' passHref scroll={false}> Eindhoven University of Technology </Link>,
        expecting to graduate in January 2025. My expertise includes machine learning, generative modelling, NLP, Omics, and bioinformatics. 
        I have a proven track record of optimizing biomolecules and enhancing model performance for biocatalysis, drug discovery, and green chemistry. 
        I'm proficient in advanced machine learning frameworks and deep learning libraries, 
        such as <Link as={NextLink} href="https://www.tensorflow.org/" target='blank_' passHref scroll={false}> TensorFlow </Link>, <Link as={NextLink} href="https://huggingface.co/docs/transformers/index" target='blank_' passHref scroll={false}> Transformers </Link>,
        and <Link as={NextLink} href="https://pytorch.org/" target='blank_' passHref scroll={false}> PyTorch </Link>,
        for analyzing and modeling complex biological datasets. I've also contributed to open-source projects like <Link as={NextLink} href="https://github.com/GT4SD" target='blank_' passHref scroll={false}> GT4SD </Link>
        and published in high-impact journals like  <Link as={NextLink} href="https://www.nature.com/comms/" target='blank_' passHref scroll={false}> Nature Communications </Link>. 
        I am fluent in English, French, Italian, and Spanish. I am strongly committed to driving innovative projects, fostering collaboration, and achieving team goals.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>01/2022 to 01/2025 (expected graduation)</BioYear>
          Ph.D. in Biomedical Engineering at IBM Research Zürich & Eindhoven University of Technology – Zürich, Switzerland & Eindhoven, Netherlands
        </BioSection>
        <BioSection>
          <BioYear>09/2019 to 10/2021</BioYear>
          Master of Science in Data Science at University of Rome La Sapienza – Roma, Italy
        </BioSection>
        <BioSection>
          <BioYear>09/2018 to 02/2019</BioYear>
          Exchange Program Erasmus at ESCI-Universitad Pompeu Fabra – Barcelona, Spain
        </BioSection>
        <BioSection>
          <BioYear>09/2016 to 06/2019</BioYear>
          Bachelor of Science in Bioinformatics at University of Rome La Sapienza – Roma, Italy
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <BioSection>
          <BioYear>Email</BioYear>
          yves.g.nana@gmail.com
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <List spacing={0}>
          <ListItem>
            <Link href="yves.g.nana@gmail.com" target="_blank">
              <Button
                variant="ghost"
                style={{"textAlign": "left !important", "paddingLeft": "0px"}}
                colorScheme={mode('#319795', '#ff63c3')}
                leftIcon={<MdOutlineMailOutline />}
                paddingLeft={0}
              >
                Email
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/YvesGNT" target="_blank">
              <Button
                variant="ghost"
                style={{"textAlign": "left !important", "paddingLeft": "0px"}}
                colorScheme={mode('#319795', '#ff63c3')}
                leftIcon={<IoLogoTwitter />}
                paddingLeft={0}
              >
                X/Twitter
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://scholar.google.com/citations?user=nvNyJiIAAAAJ&hl=en" target="_blank">
              <Button
                variant="ghost"
                style={{"textAlign": "left !important", "paddingLeft": "0px"}}
                colorScheme={mode('#319795', '#ff63c3')}
                leftIcon={<FaGoogleScholar />}
                paddingLeft={0}
              >
                Google Scholar
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/nana-yves/" target="_blank">
              <Button
                variant="ghost"
                style={{"textAlign": "left !important", "paddingLeft": "0px"}}
                colorScheme={mode('#319795', '#ff63c3')}
                leftIcon={<IoLogoLinkedin />}
              >  Linkedin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://orcid.org/0009-0003-7227-9338" target="_blank">
              <Button
                variant="ghost"
                style={{"textAlign": "left !important", "paddingLeft": "0px"}}
                colorScheme={mode('#319795', '#ff63c3')}
                leftIcon={<IoFileTraySharp />}
              >  Orcid
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
// export { getStaticProps } from '../components/chakra'
