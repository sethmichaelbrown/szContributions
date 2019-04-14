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
import { connect } from 'react-redux'
import { addEventItem } from '../actions'
// Components


class Home extends Component {

  state = {
    text: ''
  }

  addEventItem = (text) => {
    this.props.dispatch(addEventItem(text))
    this.setState({ text: '' })
  }

  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          style={styles.textInputs}
          placeholder='Enter Event'

        />
        <TouchableOpacity onPress={() => this.addEventItem(this.state.text)}>
          <View style={styles.button}>
            <Icon name="plus" size={30} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(Home)

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
