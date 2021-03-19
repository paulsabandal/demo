import React from 'react'
import { Link } from 'gatsby'

import Logo from '../img/logo.png'

const Footer = class extends React.Component {
  render() {
    return (
      <footer class="footer">
        <div class="container">
          <div class="columns">
            <div class="column is-4">
              <img src={Logo} className="footer-logo" /> <br />
              <p class="footer-text">
              A platform where interested buyers can form a group with other buyers to meet the required number of orders. The group of buyers "chip in" to purchase their desired products at a cheaper, wholesale price.
              </p>
            </div>
            <div class="column is-8">
              <section className="menu has-text-right">
                <ul className="menu-list">
                  <li>
                    <a href="#our-works" class="navbar-item">
                      how it works
                    </a>
                    <a href="/contact" class="navbar-item">
                      sign-Up
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </footer>

    )
  }
}

export default Footer
