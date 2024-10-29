import NextLink from 'next/link'
import Image from 'next/image'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'

// Icons
import { IoLogoTwitter, IoLogoLinkedin, IoFileTraySharp } from 'react-icons/io5'
import { MdOutlineMailOutline } from "react-icons/md"
import { SiGooglescholar } from "react-icons/si"

// Components
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'

// Assets
import me from '..//public/me.jpeg'

const Home = () => {
  const buttonColorScheme = useColorModeValue('teal', 'pink')

  return (
    <Layout>
      <Container maxW="container.md">
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading 
              as="h1" 
              variant="page-title"
              style={{ letterSpacing: '-0.3px' }}
            >
              Yves Gaetan Nana Teukam
            </Heading>
            <p>Pre-Doctoral Research Scientist</p>
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
              w="200px"
              h="200px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src={me}
                alt="Profile image"
                width={400}
                height={400}
                // style={{ borderRadius: '100%' }}
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h2" variant="section-title">
            About me
          </Heading>
          <Box mb={6}>
            <Paragraph sx={{ textAlign: 'justify', mb: 4 }}>
              I am Yves Gaetan Nana Teukam, a Pre-Doctoral Researcher at IBM Research Zürich, focused on developing AI/ML methods to enhance scientific discovery and contribute to open-source projects. Currently, I am pursuing my Ph.D. in Biomedical Engineering at IBM Research and Eindhoven University of Technology, expected to be completed in March 2025.
            </Paragraph>
          </Box>
          
          <Box mb={6}>
            <Paragraph sx={{ textAlign: 'justify', mb: 4 }}>
              My research integrates large language model fine tuning for protein engineering and the development of efficient ML pipelines for biocatalysis. Notable projects include Enzeptional, an end-to-end ML pipeline for enzyme optimization that integrates large language models with evolutionary optimization techniques. I also created LM-ABC, a chatbot framework that automates bioinformatics workflows, and RXNAAMapper, a transformer-based tool that achieved state-of-the-art accuracy in enzymatic binding site prediction.
              In addition to these projects, I have actively contributed to several open-source initiatives. My involvement with the GT4SD library focuses on training generative models to accelerate scientific discovery. I have also developed molecular dynamics simulation frameworks for validating AI-generated protein designs and implemented techniques for transfer learning in reaction prediction.
            </Paragraph>
          </Box>

          <Box mb={6}>
            <Paragraph sx={{ textAlign: 'justify', mb: 4 }}>
              Previously, I led a bioinformatics project at StemAway, guiding an international team through gene expression analysis while implementing an automated quality control pipeline that halved analysis time. My internship at Sequentia Biotech provided me with hands-on experience in microbiome analysis and enterotype classification.
            </Paragraph>
          </Box>

          <Box mb={6}>
            <Paragraph sx={{ textAlign: 'justify', mb: 4 }}>
              My research has been published in leading journals such as Nature Communications and the Computational and Structural Biotechnology Journal. I have received recognition for my contributions, including the IEEE Open Software Service Award and the Sandmeyer Award from the Swiss Chemical Society.
            </Paragraph>
          </Box>

          <Box mb={6}>
            <Paragraph sx={{ textAlign: 'justify', mb: 4 }}>
              I hold a Master's degree in Data Science and a Bachelor's degree in Bioinformatics from the University of Rome La Sapienza. This interdisciplinary background empowers me to tackle complex biological challenges through innovative AI solutions.
            </Paragraph>
          </Box>

          <Box mb={6}>
            <Paragraph sx={{ textAlign: 'justify', mb: 4 }}>
              My expertise spans various domains such as protein design, biocatalysis, drug discovery, and green chemistry, all aimed at making scientific discovery more efficient and accessible through AI technologies.
            </Paragraph>
          </Box>

          <Box mb={6}>
            <Paragraph sx={{ textAlign: 'justify', mb: 4 }}>
              On this website, you can explore my research projects and publications. If you are interested in discussing applications of AI in scientific discovery or potential collaborations, please feel free to reach out.
            </Paragraph>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h2" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>01/2022 to 03/2025 (expected graduation)</BioYear>
            Ph.D. in Biomedical Engineering at IBM Research Zürich & Eindhoven University of Technology – Zürich, Switzerland & Eindhoven, Netherlands
          </BioSection>

          <Box mb={6} /> {/* Add space between education entries */}

          <BioSection>
            <BioYear>09/2019 to 10/2021</BioYear>
            Master of Science in Data Science at University of Rome La Sapienza – Roma, Italy
          </BioSection>

          <Box mb={6} /> {/* Add space between education entries */}

          <BioSection>
            <BioYear>09/2018 to 02/2019</BioYear>
            Exchange Program Erasmus at ESCI-Universitad Pompeu Fabra – Barcelona, Spain
          </BioSection>

          <Box mb={6} /> {/* Add space between education entries */}

          <BioSection>
            <BioYear>09/2016 to 06/2019</BioYear>
            Bachelor of Science in Bioinformatics at University of Rome La Sapienza – Roma, Italy
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            Links
          </Heading>
          <List spacing={3}> {/* Added spacing between list items */}
            <ListItem>
              <Link href="mailto:yves.g.nana@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={buttonColorScheme}
                  leftIcon={<MdOutlineMailOutline />}
                  sx={{ 
                    textAlign: 'left',
                    paddingLeft: 0
                  }}
                >
                  Email
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://twitter.com/YvesGNT" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={buttonColorScheme}
                  leftIcon={<IoLogoTwitter />}
                  sx={{ 
                    textAlign: 'left',
                    paddingLeft: 0
                  }}
                >
                  X/Twitter
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://scholar.google.com/citations?user=nvNyJiIAAAAJ&hl=en" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={buttonColorScheme}
                  leftIcon={<SiGooglescholar />}
                  sx={{ 
                    textAlign: 'left',
                    paddingLeft: 0
                  }}
                >
                  Google Scholar
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.linkedin.com/in/nana-yves/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={buttonColorScheme}
                  leftIcon={<IoLogoLinkedin />}
                  sx={{ 
                    textAlign: 'left',
                    paddingLeft: 0
                  }}
                >
                  Linkedin
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://orcid.org/0000-0002-6954-5119" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme={buttonColorScheme}
                  leftIcon={<IoFileTraySharp />}
                  sx={{ 
                    textAlign: 'left',
                    paddingLeft: 0
                  }}
                >
                  Orcid
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home