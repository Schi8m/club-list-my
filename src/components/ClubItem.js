import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router'

function ClubItem (props) {
  const history = useHistory()
  function toClassesList () {
    history.push('/classes/' + props.id)
  }
  return (
        <div className = "club-item">
            <h2>{ props.name }</h2>
            <p>{props.email}</p>
            <p>{props.phoneNumber}</p>
            <button className = "clubs-btn" onClick = { toClassesList }>Занятия на сегодня</button>
        </div>
  )
}

ClubItem.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  id: PropTypes.number
}
export default ClubItem
