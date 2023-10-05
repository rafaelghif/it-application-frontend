import { Suspense, lazy } from "react";
import AdminLayout from "../layouts/AdminLayout";
import { IonSpinner } from "@ionic/react";

const ContainerUnspecificPersonalComputer = lazy(
  () =>
    import(
      "../features/unspecific-features/components/ContainerUnspecificPersonalComputer"
    )
);

const Unspecific: React.FC = () => {
  return (
    <AdminLayout title="Unspecific">
      <Suspense fallback={<IonSpinner name="crescent" />}>
        <ContainerUnspecificPersonalComputer />
      </Suspense>
    </AdminLayout>
  );
};

export default Unspecific;
