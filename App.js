// Resources
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'

// Components
import SZContributions from './src/SZContributions'
import store from './src/store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SZContributions />
      </Provider>
    )
  }
}

export default App

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
