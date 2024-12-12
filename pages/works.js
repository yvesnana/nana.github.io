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
              Teukam, Yves Gaetan Nana, et al. 
          </LinkGridItem>
        </Section>

        <Section delay={0.3}>
          <LinkGridItem
          href=""
            title="A language model assistant for biocatalysis"
            meta_color_2={"green"}
            meta2="PREPRINT"
            meta1="2024"
            >
            Yves Gaetan Nana Teukam et al.
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
            Yves Gaetan Nana Teukam et al. 
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
            M. Manica, J. Born, J. Cadow, D. Christofidellis, A. Dave, D. Clarke, Yves Gaetan Nana Teukam, et al.
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
            D. Probst, M. Manica, Yves Gaetan Nana Teukam, A. Castrogiovanni, F. Paratore,  T. Laino
          </LinkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6}/>
        <Heading as="h3" variant="section-title">
          Awards
        </Heading>
      </Section>
      
      <SimpleGrid columns={[1, 1, 2]} gap={1}>

      <Section delay={0.4}>
          <LinkGridItem
            href="https://conferences.computer.org/services/2022/awards/oss_award.html"
            title="1st IEEE Open Software Service Awards as part of the GT4SD team"
            meta1="2022"
            >
            by M. Manica, J. Cadow, D. Christofidellis, A. Dave, J. Born, D. Clarke, Yves Gaetan Nana Teukam et al.
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
          <LinkGridItem
            href="https://github.com/GT4SD"
            title="GT4SD"
            meta1="2022"
            >
            GT4SD aims to accelerate scientific discovery by creating an open community around generative models, making them accessible and easier to use for scientists. Their open-source library, gt4sd-core, provides tools for generating hypotheses and fine-tuning AI models, facilitating the adoption of generative AI in scientific research.
          </LinkGridItem>
        </Section>

        <Section delay={0.5}>
          <LinkGridItem
            href="https://github.com/GT4SD/lm-assistant-for-biocatalysis"
            title="LM-ABC"
            meta1="2024"
            >
            This project focuses on streamlining and automating key tasks in protein modeling, optimization, and the design of experiments for biocatalyzed reactions.
          </LinkGridItem>
        </Section>

        <Section delay={0.5}>
          <LinkGridItem
            href="https://github.com/GT4SD/enzeptional"
            title="Enzeptional"
            meta1="2024"
            >
            This study introduces a framework that combines LLMs with genetic algorithms (GAs) to optimize enzymes.
          </LinkGridItem>
        </Section>

        <Section delay={0.5}>
          <LinkGridItem
            href="https://github.com/rxn4chemistry/rxnaamapper"
            title="RXNAAMapper"
            meta1="2022"
            >
            The tool can capture the signal characterizing amino acid (AA) binding sites using linguistic representations for proteins and their molecular substrates, performing unsupervised binding site prediction from protein sequences and reaction SMILES..
          </LinkGridItem>
        </Section>
              
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
// export { getStaticProps } from '../components/chakra'
