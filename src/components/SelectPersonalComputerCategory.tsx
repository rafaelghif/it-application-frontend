import { IonItem, IonSelect, IonSelectOption } from "@ionic/react";

interface SelectPersonalComputerCategoryProps {
  value?: string;
  onChange: (value: string) => void;
}

const SelectPersonalComputerCategory: React.FC<
  SelectPersonalComputerCategoryProps
> = ({ value, onChange }) => {
  return (
    <IonItem>
      <IonSelect
        label="Category"
        labelPlacement="floating"
        value={value}
        onIonChange={(e) => onChange(e.detail.value!)}
      >
        <IonSelectOption value="Unspecified">Unspecified</IonSelectOption>
        <IonSelectOption value="Server">Server</IonSelectOption>
        <IonSelectOption value="Personal Computer">
          Personal Computer
        </IonSelectOption>
        <IonSelectOption value="Laptop">Laptop</IonSelectOption>
      </IonSelect>
    </IonItem>
  );
};

export default SelectPersonalComputerCategory;
