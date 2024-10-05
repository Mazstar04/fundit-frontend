import { ColumnDef } from '@tanstack/react-table';
import IPagedRequest from '../requests/i-paged-request';
import { IconType } from 'react-icons/lib';
import React, { ReactNode } from 'react';

export type ITableColumnConfig = ColumnDef<any, any> & {
  header: string;
  accessorKey: string;
  showOnMobile?: boolean;
  tranformData?: (data: any) => any;
};

export interface IAction {
  component?: React.ReactNode;
  method: any;
  condition?: (data: any) => boolean;
  isEllipsed?: boolean;
  text?: string;
}

export interface ITablegroup {
  groupName: string;
  groupAction?: (grroup: ITablegroup) => ReactNode;
}

export interface IDataTableProps {
  data: any;
  columns: ITableColumnConfig[];
  paging: IPagedRequest;
  loading: boolean;
  hasMobileComponent?: boolean;
  actions?: IAction[];
  isSelect?: boolean;
  selectedRows?: any;
  setSelectedRows?: (data: any) => any;
  filters?: any;
  setFilters?: (data: any) => any;
  expandedComponent?: (row: any) => ReactNode;
  dataGroups?: ITablegroup[] | undefined;
  onRowCick?: (data: any) => void;
  getRowClassName?: (row: any) => string;
  getRowStyle?: (row: any) => React.CSSProperties;
}
