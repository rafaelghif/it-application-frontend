import { Suspense, lazy, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { IonSpinner } from "@ionic/react";
import FabButton from "../components/FabButton";

const ContainerCategory = lazy(() => import("../features/category-features/components/ContainerCategory"));
const ModalCreateCategory = lazy(() => import("../features/category-features/components/ModalCreateCategory"));

const Category: React.FC = () => {
    const [isOpenModalCreate, setIsOpenModalCreate] = useState<boolean>(false);
    return (
        <AdminLayout title="Category">
            <Suspense fallback={<IonSpinner name="crescent" />}>
                <ContainerCategory />
                <ModalCreateCategory isOpen={isOpenModalCreate} onDidDismiss={() => setIsOpenModalCreate(false)} />
            </Suspense>
            <FabButton handleClick={() => setIsOpenModalCreate(true)} />
        </AdminLayout>
    );
}

export default Category;