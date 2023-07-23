import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './Sidebar';
import Category from "../Category/Category";
import DisplayAllCategory from "../Category/DisplayAllCategory";
import SubCategory from "../SubCategory/SubCategory";
import DisplayAllSubCategory from "../SubCategory/DisplayAllSubCategory";
import Company from "../Company/Company";
import DisplayAllCompany from "../Company/DisplayAllCompany";
import Model from "../Model/Model";
import DisplayAllModel from "../Model/DisplayAllModel";
import Vehicle from "../Vehicle/Vehicle";
import DisplayAllVehicle from "../Vehicle/DisplayAllVehicle";
import FeatureInterface from '../Featured/FeatureInterface';
import Offer from '../Offer/Offer'
import DisplayAllOffer from '../Offer/DisplayAllOffer'
import WhypnpInterface from '../WhyPnp/WhypnpInterface'
import DisplayAllBooking from '../BookingDetails/DisplayAllBooking';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { isValidAuth } from '../../Services/FetchNodeServices';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

export default function Dashboard() {
  const [authState, setAuthState] = React.useState(false)

  useEffect(function () {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    var result = await isValidAuth()

    if (result.auth) {
      setAuthState(true)
    }
    else {
      setAuthState(false)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You are not a authorise user!'
      })
      window.location.href = `/adminlogin`
    }

  }
  const showAlert = () => {





  }

  var adminInfo = localStorage.getItem("details")
  var admin = JSON.parse(adminInfo)[0]
  const handleavatar = () => {
    if (admin === null) {
      return (
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      )
    }
    else {
      return (
        <Avatar >
          {admin.adminname.charAt(0)}
        </Avatar>
      )

    }
  }
  // alert()
  return (
    <div>
      {authState ? <>
        <div style={{ maxWidth: '100vw' }}>
          {/*console.log(admin.adminname)
     */ }
          <Box sx={{ flexGrow: 1, flex: '100%', }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  PaynRent
                </Typography>

                {handleavatar()}
              </Toolbar>
            </AppBar>
            <Grid container spacing={0} >
              <Grid item xs={12} >
                <div style={{ paddingTop: 10, paddingLeft: 20, display: 'flex', width: 200, justifyContent: 'çenter', allignItems: 'center' }}>
                  <img src='/assets/defaultcar.png' style={{ width: 150 }} />
                </div>
              </Grid>
              <Grid item xs={2} >
                <SideBar />
              </Grid>
              <Grid xs={10}>
                <Routes>
                  <Route element={<Category />} path="/category" />
                  <Route element={<DisplayAllCategory />} path="/displayallcategory" />
                  <Route element={<SubCategory />} path="/subcategory" />
                  <Route element={<DisplayAllSubCategory />} path="/displayallsubcategory" />
                  <Route element={<Company />} path="/company" />
                  <Route element={<DisplayAllCompany />} path="/displayallcompany" />
                  <Route element={<Model />} path="/model" />
                  <Route element={<DisplayAllModel />} path="/displayallmodel" />
                  <Route element={<Vehicle />} path="/vehicle" />
                  <Route element={<DisplayAllVehicle />} path="/displayallvehicle" />
                  <Route element={<FeatureInterface />} path="/featureinterface" />
                  <Route element={<WhypnpInterface />} path="/whypnpinterface" />
                  <Route element={<DisplayAllOffer />} path="/displayalloffer" />
                  <Route element={<DisplayAllBooking />} path="/displayallbooking" />
                  <Route element={<Offer />} path="/offer" />



                </Routes>
              </Grid>
            </Grid>
          </Box>
        </div>
      </>
        : <></>}
    </div>
  );
}