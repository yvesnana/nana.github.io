import { Container, Heading, SimpleGrid, color, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { GridItem, GridItemNoImg, GridItemA } from '../components/grid-item'
import { Meta } from '../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link, List, ListItem, Divider} from '@chakra-ui/react'
import madridbuiltup_jpg from '../public/madrid_built-up.jpg'
import spainexpden from '../public/expden_spain.jpg'
import madridincomepo from '../public/madrid_income_pol.png'

const Posts = () => (
  <Layout title="Random Stuff" duration={0.5}>
    <Container maxW='container.md'>

    <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
            Courses
        </Heading>
    </Section>

    <Section delay={0.15}>
        <List ml={0} my={4}>
            <ListItem style={{'font-weight': '700'}}>
                <Meta>2022</Meta>
                Introduction to
                <span> </span>
                <Link 
                href="https://github.com/nicoforteza/r-programming-intro" 
                target='blank_'
                style={{'font-weight': '700'}}>
                    R programming in spanish<ExternalLinkIcon mx="2px" />
                </Link>
            </ListItem>
        </List>
    </Section>
    
    <Section delay={0.2}>
    <Divider my={6} />

    <Heading as="h3" variant="section-title">
            Posts & Talks
        </Heading>
    </Section>
    
    <Section delay={0.25}>
      <List ml={0} my={4}>
        <ListItem>
          <Meta>2019</Meta>
          <Link 
          href="https://keepler.io/2019/06/isolation-forest-the-star-algorithm-for-anomaly-detection/" 
          target='blank_'
          style={{'font-weight': '700'}}
          >
          Isolation Forest Algorithm and API Rest Local Deployment <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>2019</Meta>
          <Link 
          href="https://www.youtube.com/watch?v=8I-b1CN16pM" 
          target='blank_'
          style={{'font-weight': '700'}}
          >
          Anomaly Detection Talk <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>2018</Meta>
          <Link 
          href="https://quantdare.com/backtesting-algorithms-with-python/" 
          target='blank_'
          style={{'font-weight': '700'}}
          >
          Backtesting Algorithms... with Python <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>2018</Meta>
          <Link 
          href="https://quantdare.com/survivorship-bias-an-investment-decision-trap/" 
          target='blank_'
          style={{'font-weight': '700'}}
          >
           Survivorship Bias: an Investment Decision Trap
           <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

      </List>
      </Section>

      <Section delay={0.3}>
      <Divider my={6} />
        <Heading as="h3" variant="section-title">
            Data Visualization
        </Heading>
        <Text 
        style={{'font-size': "12px"}}
        >
        The code for the following displays can be ordered upon request.
          </Text>
    </Section>

    <Section delay={0.35}>
        <SimpleGrid columns={[2, 2, 2]} gap={6}>
            <GridItem 
            thumbnail={madridbuiltup_jpg}
            href='madrid_built-up.pdf'
            >
            </GridItem>

            <GridItem 
            thumbnail={spainexpden}
            href='expden_spain.pdf'
            >
            </GridItem>

            <GridItem 
            thumbnail={madridincomepo}
            href='madrid_inc_pol.pdf'
            >
            </GridItem>

        </SimpleGrid>

      </Section>

    </Container>
  </Layout>
)

export default Posts
// export { getStaticProps } from '../components/chakra'