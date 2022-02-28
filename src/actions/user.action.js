export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    payload: user,
  }
}

export const setActiveHobby = (user) => {
  return {
    type: 'SET_ACTIVE_USER',
    payload: user,
  }
}
