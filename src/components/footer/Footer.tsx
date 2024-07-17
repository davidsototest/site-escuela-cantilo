/* eslint-disable jsx-a11y/iframe-has-title */
import {
  OutlinedInput,
  List,
  ListItem,
  ListItemButton,
  InputAdornment,
  IconButton,
  Skeleton,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import { useEffect, useState } from "react";
import "firebase/firestore";
import postEmail from "../../firebase/postEmail";
import AlertSucess from "../alerts/AlertSucess";
import AlertQuestion from "../alerts/AlertQuestion";
import AlertErrorService from "../alerts/AlertErrorService";

interface EmailData {
  email: string;
}

const Footer = () => {
  const [skeletor, setSkeletor] = useState(false);

  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setIsValidEmail(isValid);
  }, [email]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSaveToFirestore = async () => {
    if (isValidEmail) {
      const emailData: EmailData = {
        email: email,
      };

      setSkeletor(true);

      try {
        await postEmail(emailData);
        AlertSucess();
      } catch (error) {
        AlertErrorService();
      } finally {
        setSkeletor(false);
        setEmail("");
      }
    } else {
      if (email) {
        AlertQuestion();
      }
    }
  };

  const enlaces = [
    {
      name: "Linktr",
      url: "https://linktr.ee/escuelapadrecantilo",
    },
    {
      name: "Uniformes",
      url: "https://drive.google.com/file/d/1pyIFbatalI307GqCTk3Q51fTWwsbuT8r/view",
    },
    {
      name: "Escuela Secundaria Eymard",
      url: "https://api.whatsapp.com/send/?phone=543415968722&text&type=phone_number&app_absent=0",
    },
    {
      name: "Carnet de salud escolar para sala de 5 años y 1er grado",
      url: "https://drive.google.com/file/d/1O6vxt8i_ikYyfK1mXcYR3mYjaWQF7htp/view",
    },
    {
      name: "Dejar un comentario de la Escuela Cantilo",
      url: "https://www.google.com/maps/place/Escuela+Padre+Rafael+Cantilo/@-32.9746479,-60.6611245,19.07z/data=!4m8!3m7!1s0x95b7ab9b7bfc7457:0x765799333cda26da!8m2!3d-32.9747682!4d-60.6606828!9m1!1b1!16s%2Fg%2F11btn15jth?entry=ttu",
    },
  ];

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleOpen = () => {
//     setOpen(true);
//   };

  return (
    <Grid2
      container
      columnSpacing={{ xs: 0, sm: 2, md: 3 }}
      justifyContent="center"
    >
      <Grid2 xs={11} sm={5} md={6} alignContent="center">
        <span className="sub-tittle">Suscribite a nuestro Newletter</span>
      </Grid2>
      <Grid2 xs={11} sm={5} md={6} alignSelf={"center"}>
        <OutlinedInput
          type="email"
          placeholder="ejemplo@correo.com"
          value={email}
          onChange={handleEmailChange}
          sx={{
            color: "#006634",
          }}
          endAdornment={
            <InputAdornment position="start">
              {!skeletor ? (
                <IconButton onClick={handleSaveToFirestore}>
                  <EmailIcon sx={{ color: "#006634" }} />
                </IconButton>
              ) : (
                <Skeleton variant="circular" width={40} height={40} />
              )}
            </InputAdornment>
          }
          fullWidth
        />
      </Grid2>

      <Grid2
        xs={10}
        sm={12}
        sx={{ borderBottom: "2px dashed #006634", textAlign: "center" }}
        marginTop="30px"
        marginBottom="30px"
      ></Grid2>

      <Grid2 xs={11} sm={5} md={3}>
        <span className="tittle-card">About Akkisr</span>
        <br></br>
        <div style={{ marginTop: "20px" }}>
          <span className="paragraph">
            Lorem ipsum dolor sit amet elit , consectetur adipiscing , sed
            eiusmod tempor sit.
          </span>
        </div>

        <div style={{ width: "100%", marginTop: "25px", marginBottom: "45px" }}>
          <Grid2 container justifyContent="center">
            <Grid2 xs={3} md={4} display="flex" justifyContent="center">
              <a
                href="https://www.facebook.com/p/Escuela-Padre-Rafael-Cantilo-100024207500740/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="icon-red-social" />
              </a>
            </Grid2>
            <Grid2 xs={3} md={4} display="flex" justifyContent="center">
              <a
                href="https://www.instagram.com/escuelapadrerafael/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="icon-red-social" />
              </a>
            </Grid2>
            <Grid2 xs={3} md={4} display="flex" justifyContent="center">
              <a
                href="mailto:cobranzas@escuelapadrecantilo.edu.ar"
                rel="noopener noreferrer"
              >
                <EmailIcon className="icon-red-social" />
              </a>
            </Grid2>
          </Grid2>
        </div>
      </Grid2>
      <Grid2 xs={11} sm={5} md={3} marginBottom={4}>
        <span className="tittle-card">Quick Links</span>
        <List sx={{ margin: "0px", marginTop: "5px" }}>
          {enlaces.map((item, index) => (
            <ListItem key={index} sx={{ padding: "0px", marginBottom: "10px" }}>
              <ListItemButton
                component="a"
                href={item.url}
                target="_blank"
                sx={{ padding: "0px" }}
              >
                <ArrowForwardIosIcon style={{ color: "#006634" }} />
                <p className="listItem"> {item.name} </p>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid2>
      <Grid2
        xs={12}
        sm={12}
        md={6}
        alignContent="center"
        justifyContent="center"
      >
        <span className="tittle-card">
          <RoomIcon /> Blvd. Oroño 3463, Rosario, Santa Fe{" "}
        </span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d434.81201915084233!2d-60.660861356596904!3d-32.97497834578161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab9b7bfc7457%3A0x765799333cda26da!2sEscuela%20Padre%20Rafael%20Cantilo!5e0!3m2!1ses!2sar!4v1713037606450!5m2!1ses!2sar"
          width="100%"
          height="350"
          style={{ border: 0 }}
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Grid2>

      {/* spinner */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={skeletor}
        // onClick={handleClose}
      >
        <CircularProgress sx={{color: "#00a246"}} />
      </Backdrop>
    </Grid2>
  );
};

export default Footer;
