import { connect } from 'react-redux'
import EventList from '../components/EventList'

const mapStateToProps = state => ({
  events: state.events
})

const mapDispatchToProps = dispatch => ({
  toggleEvent: id => dispatch({ type: 'TOGGLE_EVENT', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(EventList)