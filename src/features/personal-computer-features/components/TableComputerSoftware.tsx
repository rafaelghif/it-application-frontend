import { TableColumn } from "react-data-table-component";
import Table from "../../../components/Table";
import { useMemo } from "react";
import { SoftwareWithComputerSoftwareInterface } from "../../../types/software-type";
import { isExpired, isWithinToleranceDays } from "../../../libs/date-fns";

interface TableComputerSoftwareProps {
  data?: SoftwareWithComputerSoftwareInterface[];
}

const TableComputerSoftware: React.FC<TableComputerSoftwareProps> = ({
  data = [],
}) => {
  const columns: TableColumn<SoftwareWithComputerSoftwareInterface>[] = useMemo(
    () => [
      {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
        grow: 2,
        wrap: true,
      },
      {
        name: "Version",
        selector: (row) => row.version,
        sortable: true,
        wrap: true,
      },
      {
        name: "License Type",
        selector: (row) => row.licenseType,
        sortable: true,
        wrap: true,
      },
      {
        name: "Product Key",
        selector: (row) => row.productKey,
        sortable: true,
        grow: 2,
        wrap: true,
      },
      {
        name: "Start Date",
        selector: (row) => row.startDate,
        sortable: true,
        wrap: true,
      },
      {
        name: "Expire Date",
        selector: (row) => row.expireDate,
        sortable: true,
        wrap: true,
        conditionalCellStyles: [
          {
            when: (row) => isWithinToleranceDays(row.expireDate, 90),
            style: {
              color: "orange",
            },
          },
          {
            when: (row) =>
              isWithinToleranceDays(row.expireDate, 14) ||
              isExpired(row.expireDate),
            style: {
              color: "red",
            },
          },
        ],
      },
      {
        name: "Remark",
        selector: (row) => row.remark,
        sortable: true,
        wrap: true,
      },
    ],
    []
  );
  return (
    <Table
      columns={columns}
      data={data}
      responsive
      pagination
      striped
      highlightOnHover
    />
  );
};

export default TableComputerSoftware;
