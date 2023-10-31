import { IonButton, IonInput, IonItem, IonSpinner } from "@ionic/react";
import Modal from "../../../../components/Modal";
import { Suspense, lazy, useEffect, useState } from "react";
import { CreateComputerSoftwareType } from "../../../../types/computer-software-type";
import { useCreateComputerSoftware } from "../../hooks/useCreateComputerSoftware";

const SelectUnAssignedSoftware = lazy(
  () => import("../../../../components/SelectUnAssignedSoftware")
);

interface ModalCreateComputerSoftwareProps {
  isOpen: boolean;
  onDidDismiss: () => void;
  personalComputerId: string;
}

const ModalCreateComputerSoftware: React.FC<
  ModalCreateComputerSoftwareProps
> = ({ isOpen, personalComputerId, onDidDismiss }) => {
  const [formData, setFormData] = useState<CreateComputerSoftwareType>({
    PersonalComputerId: "",
    SoftwareId: "",
  });

  const { mutate } = useCreateComputerSoftware();

  const handleInput = (
    key: keyof CreateComputerSoftwareType,
    value: string
  ) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
    onDidDismiss();
    setFormData((prevState) => ({ ...prevState, SoftwareId: "" }));
  };

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      PersonalComputerId: personalComputerId,
    }));
  }, [personalComputerId]);

  return (
    <Modal
      title="Create Computer Software"
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
    >
      <form onSubmit={handleSubmit}>
        <IonItem>
          <IonInput
            type="text"
            label="Personal Computer Id"
            labelPlacement="floating"
            readonly
            value={personalComputerId}
          />
        </IonItem>
        <Suspense fallback={<IonSpinner name="crescent" />}>
          <SelectUnAssignedSoftware
            value={formData.SoftwareId}
            onChange={(id) => handleInput("SoftwareId", id)}
          />
        </Suspense>
        <IonButton type="submit" expand="block">
          Submit
        </IonButton>
      </form>
    </Modal>
  );
};

export default ModalCreateComputerSoftware;
