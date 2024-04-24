import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const pages = ['Inicio', 'Quienes somos', 'Historia', 'Contacto', 'Resumen'];
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
    
        window.addEventListener('scroll', handleScroll);
    
        // Limpia el event listener en el desmontaje
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <AppBar id='header' position="static" style={{ background: 'transparent'}}>
            <div className={`header-one ${scrolled ? 'scrolled' : ''}`}>
                <Toolbar disableGutters sx={{marginLeft: '10px', marginRight: '10px'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <span className={`sub-tittle ${scrolled ? 'scrolled' : ''}`} style={{marginLeft: '20px'}}>Escuela Cantilo</span>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                sx={{ color: scrolled ? '#ffffff' : '#006634', border: "solid 1px", boxShadow: "0px 4px 6px rgba(255, 255, 255, 0.6)" }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <a key={page} className="style-text" href="#">
                                            {page}
                                        </a>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                
                                <a key={page} className={`style-text ${scrolled ? 'scrolled' : ''}`} href="#">
                                    {page}
                                </a>
                            
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </div>
        </AppBar>
    );
}

export default Header;

