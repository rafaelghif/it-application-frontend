interface ItemDetailProps {
    title: string;
    value?: string;
}
const ItemDetail: React.FC<ItemDetailProps> = ({ title, value }) => {
    return (
        <div className="flex flex-col">
            <span className="text-base font-semibold leading-4">{title}</span>
            <span>{value ?? "N/A"}</span>
        </div>
    );
}

export default ItemDetail;