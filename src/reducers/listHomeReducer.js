const defaultState = {
  loading: false,
  data: [],
  errorMsg: "",
};

const listHomeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "POKEMON_LIST_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "POKEMON_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to get the List",
      };
    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default listHomeReducer;
