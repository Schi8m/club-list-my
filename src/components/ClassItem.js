import React from 'react'
import PropTypes from 'prop-types'

function ClassItem (props) {
  return (
        <div className="class-item">
            <h1>{props.classType.name}</h1>
            <p>Начало занятия: { props.startDate }</p>
            { props.isBooked ? <p>вы записаны</p> : <p></p> }
            <button className="clubs-btn" onClick = {props.onButtonClick}>{props.isBooked ? 'Отписаться' : 'Записаться'}</button>
        </div>
  )
}

ClassItem.propTypes = {
  classType: PropTypes.object,
  isBooked: PropTypes.bool,
  onButtonClick: PropTypes.func,
  startDate: PropTypes.string
}

export default ClassItem
