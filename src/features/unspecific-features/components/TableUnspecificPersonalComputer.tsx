import { TableColumn } from "react-data-table-component";
import Table from "../../../components/Table";
import { useMemo } from "react";
import { IonButton, IonText } from "@ionic/react";
import {
  PersonalComputerInterface,
  PersonalComputerWithDepartmentLocationInterface,
} from "../../../types/personal-computer-type";
import ContainerPersonalComputerDetail from "../../personal-computer-features/components/containers/ContainerPersonalComputerDetail";

interface TableUnspecificPersonalComputerProps {
  data?: PersonalComputerWithDepartmentLocationInterface[];
  handleClickBtnEdit: (data: PersonalComputerInterface) => void;
}

const TableUnspecificPersonalComputer: React.FC<
  TableUnspecificPersonalComputerProps
> = ({ data = [], handleClickBtnEdit }) => {
  const columns: TableColumn<PersonalComputerWithDepartmentLocationInterface>[] =
    useMemo(
      () => [
        {
          name: "Serial Number",
          selector: (row) => row.serialNumber,
          sortable: true,
          wrap: true,
        },
        {
          name: "Computer Name",
          selector: (row) => row.name,
          sortable: true,
          wrap: true,
        },
        {
          name: "Detail Name",
          selector: (row) => row.detailName,
          sortable: true,
          wrap: true,
        },
        {
          name: "Type",
          selector: (row) => row.pcType,
          sortable: true,
          wrap: true,
        },
        {
            name: "Category",
            selector: (row) => row.category,
            sortable: true,
            wrap: true,
          },
        {
          name: "Edit",
          cell: (row) => (
            <IonButton
              fill="clear"
              color="warning"
              onClick={() => {
                handleClickBtnEdit(row);
              }}
            >
              Edit
            </IonButton>
          ),
          center: true,
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
      expandableRows
      expandableRowsComponent={ContainerPersonalComputerDetail}
    />
  );
};

export default TableUnspecificPersonalComputer;
