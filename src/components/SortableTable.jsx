// This file is part of My Users App
// Copyright (C) 2020-2022 Sentry Club
//
// My Users App is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import { Table } from "semantic-ui-react";
import { useTable, useSortBy } from "react-table";

export const SortableTable = ({ columnsConfiguration, data }) => {
  const { getTableProps, getTableBodyProps, columns, rows, prepareRow } =
    useTable(
      {
        columns: columnsConfiguration,
        data: data,
      },
      useSortBy
    );

  // Render the UI for your table
  return (
    <Table sortable {...getTableProps()}>
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.HeaderCell
              sorted={
                column.isSorted
                  ? column.isSortedDesc
                    ? "descending"
                    : "ascending"
                  : null
              }
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              {column.render("Header")}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <Table.Row {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <Table.Cell {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </Table.Cell>
                );
              })}
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
