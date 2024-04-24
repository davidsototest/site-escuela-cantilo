
import { FC } from "react";

interface LabelProps {
    labelText: string;
}

const LabelTap: FC<LabelProps> = ({ labelText }) => {

    return (
        <span className="label" id="About"><strong>{labelText}</strong></span>
            
    )
}

export default LabelTap;