import { userActions } from '../actions';

const initialState = {
  loggedInUser: null,
};
const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case userActions.SET_LOGGEDINUSER_DETAILS:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
