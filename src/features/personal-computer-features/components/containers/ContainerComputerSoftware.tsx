import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";
import Card from "../../../../components/Card";
import { Suspense, lazy, useEffect, useState } from "react";
import { useQueryComputerSoftware } from "../../hooks/useQueryComputerSoftware";
import TableComputerSoftware from "../TableComputerSoftware";

const ModalCreateComputerSoftware = lazy(
  () => import("../modal/ModalCreateComputerSoftware")
);

interface ContainerComputerSoftwareProps {
  personalComputerId: string;
}

const ContainerComputerSoftware: React.FC<ContainerComputerSoftwareProps> = ({
  personalComputerId,
}) => {
  const { data } = useQueryComputerSoftware(personalComputerId);

  const [isOpenModalCreateSoftware, setIsOpenModalCreateSoftware] =
    useState<boolean>(false);

  const [isOpenModalUpdateSoftware, setIsOpenModalUpdateSoftware] =
    useState<boolean>(false);

  return (
    <>
      <Card title="Computer Software" headerColor="light">
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonButton
                fill="clear"
                className="float-right"
                onClick={() => setIsOpenModalCreateSoftware(true)}
              >
                Add Software
              </IonButton>
            </IonCol>
            <IonCol size="12">
              <Suspense>
                <TableComputerSoftware data={data} />
              </Suspense>
            </IonCol>
          </IonRow>
        </IonGrid>
      </Card>
      <Suspense>
        <ModalCreateComputerSoftware
          isOpen={isOpenModalCreateSoftware}
          onDidDismiss={() => setIsOpenModalCreateSoftware(false)}
          personalComputerId={personalComputerId}
        />
      </Suspense>
    </>
  );
};

export default ContainerComputerSoftware;
