import { connect } from 'react-redux'
import EventsList from '../components/EventsList'
import { toggleEventItem } from '../actions'

const mapStateToProps = state => ({
  events: state.eventsReducer
})

const mapDispatchToProps = dispatch => ({
  toggleEventItem: id => dispatch(toggleEventItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsList)