import React, { useEffect } from 'react'
import { LOAD_CLUBS } from '../actions/clubActions'
import { useDispatch, useSelector } from 'react-redux'
import ClubItem from './ClubItem'

function ClubList () {
  const dispatch = useDispatch()
  const { clubs } = useSelector(state => state.clubs)

  useEffect(() => {
    dispatch({ type: LOAD_CLUBS })
  }, [])
  return (
        <div>
            <h1 style = {{ textAlign: 'center' }}>Список клубов:</h1>
           <div className = "club-list">
           {
                clubs.map(club => (
                    <ClubItem key = { club.id } {...club} />
                ))
            }
           </div>
        </div>
  )
}

export default ClubList
