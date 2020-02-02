import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Search extends Component {
  handleChange(event){
    console.log('change');
    console.log(this.props.setApi);
    console.log(event.target.value);
    console.log(event.target.id);
    //type , url , setting
    let setting = '';
    this.props.setApi( 'POST' , 'getItemsByName' , setting);
  }
  constructor(props) {
    super(props);
    

    this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
   
    
    return <div className='app__search'>
      <div>ПОИСК</div>
      <input onChange={this.handleChange} />
    </div>
  }
}
