import * as React from "react"


import Banner from "../components/main/banner"
import Section from "../components/main/section"
import Bonus from "../components/main/bonus"
import Pay from "../components/main/pay"
import Footer from "../components/main/footer"
import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = () => (
  <Layout>
    <Seo title="100 Days Challenge Program | Join Now" />
   <Banner />
<Section />
<Bonus />
<Pay/>
<Footer />





  </Layout>
)



export default IndexPage
