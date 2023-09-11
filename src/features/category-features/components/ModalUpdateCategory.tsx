import { useEffect, useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonCheckbox, IonInput, IonItem } from "@ionic/react";
import { CategoryInterface, UpdateCategoryType } from "../../../types/category-type";
import { useUpdateCategory } from "../hooks/useUpdateCategory";

interface ModalUpdateCategoryProps {
    isOpen: boolean;
    data?: CategoryInterface;
    onDidDismiss: () => void;
}

const ModalUpdateCategory: React.FC<ModalUpdateCategoryProps> = ({ isOpen, data, onDidDismiss }) => {
    const [formData, setFormData] = useState<UpdateCategoryType>({});
    const { mutate } = useUpdateCategory();

    const handleInput = (key: keyof UpdateCategoryType, value: string | boolean) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        onDidDismiss();
    }

    useEffect(() => {
        setFormData((prevState) => ({ ...prevState, id: data?.id, name: data?.name, inActive: data?.inActive }));
    }, [data]);

    return (
        <Modal title="Update Category" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Id" labelPlacement="floating" value={formData?.id} onIonInput={(e) => handleInput("id", e.detail.value!)} required disabled />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Name" labelPlacement="floating" value={formData?.name} onIonInput={(e) => handleInput("name", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonCheckbox checked={formData?.inActive} onIonChange={(e) => handleInput("inActive", e.detail.checked!)}>InActive</IonCheckbox>
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalUpdateCategory;