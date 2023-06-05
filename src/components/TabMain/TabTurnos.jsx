import React from 'react'
import { NavControlTurnos } from '../ForReview/NavControlTurnos'
import { Calendar } from '../ForReview/Calendar'

function TabTurnos() {
  return (
    <div>
      <NavControlTurnos />
      <Calendar />
    </div>
  )
}

export { TabTurnos }