import React, { useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { GET_BOOKED_CLASSES, LOAD_CLASSES, SUBSCRIBE, UNSUBSCRIBE } from '../actions/classActions'
import ClassItem from './ClassItem'

function ClassList () {
  const dispatch = useDispatch()
  const { classes } = useSelector(state => state.classes)
  const { bookedClasses } = useSelector(state => state.bookedClasses)
  const { clubId } = useParams()
  const [startDate, endDate] = useMemo(() => {
    const startDate = new Date()
    startDate.setHours(0, 0, 0, 0)
    const endDate = new Date()
    endDate.setHours(23, 59, 59)
    return [startDate.toISOString(), endDate.toISOString()]
  }, [])
  useEffect(() => {
    dispatch({ type: LOAD_CLASSES, payload: { startDate, endDate, clubId } })
    dispatch({ type: GET_BOOKED_CLASSES })
  }, [])
  const classesWithBooking = useMemo(() => {
    console.log('123')
    return classes.map(classData => ({
      ...classData,
      isBooked: bookedClasses.reduce((prev, current) => {
        if (current.classId === classData.id) {
          return true
        }
        return prev
      }, false)
    }))
  }, [classes, bookedClasses])
  const onClassItemCkick = (id, isBooked) => {
    if (isBooked) {
      dispatch({ type: UNSUBSCRIBE, payload: { id: id } })
    } else {
      dispatch({ type: SUBSCRIBE, payload: { id: id } })
    }
  }
  return (
        <div>
            <h1 style = {{ textAlign: 'center' }}>Список классов</h1>
            <div className="class-list">
            {
                classesWithBooking.map(classItem =>
                <ClassItem
                key = { classItem.id }
                {...classItem }
                onButtonClick = {() => onClassItemCkick(classItem.id, classItem.isBooked)}
                 />)
            }
            </div>
        </div>
  )
}

export default ClassList
