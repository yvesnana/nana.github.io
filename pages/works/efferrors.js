import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Survey Errors" duration={0.5}>
    <Container maxW='container.md'>
      <Title>
      A Score Function to Prioritize Editing in Household Survey Data: A Machine Learning Approach <Badge>2023</Badge>
      </Title>
      <List ml={4} my={4}>
      <ListItem>
          <Meta color={"green"}>Coauthors</Meta>
          <span>
          <Link href="https://sites.google.com/view/garciauribe" target="_blank">
              Sandra García-Uribe
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta color={"green"}>Link</Meta>
          <Link href="https://www.bde.es/f/webbe/SES/Secciones/Publicaciones/PublicacionesSeriadas/DocumentosTrabajo/23/Files/dt2330e.pdf" target="_blank">Working Paper</Link> 
        </ListItem>
        <ListItem>
        <Meta color={"green"}>Topics</Meta>
          Survey Methodology, Machine Learning
        </ListItem>
      </List>
      <P> Errors in the collection of household finance survey data may proliferate in population
estimates, especially when there is oversampling of some population groups. Manual
case-by-case revision has been commonly applied in order to identify and correct potential
errors and omissions such as omitted or misreported assets, income and debts. We
derive a machine learning approach for the purpose of classifying survey data affected by
severe errors and omissions in the revision phase. Using data from the Spanish Survey of
Household Finances we provide the best-performing supervised classification algorithm
for the task of prioritizing cases with substantial errors and omissions. Our results show
that a Gradient Boosting Trees classifier outperforms several competing classifiers. We
also provide a framework that takes into account the trade-off between precision and
recall in the survey agency in order to select the optimal classification threshold.
      </P>
    </Container>
  </Layout>
)

export default Work
// export { getStaticProps } from '../../components/chakra'
