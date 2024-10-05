import IUser from "@/interfaces/i-user";


export const SET_LOGGEDINUSER_DETAILS = 'SET_LOGGEDINUSER_DETAILS';

export const setLoggedInUserDetails = (userDetails: IUser) => ({
  type: SET_LOGGEDINUSER_DETAILS,
  payload: userDetails,
});
