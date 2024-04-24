
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { FC } from "react";
import OpinionsCard from "./OpinionsCard";
import LabelTap from "../components/label/LabelTap";


const Opinions = () => {

    const opinions = [
        {
            name: "Lourdes Kantlen",
            stars: 5,
            text: "Hice preescolar y primaria en este colegio. Muy buenos recuerdos, buena enseñanza. Recomiendo absolutamente.",
            photo: "https://lh3.googleusercontent.com/a-/ALV-UjXPNdRmYz-Nb6NnQ3zEkVVqquAQf8qcHzbcusXzuGjngBhgXx-mEg=w60-h60-p-rp-mo-ba2-br100"
        },
        {
            name: "Sebastian de Ponte",
            stars: 5,
            text: "La escuela que lleva el nombre de la iglesia así. Amo el barrio lleva el nombre de la misma, es una escuela religiosa cuota no muy costosa y enseñanza primaria (con doble escolaridad) y secundaria. El establecimiento abarca 1 hectárea ",
            photo: "https://lh3.googleusercontent.com/a-/ALV-UjUWR-aIxH6l_4WnB4Twoux7fwMnxiVf8sIuh-u3YqSgl9RDFK_K=w60-h60-p-rp-mo-ba4-br100"
        },
        {
            name: "hugo pistachia",
            stars: 5,
            text: "Van mis dos hijos hace 12 años y la mejor escuela que les pude dar excelente enseñanza.",
            photo: "https://lh3.googleusercontent.com/a-/ALV-UjW1qXugTI8W7DSvARZUnzFdHPoBADsjumrMGnx_weAKdjTnDVxP=w60-h60-p-rp-mo-ba3-br100"
        },
        {
            name: "Renata Contristano",
            stars: 5,
            text: "Muy buenas misas. Un horario muy bueno para poder disfrutarlas.",
            photo: "https://lh3.googleusercontent.com/a-/ALV-UjUoszeloTy0kH0fwQTufN-iBiZGfxMxRshTzlQLl2ie8TcLcT0wYw=w60-h60-p-rp-mo-ba3-br100"
        },
        {
            name: "Luis dario Baez",
            stars: 5,
            text: "Hermosos recuerdos, la doble escolaridad y hombres x aca y mujeres x alla",
            photo: "https://lh3.googleusercontent.com/a/ACg8ocJgwhDS4yfjF7ox0xr2xHEdIN2eKGWG8KT6bCL2mrjJGyeTWQ=w60-h60-p-rp-mo-br100"
        },
        {
            name: "David Soto",
            stars: 5,
            text: "Mis dos hijas asisten a esta escuela desde el cuarto grado, sin ningún problema relevante, y lo mejor en educación y atención a los niños.",
            photo: "https://lh3.googleusercontent.com/a-/ALV-UjW1qXugTI8W7DSvARZUnzFdHPoBADsjumrMGnx_weAKdjTnDVxP=w60-h60-p-rp-mo-ba3-br100"
        },
        {
            name: "Marcos Leonetti",
            stars: 5,
            text: "Excelente institución, hay peores..",
            photo: "https://lh3.googleusercontent.com/a-/ALV-UjUH5f14LOP0-95le6MpQkFJrfABA-FANnI9-GDj-E5ND-B3JWhO=w60-h60-p-rp-mo-br100"
        },
        {
            name: "Mariano Garcia",
            stars: 5,
            text: "Soy exalumno, muy buenos recuerdos...",
            photo: "https://lh3.googleusercontent.com/a/ACg8ocIZZEVEB85ip9TeeDV5Dfs-p9RDF_N_3g8E9c0P0PQTtm4ER8v_=w60-h60-p-rp-mo-ba4-br100"
        },
        {
            name: "Gonzalo Hernan Gigena",
            stars: 5,
            text: "Gran escuela. Todo un símbolo para el barrio.",
            photo: "https://lh3.googleusercontent.com/a/ACg8ocKOiaA13e042lDNNz1wCFVyazxdTaNKixrq7DJZNG_C_abrJQ=w60-h60-p-rp-mo-ba3-br100"
        },
        {
            name: "A. Genesis gavidia",
            stars: 5,
            text: "Desde cuarto grado, mi hijo ha estado en esta escuela sin enfrentar problemas relevantes, y destaca por ofrecer una educación de calidad y una atención excepcional a los estudiantes",
            photo: "https://lh3.googleusercontent.com/a/ACg8ocKxsJlHh7P72SCX80WiuNgbTxj1g1XgVBbgA8TOyKyOKaX6Lg=w60-h60-p-rp-mo-br100"
        }
    ];

    return (
        <Grid2 container display='flex' justifyContent='center'> 
            <Grid2 xs={12} display="flex" justifyContent="center" alignItems="center" marginBottom={4}>
                <LabelTap labelText="Opiniones de Cantilo"/>
            </Grid2>
            <Grid2 xs={10} sm={3} display='flex'>
                {opinions.map((item, index) => (
                    <OpinionsCard key={index} {...item}/>
                ))}
            </Grid2>
        </Grid2>
            
    )
}

export default Opinions;