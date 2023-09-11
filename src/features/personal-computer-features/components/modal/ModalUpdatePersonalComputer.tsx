import { Suspense, lazy, useEffect, useState } from "react";
import Modal from "../../../../components/Modal";
import { PersonalComputerInterface, UpdatePersonalComputerType, computerStatusType } from "../../../../types/personal-computer-type";
import { IonButton, IonCheckbox, IonInput, IonItem, IonSelect, IonSelectOption, IonSpinner, IonTextarea } from "@ionic/react";
import { useUpdatePersonalComputer } from "../../hooks/useUpdatePersonalComputer";

const SelectDepartment = lazy(() => import("../../../../components/SelectDepartment"));
const SelectLocationByDepartment = lazy(() => import("../../../../components/SelectLocationByDepartment"));

interface ModalUpdatePersonalComputerProps {
    isOpen: boolean;
    data?: PersonalComputerInterface;
    onDidDismiss: () => void;
}

const ModalUpdatePersonalComputer: React.FC<ModalUpdatePersonalComputerProps> = ({ isOpen, data, onDidDismiss }) => {
    const [formData, setFormData] = useState<UpdatePersonalComputerType>({});
    const { mutate } = useUpdatePersonalComputer();

    const handleInput = (key: keyof UpdatePersonalComputerType, value: string | boolean) => {
        setFormData((prevState) => ({ ...prevState, [key]: value }));
    }

    const handleInputDepartment = (id: string) => {
        setFormData((prevState) => ({ ...prevState, DepartmentId: id, LocationId: "" }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutate(formData);
        onDidDismiss();
    }

    const handleSelect = (value: computerStatusType) => {
        if (value === "Dispose") {
            setFormData((prevState) => ({ ...prevState, status: value, inActive: true }));
        } else {
            setFormData((prevState) => ({ ...prevState, status: value, inActive: data?.inActive }));
        }
    }

    useEffect(() => {
        setFormData((prevState) => ({
            ...prevState,
            id: data?.id,
            assetNo: data?.assetNo,
            invoiceNo: data?.invoiceNo,
            ownerName: data?.ownerName,
            previousOwner: data?.previousOwner,
            detailName: data?.detailName,
            name: data?.name,
            username: data?.username,
            domain: data?.domain,
            purchaseDate: data?.purchaseDate,
            expireDate: data?.expireDate,
            status: data?.status,
            remark: data?.remark,
            inActive: data?.inActive,
            DepartmentId: data?.DepartmentId,
            LocationId: data?.LocationId
        }));
    }, [data]);

    return (
        <Modal title="Update Personal Computer" isOpen={isOpen} onDidDismiss={onDidDismiss}>
            <form onSubmit={handleSubmit}>
                <IonItem>
                    <IonInput label="Id" labelPlacement="floating" value={formData?.id} onIonInput={(e) => handleInput("id", e.detail.value!)} required disabled />
                </IonItem>
                <IonItem>
                    <IonInput label="Asset No" labelPlacement="floating" value={formData?.assetNo} onIonInput={(e) => handleInput("assetNo", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput label="Invoice No" labelPlacement="floating" value={formData?.invoiceNo} onIonInput={(e) => handleInput("invoiceNo", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput label="Owner Name" labelPlacement="floating" value={formData?.ownerName} onIonInput={(e) => handleInput("ownerName", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput label="Previous Owner Name" labelPlacement="floating" value={formData?.previousOwner} onIonInput={(e) => handleInput("previousOwner", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput label="Detail Name" labelPlacement="floating" value={formData?.detailName} onIonInput={(e) => handleInput("detailName", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput label="Computer Name" labelPlacement="floating" value={formData?.name} onIonInput={(e) => handleInput("name", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput label="Username" labelPlacement="floating" value={formData?.username} onIonInput={(e) => handleInput("username", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput label="Domain" labelPlacement="floating" value={formData?.domain} onIonInput={(e) => handleInput("domain", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="date" label="Purchase Date" labelPlacement="floating" value={formData?.purchaseDate} onIonInput={(e) => handleInput("purchaseDate", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonInput type="date" label="Expire Date" labelPlacement="floating" value={formData?.expireDate} onIonInput={(e) => handleInput("expireDate", e.detail.value!)} required />
                </IonItem>
                <IonItem>
                    <IonSelect label="Status" labelPlacement="floating" value={formData?.status} onIonChange={(e) => handleSelect(e.detail.value)}>
                        <IonSelectOption value="Operational">Operational</IonSelectOption>
                        <IonSelectOption value="Not Operating">Not Operating</IonSelectOption>
                        <IonSelectOption value="Repair">Repair</IonSelectOption>
                        <IonSelectOption value="Dispose">Dispose</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem>
                    <IonTextarea label="Remark" labelPlacement="floating" value={formData?.remark} onIonInput={(e) => handleInput("remark", e.detail.value!)} />
                </IonItem>
                <Suspense fallback={<IonSpinner name="crescent" />}>
                    <SelectDepartment value={formData?.DepartmentId} onChange={(id) => handleInputDepartment(id)} />
                    {formData?.DepartmentId && <SelectLocationByDepartment value={formData.LocationId} departmentId={formData.DepartmentId} onChange={(id) => handleInput("LocationId", id)} />}
                </Suspense>
                <IonItem>
                    <IonCheckbox checked={formData?.inActive} onIonChange={(e) => handleInput("inActive", e.detail.checked!)}>InActive</IonCheckbox>
                </IonItem>
                <IonButton type="submit" expand="block">Submit</IonButton>
            </form>
        </Modal>
    );
}

export default ModalUpdatePersonalComputer;