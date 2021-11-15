import Carousel from "components/Carousel"
import Featured from "components/Featured"
import Hero from "components/Hero"
import Layout from "components/Layout"
import Meta from "components/Meta"
import { HomeProps } from "types/components"

export const getStaticProps = async () => {
  const res = await fetch(
    `https://webdev-exercise.netlify.app/data/products.json`
  )
  const { featured, carousel } = await res.json()

  return {
    props: {
      featured,
      carousels: carousel.items,
    },
  }
}

const Home = ({ featured, carousels }: HomeProps) => {
  return (
    <Layout>
      <>
        <Meta title="Home" />
        <main>
          <Hero hero={featured[0]} />
          <div className="my-10 mx-5 md:mx-10">
            <Featured featured={featured.slice(1, 3)} />
          </div>
          <Carousel carousels={carousels} />
        </main>
      </>
    </Layout>
  )
}

export default Home
