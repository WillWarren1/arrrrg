import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import AccountInput from '../components/accountInput'
import { Link } from 'react-router-dom'

class Splash extends Component {
  render() {
    return (
      <>
        <AccountInput
          pageType="Log in"
          alternativeInput="Sign Up!"
          link="/signup"
        />
      </>
    )
  }
}

export default Splash
