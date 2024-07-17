import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";

const Author = () => {
  const urlDavid = "https://www.linkedin.com/in/david-soto-068716220/";

  return (
    <Grid2 container justifyContent="center" display="flex">
      <Grid2 xs={10} sm={12} textAlign="center" marginBottom={1}>
        <p className="paragraph">
          <strong>Escuela Padre Rafael Cantilo</strong> © Todos los derechos
          reservados.
        </p>
      </Grid2>
      <Grid2 xs={12} textAlign="center" marginBottom={1}>
        <p className="paragraph">
          Created by{" "}
          <a
            className="name-david"
            href={urlDavid}
            target="_blank"
            rel="noreferrer"
          >
            David Soto 🐈
          </a>
        </p>
      </Grid2>
      <Grid2 xs={12} textAlign="center">
        <p className="paragraph">
          <Link to="/login" className="name-david">
            Administración
          </Link>
        </p>
      </Grid2>
    </Grid2>
  );
};

export default Author;
