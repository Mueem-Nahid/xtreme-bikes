import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import logo from '../../../images/home-logo.png';
import useAuth from "../../../hooks/useAuth";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(66), //67
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    fontWeight: "bold",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#C3073F",
    fontSize: "20px",
    fontWeight: "bold",
    marginLeft: theme.spacing(2), //2
    "&:hover": {
      color: "white",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  //style="background-color: #1A1A1D;"

  const {user, logOut} = useAuth();

  return (
      
    <AppBar position="static" style={{backgroundColor: '#1A1A1D'}} >
      <CssBaseline />
      <Container>
      <Toolbar>
       <img src={logo} alt="" />
      <Typography variant="h5" className={classes.logo} style={{color: '#C3073F'}}>
        <span style={{color: 'white', borderBottom: "2px solid white"}}>X</span><span>treme Bikes</span>
      </Typography>

        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/explore" className={classes.link}>
              Explore
            </Link>
            {
              user.email ? 
              <> 
                <Link to="/dashboard" className={classes.link}>
                  Dashboard
                </Link>
                <Link to="#!" className={classes.link}>
                  {user.displayName}
                </Link>
                <Link to="/home" onClick={logOut} className={classes.link}>
                  Logout
                </Link>
              </> : 
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            }
            
          </div>
        )}
      </Toolbar>
      </Container>
    </AppBar>
    
  );
}
export default Navbar;