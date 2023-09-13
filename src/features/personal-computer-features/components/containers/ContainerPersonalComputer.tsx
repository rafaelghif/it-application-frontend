import { IonButton, IonCol, IonGrid, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, IonSpinner, RefresherEventDetail } from "@ionic/react";
import { Suspense, lazy, useState } from "react";
import Card from "../../../../components/Card";
import { PersonalComputerInterface } from "../../../../types/personal-computer-type";
import { useQueryPersonalComputer } from "../../hooks/useQueryPersonalComputer";
import ModalUpdatePersonalComputer from "../modal/ModalUpdatePersonalComputer";
import { ExportExcel } from "../../../../helpers/export-personal-computer";

const TablePersonalComputer = lazy(() => import("../TablePersonalComputer"));

const ContainerPersonalComputer: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    const { data, isLoading, refetch } = useQueryPersonalComputer(search);
    const [selectValue, setSelectValue] = useState<PersonalComputerInterface>();
    const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);

    const handleClickBtnEdit = (data: PersonalComputerInterface) => {
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
                        <Card title="Data Personal Computer">
                            {isLoading ? (
                                <IonSpinner name="crescent" />
                            ) : (
                                <>
                                    <IonButton className="float-right mb-3" onClick={() => ExportExcel(data ? data : [], "IT Assets")}>Export to Excel</IonButton>
                                    <Suspense fallback={<IonSpinner name="crescent" />}>
                                        <TablePersonalComputer data={data} handleClickBtnEdit={(data) => handleClickBtnEdit(data)} />
                                    </Suspense>
                                </>
                            )}
                        </Card>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <ModalUpdatePersonalComputer isOpen={isOpenModalUpdate} data={selectValue} onDidDismiss={() => setIsOpenModalUpdate(false)} />
        </>
    );
}

export default ContainerPersonalComputer;