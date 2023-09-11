import Card from "../../../../components/Card";
import { useQueryOperatingSystem } from "../../hooks/useQueryOperatingSystem";
import ItemDetail from "../ItemDetail";
import SectionDetail from "../SectionDetail";
import ContainerDetail from "./ContainerDetail";

interface ContainerOperatingSystemProps {
    personalComputerId: string;
}

const ContainerOperatingSystem: React.FC<ContainerOperatingSystemProps> = ({ personalComputerId }) => {
    const { data } = useQueryOperatingSystem(personalComputerId);
    return (
        <Card title="Operating System" headerColor="light">
            <ContainerDetail>
                <SectionDetail>
                    <ItemDetail title="Operating System Name" value={data?.name} />
                    <ItemDetail title="Build Number" value={data?.buildNumber} />
                    <ItemDetail title="Version" value={data?.version} />
                    <ItemDetail title="Serial Number" value={data?.serialNumber} />
                </SectionDetail>
            </ContainerDetail>
        </Card>
    );
}

export default ContainerOperatingSystem;