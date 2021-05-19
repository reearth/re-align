import React from "react";
import "../grid.css";

export type SectionProps = {
    middle?: boolean;
}

const GridSection: React.FC<SectionProps> = ({
    middle,
    children,
}) => (
    <div className={`section ${middle && "middle"}`}>
        {children}
    </div>
)

export default GridSection;
