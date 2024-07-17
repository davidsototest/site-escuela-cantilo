/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const logocantilo =
"https://firebasestorage.googleapis.com/v0/b/webescuelacantilo.appspot.com/o/logoCantilo%2FpadreRafaelCantilo.svg?alt=media&token=7e003aef-18ad-425a-a7fc-9b608f7914a0";

const Header = () => {
  const pages = [
    {
      name: "Quienes somos",
      id: "aboutUs",
    },
    {
      name: "Indicadores",
      id: "indicator",
    },
    {
      name: "Por qué Cantilo",
      id: "bigCard",
    },
    {
      name: "Opiniones",
      id: "opinions",
    },
    {
      name: "Contacto",
      id: "footer",
    },
  ];

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //color de fondo del header
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      const windowWidth = window.innerWidth;
      let threshold = 500; // Espaciado en píxeles
      const scrollPosition = window.pageYOffset;

      if (windowWidth >= 250 && windowWidth <= 600) {
        threshold = 200;
      } else if (windowWidth > 600 && windowWidth <= 930) {
        threshold = 300;
      }

      if (scrollPosition > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener en el desmontaje
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //scroll para los items del menu
  const handleClickScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // <AppBar style={{ background: 'transparent', width: "100%" }}>
    <div className={`header-one ${scrolled ? "scrolled" : ""}`}>
      <Toolbar disableGutters sx={{ marginLeft: "10px", marginRight: "10px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              className="logoCantilo"
              src={logocantilo}
              alt="Escuela Padre Rafael Cantilo"
            />
            <h2
              className={`sub-tittle ${scrolled ? "scrolled" : ""}`}
              style={{ padding: "10px", alignContent: "center" }}
            >
              Somos Cantilo!
            </h2>
          </div>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: scrolled ? "#ffffff" : "#006634",
                border: "solid 1px",
                boxShadow: "0px 4px 6px rgba(255, 255, 255, 0.6)",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <a
                    className="style-text"
                    key={page.name}
                    href="#"
                    onClick={(event) => handleClickScroll(event, page.id)}
                  >
                    {page.name}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <a
                key={page.name}
                className={`style-text ${scrolled ? "scrolled" : ""}`}
                href="#"
                onClick={(event) => handleClickScroll(event, page.id)}
              >
                {page.name}
              </a>
            ))}
          </Box>
        </Box>
      </Toolbar>
    </div>
    // </AppBar>
  );
};

export default Header;
