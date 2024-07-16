import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CardAbout from "./CardAbout";
import LabelTap from "../label/LabelTap";


const About = () => {

    const images = [
        {   img: 'https://images.pexels.com/photos/1476880/pexels-photo-1476880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Titulo uno',
            paragraph: 'Con esto, MyComponent renderizará cuatro instancias del componente CardAbout, pasándole los datos correspondientes desde el array'
        },
        {   img: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Titulo dos',
            paragraph: 'Con esto, MyComponent renderizará cuatro instancias del componente CardAbout, pasándole los datos correspondientes desde el array'
        },
        {   img: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Titulo tres',
            paragraph: 'Con esto, MyComponent renderizará cuatro instancias del componente CardAbout, pasándole los datos correspondientes desde el array'
        },
        {   img: 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Titulo cuatro',
            paragraph: 'Con esto, MyComponent renderizará cuatro instancias del componente CardAbout, pasándole los datos correspondientes desde el array'
        },
        {   img: 'https://images.pexels.com/photos/1476880/pexels-photo-1476880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Titulo uno',
            paragraph: 'Con esto, MyComponent renderizará cuatro instancias del componente CardAbout, pasándole los datos correspondientes desde el array'
        },
        {   img: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Titulo dos',
            paragraph: 'Con esto, MyComponent renderizará cuatro instancias del componente CardAbout, pasándole los datos correspondientes desde el array'
        },
        {   img: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Titulo tres',
            paragraph: 'Con esto, MyComponent renderizará cuatro instancias del componente CardAbout, pasándole los datos correspondientes desde el array'
        },
        {   img: 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Titulo cuatro',
            paragraph: 'Con esto, MyComponent renderizará cuatro instancias del componente CardAbout, pasándole los datos correspondientes desde el array'
        }
      ];

    return (
        <>
            <Grid2 container maxWidth={"1300px"} marginTop={6}>
                <Grid2 xs={12} display="flex" justifyContent="center" marginBottom={3}>
                    <LabelTap labelText="Quienes Somos"/>
                </Grid2>

                <Grid2 xs={10} md={12} display="flex" justifyContent="center" margin='auto' marginBottom={2}>
                    <h2 className="sub-tittle">Formación Integral en todo el Trayecto Educativo</h2>
                </Grid2>      
                <Grid2 xs={10} md={6} display="flex" justifyContent="center" margin='auto' textAlign='center'>
                    <p className="paragraph">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem delectus itaque sit, in blanditiis molestias animi voluptas, ipsa molestiae beatae quisquam est illo veniam dolore obcaecati nostrum cupiditate vero? Error. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem delectus itaque sit, in blanditiis molestias animi voluptas, ipsa molestiae beatae quisquam est illo veniam dolore obcaecati nostrum cupiditate vero? Error.
                    </p>
                </Grid2>   
            </Grid2>

            <Grid2 container marginTop={4} justifyContent="center" display='flex' alignItems='center' columnSpacing={{ xs: 0, sm: 3, md: 5 }} rowSpacing={{ xs: 3, sm: 3, md: 5 }}>
                {images.map((item, index) => (
                    <Grid2 key={index} xs={10} sm={5} md={5} lg={3} justifyContent="center" display='flex'>
                        <CardAbout {...item}/>
                    </Grid2>
                ))}
            </Grid2>
        </>
    )
}

export default About;