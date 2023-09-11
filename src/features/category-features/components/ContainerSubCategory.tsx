import { IonButton, IonCol, IonGrid, IonRefresher, IonRefresherContent, IonRow, IonSpinner, RefresherEventDetail } from "@ionic/react";
import { Suspense, lazy, useState } from "react";
import Card from "../../../components/Card";
import { ExpanderComponentProps } from "react-data-table-component";
import { CategoryInterface } from "../../../types/category-type";
import { useQuerySubCategory } from "../hooks/useQuerySubCategory";
import { SubCategoryInterface } from "../../../types/sub-category-type";
import ModalCreateSubCategory from "./ModalCreateSubCategory";
import ModalUpdateSubCategory from "./ModalUpdateSubCategory";

const TableSubCategory = lazy(() => import("./TableSubCategory"));

const ContainerSubCategory: React.FC<ExpanderComponentProps<CategoryInterface>> = ({ data: categoryData }) => {
    const { data, isLoading, refetch } = useQuerySubCategory(categoryData.id);
    const [selectValue, setSelectValue] = useState<SubCategoryInterface>();
    const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);

    const handleClickBtnEdit = (data: SubCategoryInterface) => {
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
                        <IonButton fill="clear" onClick={() => setIsOpenModalCreate(true)} className="float-right">Create Sub Category</IonButton>
                    </IonCol>
                    <IonCol>
                        <Card title={`Data Category ${categoryData.name}`} headerColor="light">
                            {isLoading ? (
                                <IonSpinner name="crescent" />
                            ) : (
                                <Suspense fallback={<IonSpinner name="crescent" />}>
                                    <TableSubCategory data={data} handleClickBtnEdit={(data) => handleClickBtnEdit(data)} />
                                </Suspense>
                            )}
                        </Card>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <ModalCreateSubCategory categoryId={categoryData.id} isOpen={isOpenModalCreate} onDidDismiss={() => setIsOpenModalCreate(false)} />
            <ModalUpdateSubCategory data={selectValue} isOpen={isOpenModalUpdate} onDidDismiss={() => setIsOpenModalUpdate(false)} />
        </>
    );
}

export default ContainerSubCategory;