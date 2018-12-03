import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <img data-src="https://elvisyjlin.github.io/flex-gallery/src/media/panorama-2646143_1920.jpg" width="1800" height="1200" alt="" data-uk-img></img>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
