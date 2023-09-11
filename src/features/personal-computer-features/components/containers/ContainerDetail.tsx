interface ContainerDetailProps {
    children: React.ReactNode;
}

const ContainerDetail: React.FC<ContainerDetailProps> = ({ children }) => {
    return (
        <div className="grid grid-cols-2 p-5">
            {children}
        </div>
    );
}

export default ContainerDetail