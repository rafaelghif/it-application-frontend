import Card from "../../../../components/Card";
import { useQueryDiskDrive } from "../../hooks/useQueryDiskDrive";
import ItemDetail from "../ItemDetail";
import SectionDetail from "../SectionDetail";
import ContainerDetail from "./ContainerDetail";

interface ContainerDiskDriveProps {
    personalComputerId: string;
}

const ContainerDiskDrive: React.FC<ContainerDiskDriveProps> = ({ personalComputerId }) => {
    const { data } = useQueryDiskDrive(personalComputerId);
    return (
        <Card title="Disk Drives" headerColor="light">
            <ContainerDetail>
                {data?.map((diskDrive, index) => (
                    <SectionDetail key={`disk-drive-${diskDrive.id}`}>
                        <Card title={`Disk ${index}`} headerColor="medium">
                            <div className="flex flex-col gap-2 px-2 py-4">
                                <ItemDetail title="Model" value={diskDrive.model} />
                                <ItemDetail title="Type" value={diskDrive.diskType} />
                                <ItemDetail title="Size" value={diskDrive.size} />
                                <ItemDetail title="Serial Number" value={diskDrive.serialNumber} />
                            </div>
                        </Card>
                    </SectionDetail>
                ))}
            </ContainerDetail>
        </Card>
    );
}

export default ContainerDiskDrive;