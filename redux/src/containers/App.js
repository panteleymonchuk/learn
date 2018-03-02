import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {User} from '../components/User'
import {Page} from '../components/Page'
import * as pageActions from '../actions/PageActions'



class App extends Component {
    render() {
        const {user, page } = this.props
        const { getPhotos } = this.props.pageActions

        return <div className='app'>
            <Page photos={page.photos} year={page.year} getPhotos={getPhotos} loaded={page.loaded}/>
            <User name={user.name} />
        </div>
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)