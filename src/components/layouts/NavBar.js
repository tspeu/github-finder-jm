import React, { Component } from 'react'
import PropTytes from 'prop-types';

export class NavBar extends Component {

  static defaultProps = {
      title: ' Github Finder',
      icon: 'fab fa-github'
  }
  static propTypes = {
    title: PropTytes.string.isRequired,
    icon: PropTytes.string.isRequired
  }

  render() {
    return (
     <nav className='navbar bg-primary'>
        <h1>
            <i className={this.props.icon} ></i>
          <span className='p'> {this.props.title}  </span>  
        </h1>
     </nav>
    )
  }
}

export default NavBar