import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Indicator from "./Indicator";


const Indicators = () => {

    const data = [
        {
            cant: 490, 
            describe: 'Alumnos Activos', 
            icon: 'https://firebasestorage.googleapis.com/v0/b/education-club-dd770.appspot.com/o/iconos-cantilo-borrarluego%2Fstudent.svg?alt=media&token=888ba895-cbdc-489f-b268-6a0f092f6b7c'
        },
        {
            cant: 49, 
            describe: 'Docentes Activos', 
            icon: 'https://firebasestorage.googleapis.com/v0/b/education-club-dd770.appspot.com/o/iconos-cantilo-borrarluego%2Fteacher.svg?alt=media&token=f7caa641-570e-4a38-9cc9-a35a54bd9581'
        },
        {
            cant: 80, 
            describe: 'Salones Activos', 
            icon: 'https://firebasestorage.googleapis.com/v0/b/education-club-dd770.appspot.com/o/iconos-cantilo-borrarluego%2Fclassroom.svg?alt=media&token=214fa42c-9d00-4397-80e8-e54f90ad8999'
        },
        {
            cant: 80, 
            describe: 'Administrativos Activos', 
            icon: 'https://firebasestorage.googleapis.com/v0/b/education-club-dd770.appspot.com/o/iconos-cantilo-borrarluego%2Fadministrative.svg?alt=media&token=e4b5d4c3-ac6b-40b9-a87f-57ef74188c30'
        }
    ];


    return(
        <Grid2 container display='flex' alignItems='center' justifyContent='center' rowSpacing={6}>
            {data.map((item, index) =>(
                <Grid2 xs={10} sm={5} md={3} key={index} minWidth='300px'>
                    <Indicator {...item}/>
                </Grid2>
            ))}
        </Grid2>
    );
}

export default Indicators;