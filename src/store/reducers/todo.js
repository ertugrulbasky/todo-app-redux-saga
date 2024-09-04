const initialState = {
  todos: [],
};

const items = (state = initialState.todos, action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return {
        ...state,
        todos: action.todos,
      };
    default:
      return state;
  }
};

export default items;
