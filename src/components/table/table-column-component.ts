import { ITableColumnConfig } from '@interfaces';

export const generateColumns = (
  config: ITableColumnConfig[],
): ITableColumnConfig[] => {
  return config.map((column) => ({
    ...column,
    accessor: column.accessorKey,
  }));
};
