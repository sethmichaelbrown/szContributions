// Resources
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
// Components


class SZContributions extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          style={styles.textInputs}
          placeholder='Enter Name'

        />
        <TouchableOpacity onPress={() => alert('Clicked')}>
          <View style={styles.button}>
            <Icon name="fas-plus" size={30} color="#900" />
          </View>
        </TouchableOpacity>
      </View>
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
  mainView: {
    flexDirection: 'row',
    marginHorizontal: 20
  },
  textInputs: {
    borderWidth: 1,
    borderColor: '#f2f2e1',
    backgroundColor: '#eaeaea',
    height: 50,
    flex: 1,
    padding: 5,
    marginTop: 60
  },
  button: {
    backgroundColor: '#eaeaea',
    height: 50,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
