const initialState = {
  data: [],
  isLoading: false
};

const houses = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_HOUSES":
      return {
        data: actions.payload,
        isLoading: false
      };
    case "GET_HOUSES_FULFILLED":
      return {
        data: actions.payload.data,
        isLoading: false
      };
    case "GET_HOUSES_REJECTED":
      return {
        error: "Error",
        isLoading: false
      };
    default:
      return state;
  }
};

export default houses;
