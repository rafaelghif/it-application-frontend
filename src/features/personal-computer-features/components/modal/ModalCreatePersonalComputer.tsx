import { IonButton, IonInput, IonItem, IonSpinner } from "@ionic/react";
import Modal from "../../../../components/Modal";
import { CreatePersonalComputerType } from "../../../../types/personal-computer-type";
import { Suspense, lazy, useState } from "react";
import { useCreatePersonalComputer } from "../../hooks/useCreatePersonalComputer";

const SelectPersonalComputerCategory = lazy(
  () => import("../../../../components/SelectPersonalComputerCategory")
);

const SelectDepartment = lazy(
  () => import("../../../../components/SelectDepartment")
);
const SelectLocationByDepartment = lazy(
  () => import("../../../../components/SelectLocationByDepartment")
);

interface ModalCreatePersonalComputerProps {
  isOpen: boolean;
  onDidDismiss: () => void;
}

const ModalCreatePersonalComputer: React.FC<
  ModalCreatePersonalComputerProps
> = ({ isOpen, onDidDismiss }) => {
  const [formData, setFormData] = useState<CreatePersonalComputerType>({
    assetNo: "",
    invoiceNo: "",
    ownerName: "",
    serialNumber: "",
    detailName: "",
    DepartmentId: "",
    LocationId: "",
    category: "Unspecified",
  });
  const { mutate } = useCreatePersonalComputer();

  const handleInput = (
    key: keyof CreatePersonalComputerType,
    value: string
  ) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleInputDepartment = (id: string) => {
    setFormData((prevState) => ({
      ...prevState,
      DepartmentId: id,
      LocationId: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
    onDidDismiss();
    setFormData({
      assetNo: "",
      invoiceNo: "",
      ownerName: "",
      serialNumber: "",
      detailName: "",
      DepartmentId: "",
      LocationId: "",
      category: "Unspecified",
    });
  };

  return (
    <Modal
      title="Create Personal Computer"
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
    >
      <form onSubmit={handleSubmit}>
        <IonItem>
          <IonInput
            type="text"
            label="Serial Number"
            labelPlacement="floating"
            value={formData.serialNumber}
            onIonInput={(e) => handleInput("serialNumber", e.detail.value!)}
            required
          />
        </IonItem>
        <IonItem>
          <IonInput
            label="Asset No"
            labelPlacement="floating"
            value={formData.assetNo}
            onIonInput={(e) => handleInput("assetNo", e.detail.value!)}
            required
          />
        </IonItem>
        <IonItem>
          <IonInput
            label="Invoice No"
            labelPlacement="floating"
            value={formData.invoiceNo}
            onIonInput={(e) => handleInput("invoiceNo", e.detail.value!)}
            required
          />
        </IonItem>
        <IonItem>
          <IonInput
            label="Owner Name"
            labelPlacement="floating"
            value={formData.ownerName}
            onIonInput={(e) => handleInput("ownerName", e.detail.value!)}
            required
          />
        </IonItem>
        <IonItem>
          <IonInput
            label="Detail Name"
            labelPlacement="floating"
            value={formData.detailName}
            onIonInput={(e) => handleInput("detailName", e.detail.value!)}
            required
          />
        </IonItem>
        <Suspense fallback={<IonSpinner name="crescent" />}>
          <SelectDepartment
            value={formData.DepartmentId}
            onChange={(id) => handleInputDepartment(id)}
          />
          {formData?.DepartmentId && (
            <SelectLocationByDepartment
              value={formData.LocationId}
              departmentId={formData.DepartmentId}
              onChange={(id) => handleInput("LocationId", id)}
            />
          )}
          <SelectPersonalComputerCategory
            value={formData.category}
            onChange={(value) => handleInput("category", value)}
          />
        </Suspense>
        <IonButton type="submit" expand="block">
          Submit
        </IonButton>
      </form>
    </Modal>
  );
};

export default ModalCreatePersonalComputer;
