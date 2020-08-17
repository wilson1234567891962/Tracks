import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // Make api request to sign up with that email and password
    // if we sign up, modify our state, and say that we are authenticated
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // try to signin
    // hanlde success by updating state
    // handle failure by showing error message
  };
};

const signout = (dispatch) => {
  return ({ email, password }) => {
    // signout
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
