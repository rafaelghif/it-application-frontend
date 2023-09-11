import { ExpanderComponentProps } from "react-data-table-component";
import { PersonalComputerWithDepartmentLocationInterface } from "../../../../types/personal-computer-type";
import Card from "../../../../components/Card";
import { IonCol, IonGrid, IonRow, IonSpinner } from "@ionic/react";
import { Suspense, lazy } from "react";

const ContainerComputer = lazy(() => import("./ContainerComputer"));
const ContainerOperatingSystem = lazy(() => import("./ContainerOperatingSystem"));
const ContainerDiskDrive = lazy(() => import("./ContainerDiskDrive"));
const ContainerNetwork = lazy(() => import("./ContainerNetwork"));
const ContainerPhysicalMemory = lazy(() => import("./ContainerPhysicalMemory"));

const ContainerPersonalComputerDetail: React.FC<ExpanderComponentProps<PersonalComputerWithDepartmentLocationInterface>> = ({ data: personalComputerData }) => {
    return (
        <Card title={`${personalComputerData.name} Detail`} headerColor="medium">
            <IonGrid>
                <IonRow>
                    {[
                        <ContainerComputer data={personalComputerData} />,
                        <ContainerOperatingSystem personalComputerId={personalComputerData.id} />,
                        <ContainerPhysicalMemory personalComputerId={personalComputerData.id} />,
                        <ContainerDiskDrive personalComputerId={personalComputerData.id} />,
                        <ContainerNetwork personalComputerId={personalComputerData.id} />,
                    ].map((component, index) => (
                        <IonCol key={`col-${index}`} size="12" className="flex flex-col">
                            <Suspense fallback={<IonSpinner name="crescent" />}>
                                {component}
                            </Suspense>
                        </IonCol>
                    ))}
                </IonRow>
            </IonGrid>
        </Card>
    );
}

export default ContainerPersonalComputerDetail;