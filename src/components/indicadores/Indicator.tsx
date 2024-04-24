import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import IndicatorsProps from "./IndicatorsProps";


const Indicator: React.FC<IndicatorsProps> = ({cant, describe, icon}) => {


    return(
        <Grid2 container columnSpacing={2}>
            <Grid2 xs={5} sm={6} display='flex' justifyContent='center'>
                <div className="container-svg">
                  <img className="avatar" src={icon} alt="avatar"/>
                </div>
            </Grid2>
            <Grid2 xs={7} sm={6} display='flex' alignItems='center'>
                <Grid2>
                    <Grid2 xs={12}>
                        <span className="sub-tittle"> {cant} </span>
                    </Grid2>
                    <Grid2 xs={12}>
                        <span className="paragraph-card-indicators"> {describe} </span>
                    </Grid2>
                </Grid2>
                
            </Grid2>
        </Grid2>
    );
}

export default Indicator;