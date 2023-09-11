import { IonCol, IonGrid, IonRefresher, IonRefresherContent, IonRow, IonSpinner, RefresherEventDetail } from "@ionic/react";
import { Suspense, lazy, useState } from "react";
import Card from "../../../components/Card";
import { SoftwareInterface } from "../../../types/software-type";
import { useQuerySoftware } from "../hooks/useQuerySoftware";
import ModalUpdateSoftware from "./ModalUpdateSoftware";

const TableSoftware = lazy(() => import("./TableSoftware"));

const ContainerSoftware: React.FC = () => {
    const { data, isLoading, refetch } = useQuerySoftware();
    const [selectValue, setSelectValue] = useState<SoftwareInterface>();
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);

    const handleClickBtnEdit = (data: SoftwareInterface) => {
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
                    <IonCol>
                        <Card title="Data Softwares">
                            {isLoading ? (
                                <IonSpinner name="crescent" />
                            ) : (
                                <Suspense fallback={<IonSpinner name="crescent" />}>
                                    <TableSoftware data={data} handleClickBtnEdit={(data) => handleClickBtnEdit(data)} />
                                </Suspense>
                            )}
                        </Card>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <ModalUpdateSoftware data={selectValue} isOpen={isOpenModalUpdate} onDidDismiss={() => setIsOpenModalUpdate(false)} />
        </>
    );
}

export default ContainerSoftware;