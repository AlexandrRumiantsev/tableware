import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Api extends Component {
  componentWillMount(){
    console.log('setApi()');
    this.props.setApi()
  }

  render() {
    console.log(this.props.name.api);
    if(this.props.name.api== undefined)
    return <div>
      <p>Данные загржаются</p>
    </div>
    else
    return <div>
      <p>{this.props.name.api}</p>
    </div>
  }
}