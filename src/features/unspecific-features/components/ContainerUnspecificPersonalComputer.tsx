import {
  IonButton,
  IonCol,
  IonGrid,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonSearchbar,
  IonSpinner,
  RefresherEventDetail,
} from "@ionic/react";
import { Suspense, lazy, useState } from "react";
import { PersonalComputerInterface } from "../../../types/personal-computer-type";
import { useQueryUnspecific } from "../hooks/useQueryUnspecific";
import Card from "../../../components/Card";
import { ExportExcel } from "../../../helpers/export-personal-computer";
import ModalUpdateUnspecificCategory from "./ModalUpdateUnspecificCategory";

const TableUnspecificPersonalComputer = lazy(
  () => import("./TableUnspecificPersonalComputer")
);

const ContainerUnspecificPersonalComputer: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const { data, isLoading, refetch } = useQueryUnspecific(search);
  const [selectValue, setSelectValue] = useState<PersonalComputerInterface>();
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);

  const handleClickBtnEdit = (data: PersonalComputerInterface) => {
    setSelectValue(data);
    setIsOpenModalUpdate(true);
  };

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    refetch();
    event.detail.complete();
  };
  return (
    <>
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
        <IonRefresherContent />
      </IonRefresher>
      <IonGrid>
        <IonRow>
          <IonCol size="12">
            <IonSearchbar
              value={search}
              onIonInput={(e) => setSearch(e.detail.value!)}
              debounce={1000}
            />
          </IonCol>
          <IonCol>
            <Card title="Data Unspecific Computer">
              {isLoading ? (
                <IonSpinner name="crescent" />
              ) : (
                <>
                  <IonButton
                    className="float-right mb-3"
                    onClick={() => ExportExcel(data ? data : [], "IT Assets")}
                  >
                    Export to Excel
                  </IonButton>
                  <Suspense fallback={<IonSpinner name="crescent" />}>
                    <TableUnspecificPersonalComputer
                      data={data}
                      handleClickBtnEdit={(data) => handleClickBtnEdit(data)}
                    />
                  </Suspense>
                </>
              )}
            </Card>
          </IonCol>
        </IonRow>
      </IonGrid>
      <ModalUpdateUnspecificCategory
        data={selectValue}
        isOpen={isOpenModalUpdate}
        onDidDismiss={() => setIsOpenModalUpdate(false)}
      />
    </>
  );
};

export default ContainerUnspecificPersonalComputer;
