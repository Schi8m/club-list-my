import { API_URL, ENDPOINST, HEADERS } from './config'

export const loadClubList = async () => {
  const result = await fetch(`${API_URL}${ENDPOINST.clubs}?$filter=isDeleted eq false`, {
    headers: HEADERS,
    method: 'GET'
  })
  const data = await result.json()
  if (result.status === 200) {
    return data.value
  } else {
    throw new Error(data.errors[0].message)
  }
}
export const loadClassesList = async (startDate, endDate, clubId) => {
  const result = await fetch(`${API_URL}${ENDPOINST.classes}?$filter=startDate gt ${startDate} AND startDate lt ${endDate}  AND clubID eq ${clubId}&$expand=classType&$orderby=startDate`, {
    headers: HEADERS,
    method: 'GET'
  })
  const data = await result.json()
  if (result.status === 200) {
    return data.value
  } else {
    throw new Error(data.errors[0].message)
  }
}
export const loadBookedClasses = async () => {
  const result = await fetch(`${API_URL}${ENDPOINST.getBookedClasses}?$filter=memberId eq 1454 AND isCanceled eq false`, {
    headers: HEADERS,
    method: 'GET'
  })
  const data = await result.json()
  if (result.status === 200) {
    return data.value
  } else {
    throw new Error(data.errors[0].message)
  }
}
export const subscribeClass = async (id) => {
  const result = await fetch(`${API_URL}${ENDPOINST.bookClass}`, {
    headers: HEADERS,
    method: 'POST',
    body: JSON.stringify({
      memberId: 1454,
      classId: id
    })
  })
  const data = await result.json()
  if (result.status === 200) {
    alert('Вы записаны')
  } else {
    throw new Error(data.errors[0].message)
  }
}
export const unSubscribeClass = async (id) => {
  const result = await fetch(`${API_URL}${ENDPOINST.unBookClass}`, {
    headers: HEADERS,
    method: 'POST',
    body: JSON.stringify({
      memberId: 1454,
      classId: id
    })
  })
  const data = await result.json()
  if (result.status === 200) {
    alert('Запись отменена')
  } else {
    throw new Error(data.errors[0].message)
  }
}
