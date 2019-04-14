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
  
  state = {
    events: [],
    visibilityFilter: 'SHOW_ALL_EVENTS'
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Home />

        <View>

        </View>
      </View>

    )
  }
}

export default SZContributions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})
