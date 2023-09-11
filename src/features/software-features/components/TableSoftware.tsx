import { TableColumn } from "react-data-table-component";
import Table from "../../../components/Table";
import { useMemo } from "react";
import { IonButton, IonText } from "@ionic/react";
import { formatDateTime, isExpired, isWithinToleranceDays } from "../../../libs/date-fns";
import { SoftwareInterface } from "../../../types/software-type";

interface TableSoftwareProps {
    data?: SoftwareInterface[];
    handleClickBtnEdit: (data: SoftwareInterface) => void;
}

const TableSoftware: React.FC<TableSoftwareProps> = ({ data = [], handleClickBtnEdit }) => {
    const columns: TableColumn<SoftwareInterface>[] = useMemo(() => [{
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
        grow: 2,
        wrap: true
    }, {
        name: "License Type",
        selector: (row) => row.licenseType,
        sortable: true,
        wrap: true
    }, {
        name: "Start Date",
        selector: (row) => row.startDate,
        sortable: true,
        wrap: true
    }, {
        name: "Expire Date",
        selector: (row) => row.expireDate,
        sortable: true,
        wrap: true,
        conditionalCellStyles: [{
            when: row => isWithinToleranceDays(row.expireDate, 60),
            style: {
                color: "orange"
            }
        }, {
            when: row => isWithinToleranceDays(row.expireDate, 14) || isExpired(row.expireDate),
            style: {
                color: "red"
            }
        }]
    }, {
        name: "Remark",
        selector: (row) => row.remark,
        width: "320px",
        sortable: true,
        grow: 2,
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
        <Table columns={columns} data={data} responsive pagination striped highlightOnHover />
    );
}

export default TableSoftware;