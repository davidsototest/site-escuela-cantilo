import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import LabelTap from "../label/LabelTap"


const BigCard2 = () => {


    return (
        <Grid2 container columnSpacing={3} justifyContent='center'>
            <Grid2 xs={12} sm={5} md={6} display='flex' justifyContent='center' alignContent='center'>
                <img className="imgBigCard2" src="https://images.pexels.com/photos/20881051/pexels-photo-20881051/free-photo-of-bajo-el-puente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen-card-grande" width="100%"/>
            </Grid2>

            <Grid2 xs={10} sm={5} md={6} alignContent='center'>
                <h2 className="sub-tittle-end">Welcome To Our School To Learn And Teach Akhir Playing And Gaming 24</h2>
                <p className="paragraph-end">
                    dere Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officia architecto, voluptates, culpa saepe praesentium a error ex obcaecati et quaerat velit iusto nam temporibus, tempore unde debitis minima doloremque?
                </p>
                <div>
                <Grid2 container xs={12} justifyContent='center'>
                    <Grid2 xs={12} sm={6} padding={2} width="100%">
                        <h3 className="tittle-card-end">Our Teaching</h3>
                        <p className="paragraph-end"> 
                            Lorem ipsum dolor sit amet elit row, consectetur adipiscing , sed eius mod tempor sit amet elit 
                        </p>
                    </Grid2>
                    <Grid2 xs={12} sm={6} padding={2}>
                        <h3 className="tittle-card-end">Our Teaching</h3>
                        <p className="paragraph-end">
                            Lorem ipsum dolor sit amet elit row, consectetur adipiscing , sed eius mod tempor sit amet elit 
                        </p>
                    </Grid2>
                </Grid2>
                </div>
            </Grid2>
        </Grid2>
    )
}

export default BigCard2