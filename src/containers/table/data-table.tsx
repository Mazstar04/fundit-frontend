'use client';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  useReactTable,
  ExpandedState,
  PaginationState,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
// import { Icon } from '@iconify/react';
import { CustomCheckboxOption, PaginationComponent } from '@/components';
import { IDataTableProps } from '@interfaces';
import { AiOutlineLoading, AiOutlineMore } from 'react-icons/ai';
import { isEqual } from 'lodash';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function DataTable({
  data,
  columns,
  paging,
  loading,
  actions,
  isSelect = false,
  filters,
  setFilters,
  selectedRows,
  setSelectedRows,
  expandedComponent,
  dataGroups,
  onRowCick,
  getRowClassName = (row: any) => '',
  getRowStyle = (row: any) => ({}),
  hasMobileComponent = false,
}: IDataTableProps) {
  const [filtering, setFiltering] = useState('');

  data = data ?? [];

  const isAllSelected = () => data.every((q: any) => selectedRows?.includes(q));

  const [visibleEllipse, setVisibleEllipse] = useState('');
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [paginationState, setPaginationState] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: dataGroups ? data.length : paging.pageSize,
  });

  const toggleAllRowSelect = () => {
    if (setSelectedRows) {
      isAllSelected()
        ? setSelectedRows([])
        : setSelectedRows(data.map((d: any) => d));
    }
  };

  const toogleRowCheck = (row: any) => {
    if (setSelectedRows) {
      const isChecked = selectedRows?.some((r: any) => isEqual(r, row));
      isChecked
        ? setSelectedRows((prev: any) =>
            prev.filter((q: any) => !isEqual(q, row)),
          )
        : setSelectedRows((prev: any) => [...prev, row]);
    }
  };

  const toggleGroupSelect = (group: string) => {
    if (setSelectedRows) {
      const isChecked =
        selectedRows?.every((r: any) => r.group == group) &&
        selectedRows?.length ==
          data.filter((d: any) => d.group == group).length;
      isChecked
        ? setSelectedRows([])
        : setSelectedRows(data.filter((d: any) => d.group == group));
    }
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      globalFilter: filtering,
      expanded,
      pagination: paginationState,
    },
    onExpandedChange: setExpanded,
    onGlobalFilterChange: setFiltering,
    onPaginationChange: setPaginationState,
    enableRowSelection: true,
  });

  const renderRows = (group = '') => {
    return table
      .getRowModel()
      .rows.filter((row) => group == '' || row.original.group == group)
      .map((row) => (
        <>
          <tr
            key={row.id}
            className={` border-b border-[#CACED2] text-[#2D2D32] cursor-pointer font-urbanist  ${hasMobileComponent ? 'hidden md:table-row' : ''} ${
              onRowCick ? 'md:cursor-pointer' : ' md:cursor-default'
            } ${getRowClassName(row)}`}
            style={getRowStyle(row)}
            onClick={() => {
              row.toggleExpanded();
              onRowCick && onRowCick(row.original);
            }}
          >
            {isSelect && (
              <td className="px-3 py-5 text-left  absolute text-sm">
                <CustomCheckboxOption
                  onChange={() => toogleRowCheck(row.original)}
                  checked={selectedRows?.some((r: any) =>
                    isEqual(r, row.original),
                  )}
                  name=""
                  id={row.id}
                />
              </td>
            )}
            {row.getVisibleCells().map((cell: any) => (
              <td
                key={cell.id}
                className={`px-3 py-5 text-left text-[14px] font-[500] font-urbanist  ${
                  cell.column.columnDef.showOnMobile
                    ? ''
                    : ' hidden md:table-cell'
                }`}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}

            <td
              className={`p-3 border-b border-[#CACED2]${
                actions && actions.length > 0 ? '' : 'md:hidden'
              }`}
            >
              <div className="flex gap-3 items-center">
                <button
                  className="md:hidden text-[#22162A]"
                  onClick={() => {
                    row.toggleExpanded();
                    onRowCick && onRowCick(row.original);
                  }}
                >
                  {row.getIsExpanded() ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
                {actions?.map((a, index) => {
                  if (
                    !a.isEllipsed &&
                    a.component &&
                    (!a.condition || a.condition(row.original))
                  ) {
                    return (
                      <button
                        key={index * 23}
                        onClick={() => a.method && a.method(row.original)}
                      >
                        {a.component}
                      </button>
                    );
                  }
                })}

                {actions?.some(
                  (a) =>
                    a.isEllipsed && (!a.condition || a.condition(row.original)),
                ) && (
                  <div className="relative">
                    <AiOutlineMore
                      className=" cursor-pointer "
                      onClick={() =>
                        setVisibleEllipse((v) => (v == row.id ? '' : row.id))
                      }
                    />

                    {visibleEllipse == row.id && (
                      <div className=" absolute bg-white rounded-lg shadow-lg">
                        {actions
                          .filter((a) => a.isEllipsed && a.text)
                          .map((action, index) => (
                            <button
                              className=" text-xs p-4"
                              key={index * 23}
                              onClick={() =>
                                action.method && action.method(row.original)
                              }
                            >
                              {action.text}
                            </button>
                          ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </td>
          </tr>
          {hasMobileComponent && expandedComponent && (
            <div
              className={`md:hidden bg-white p-4 ${getRowClassName(row)}`}
              style={getRowStyle(row)}
            >
              {expandedComponent(row.original)}
            </div>
          )}
          {expandedComponent && (
            <tr className={` md:hidden ${row.getIsExpanded() ? '' : 'hidden'}`}>
              <td colSpan={table.getRowModel().rows.length}>
                {expandedComponent(row.original)}
              </td>
            </tr>
          )}
        </>
      ));
  };

  return (
    <div className=" flex flex-col w-full">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className=" h-[100px] bg-white md:rounded-b-[20px] border-[1px] border-[#DFE5EF] w-full flex items-center justify-center text-primaryPurple ">
            <AiOutlineLoading className="w-7 h-7 animate-spin" />
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto md:overflow-x-hidden w-full">
          <table className="w-full relative px-5 bg-white border-[1px] border-[#DFE5EF] ">
            <thead
              className={` bg-[#F9FAFB] border-b-[1px] border-[#E4E7EC] ${hasMobileComponent ? 'hidden md:table-header-group' : ''}`}
            >
              {table?.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {isSelect && (
                    <th className="p-3 text-left absolute">
                      <CustomCheckboxOption
                        checked={isAllSelected()}
                        name=""
                        id="question-list"
                        onChange={toggleAllRowSelect}
                      />
                    </th>
                  )}
                  {headerGroup.headers.map((header: any) => {
                    return (
                      <th
                        key={header.id}
                        onClick={header.column.getToggleSortingHandler()}
                        className={`p-3 whitespace-nowrap text-left text-[12px] font-[500] font-urbanist text-[#738599] cursor-pointer ${
                          header.column.columnDef.showOnMobile
                            ? ''
                            : 'hidden md:table-cell'
                        }`}
                      >
                        {header.isPlaceholder ? null : (
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                          </div>
                        )}
                      </th>
                    );
                  })}

                  <th
                    className={`text-left text-[12px] font-[600] font-urbanist uppercase text-[#738599] ${
                      actions && actions.length > 0 ? '' : 'md:hidden'
                    }`}
                  >
                    <div className="flex">
                      <span className="mr-2"></span>
                    </div>
                  </th>
                </tr>
              ))}
            </thead>

            <tbody>
              {dataGroups &&
                dataGroups.map((group) => (
                  <>
                    <tr
                      key={group.groupName}
                      className=" bg-[#F2F5FA] w-full   "
                    >
                      {isSelect && (
                        <td className="px-3 py-3  text-left  text-sm">
                          <CustomCheckboxOption
                            onChange={() => toggleGroupSelect(group.groupName)}
                            checked={
                              selectedRows?.every(
                                (r: any) => r.group == group.groupName,
                              ) &&
                              selectedRows?.length ==
                                data.filter(
                                  (d: any) => d.group == group.groupName,
                                ).length
                            }
                            name=""
                            id={group.groupName}
                          />
                        </td>
                      )}

                      <td
                        colSpan={table._getColumnDefs().length - 1}
                        className=" text-[14px] text-[#030509] font-urbanist"
                      >
                        {group.groupName}
                      </td>

                      <td>
                        {group.groupAction ? group.groupAction(group) : ''}
                      </td>
                    </tr>
                    {renderRows(group.groupName)}
                  </>
                ))}
              {!dataGroups && renderRows()}
            </tbody>
          </table>
          <PaginationComponent paging={paging} />
        </div>
      )}
    </div>
  );
}
