
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.setYear(+e.target.innerText)
  }
  render() {
    const { year , photos} = this.props
    let count;
    if(this.props.photos){
      count = this.props.photos.propertyIsEnumerable.length;
    }
    return <div>
      <p>
        <button onClick={this.onYearBtnClick.bind(this)}>2016</button>
        <button onClick={this.onYearBtnClick.bind(this)}>2015</button>
        <button onClick={this.onYearBtnClick.bind(this)}>2014</button>
      </p>
      <h3>{year} год</h3>
      <p>У тебя  {count} фото.</p>
    </div>
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired
}

