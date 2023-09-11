import { Suspense, lazy, useState } from "react";
import Modal from "../../../components/Modal"
import { IonButton, IonInput, IonItem, IonSelect, IonSelectOption, IonSpinner } from "@ionic/react";
import { CreateUserType } from "../../../types/user-type";
import { useCreateUser } from "../hooks/useCreateUser";

const SelectDepartment = lazy(() => import("../../../components/SelectDepartment"));

interface ModalCreateUserProps {
    isOpen: boolean;
    onDidDismiss: () => void;
}

const ModalCreateUser: React.FC<ModalCreateUserProps> = ({ isOpen, onDidDismiss }) => {
    const [formData, setFormData] = useState<CreateUserType>({ badgeId: "", password: "", email: "", name: "", role: "Basic", DepartmentId: "" });
    const { mutate } = useCreateUser();

    const handleInput = (key: keyof CreateUserType, value: string) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        setFormData({ badgeId: "", password: "", email: "", name: "", role: "Basic", DepartmentId: "" });
        onDidDismiss();
    }
    return (
        <Modal title="Create User" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput type="text" label="Badge Id" labelPlacement="floating" value={formData.badgeId} onIonInput={(e) => handleInput("badgeId", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="password" label="Password" labelPlacement="floating" value={formData.password} onIonInput={(e) => handleInput("password", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="email" label="Email" labelPlacement="floating" value={formData.email} onIonInput={(e) => handleInput("email", e.detail.value!)} />
                </IonItem>
                <IonItem>
                    <IonInput type="text" label="Name" labelPlacement="floating" value={formData.name} onIonInput={(e) => handleInput("name", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonSelect value={formData.role} onIonChange={(e) => handleInput("role", e.detail.value!)} label="Role" labelPlacement="stacked">
                        <IonSelectOption value="Basic">Basic</IonSelectOption>
                        <IonSelectOption value="Admin">Admin</IonSelectOption>
                        <IonSelectOption value="Super User">Super User</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <Suspense fallback={<IonSpinner name="crescent" />}>
                    <SelectDepartment value={formData.DepartmentId} onChange={(id) => handleInput("DepartmentId", id)} />
                </Suspense>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalCreateUser;