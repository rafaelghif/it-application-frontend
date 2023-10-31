import { useEffect, useState } from "react";
import { SoftwareInterface } from "../types/software-type";
import Modal from "./Modal";
import { useQueryUnAssignedSoftware } from "../hooks/useQueryUnAssignedSoftware";
import {
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonList,
  IonRow,
  IonSearchbar,
  IonSpinner,
  IonText,
} from "@ionic/react";
import { radioButtonOnOutline, radioButtonOffOutline } from "ionicons/icons";

interface ModalSearchUnAssignedSoftwareProps {
  isOpen: boolean;
  setSelectedValue: (data: SoftwareInterface) => void;
  handleSelectOptions: (data: SoftwareInterface) => void;
  onDidDismiss: () => void;
  value?: string;
}

const ModalSearchUnAssignedSoftware: React.FC<
  ModalSearchUnAssignedSoftwareProps
> = ({
  isOpen,
  setSelectedValue,
  handleSelectOptions,
  onDidDismiss,
  value,
}) => {
  const [search, setSearch] = useState<string>("");
  const { isLoading, data } = useQueryUnAssignedSoftware(search);

  useEffect(() => {
    if (data) {
      const selected = data.find((res: SoftwareInterface) => res.id === value);
      if (selected) {
        setSelectedValue(selected);
      }
    }
  }, [data, setSelectedValue, value]);

  return (
    <Modal
      title="Search UnAssigned Software"
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
    >
      <IonGrid>
        <IonRow>
          <IonCol size="12">
            <IonSearchbar
              debounce={1500}
              value={search}
              onIonInput={(e) => setSearch(e.detail.value!)}
            />
          </IonCol>
          <IonCol size="12">
            {isLoading ? (
              <IonSpinner name="crescent" />
            ) : (
              <IonList>
                {data?.map((res: SoftwareInterface) => (
                  <IonItem
                    type="button"
                    key={res.id}
                    onClick={() => handleSelectOptions(res)}
                    className="cursor-pointer"
                  >
                    <IonIcon
                      icon={
                        res.id === value
                          ? radioButtonOnOutline
                          : radioButtonOffOutline
                      }
                      slot="start"
                    />
                    <IonText>
                      {res.name} - {res.productKey}
                    </IonText>
                  </IonItem>
                ))}
              </IonList>
            )}
          </IonCol>
        </IonRow>
      </IonGrid>
    </Modal>
  );
};

export default ModalSearchUnAssignedSoftware;
