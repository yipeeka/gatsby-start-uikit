import React from 'react'
import { Link } from 'gatsby'

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
      <h3 className="uk-card-title">Default</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <p data-uk-margin>
      <button className="uk-button uk-button-default">Button</button>
      <button className="uk-button uk-button-default" disabled>Disabled</button>
    </p>

    <button className="uk-button uk-button-default uk-margin-small-right" type="button" data-uk-toggle="target: #modal-example">
      Open
    </button>
    <div id="modal-example" data-uk-modal>
      <div className="uk-modal-dialog uk-modal-body">
        <h2 className="uk-modal-title">Headline</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="uk-text-right">
          <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
          <button className="uk-button uk-button-primary" type="button">Save</button>
        </p>
      </div>
    </div>

    <div data-uk-lightbox>
      <a className="uk-button uk-button-default" href="https://elvisyjlin.github.io/flex-gallery/src/media/panorama-2646143_1920.jpg">
        Open Lightbox
      </a>
    </div>
  </div>
)

export default SecondPage
