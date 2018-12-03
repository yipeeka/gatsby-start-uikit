import React from 'react'
import Helmet from 'react-helmet'
import '../assets/sass/styles.scss'

class TemplateWrapper extends React.Component {
  state = { ready: false };

  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      const uikit = require('uikit')
      const icons = require('uikit/dist/js/uikit-icons.min')
      uikit.use(icons)
      this.setState({ ready: true })
    }
  };

  render() {
    const { children } = this.props
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Helmet>
          <title>My first UIKit site</title>
          <meta name='description' content="My first UIKit site test" />
        </Helmet>
        <div className="uk-container">
          {children}
        </div>
      </div>
    )
  }
}

export default TemplateWrapper