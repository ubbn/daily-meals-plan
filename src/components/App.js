import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addRecipe, removeFromCalendar } from '../actions'

class App extends Component {
  render() {
    console.log('Props', this.props)
    return (
      <div>
        hello redux
      </div>
    )
  }
}

function mapStateToProps ({food, calendar}) {
  const days = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']

  return {
    calendar: days.map(day => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal] ? food[calendar[day][meal]] : null
        return meals
      },{})
    }))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    select: data => dispatch(addRecipe(data)),
    remove: data => dispatch(removeFromCalendar(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
