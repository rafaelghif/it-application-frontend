import Card from "../../../../components/Card";
import { useQueryPhysicalMemory } from "../../hooks/useQueryPhysicalMemory";
import ItemDetail from "../ItemDetail";
import SectionDetail from "../SectionDetail";
import ContainerDetail from "./ContainerDetail";

interface ContainerPhysicalMemoryProps {
    personalComputerId: string;
}

const ContainerPhysicalMemory: React.FC<ContainerPhysicalMemoryProps> = ({ personalComputerId }) => {
    const { data } = useQueryPhysicalMemory(personalComputerId);
    return (
        <Card title="Physical Memory" headerColor="light">
            <ContainerDetail>
                {data?.map((physicalMemory, index) => (
                    <SectionDetail key={`physical-memory-${physicalMemory.id}`}>
                        <Card title={`Memory ${index}`} headerColor="medium">
                            <div className="flex flex-col gap-2 px-2 py-4">
                                <ItemDetail title="Part Number" value={physicalMemory.partNumber || "Unknown"} />
                                <ItemDetail title="Serial Number" value={physicalMemory.serialNumber} />
                                <ItemDetail title="Type" value={physicalMemory.memoryType} />
                                <ItemDetail title="Speed" value={physicalMemory.speed} />
                                <ItemDetail title="Size" value={physicalMemory.size} />
                                <ItemDetail title="Location" value={physicalMemory.location} />
                                <ItemDetail title="Manufacturer" value={physicalMemory.manufacturer} />
                            </div>
                        </Card>
                    </SectionDetail>
                ))}
            </ContainerDetail>
        </Card>
    );
}

export default ContainerPhysicalMemory;
