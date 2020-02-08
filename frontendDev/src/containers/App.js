import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Menu from '../components/Menu'
import Search from '../components/Search'
import Page from '../components/Page'
import Api from '../components/Api'
import * as pageActions from '../actions/PageActions'
import * as apiActions from '../actions/ApiActions'
import * as menuActions from '../actions/MenuActions'



class App extends Component {
  render() {
    const { menu, page , api} = this.props
    const { setYear } = this.props.pageActions
    const { setApi } = this.props.apiActions
    const { registration } = this.props.menuActions
    const { autorize } = this.props.menuActions

    // <User name={user.name} /> 
    // <Page photos={page.photos} year={page.year} setYear={setYear} />

    return <div>
      <Menu data={menu} registration={registration} autorize={autorize}/>
      <Search setApi={setApi}/>
      <Api name={api} setApi={setApi}/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu,
    page: state.page,
    api: state.api
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    apiActions: bindActionCreators(apiActions, dispatch),
    menuActions: bindActionCreators(menuActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)