import React from "react";

const TableHeader = ({ sortColumn: sc, onSort, columns }) => {
  const raiseSort = (path) => {
    const sortColumn = { ...sc };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    onSort(sortColumn);
  };

  const renderSortIcon = (column) => {
    if (column.path !== sc.path) return null;

    if (sc.order === "asc") return <i className="fa fa-sort-asc"></i>;

    return <i className="fa fa-sort-desc"></i>;
  };

  return (
    <thead>
      <tr>
        {columns.map((column, indx) => (
          <th
            key={indx}
            onClick={() => raiseSort(column.path)}
            className="clickable"
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
