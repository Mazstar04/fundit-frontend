import axios from "axios";
import { Base, requestWrapper, setConfig } from "./request.util";
import { IGetCampaignsResponse, IPagedRequest, IPagedResponse } from "@/interfaces";

export const AddCampaign = async <RequestDataType>( data: RequestDataType): Promise<any> => {
  return requestWrapper(axios.post(`${Base.apiUrl()}/campaign/add-campaign`,data, setConfig()));
};


export const getCampaigns = ({
  paging,
  filters,
}: {
  paging: IPagedRequest;
  filters?: any;
}): Promise<IPagedResponse<IGetCampaignsResponse>> => {
  return requestWrapper(
    axios.get(
      `${Base.apiUrl()}/campaign/get-all-campaigns?UsePaging=${paging.usePaging}&PageSize=${
        paging.pageSize
      }&PageNumber=${paging.page}&SearchValue=${filters?.search ?? ""}`)
  );
};

export const getUserCampaigns = ({
  paging,
  filters,
}: {
  paging: IPagedRequest;
  filters?: any;
}): Promise<IPagedResponse<IGetCampaignsResponse>> => {
  return requestWrapper(
    axios.get(
      `${Base.apiUrl()}/campaign/get-user-campaigns?UsePaging=${paging.usePaging}&PageSize=${
        paging.pageSize
      }&PageNumber=${paging.page}&SearchValue=${filters?.search ?? ""}`,
      setConfig()
    )
  );
};

export const getCampaignDetail = ({ id }: { id: string }): Promise<IGetCampaignsResponse> => {
  return requestWrapper(
    axios.get(
      `${Base.apiUrl()}/campaign/get-campaign-detail?campaignId=${id}`)
  ,true);
};