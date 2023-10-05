import { Suspense, lazy, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { IonSpinner } from "@ionic/react";
import FabButton from "../components/FabButton";

const ModalCreatePersonalComputer = lazy(() => import("../features/personal-computer-features/components/modal/ModalCreatePersonalComputer"));
const ContainerPersonalComputer = lazy(() => import("../features/personal-computer-features/components/containers/ContainerPersonalComputer"));

const PersonalComputer: React.FC = () => {
    const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
    return (
        <AdminLayout title="Personal Computer">
            <Suspense fallback={<IonSpinner name="crescent" />}>
                <ContainerPersonalComputer category="Server" />
                <ModalCreatePersonalComputer isOpen={isOpenModalCreate} onDidDismiss={() => setIsOpenModalCreate(false)} />
            </Suspense>
            <FabButton handleClick={() => setIsOpenModalCreate(true)} />
        </AdminLayout>
    );
}

export default PersonalComputer;