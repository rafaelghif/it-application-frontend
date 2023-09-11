import Card from "../../../../components/Card";
import { PersonalComputerWithDepartmentLocationInterface } from "../../../../types/personal-computer-type";
import ItemDetail from "../ItemDetail";
import SectionDetail from "../SectionDetail";
import ContainerDetail from "./ContainerDetail";

interface ContainerComputerProps {
    data: PersonalComputerWithDepartmentLocationInterface;
}

const ContainerComputer: React.FC<ContainerComputerProps> = ({ data }) => {
    return (
        <Card title="Computer Detail" headerColor="light">
            <ContainerDetail>
                <SectionDetail>
                    <ItemDetail title="Assets No" value={data.assetNo} />
                    <ItemDetail title="Invoice No" value={data.invoiceNo} />
                    <ItemDetail title="Purchase Date" value={data.purchaseDate} />
                    <ItemDetail title="Department" value={data.Department?.name} />
                    <ItemDetail title="Location" value={data.Location?.name} />
                </SectionDetail>
                <SectionDetail>
                    <ItemDetail title="UserId" value={data.username} />
                    <ItemDetail title="Domain" value={data.domain} />
                    <ItemDetail title="Model" value={data.model} />
                    <ItemDetail title="Processor" value={data.processor} />
                    <ItemDetail title="Architecture" value={data.architecture} />
                    <ItemDetail title="Total Memory" value={data.totalMemory} />
                    <ItemDetail title="Manufacturer" value={data.manufacturer} />
                </SectionDetail>
                <SectionDetail className="col-span-2">
                    <ItemDetail title="Remark" value={data.remark} />
                </SectionDetail>
            </ContainerDetail>
        </Card>
    );
}

export default ContainerComputer;