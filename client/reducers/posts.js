// A reducer takes in two things:
// 1 - the action (info about what happen)
// 2 - a copy of current state

// We set state to an empty array because the first this function runs there isn't anything to default the state to.
function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing likes");
      const i = action.index;
      // We are only going to modify the specific post so we have to slice the array to get only the one that we want to modify.
      return [
        ...state.slice(0, i),  // before the one we are updating
        {...state[i], likes: state[i].likes + 1}, 
        ...state.slice(i + 1)   // after the one we are updating
      ]
    default:
      return state;
  }
}

export default posts;