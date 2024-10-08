
import axios from 'axios';
import { Base, requestWrapper, setConfig } from './request.util';

export const signUp = async <RequestDataType>(
  data: RequestDataType,
): Promise<any> => {
  return requestWrapper(axios.post(`${Base.apiUrl()}/auth/register`, data));
};

export const signIn = async <RequestDataType>(
  data: RequestDataType,
): Promise<any> => {
  return requestWrapper(axios.post(`${Base.apiUrl()}/auth/token`, data));
};

