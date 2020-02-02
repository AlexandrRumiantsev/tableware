import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import Api from '../components/Api'
import * as pageActions from '../actions/PageActions'
import * as apiActions from '../actions/ApiActions'

class App extends Component {
  render() {
    const { user, page , api} = this.props
    const { setYear } = this.props.pageActions
    const { setApi } = this.props.apiActions

    return <div>
      <User name={user.name} />
      <Page photos={page.photos} year={page.year} setYear={setYear} />
      <Api name={api} setApi={setApi}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page,
    api: state.api
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    apiActions: bindActionCreators(apiActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)