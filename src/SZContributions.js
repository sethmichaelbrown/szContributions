// Resources
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

// Components
import Home from './containers/Home'

class SZContributions extends Component {
  render() {
    return (
      <Home />
    )
  }
}

export default SZContributions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})
