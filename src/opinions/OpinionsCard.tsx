
import { FC } from "react";

interface OpiniosProps {
    name: string;
    stars: number;
    text: string;
    photo: string

}

const OpinionsCard: FC<OpiniosProps> = ({ name, stars, text, photo }) => {

    return (
        <div className="container-card">
            <span className="paragraph-card">
                {text}
            </span>
            <h2 className="tittle-card">
                {name}
            </h2>
        </div>
            
    )
}

export default OpinionsCard;