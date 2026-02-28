import Layout from "../../components/Layout/Layout"
import CarouselEffect from '../../components/Carousel/CarouselEffect'
import Category from '../../components/Category/Category.jsx'
import LowerHeader from '../../components/LowerHeader/LowerHeader'
import Product from '../../components/Product/Product.jsx'
import BackToTop from "../../components/BackToTop/BackToTop.jsx"

const Home = () => {
  return (
    <Layout>
        <LowerHeader/>
        <CarouselEffect/>
        <Category/>
        <Product/>
        <BackToTop/>
    </Layout>
  )
}

export default Home