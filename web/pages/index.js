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
            <h1>Nicolás Forteza</h1>
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
          Forthcoming Conferences:
        </Heading>

        <Paragraph>
        <Link as={NextLink} href="https://ww2.amstat.org/meetings/jsm/2024/" target='blank_' passHref scroll={false}>
            Joint Statistical Meeting {}
          </Link>
           (JSM) of the American Statistical Association (Portland, August 2024)
        </Paragraph>

        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph
        
        >
        Hi! I'm a data scientist based in Madrid who enjoys creating data products and 
        research in economics. I currently work at the DG of Economics, Statistics 
        and Research of the {' '}
          <Link as={NextLink} href="https://www.bde.es/bde/es/" target='blank_' passHref scroll={false}>
            Bank of Spain
          </Link>
          . I'm part of the team that conducts the {' '}
          <Link as={NextLink} href="https://app.bde.es/efs_www/home?lang=ES" target='blank_' passHref scroll={false}>
            Spanish Survey of Household Finances
          </Link>
          . In addition, I contribute to research on multiple Economics topics using data science techniques. I invite you to take a look at <span></span>
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
          <BioYear>1994</BioYear>
          Born and raised in Spain, Argentinian descendant.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          B.Sc. Economics and Finance at Universidad Autónoma de Madrid.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          M.Sc. Data Science at CUNEF and worked at {''} 
          <Link href="https://www.etsfactory.com/" target="_blank">
              ETS Asset Management.
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Worked at {''} 
          <Link href="https://keepler.io/" target="_blank">
              Keepler Data Tech.
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Working at the Bank of Spain.
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <BioSection>
          <BioYear>Email</BioYear>
          nicolas.forteza@bde.es
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List spacing={0}>
          <ListItem>
            <Link href="https://github.com/nicoforteza" target="_blank">
              <Button
                variant="ghost"
                style={{"textAlign": "left !important", "paddingLeft": "0px"}}
                colorScheme={mode('#319795', '#ff63c3')}
                leftIcon={<IoLogoGithub />}
              >
                Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/nicoforteza1" target="_blank">
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
            <Link href="https://www.linkedin.com/in/nicoforteza/" target="_blank">
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
