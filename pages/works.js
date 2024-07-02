import { Container, Heading, SimpleGrid, Divider, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem, WorkGridItemNoLink, WorkGridItemExternal, LinkGridItem } from '../components/grid-item'

const Works = () => (
  <Layout title="Works" duration={0.5}>
    <Container maxW="container.md">

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" variant="section-title">
          Research
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={1}>

      <Section delay={0.3}>
          <LinkGridItem
            href="https://www.sciencedirect.com/science/article/pii/S2001037024000953"
            title="Language models can identify enzymatic binding sites in protein sequences"
            meta_color_2={"green"}
            meta2="PAPER"
            meta1="2024"
            >
              with Loïc Kwate Dassi, Matteo Manica, Daniel Probst, Philippe Schwaller, and Teodoro Laino
          </LinkGridItem>
        </Section>

      <Section delay={0.3}>
          <LinkGridItem
            href="https://chemrxiv.org/engage/chemrxiv/article-details/65f0746b9138d23161510400"
            title="Integrating Genetic Algorithms and Language Models for Enhanced Enzyme Design"
            meta_color_2={"green"}
            meta2="PREPRINT"
            meta1="2024"
            >
            with Federico Zipoli, Teodoro Laino, Emanuele Criscuolo, Francesca Grisoni, and Matteo Manica
          </LinkGridItem>
        </Section>

        <Section delay={0.3}>
          <LinkGridItem
            href="https://www.nature.com/articles/s41524-023-01028-1.pdf"
            title="Accelerating material design with the generative toolkit for scientific discovery"
            meta_color_2={"green"}
            meta2="PAPER"
            meta1="2023"
            >
            with Manica Matteo, Jannis Born, Joris Cadow, Dimitrios Christofidellis, Ashish Dave, Dean Clarke et al.
          </LinkGridItem>
        </Section>

        <Section delay={0.3}>
          <LinkGridItem
            href="https://www.nature.com/articles/s41467-022-28536-w"
            title="Biocatalysed synthesis planning using data-driven learning"
            meta_color_2={"green"}
            meta2="PAPER"
            meta1="2022"
            >
            with Probst Daniel, Matteo Manica, Alessandro Castrogiovanni, Federico Paratore, and Teodoro Laino
          </LinkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6}/>
        <Heading as="h3" variant="section-title">
          Discussions
        </Heading>
      </Section>
      
      <SimpleGrid columns={[1, 1, 2]} gap={1}>

      <Section delay={0.4}>
          <LinkGridItem
            href="CrashNarratives_discussion.pdf"
            title="Crash Narratives"
            meta1="2024"
            >
            by William N. Goetzmann, Dasol Kim and Robert J. Shiller at ECONDAT 2024
          </LinkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.5}>
        <Divider my={6}/>
        <Heading as="h3" variant="section-title">
          Code
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={1}>

      <Section delay={0.5}>
          <WorkGridItemNoLink
           title="ggBdE"
           meta1={"2023"}
           >
          Proprietary R library to customize ggPlot graphics according to the Bank of Spain corporate image.
          </WorkGridItemNoLink>
        </Section>

        <Section delay={0.5}>
          <WorkGridItemExternal
          href={"https://github.com/nicoforteza/expden"}
          title="Experienced Density"
          meta1={"2023"}
          >
            Python library for the computation of novel economic geography measures.
          </WorkGridItemExternal>
        </Section>

      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
// export { getStaticProps } from '../components/chakra'
