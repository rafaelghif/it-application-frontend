import { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import {
  IonButton,
  IonCheckbox,
  IonInput,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonTextarea,
} from "@ionic/react";
import {
  LicenseType,
  SoftwareInterface,
  UpdateSoftwareType,
} from "../../../types/software-type";
import { useUpdateSoftware } from "../hooks/useUpdateSoftware";
import { addYearFromString } from "../../../libs/date-fns";

interface ModalUpdateSoftwareProps {
  isOpen: boolean;
  data?: SoftwareInterface;
  onDidDismiss: () => void;
}

const ModalUpdateSoftware: React.FC<ModalUpdateSoftwareProps> = ({
  isOpen,
  data,
  onDidDismiss,
}) => {
  const [formData, setFormData] = useState<UpdateSoftwareType>({});
  const { mutate } = useUpdateSoftware();

  const handleInput = (
    key: keyof UpdateSoftwareType,
    value: string | boolean
  ) => {
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
    onDidDismiss();
  };

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      id: data?.id,
      name: data?.name,
      version: data?.version,
      licenseType: data?.licenseType,
      productKey: data?.productKey,
      startDate: data?.startDate,
      expireDate: data?.expireDate,
      remark: data?.remark,
      inActive: data?.inActive,
    }));
  }, [data]);

  return (
    <Modal title="Update Software" isOpen={isOpen} onDidDismiss={onDidDismiss}>
      <form onSubmit={handleSubmit}>
        <IonItem>
          <IonInput
            type="text"
            label="Name"
            labelPlacement="floating"
            value={formData?.name}
            onIonInput={(e) => handleInput("name", e.detail.value!)}
            required
          />
        </IonItem>
        <IonItem>
          <IonInput
            type="text"
            label="Version"
            labelPlacement="floating"
            value={formData?.version}
            onIonInput={(e) => handleInput("version", e.detail.value!)}
            required
          />
        </IonItem>
        <IonItem>
          <IonSelect
            label="License Type"
            labelPlacement="floating"
            value={formData?.licenseType}
            onIonChange={(e) => handleChangeLicenseType(e.detail.value)}
          >
            <IonSelectOption value="Subscription">Subscription</IonSelectOption>
            <IonSelectOption value="Perpetual">Perpetual</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonInput
            type="text"
            label="Product Key"
            labelPlacement="floating"
            value={formData?.productKey}
            onIonInput={(e) => handleInput("productKey", e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonInput
            type="date"
            label="Start Date / Purchase Date"
            labelPlacement="floating"
            value={formData?.startDate}
            onIonInput={(e) => handleInputStartDate(e.detail.value!)}
            required
          />
        </IonItem>
        <IonItem hidden={formData?.licenseType === "Perpetual"}>
          <IonInput
            type="date"
            label="Expire Date"
            labelPlacement="floating"
            value={formData?.expireDate}
            onIonInput={(e) => handleInput("expireDate", e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonTextarea
            label="Remark"
            labelPlacement="floating"
            value={formData?.remark}
            onIonInput={(e) => handleInput("remark", e.detail.value!)}
            required
          />
        </IonItem>
        <IonItem>
          <IonCheckbox
            checked={formData?.inActive}
            onIonChange={(e) => handleInput("inActive", e.detail.checked!)}
          >
            InActive
          </IonCheckbox>
        </IonItem>
        <IonButton type="submit" expand="block">
          Submit
        </IonButton>
      </form>
    </Modal>
  );
};

export default ModalUpdateSoftware;
