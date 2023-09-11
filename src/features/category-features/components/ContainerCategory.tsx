import { IonCol, IonGrid, IonRefresher, IonRefresherContent, IonRow, IonSpinner, RefresherEventDetail } from "@ionic/react";
import { Suspense, lazy, useState } from "react";
import Card from "../../../components/Card";
import { CategoryInterface } from "../../../types/category-type";
import { useQueryCategory } from "../hooks/useQueryCategory";
import ModalUpdateCategory from "./ModalUpdateCategory";

const TableCategory = lazy(() => import("./TableCategory"));

const ContainerCategory: React.FC = () => {
    const { data, isLoading, refetch } = useQueryCategory();
    const [selectValue, setSelectValue] = useState<CategoryInterface>();
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);

    const handleClickBtnEdit = (data: CategoryInterface) => {
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
                        <Card title="Data Category">
                            {isLoading ? (
                                <IonSpinner name="crescent" />
                            ) : (
                                <Suspense fallback={<IonSpinner name="crescent" />}>
                                    <TableCategory data={data} handleClickBtnEdit={(data) => handleClickBtnEdit(data)} />
                                </Suspense>
                            )}
                        </Card>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <ModalUpdateCategory data={selectValue} isOpen={isOpenModalUpdate} onDidDismiss={() => setIsOpenModalUpdate(false)} />
        </>
    );
}

export default ContainerCategory;