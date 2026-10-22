import { PRODUCTS } from '../../data/products'
import { SECTION_IDS } from '../../data/sections'
import { Container } from '../ui/Container'
import { ProductCard } from '../ui/ProductCard'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

const CARD_REVEAL_STEP_MS = 150

export function Products() {
  return (
    <Section id={SECTION_IDS.products}>
      <Container>
        <SectionHeading
          eyebrow="Kahvelerimiz"
          title="Her yudumda bir gelenek"
          description="Üç klasik, üç farklı ritim. Hangisi olursa olsun, taze çekilmiş çekirdeklerle hazırlanır."
        />

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <li key={product.id}>
              <Reveal
                delayMs={index * CARD_REVEAL_STEP_MS}
                className="h-full"
              >
                <ProductCard product={product} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
