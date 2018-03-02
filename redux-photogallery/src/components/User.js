import React, { PropTypes, Component } from 'react'

export class User extends Component {
  render() {
    const { name } = this.props
    return <div className='ib user'>
      <p>Привет, {name}!</p>
    </div>
  }
}

User.propTypes = {
  name: PropTypes.string
}
