import { useEffect, useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonCheckbox, IonInput, IonItem } from "@ionic/react";
import { SubCategoryInterface, UpdateSubCategoryType } from "../../../types/sub-category-type";
import { useUpdateSubCategory } from "../hooks/useUpdateSubCategory";

interface ModalUpdateSubCategoryProps {
    isOpen: boolean;
    data?: SubCategoryInterface;
    onDidDismiss: () => void;
}

const ModalUpdateSubCategory: React.FC<ModalUpdateSubCategoryProps> = ({ isOpen, data, onDidDismiss }) => {
    const [formData, setFormData] = useState<UpdateSubCategoryType>({});
    const { mutate } = useUpdateSubCategory(data?.CategoryId || "");

    const handleInput = (key: keyof UpdateSubCategoryType, value: string | boolean) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        onDidDismiss();
    }

    useEffect(() => {
        setFormData((prevState) => ({ ...prevState, id: data?.id, name: data?.name, inActive: data?.inActive, CategoryId: data?.CategoryId }));
    }, [data]);

    return (
        <Modal title="Update Sub Category" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Id" labelPlacement="floating" value={formData?.id} onIonInput={(e) => handleInput("id", e.detail.value!)} required disabled />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Category Id" labelPlacement="floating" value={formData?.CategoryId} onIonInput={(e) => handleInput("CategoryId", e.detail.value!)} required disabled />
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

export default ModalUpdateSubCategory;