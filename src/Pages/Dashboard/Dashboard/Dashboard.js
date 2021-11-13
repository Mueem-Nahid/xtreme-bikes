import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UpdateIcon from '@mui/icons-material/Update';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import EditIcon from '@mui/icons-material/Edit';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PaymentIcon from '@mui/icons-material/Payment';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import useAuth from '../../../hooks/useAuth';
import Review from '../Review/Review';
import DashboardHome from '../DashboardHome/DashboardHome';
import UserRoute from '../../Login/UserRoute/UserRoute';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageOrders from '../ManageOrders/ManageOrders';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const styleLink = {
    textDecoration: "none",
    color: "black",
};

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { admin, logOut} = useAuth();

  //routeMatch
  let {path, url} = useRouteMatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor: '#1A1A1D'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ListItem button>
            <ListItemIcon>
                <HomeIcon></HomeIcon>
            </ListItemIcon>
            <ListItemText>
                <Link to="/" style={styleLink}>Home</Link>
            </ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon></DashboardIcon>
            </ListItemIcon>
            <ListItemText>
                <Link to={`${url}`} style={styleLink}>Dashboard</Link>
            </ListItemText>
        </ListItem>
        <Divider />
        { admin ? <List>
            <ListItem button>
                <ListItemIcon>
                    <AddCircleIcon></AddCircleIcon>
                </ListItemIcon>
                <ListItemText><Link to={`${url}/addProduct`} style={styleLink}> Add Product </Link></ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <UpdateIcon></UpdateIcon>
                </ListItemIcon>
                <ListItemText><Link to={`${url}/manageProduct`} style={styleLink}> Manage Product </Link></ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <EditIcon></EditIcon>
                </ListItemIcon>
                <ListItemText><Link to={`${url}/manageOrders`} style={styleLink}> Manage Orders </Link></ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <AddModeratorIcon></AddModeratorIcon>
                </ListItemIcon>
                <ListItemText><Link to={`${url}/makeAdmin`} style={styleLink}> Add Admin </Link></ListItemText>
            </ListItem>
            <ListItem button onClick={logOut}>
                <ListItemIcon>
                    <LogoutIcon></LogoutIcon>
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
            </ListItem>
        </List> :
        <List>
          <ListItem button>
                <ListItemIcon>
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                </ListItemIcon>
                <ListItemText><Link to={`${url}/myOrders`} style={styleLink}> My Orders </Link></ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <RateReviewIcon></RateReviewIcon>
                </ListItemIcon>
                <ListItemText><Link to={`${url}/review`} style={styleLink}> Review </Link></ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <PaymentIcon></PaymentIcon>
                </ListItemIcon>
                <ListItemText><Link to={`${url}/pay`} style={styleLink}> Pay </Link></ListItemText>
            </ListItem>
            <ListItem button onClick={logOut}>
                <ListItemIcon>
                    <LogoutIcon></LogoutIcon>
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
            </ListItem>
        </List>
        }
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        
      </Main>
      <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProduct`}>
          <ManageProducts></ManageProducts>
        </AdminRoute>
        <AdminRoute path={`${path}/manageOrders`}>
          <ManageOrders></ManageOrders>
        </AdminRoute>
        <UserRoute path={`${path}/myOrders`}>
          <MyOrders></MyOrders>
        </UserRoute>
        <UserRoute path={`${path}/review`}>
          <Review></Review>
        </UserRoute>
        <UserRoute path={`${path}/pay`}>
          <Pay></Pay>
        </UserRoute>
      </Switch>
    </Box>
  );
}