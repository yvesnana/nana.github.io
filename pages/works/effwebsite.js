import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article' 

const Work = () => (
  <Layout title="EFF Website">
    <Container maxW="container.md">
      <Title>
        EFF Website <Badge>2020-</Badge>
      </Title>
      <P>
      A data app where the user can visualise and download descriptive results of the main variables of the EFF survey, 
      access documentation from the different editions, and register to obtain access to the microdata files. Also, 
      consult the code written in multiple languages to calculate statistics about the EFF survey.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta color={"green"}>Website</Meta>
          <Link href="https://app.bde.es/efs_www/home?lang=ES" target='blank_'>
          https://app.bde.es/efs_www/home?lang=ES <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta color={"green"}>Platform</Meta>
          <span>Hybrid, with Azure App Service and on-prem cibersecurity firewalls</span>
        </ListItem>
        <ListItem>
          <Meta color={"green"}>Stack</Meta>
          <span>Dash, Python, HTML, CSS, jQuery, JS</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
// export { getStaticProps } from '../../components/chakra'
