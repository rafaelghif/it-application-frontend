import { IonSpinner } from "@ionic/react";
import { useState, Suspense, lazy } from "react";
import FabButton from "../components/FabButton";
import AdminLayout from "../layouts/AdminLayout";

const ContainerPhone = lazy(() => import("../features/phone-features/components/ContainerPhone"));
const ModalCreatePhone = lazy(() => import("../features/phone-features/components/ModalCreatePhone"));

const Phone: React.FC = () => {
    const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
    return (
        <AdminLayout title="Phone">
            <Suspense fallback={<IonSpinner name="crescent" />}>
                <ContainerPhone />
                <ModalCreatePhone isOpen={isOpenModalCreate} onDidDismiss={() => setIsOpenModalCreate(false)} />
            </Suspense>
            <FabButton handleClick={() => setIsOpenModalCreate(true)} />
        </AdminLayout>
    );
}

export default Phone;