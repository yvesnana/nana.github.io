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
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin, IoFileTraySharp } from 'react-icons/io5'
import Image from 'next/image'
import { mode } from '@chakra-ui/theme-tools'
import me from '../public/me.jpg'


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
          <p>Data Scientist and PhD candidate</p>
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
        Detail-oriented Data Scientist with 4 years of experience in developing AI/ML-based 
        tools to address complex biological problems. Currently completing a Ph.D. in Biomedical 
        Engineering with a focus on Language Modelling for Protein Design at <Link as={NextLink} href="https://research.ibm.com/labs/zurich" target='blank_' passHref scroll={false}>
            IBM Research Zürich
          </Link> 
        and <Link as={NextLink} href="https://www.tue.nl/en/" target='blank_' passHref scroll={false}>
            Eindhoven University of Technology
          </Link>, with expected graduation in January 2025. Expert 
        in machine learning, generative modelling, NLP, Omics, and bioinformatics. Proven 
        track record of optimizing biomolecules and enhancing model performance for biocatalysis, 
        drug discovery, and green chemistry. Proficient in advanced machine learning frameworks and 
        deep learning libraries, including TensorFlow, Transformers, and PyTorch, for analysing 
        and modelling complex biological datasets. Contributed to open-source projects such 
        as GT4SD and published in high impact journals like Nature Communications. Fluent in 
        English, French, Italian, and Spanish. Strongly committed to driving innovative 
        projects, fostering collaboration, and achieving team goals.
          
          In addition, I contribute to research on multiple Economics topics using data science techniques. I invite you to take a look at <span></span>
          <Link as={NextLink} href="/works" passHref scroll={false}>
            my work.
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
          <BioSection>
          <BioYear>2022 to present</BioYear>
          Ph.D. in Biomedical Engineering at IBM Research Zürich & Eindhoven University of Technology (Zürich & Eindhoven)
        </BioSection>
          <BioSection>
          <BioYear>09/2019 to 10/2021</BioYear>
          M.Sc. in Data Science at the University of Rome - La Sapienza (Roma)
        </BioSection>
        <BioSection>
          <BioYear>09/2018 to 02/2019 </BioYear>
          Exchange Program Erasmus at ESCI – Universitat Pompeu Fabra (UPF) (Barcelona)
        </BioSection>
        <BioSection>
          <BioYear>09/2016 to 06/2019 </BioYear>
          B.Sc. in Bioinformatics at the University of Rome - La Sapienza (Roma)
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
          On the web
        </Heading>
        <List spacing={0}>
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
            <Link href="https://www.linkedin.com/in/nana-yves/" target="_blank">
              <Button
                variant="ghost"
                style={{"textAlign": "left !important", "paddingLeft": "0px"}}
                colorScheme={mode('#319795', '#ff63c3')}
                leftIcon={<IoLogoLinkedin />}
              >  Linkedin
              </Button>
            </Link>
          </ListItem
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
// export { getStaticProps } from '../components/chakra'
