import { Suspense, lazy, useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonInput, IonItem, IonSpinner } from "@ionic/react";
import { CreatePhoneType } from "../../../types/phone-type";
import { useCreatePhone } from "../hooks/useCreatePhone";

const SelectDepartment = lazy(() => import("../../../components/SelectDepartment"));

interface ModalCreatePhoneProps {
    isOpen: boolean;
    onDidDismiss: () => void;
}

const ModalCreatePhone: React.FC<ModalCreatePhoneProps> = ({ isOpen, onDidDismiss }) => {
    const [formData, setFormData] = useState<CreatePhoneType>({ name: "", extNo: "", speedDialNo: "", DepartmentId: "" });
    const { mutate } = useCreatePhone();

    const handleInput = (key: keyof CreatePhoneType, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        setFormData({ name: "", extNo: "", speedDialNo: "", DepartmentId: "" });
        onDidDismiss();
    }
    return (
        <Modal title="Create Phone" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="UserName" labelPlacement="floating" value={formData.name} onIonInput={(e) => handleInput("name", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Ext No" labelPlacement="floating" value={formData.extNo} onIonInput={(e) => handleInput("extNo", e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Speed Dial No" labelPlacement="floating" value={formData.speedDialNo} onIonInput={(e) => handleInput("speedDialNo", e.detail.value!)} />
                </IonItem>
                <Suspense fallback={<IonSpinner name="crescent" />}>
                    <SelectDepartment value={formData.DepartmentId} onChange={(id) => handleInput("DepartmentId", id)} />
                </Suspense>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalCreatePhone;