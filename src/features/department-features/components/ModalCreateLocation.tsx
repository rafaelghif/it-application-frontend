import { useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonInput, IonItem } from "@ionic/react";
import { CreateLocationType } from "../../../types/location-type";
import { useCreateLocation } from "../hooks/useCreateLocation";

interface ModalCreateLocationProps {
    isOpen: boolean;
    departmentId: string;
    onDidDismiss: () => void;
}

const ModalCreateLocation: React.FC<ModalCreateLocationProps> = ({ isOpen, departmentId, onDidDismiss }) => {
    const [formData, setFormData] = useState<CreateLocationType>({ name: "", lot: "", DepartmentId: departmentId });
    const { mutate } = useCreateLocation(departmentId);

    const handleInput = (key: keyof CreateLocationType, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        setFormData((prevState) => ({ ...prevState, name: "" }));
        onDidDismiss();
    }
    return (
        <Modal title="Create Location" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Department Id" labelPlacement="floating" value={formData.DepartmentId} onIonInput={(e) => handleInput("DepartmentId", e.detail.value!)} disabled required />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Name" labelPlacement="floating" value={formData.name} onIonInput={(e) => handleInput("name", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Lot" labelPlacement="floating" value={formData.lot} onIonInput={(e) => handleInput("lot", e.detail.value!)} required />
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalCreateLocation;