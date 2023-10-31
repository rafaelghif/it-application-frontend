import { useState } from "react";
import Modal from "../../../components/Modal";
import {
  IonButton,
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonTextarea,
} from "@ionic/react";
import { CreateSoftwareType, LicenseType } from "../../../types/software-type";
import { useCreateSoftware } from "../hooks/useCreateSoftware";
import { addYearFromString } from "../../../libs/date-fns";

interface ModalCreateSoftwareProps {
  isOpen: boolean;
  onDidDismiss: () => void;
}

const ModalCreateSoftware: React.FC<ModalCreateSoftwareProps> = ({
  isOpen,
  onDidDismiss,
}) => {
  const [formData, setFormData] = useState<CreateSoftwareType>({
    name: "",
    version: "",
    licenseType: "Subscription",
    productKey: "",
    startDate: "",
    expireDate: "",
    remark: "",
  });
  const { mutate } = useCreateSoftware();

  const handleInput = (key: keyof CreateSoftwareType, value: string) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleChangeLicenseType = (licenseType: LicenseType) => {
    setFormData((prevState) => ({
      ...prevState,
      licenseType: licenseType,
      startDate: "",
      expireDate: "",
    }));
  };

  const handleInputStartDate = (startDate: string) => {
    if (formData.licenseType === "Subscription") {
      setFormData((prevState) => ({
        ...prevState,
        startDate: startDate,
        expireDate: addYearFromString(startDate, 1),
      }));
    } else {
      setFormData((prevState) => ({ ...prevState, startDate: startDate }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
    setFormData({
      name: "",
      version: "",
      licenseType: "Subscription",
      productKey: "",
      startDate: "",
      expireDate: "",
      remark: "",
    });
    onDidDismiss();
  };
  return (
    <Modal title="Create Software" isOpen={isOpen} onDidDismiss={onDidDismiss}>
      <form onSubmit={handleSubmit}>
        <IonItem>
          <IonInput
            type="text"
            label="Name"
            labelPlacement="floating"
            value={formData.name}
            onIonInput={(e) => handleInput("name", e.detail.value!)}
            required
          />
        </IonItem>
        <IonItem>
          <IonInput
            type="text"
            label="Version"
            labelPlacement="floating"
            value={formData.version}
            onIonInput={(e) => handleInput("version", e.detail.value!)}
            required
          />
        </IonItem>
        <IonItem>
          <IonSelect
            label="License Type"
            labelPlacement="floating"
            value={formData.licenseType}
            onIonChange={(e) => handleChangeLicenseType(e.detail.value)}
          >
            <IonSelectOption value="Subscription">Subscription</IonSelectOption>
            <IonSelectOption value="Perpetual">Perpetual</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonInput
            type="text"
            label="Product key"
            labelPlacement="floating"
            value={formData.productKey}
            onIonInput={(e) => handleInput("productKey", e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonInput
            type="date"
            label="Start Date / Purchase Date"
            labelPlacement="floating"
            value={formData.startDate}
            onIonInput={(e) => handleInputStartDate(e.detail.value!)}
            required
          />
        </IonItem>
        <IonItem hidden={formData.licenseType === "Perpetual"}>
          <IonInput
            type="date"
            label="Expire Date"
            labelPlacement="floating"
            value={formData.expireDate}
            onIonInput={(e) => handleInput("expireDate", e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonTextarea
            label="Remark"
            labelPlacement="floating"
            value={formData.remark}
            onIonInput={(e) => handleInput("remark", e.detail.value!)}
            required
          />
        </IonItem>
        <IonButton type="submit" expand="block">
          Submit
        </IonButton>
      </form>
    </Modal>
  );
};

export default ModalCreateSoftware;
