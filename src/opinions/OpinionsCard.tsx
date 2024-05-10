
import { Avatar, Icon } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { FC } from "react";
import FormatQuoteSharpIcon from '@mui/icons-material/FormatQuoteSharp';

interface OpiniosProps {
    name: string;
    stars: number;
    text: string;
    photo: string

}

const OpinionsCard: FC<OpiniosProps> = ({ name, stars, text, photo }) => {

    const quotation = "https://firebasestorage.googleapis.com/v0/b/education-club-dd770.appspot.com/o/iconos-cantilo-borrarluego%2Fquotation.svg?alt=media&token=b319034e-6af0-40a1-a43d-53e74926721e";

    return (
        <div className="container-card">
            <img className="quotation" src={quotation} alt="icons-opinions"/>
            <Grid2 container>
                <Grid2 xs={3} sm={5} md={4} marginTop={-5} display="flex" alignItems="center">
                    <Avatar src={photo} alt="img-people"/>
                </Grid2>
                <Grid2 xs={9} sm={7} md={8} marginTop={-5}>
                    <h2 className="tittle-card-start">
                        {name}
                    </h2>
                </Grid2>
            </Grid2>
            <span className="paragraph-card-opinions">
                {text}
            </span>
            
        </div>
            
    )
}

export default OpinionsCard;