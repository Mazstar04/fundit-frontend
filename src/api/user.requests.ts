import axios from "axios";
import { Base, requestWrapper, setConfig } from "./request.util";
import { IGetUserResponse } from "@interfaces";

export const getUser = (): Promise<IGetUserResponse> => {
  return requestWrapper(axios.get(`${Base.apiUrl()}/profile`, setConfig()));
};
