import { IonButton, IonCol, IonGrid, IonRefresher, IonRefresherContent, IonRow, IonSpinner, RefresherEventDetail } from "@ionic/react";
import { Suspense, lazy, useState } from "react";
import Card from "../../../components/Card";
import { DepartmentInterface } from "../../../types/department-type";
import { LocationInterface } from "../../../types/location-type";
import { useQueryLocationByDepartment } from "../hooks/useQueryLocationByDepartment";
import { ExpanderComponentProps } from "react-data-table-component";
import ModalUpdateLocation from "./ModalUpdateLocation";
import ModalCreateLocation from "./ModalCreateLocation";

const TableLocation = lazy(() => import("./TableLocation"));

const ContainerLocation: React.FC<ExpanderComponentProps<DepartmentInterface>> = ({ data: departmentData }) => {
    const { data, isLoading, refetch } = useQueryLocationByDepartment(departmentData.id);
    const [selectValue, setSelectValue] = useState<LocationInterface>();
    const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);

    const handleClickBtnEdit = (data: LocationInterface) => {
        setSelectValue(data);
        setIsOpenModalUpdate(true);
    }

    const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
        refetch();
        event.detail.complete();
    }
    return (
        <>
            <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                <IonRefresherContent />
            </IonRefresher>
            <IonGrid>
                <IonRow>
                    <IonCol size="12">
                        <IonButton fill="clear" onClick={() => setIsOpenModalCreate(true)} className="float-right">Create Location</IonButton>
                    </IonCol>
                    <IonCol>
                        <Card title={`Data Location ${departmentData.name}`} headerColor="light">
                            {isLoading ? (
                                <IonSpinner name="crescent" />
                            ) : (
                                <Suspense fallback={<IonSpinner name="crescent" />}>
                                    <TableLocation data={data} handleClickBtnEdit={(data) => handleClickBtnEdit(data)} />
                                </Suspense>
                            )}
                        </Card>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <ModalCreateLocation departmentId={departmentData.id} isOpen={isOpenModalCreate} onDidDismiss={() => setIsOpenModalCreate(false)} />
            <ModalUpdateLocation data={selectValue} isOpen={isOpenModalUpdate} onDidDismiss={() => setIsOpenModalUpdate(false)} />
        </>
    );
}

export default ContainerLocation;