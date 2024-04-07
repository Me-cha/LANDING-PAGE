import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MediumLogoWhite from "../../assets/images/mediumLogoWhite.png";
import MediumLogoBlack from "../../assets/images/mediumLogoBlack.png";

const drawerWidth = 240;
const navItems = ["Our Story", "Membership", "Write", "Sign In"];

function Header(props) {
  const { window } = props;
  const { color } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const getStylesBasedOnColor = () => {
    if (color === "#ffffff") {
      return {
        textColor: "black",
        logo: MediumLogoBlack,
      };
    } else {
      return {
        textColor: "white",
        logo: MediumLogoWhite,
      };
    }
  };
  const { textColor, logo } = getStylesBasedOnColor();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontFamily: "Mignon-Regular",
          fontSize: 25,
          fontWeight: "semiBold",
        }}
      >
        Medium
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", fontWeight: 300 }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        size="small"
        sx={{ backgroundColor: "black", borderRadius: "20px" }}
      >
        Get Unlimited Access
      </Button>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: color,
          borderBottom: "2px solid white",
          transition: "background-color 0.5s ease",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={logo}
            alt="Medium Logo"
            style={{ height: "35px" }}
            className="sm:mx-0 mx-[130px]"
          />
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
              },
              fontFamily: "Mignon-Regular",
              fontSize: 40,
              fontWeight: "semiBold",
              color: textColor,
            }}
          >
            Medium
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  mr: 2,
                  fontWeight: 300,
                  fontFamily: "Lexend",
                  color: textColor,
                }}
              >
                {item}
              </Button>
            ))}
            <Button
              variant="contained"
              size="small"
              sx={{ backgroundColor: "black", borderRadius: "20px" }}
            >
              Get Unlimited Access
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
