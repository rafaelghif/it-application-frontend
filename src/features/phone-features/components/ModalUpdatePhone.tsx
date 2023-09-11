import { Suspense, lazy, useEffect, useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonCheckbox, IonInput, IonItem, IonSpinner } from "@ionic/react";
import { PhoneInterface, UpdatePhoneType } from "../../../types/phone-type";
import { useUpdatePhone } from "../hooks/useUpdatePhone";

const SelectDepartment = lazy(() => import("../../../components/SelectDepartment"));

interface ModalUpdatePhoneProps {
    isOpen: boolean;
    data?: PhoneInterface;
    onDidDismiss: () => void;
}

const ModalUpdatePhone: React.FC<ModalUpdatePhoneProps> = ({ isOpen, data, onDidDismiss }) => {
    const [formData, setFormData] = useState<UpdatePhoneType>({});
    const { mutate } = useUpdatePhone();

    const handleInput = (key: keyof UpdatePhoneType, value: string | boolean) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        onDidDismiss();
    }

    useEffect(() => {
        setFormData((prevState) => ({ ...prevState, id: data?.id, name: data?.name, extNo: data?.extNo, speedDialNo: data?.speedDialNo, inActive: data?.inActive, DepartmentId: data?.DepartmentId }));
    }, [data]);

    return (
        <Modal title="Update Phone" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Id" labelPlacement="floating" value={formData?.id} onIonInput={(e) => handleInput("id", e.detail.value!)} disabled required />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="UserName" labelPlacement="floating" value={formData?.name} onIonInput={(e) => handleInput("name", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Ext No" labelPlacement="floating" value={formData?.extNo} onIonInput={(e) => handleInput("extNo", e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Speed Dial No" labelPlacement="floating" value={formData?.speedDialNo} onIonInput={(e) => handleInput("speedDialNo", e.detail.value!)} />
                </IonItem>
                <Suspense fallback={<IonSpinner name="crescent" />}>
                    <SelectDepartment value={formData?.DepartmentId} onChange={(id) => handleInput("DepartmentId", id)} />
                </Suspense>
                <IonItem>
                    <IonCheckbox checked={formData?.inActive} onIonChange={(e) => handleInput("inActive", e.detail.checked!)}>InActive</IonCheckbox>
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalUpdatePhone;