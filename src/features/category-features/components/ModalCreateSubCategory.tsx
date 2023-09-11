import { useEffect, useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonInput, IonItem } from "@ionic/react";
import { CreateSubCategoryType } from "../../../types/sub-category-type";
import { useCreateSubCategory } from "../hooks/useCreateSubCategory";

interface ModalCreateSubCategoryProps {
    isOpen: boolean;
    categoryId?: string;
    onDidDismiss: () => void;
}

const ModalCreateSubCategory: React.FC<ModalCreateSubCategoryProps> = ({ isOpen, categoryId = "", onDidDismiss }) => {
    const [formData, setFormData] = useState<CreateSubCategoryType>({ name: "", CategoryId: categoryId });
    const { mutate } = useCreateSubCategory(categoryId);

    const handleInput = (key: keyof CreateSubCategoryType, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        setFormData((prevState) => ({ ...prevState, name: "" }));
        onDidDismiss();
    }

    useEffect(() => {
        setFormData((prevState) => ({ ...prevState, CategoryId: categoryId }));
    }, [categoryId]);

    return (
        <Modal title="Create Sub Category" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Category Id" labelPlacement="floating" value={formData.CategoryId} onIonInput={(e) => handleInput("CategoryId", e.detail.value!)} disabled required />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Name" labelPlacement="floating" value={formData.name} onIonInput={(e) => handleInput("name", e.detail.value!)} required />
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalCreateSubCategory;