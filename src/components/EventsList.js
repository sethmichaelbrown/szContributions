import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native"

const EventList = (props) => (
  <View>
    {
      props.events.map(eventItem =>
        <TouchableOpacity
          key={eventItem.id}
          onPress={() => props.toggleEventItem(eventItem.id)}
        >
          <Text style={styles[eventItem.completed ? 'textLine' : 'textNoLine']}
          >
            {`${eventItem.completed}`}{eventItem.id}{eventItem.text}
          </Text>
        </TouchableOpacity>

      )
    }
  </View>
)

export default EventList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textNoLine: {
    fontSize: 24,
    textDecorationLine: 'none'
  },
  textLine: {
    fontSize: 24,
    textDecorationLine: 'line-through'
  }
})