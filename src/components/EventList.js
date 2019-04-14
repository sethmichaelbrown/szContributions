import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native"

const EventList = (props) => (
  <View>
    {props.events.map(event =>
      <TouchableOpacity key={event.id} onPress={() => console.log(event.id)}>
        <Text>{event.text}</Text>
      </TouchableOpacity>
    )}
  </View>
)

export default EventList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})