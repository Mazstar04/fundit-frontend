
import axios from 'axios';
import { Base, requestWrapper, setConfig } from './request.util';

export const signUp = async <RequestDataType>(
  data: RequestDataType,
): Promise<any> => {
  return requestWrapper(axios.post(`${Base.apiUrl()}/profile`, data));
};

export const signIn = async <RequestDataType>(
  data: RequestDataType,
): Promise<any> => {
  return requestWrapper(axios.post(`${Base.apiUrl()}/auth/token`, data));
};

export const verifyEmail = async <RequestDataType>(
  data: RequestDataType,
): Promise<any> => {
  return requestWrapper(axios.put(`${Base.apiUrl()}/profile/verify-email`, data));
};

export const ResendVerificationCode = async <RequestDataType>(
  data: RequestDataType,
): Promise<any> => {
  return requestWrapper(axios.post(`${Base.apiUrl()}/profile/resend-verification-mail`, data));
};

export const ForgotPassword = async <RequestDataType>(
  data: RequestDataType,
): Promise<any> => {
  return requestWrapper(axios.post(`${Base.apiUrl()}/auth/forgot-password`, data));
};

export const ResetPassword = async <RequestDataType>(
  data: RequestDataType,
): Promise<any> => {
  return requestWrapper(axios.post(`${Base.apiUrl()}/auth/reset-password`, data));
};

export const Onboarding = async <RequestDataType>(
  data: RequestDataType,
): Promise<any> => {
  return requestWrapper(axios.post(`${Base.apiUrl()}/onboarding`, data, setConfig()));
};

// export const getUserDetails = (): Promise<IGetUserResponse> => {
//   return requestWrapper(axios.get(`${Base.apiUrl()}/user`, setConfig()));
// };
