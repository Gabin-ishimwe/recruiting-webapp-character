export const characterReducer = (state, action) => {
  if (action.type === 'COMPUTATION') {
    const attributeState = action.payload;

    return {};
  } else {
    return null;
  }
};
