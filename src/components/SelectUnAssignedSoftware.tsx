import {
  IonInput,
  IonItem,
  IonSpinner,
} from "@ionic/react";
import ModalSearchUnAssignedSoftware from "./ModalSearchUnAssignedSoftware";
import { Suspense, useEffect, useState } from "react";
import { SoftwareInterface } from "../types/software-type";

interface SelectDepartmentProps {
  value?: string;
  onChange: (id: string) => void;
}

const SelectUnAssignedSoftware: React.FC<SelectDepartmentProps> = ({
  value = "",
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState<
    SoftwareInterface | undefined
  >();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleSelectOptions = (data: SoftwareInterface) => {
    onChange(data.id);
    setSelectedValue(data);
    setIsOpenModal(false);
  };

  useEffect(() => {
    if (!value) {
      setSelectedValue(undefined);
    }
  }, [value]);
  return (
    <>
      <IonItem>
        <IonInput
          label="Product"
          labelPlacement="floating"
          value={selectedValue?.name}
          onClick={() => setIsOpenModal(true)}
          readonly
        />
      </IonItem>
      <Suspense fallback={<IonSpinner name="dots" />}>
        <ModalSearchUnAssignedSoftware
          isOpen={isOpenModal}
          value={value}
          setSelectedValue={(data) => setSelectedValue(data)}
          handleSelectOptions={(data) => handleSelectOptions(data)}
          onDidDismiss={() => setIsOpenModal(false)}
        />
      </Suspense>
    </>
  );
};

export default SelectUnAssignedSoftware;
