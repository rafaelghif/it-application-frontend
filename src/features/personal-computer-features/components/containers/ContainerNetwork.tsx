import Card from "../../../../components/Card";
import { useQueryNetworkAdapter } from "../../hooks/useQueryNetworkAdapter";
import ItemDetail from "../ItemDetail";
import SectionDetail from "../SectionDetail";
import ContainerDetail from "./ContainerDetail";

interface ContainerNetworkProps {
    personalComputerId: string;
}

const ContainerNetwork: React.FC<ContainerNetworkProps> = ({ personalComputerId }) => {
    const { data } = useQueryNetworkAdapter(personalComputerId);
    return (
        <Card title="Networks" headerColor="light">
            <ContainerDetail>
                {data?.map((networkAdapter, index) => (
                    <SectionDetail key={`network-${networkAdapter.id}`}>
                        <Card title={`Network ${index}`} headerColor="medium">
                            <div className="flex flex-col gap-2 px-2 py-4">
                                <ItemDetail title="Name" value={networkAdapter?.name} />
                                <ItemDetail title="Type" value={networkAdapter?.networkType || "Unknown"} />
                                <ItemDetail title="MAC Address" value={networkAdapter?.mac || "Unknown"} />
                            </div>
                        </Card>
                    </SectionDetail>
                ))}
            </ContainerDetail>
        </Card>
    );
}

export default ContainerNetwork;