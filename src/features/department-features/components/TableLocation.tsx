import { TableColumn } from "react-data-table-component";
import Table from "../../../components/Table";
import { useMemo } from "react";
import { IonButton, IonText } from "@ionic/react";
import { formatDateTime } from "../../../libs/date-fns";
import { LocationInterface } from "../../../types/location-type";

interface TableLocationProps {
    data?: LocationInterface[];
    handleClickBtnEdit: (data: LocationInterface) => void;
}

const TableLocation: React.FC<TableLocationProps> = ({ data = [], handleClickBtnEdit }) => {
    const columns: TableColumn<LocationInterface>[] = useMemo(() => [{
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
        grow: 2,
        wrap: true
    }, {
        name: "Lot",
        selector: (row) => row.lot,
        sortable: true,
        wrap: true
    }, {
        name: "Status",
        cell: (row) => <IonText color={row.inActive ? "danger" : "success"}>{row.inActive ? "InActive" : "Active"}</IonText>,
        sortable: true,
    }, {
        name: "Update By",
        selector: (row) => row.updatedBy,
        sortable: true,
    }, {
        name: "Update At",
        selector: (row) => formatDateTime(row.updatedAt),
        sortable: true,
        wrap: true
    }, {
        name: "Edit",
        cell: (row) => <IonButton fill="clear" color="warning" onClick={() => { handleClickBtnEdit(row) }}>Edit</IonButton>,
        center: true
    }], [handleClickBtnEdit]);
    return (
        <Table columns={columns} data={data} responsive pagination dense striped highlightOnHover />
    );
}

export default TableLocation;