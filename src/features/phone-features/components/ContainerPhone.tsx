import { IonCol, IonGrid, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSpinner, RefresherEventDetail } from "@ionic/react";
import { Suspense, lazy, useState } from "react";
import Card from "../../../components/Card";
import { PhoneInterface } from "../../../types/phone-type";
import ModalUpdatePhone from "./ModalUpdatePhone";
import { useQueryPhone } from "../hooks/useQueryPhone";

const TablePhone = lazy(() => import("./TablePhone"));

const ContainerPhone: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const { data, isLoading, refetch } = useQueryPhone(search);
    const [selectValue, setSelectValue] = useState<PhoneInterface>();
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);

    const handleClickBtnEdit = (data: PhoneInterface) => {
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
                        <IonSearchbar value={search} onIonInput={(e) => setSearch(e.detail.value!)} debounce={1000} />
                    </IonCol>
                    <IonCol>
                        <Card title="Data Phones">
                            {isLoading ? (
                                <IonSpinner name="crescent" />
                            ) : (
                                <Suspense fallback={<IonSpinner name="crescent" />}>
                                    <TablePhone data={data} handleClickBtnEdit={(data) => handleClickBtnEdit(data)} />
                                </Suspense>
                            )}
                        </Card>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <ModalUpdatePhone data={selectValue} isOpen={isOpenModalUpdate} onDidDismiss={() => setIsOpenModalUpdate(false)} />
        </>
    );
}

export default ContainerPhone;