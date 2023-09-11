import { useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonInput, IonItem } from "@ionic/react";
import { CreateCategoryType } from "../../../types/category-type";
import { useCreateCategory } from "../hooks/useCreateCategory";

interface ModalCreateCategoryProps {
    isOpen: boolean;
    onDidDismiss: () => void;
}

const ModalCreateCategory: React.FC<ModalCreateCategoryProps> = ({ isOpen, onDidDismiss }) => {
    const [formData, setFormData] = useState<CreateCategoryType>({ name: "" });
    const { mutate } = useCreateCategory();

    const handleInput = (key: keyof CreateCategoryType, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        setFormData({ name: "" });
        onDidDismiss();
    }
    return (
        <Modal title="Create Category" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Name" labelPlacement="floating" value={formData.name} onIonInput={(e) => handleInput("name", e.detail.value!)} required />
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalCreateCategory;