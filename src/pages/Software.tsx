import { Suspense, lazy, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { IonSpinner } from "@ionic/react";
import FabButton from "../components/FabButton";

const ContainerSoftware = lazy(() => import("../features/software-features/components/ContainerSoftware"));
const ModalCreateSoftware = lazy(() => import("../features/software-features/components/ModalCreateSoftware"));

const Software: React.FC = () => {
    const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
    return (
        <AdminLayout title="Software">
            <Suspense fallback={<IonSpinner name="crescent" />}>
                <ContainerSoftware />
                <ModalCreateSoftware isOpen={isOpenModalCreate} onDidDismiss={() => setIsOpenModalCreate(false)} />
            </Suspense>
            <FabButton handleClick={() => setIsOpenModalCreate(true)} />
        </AdminLayout>
    );
}

export default Software;