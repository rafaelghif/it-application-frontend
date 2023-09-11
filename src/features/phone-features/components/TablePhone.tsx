import { TableColumn } from "react-data-table-component";
import Table from "../../../components/Table";
import { useMemo } from "react";
import { IonButton, IonText } from "@ionic/react";
import { formatDateTime } from "../../../libs/date-fns";
import { PhoneInterface, PhoneWithDepartmentInterface } from "../../../types/phone-type";

interface TablePhoneProps {
    data?: PhoneWithDepartmentInterface[];
    handleClickBtnEdit: (data: PhoneInterface) => void;
}

const TablePhone: React.FC<TablePhoneProps> = ({ data = [], handleClickBtnEdit }) => {
    const columns: TableColumn<PhoneWithDepartmentInterface>[] = useMemo(() => [{
        name: "UserName",
        selector: (row) => row.name,
        sortable: true,
        grow: 2,
        wrap: true
    }, {
        name: "Ext No.",
        selector: (row) => row.extNo,
        sortable: true,
        wrap: true
    }, {
        name: "Speed Dial No",
        selector: (row) => row.speedDialNo,
        sortable: true,
        wrap: true
    }, {
        name: "Department",
        selector: (row) => row.Department.abbreviation,
        sortable: true,
        wrap: true,
        grow: 2
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
        <Table columns={columns} data={data} responsive pagination striped highlightOnHover />
    );
}

export default TablePhone;