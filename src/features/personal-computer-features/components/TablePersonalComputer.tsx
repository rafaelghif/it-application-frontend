import { TableColumn } from "react-data-table-component";
import Table from "../../../components/Table";
import { useMemo } from "react";
import { IonButton, IonText } from "@ionic/react";
import { PersonalComputerInterface, PersonalComputerWithDepartmentLocationInterface } from "../../../types/personal-computer-type";
import ContainerPersonalComputerDetail from "./containers/ContainerPersonalComputerDetail";

interface TablePersonalComputersProps {
    data?: PersonalComputerWithDepartmentLocationInterface[];
    handleClickBtnEdit: (data: PersonalComputerInterface) => void;
}

const TablePersonalComputer: React.FC<TablePersonalComputersProps> = ({ data = [], handleClickBtnEdit }) => {
    const columns: TableColumn<PersonalComputerWithDepartmentLocationInterface>[] = useMemo(() => [{
        name: "Serial Number",
        selector: (row) => row.serialNumber,
        sortable: true,
        wrap: true
    }, {
        name: "Computer Name",
        selector: (row) => row.name,
        sortable: true,
        wrap: true
    }, {
        name: "Detail Name",
        selector: (row) => row.detailName,
        sortable: true,
        wrap: true
    }, {
        name: "Owner Name",
        selector: (row) => row.ownerName,
        sortable: true,
        wrap: true
    }, {
        name: "Previous Owner",
        selector: (row) => row.previousOwner,
        sortable: true,
        wrap: true
    }, {
        name: "Type",
        selector: (row) => row.pcType,
        sortable: true,
        wrap: true
    }, {
        name: "Status",
        cell: (row) => <IonText color={row.status === "Operational" ? "success" : row.status === "Not Operating" ? "medium" : "danger"}>{row.status}</IonText>,
        wrap: true
    }, {
        name: "Active",
        cell: (row) => <IonText color={row.inActive ? "danger" : "success"}>{row.inActive ? "InActive" : "Active"}</IonText>,
        sortable: true,
    }, {
        name: "Edit",
        cell: (row) => <IonButton fill="clear" color="warning" onClick={() => { handleClickBtnEdit(row) }}>Edit</IonButton>,
        center: true
    }], []);
    return (
        <Table columns={columns} data={data} responsive pagination striped highlightOnHover expandableRows expandableRowsComponent={ContainerPersonalComputerDetail} />
    );
}

export default TablePersonalComputer;