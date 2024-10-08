import axios from "axios";
import { Base, requestWrapper, setConfig } from "./request.util";
import {
  IGetDonationResponse,
  IGetStatsResponse,
  IGetWithdrawalResponse,
  IPagedRequest,
  IPagedResponse,
} from "@/interfaces";

export const getDonations = ({
  paging,
  filters,
}: {
  paging: IPagedRequest;
  filters?: any;
}): Promise<IPagedResponse<IGetDonationResponse>> => {
  return requestWrapper(
    axios.get(
      `${Base.apiUrl()}/payment/get-user-payments?UsePaging=${
        paging.usePaging
      }&PageSize=${paging.pageSize}&PageNumber=${paging.page}&SearchValue=${
        filters?.search ?? ""
      }`,
      setConfig()
    )
  );
};

export const getWithdrawals = ({
  paging,
  filters,
}: {
  paging: IPagedRequest;
  filters?: any;
}): Promise<IPagedResponse<IGetWithdrawalResponse>> => {
  return requestWrapper(
    axios.get(
      `${Base.apiUrl()}/withdraw/get-user-withdrawals?UsePaging=${
        paging.usePaging
      }&PageSize=${paging.pageSize}&PageNumber=${paging.page}&SearchValue=${
        filters?.search ?? ""
      }`,
      setConfig()
    )
  );
};

export const initializePayment = async <RequestDataType>(
  data: RequestDataType
): Promise<any> => {
  return requestWrapper(
    axios.post(`${Base.apiUrl()}/payment/initialize-payment`, data)
  );
};

export const verifyPayment = async <RequestDataType>({
  reference,
}: {
  reference: string;
}): Promise<any> => {
  return requestWrapper(
    axios.post(`${Base.apiUrl()}/payment/verify-payment?reference=${reference}`)
  );
};

export const withdraw = async <RequestDataType>(
  data: RequestDataType
): Promise<any> => {
  return requestWrapper(
    axios.post(`${Base.apiUrl()}/withdraw/withdraw`, data, setConfig())
  );
};

export const getUserStats = (): Promise<IGetStatsResponse> => {
  return requestWrapper(
    axios.get(`${Base.apiUrl()}/user/get-stats`, setConfig()),
    true
  );
};
