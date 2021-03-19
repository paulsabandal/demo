import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <header>
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a href="/" class="navbar-item">
                <img src={logo} alt="Logo" />
              </a>
              <span   
                  className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
              <div class="navbar-end">
                <a href="#how-it-works" class="navbar-item">
                  how it works
                </a>
                <a href="/contact" class="navbar-item">
                  sign-up
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar
