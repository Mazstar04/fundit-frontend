export default interface IPagedRequest {
  usePaging: boolean;
  pageSize: number;
  totalItems: number;
  page: number;
  maximumPage: number;
  sortBy: string;
  setSortBy: (query: string) => void;
  isAscending: boolean;
  pageChanged: boolean;
  nextPage: () => void;
  previousPage: () => void;
  setCurrentPage: (pageNumber: number) => void;
  setMaximumPage: (pageNumber: number) => void;
  changePageSize: (pageNumber: number) => void;
  setTotalItems: (pageNumber: number) => void;
}
