import { useEffect, useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonCheckbox, IonInput, IonItem } from "@ionic/react";
import { LocationInterface, UpdateLocationType } from "../../../types/location-type";
import { useUpdateLocation } from "../hooks/useUpdateLocation";

interface ModalUpdateLocationProps {
    isOpen: boolean;
    data?: LocationInterface;
    onDidDismiss: () => void;
}

const ModalUpdateLocation: React.FC<ModalUpdateLocationProps> = ({ isOpen, data, onDidDismiss }) => {
    const [formData, setFormData] = useState<UpdateLocationType>({});
    const { mutate } = useUpdateLocation(formData.DepartmentId || "");

    const handleInput = (key: keyof UpdateLocationType, value: string | boolean) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        onDidDismiss();
    }

    useEffect(() => {
        setFormData((prevState) => ({ ...prevState, id: data?.id, name: data?.name, lot: data?.lot, inActive: data?.inActive, DepartmentId: data?.DepartmentId }));
    }, [data]);

    return (
        <Modal title="Update Location" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Id" labelPlacement="floating" value={formData?.id} onIonInput={(e) => handleInput("id", e.detail.value!)} required disabled />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Department Id" labelPlacement="floating" value={formData?.DepartmentId} onIonInput={(e) => handleInput("DepartmentId", e.detail.value!)} required disabled />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Name" labelPlacement="floating" value={formData?.name} onIonInput={(e) => handleInput("name", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Lot" labelPlacement="floating" value={formData?.lot} onIonInput={(e) => handleInput("lot", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonCheckbox checked={formData?.inActive} onIonChange={(e) => handleInput("inActive", e.detail.checked!)}>InActive</IonCheckbox>
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalUpdateLocation;