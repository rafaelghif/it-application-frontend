import { IonItem, IonSelect, IonSelectOption } from "@ionic/react";
import { useQueryActiveLocationByDepartment } from "../hooks/useQueryActiveLocationByDepartment";

interface SelectLocationByDepartmentProps {
    value?: string;
    departmentId?: string;
    onChange: (id: string) => void;
}

const SelectLocationByDepartment: React.FC<SelectLocationByDepartmentProps> = ({ value = "", departmentId = "departmentId", onChange }) => {
    const { data } = useQueryActiveLocationByDepartment(departmentId);
    return (
        <IonItem>
            <IonSelect label="Location" labelPlacement="floating" value={value} onIonChange={(e) => onChange(e.detail.value!)}>
                <IonSelectOption value="">Select Location</IonSelectOption>
                {data?.map((location) => (
                    <IonSelectOption key={`location-${location.id}`} value={location.id}>{location.name}</IonSelectOption>
                ))}
            </IonSelect>
        </IonItem>
    );
}

export default SelectLocationByDepartment;