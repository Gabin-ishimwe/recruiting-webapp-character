export const attributeReducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    console.log(state);
    const newState = state.map((val, index) => {
      if (Object.keys(val)[0] === action.payload.value) {
        console.log('INDEX', state[index][action.payload.value]);
        return {
          [action.payload.value]: (state[index][action.payload.value] += 1),
        };
      }
      return val;
    });
    return newState;
  } else if (action.type === 'DECREMENT') {
    const newState = state.map((val, index) => {
      if (Object.keys(val)[0] === action.payload.value) {
        console.log('INDEX', state[index][action.payload.value]);
        return {
          [action.payload.value]: (state[index][action.payload.value] -= 1),
        };
      }
      return val;
    });
    return newState;
  } else {
    console.log(state);
    return state;
  }
};
