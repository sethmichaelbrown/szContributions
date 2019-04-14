// Resources
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'

// Components
import Home from './containers/Home'
import VisibleEvents from './containers/VisibleEvents'

class SZContributions extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Home />

        <View>
          <VisibleEvents />
        </View>
      </View>

    )
  }
}

export default connect()(SZContributions)

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
