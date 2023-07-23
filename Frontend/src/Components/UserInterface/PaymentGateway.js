import React, { Component, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { postData, ServerURL } from '../Services/FetchNodeServices'
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
  },
  margin: {
    marginRight: "80%",
    paddingLeft: "",
  },
  button: {
    margin: theme.spacing.unit,
  },

  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const PaymentGateway = (props) => {

    var bookingDetails = useSelector(state => state.booking)
    var vehicle = useSelector((state) => state.vehicle);
    var user = useSelector((state) => state.userDetails);
    var door = useSelector(state => state.doorStep)
    //var userDetails = Object.values(user)[0];
    var userInfo = localStorage.getItem("user");
  var userDetails = JSON.parse(userInfo)[0];
    var vehicleDetails = Object.values(vehicle)[0];
     var pickup = Object.values(door.doorpay)[0]
     var sdeposit = Object.values(door.securitypay)[0]
     var total = parseInt(pickup) + parseInt(sdeposit) + vehicleDetails.rent
     var st = Object.values(bookingDetails.starttime)[2];
     var et = Object.values(bookingDetails.endtime)[2];
     //var location=props.location
   const handleSubmit = async (id) => {

    var body = {
      city: bookingDetails.city, emailid: userDetails.emailid, phone: userDetails.mobileno, starttime: st, endtime: et, totalamount: total, advancepayment: sdeposit, paymentid: id, bookingstatus: "pending", registrationnum: vehicleDetails.registrationnum, vehicleid: vehicleDetails.vehicleid, paymentstatus: "Not Fully Paid", deliverylocation: 'location'
    }
    var response = await postData('user/submitbookingdetails', body)
    if (response.status) {
      Swal.fire({
        icon: 'success',
        title: 'Done',
        text: 'BOOKING DETAILS SUBMITTED'


      })
    }
    else {
      alert("BOOKING DETAILS NOT SUBMITTED")
    }

   }

   const options = {
    key: "rzp_test_GQ6XaPC6gMPNwH",
    amount: total * 100, //  = INR 1
    name: "PayNRent",
    // description: 'some description',
    image:
      `${ServerURL}/images/Logo1.png`,
    handler: async function (response) {
      var id = response.razorpay_payment_id
      //body['paymentid']=id
      // console.log(response)
      if (response) {
        Swal.fire({
          icon: 'success',
          title: 'Done',
          text: 'Booking Confirmed'


        })
        //alert(response.razorpay_payment_id)
        //alert("Booking Confirmed")
        handleSubmit(id);
      }
      window.location.href= `/home`

      // window.location.href= `/home`


    },
    prefill: {
      name: userDetails.fullname,
      contact: userDetails.mobileno,
      email: userDetails.emailid
    },
    notes: {
      address: "some address",
    },
    theme: {
      color: "blue",
      hide_topbar: false,
    },
   };


   const gotoRazorpay = () => {
    return (

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        {/*     console.log("USER:",userDetails.mobileno)}
      {     console.log("VEHICLE:",vehicleDetails)}
     {     console.log("STARTTime:",st)}
   {     console.log("bookingDetails:",bookingDetails)}
   {     console.log("BODY:",body)*/}



        <div style={{ fontSize: 30, fontWeight: 'bold', color: 'GrayText', padding: 20 }}>Redirecting to Razorpay pls wait........</div>

        <div className="sweet-loading">




          {openPayModal()}
        </div>
      </div>
    )
  }

  const openPayModal = async () => {
    var rzp1 = new window.Razorpay(options);

    await rzp1.open()


  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

  }, []);

  const { classes } = props;

  return (
    <>

      {gotoRazorpay()}

    </>
  );
};

export default withStyles(styles)(PaymentGateway);
