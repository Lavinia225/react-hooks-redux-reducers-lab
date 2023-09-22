export function manageFriends(state, action){
  const r = Object.assign({}, state)

  switch (action.type){
    case "friends/add":
      r.friends.push(action.payload)
      return r
    case "friends/remove":
      r.friends = r.friends.filter(friend => friend.id !== action.payload)
      return r
    default:
      return state
  }

}
