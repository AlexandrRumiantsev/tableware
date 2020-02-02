import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Menu extends Component {
  render() {
    const { data } = this.props
   
    return <div className='app__menu'>
      <div>Привет, {data.name}!</div>
    </div>
  }
}
console.log(PropTypes.string);
Menu.propTypes = {
  name: PropTypes.string.isRequired
}