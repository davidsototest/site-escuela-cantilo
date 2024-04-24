import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Author = () => {

    return (
        <Grid2 container justifyContent='center' display='flex'>
          <Grid2 xs={10} sm={12} textAlign='center' marginBottom={1}>
            <span><strong>Escuela Padre Rafael Cantilo</strong> © Todos los derechos reservados.</span>
          </Grid2>
          <Grid2 xs={12} textAlign='center'>
            Desarrollado por <a className="name-david" href="www.google.com" target="_blank">David Soto 🐈</a>
          </Grid2>
        </Grid2>
    )
}

export default Author;