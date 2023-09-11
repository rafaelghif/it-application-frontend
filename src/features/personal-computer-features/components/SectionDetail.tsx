interface SectionDetailProps {
    children: React.ReactNode;
    className?: string;
}

const SectionDetail: React.FC<SectionDetailProps> = ({ children, className }) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {children}
        </div>
    );
}

export default SectionDetail;