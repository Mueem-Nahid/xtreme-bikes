import React, { useState } from "react";
import {
  
    Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
 makeStyles
} from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "#C3073F",
        fontWeight: "bold",
        fontSize: "20px"
    },
    icon:{
        color: "white"
    }
}));

function DrawerComponent() {
  const {user, logOut} = useAuth();
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/explore" className={classes.link}>Explore</Link>
            </ListItemText>
          </ListItem>
          {
            user.email ? 
            <>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/dashboard" className={classes.link}>Dashboard</Link>
                </ListItemText>
              </ListItem>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="#!" className={classes.link}>{user.displayName}</Link>
                </ListItemText>
              </ListItem>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to="/" onClick={logOut} className={classes.link}>Logout</Link>
                </ListItemText>
              </ListItem>
            </> :
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <Link to="/login" className={classes.link}>Login</Link>
              </ListItemText>
            </ListItem>
          }
          
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={classes.icon} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;