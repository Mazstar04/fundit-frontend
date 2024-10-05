import IPagination from "../i-pagination";

export default interface IListResponse<T> {
    success: boolean;
    items: T[];
    pagination: IPagination;
}