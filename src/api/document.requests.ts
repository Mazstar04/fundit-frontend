import axios from "axios";
import { Base, requestWrapper, setConfig } from "./request.util";

export const UploadDocument = async <RequestDataType>( data: RequestDataType): Promise<any> => {
  return requestWrapper(axios.post(`${Base.apiUrl()}/image/upload`,data, setConfig("multipart/form-data")));
};
