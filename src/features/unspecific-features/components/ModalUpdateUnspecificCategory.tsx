import {
  IonButton,
  IonInput,
  IonItem,
  IonModal,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import {
  PersonalComputerInterface,
  UpdatePersonalComputerType,
} from "../../../types/personal-computer-type";
import { useEffect, useState } from "react";
import { useUpdatePersonalComputerCategory } from "../hooks/useUpdatePersonalComputerCategory";
import SelectPersonalComputerCategory from "../../../components/SelectPersonalComputerCategory";

interface ModalUpdateUnspecificCategoryProps {
  isOpen: boolean;
  data?: PersonalComputerInterface;
  onDidDismiss: () => void;
}

const ModalUpdateUnspecificCategory: React.FC<
  ModalUpdateUnspecificCategoryProps
> = ({ isOpen, data, onDidDismiss }) => {
  const [formData, setFormData] = useState<UpdatePersonalComputerType>({});
  const { mutate } = useUpdatePersonalComputerCategory();

  const handleInput = (
    key: keyof UpdatePersonalComputerType,
    value: string | boolean
  ) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
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
      category: data?.category,
    }));
  }, [data]);

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onDidDismiss}>
      <form onSubmit={handleSubmit}>
        <IonItem>
          <IonInput
            label="Id"
            labelPlacement="floating"
            value={formData?.id}
            onIonInput={(e) => handleInput("id", e.detail.value!)}
            required
            disabled
          />
        </IonItem>
        <SelectPersonalComputerCategory
          value={formData?.category}
          onChange={(value) => handleInput("category", value)}
        />
        <IonButton type="submit" expand="block">
          Submit
        </IonButton>
      </form>
    </IonModal>
  );
};

export default ModalUpdateUnspecificCategory;
