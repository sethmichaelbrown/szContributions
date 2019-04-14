import { connect } from 'react-redux'
import EventsList from '../components/EventsList'

const mapStateToProps = state => ({
  events: state.eventsReducer
})

const mapDispatchToProps = dispatch => ({
  toggleEventItem: id => dispatch({type: 'TOGGLE_EVENT_ITEM', id})
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsList)