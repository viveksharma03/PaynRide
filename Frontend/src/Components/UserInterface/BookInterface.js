import { Divider, Paper, TextField, Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { Alarm } from '@mui/icons-material'
import { CurrencyRupee } from '@mui/icons-material'
import Header from './MyComponents/Header'
import { useSelector } from 'react-redux'
import { ServerURL } from '../Services/FetchNodeServices'
import { useNavigate } from 'react-router-dom'
import PaymentGateway from './PaymentGateway'
const BookInterface = () => {
    var navigate=useNavigate();
    var vehicle = useSelector(state => state.vehicle)
    var door = useSelector(state => state.doorStep)
   

    // console.log('vehicleDetails:',vehicle)
    var vehicleDetails = Object.values(vehicle)[0]
    //console.log('vehicle Values:',vehicleDetails)
var pickup=Object.values(door.doorpay)[0]

var sdeposit=Object.values(door.securitypay)[0]
//var advacePay=vehicleDetails.rent*2/3
var total=parseInt(pickup)+parseInt(sdeposit)+vehicleDetails.rent

const handleProceed=()=>{
    alert(location)
    navigate("/paymentgateway")
}
    var bookingDetails = useSelector(state => state.booking)
    // console.log('Start Time:',Object.values(bookingDetails.starttime)[2]);//we get date and time using this
    const[location,setLocation]=useState(`paynride ${bookingDetails.city}`)
    //${bookingDetails.city}
    var st = Object.values(bookingDetails.starttime)[2];
    var std = st.toDateString()
    var stt = st.getHours() + ":" + st.getMinutes() + ":" + st.getSeconds()

    var et = Object.values(bookingDetails.endtime)[2];
    var etd = et.toDateString()
    var ett = et.getHours() + ":" + et.getMinutes() + ":" + et.getSeconds()
    return (<div style={{ background: "rgb(241, 241, 241)" }}>
        <div>
            <Header />
        </div>
{/*console.log("DOOR",Object.values(door.advancepay)[0])*/}
{/*console.log("DOOR",Object.values(door.doorpay)[0])*/}
        <div style={{ display: 'flex', marginTop: '0%' }}>
            <div style={{ flex: '65.5%', height: 500, background: 'rgb(241, 241, 241)' }}>
                <Paper elevation={3} style={{ background: 'rgb(241, 241, 241)', height: 240 }}>

                    <div style={{ display: 'flex', height: 240 }}>
                        <div style={{ flex: '40%', background: 'rgb(241, 241, 241)' }}>

                            <div style={{ marginLeft: '50px' }}>                        {vehicleDetails.modelname}             {vehicleDetails.companyname}</div>
                            <div style={{ marginLeft: '50px' }}>
                                <img width={250} src={`${ServerURL}/images/${vehicleDetails.icon}`} alt="Grand_i10" />
                            </div>
                            <div >
                                <span >
                                    <div style={{ position: 'absolute', left: '5%', top: '33%' }}>
                                        <img src='/assets/iconseat.svg' />
                                    </div>
                                    <div style={{ position: 'absolute', left: '4%', top: '35%' }}>
                                        {vehicleDetails.seat} seats
                                    </div>
                                </span>

                                <span >
                                    <div style={{ position: 'absolute', left: '11%', top: '33%' }}>
                                        <img src='assets/icontransmission.svg' />
                                    </div>
                                    <div style={{ position: 'absolute', left: '9.5%', top: '35%' }} >
                                        Manual
                                    </div>
                                </span>

                                <span >
                                    <div style={{ position: 'absolute', left: '18%', top: '33%' }}>
                                        <img src='/assets/icondiesel.svg' />
                                    </div>
                                    <div style={{ position: 'absolute', left: '17%', top: '35%' }} >
                                        {vehicleDetails.fueltype}
                                    </div>
                                </span>

                            </div>

                        </div>


                        <div style={{ flex: '60%', background: 'rgb(241, 241, 241)' }}>
                            <div style={{ width: '100%' }}>
                                <Divider >Booking Details</Divider>
                            </div>

                            <div style={{ marginLeft: '10%', marginTop: '20px' }} >
                                <span >
                                    {std + "  " + stt}
                                </span>
                                <span style={{ position: 'relative', left: '20%', top: '5px' }}>
                                    <img src='assets/toIcon.svg' />
                                </span>
                                <span style={{ marginLeft: '30%' }}>
                                {etd + "  " + ett}
                                </span>
                            </div>

                            <div style={{ marginLeft: '34%', marginTop: '20px' }}>
                                <span><Alarm /></span>
                                <span style={{ position: 'relative', left: '20px', top: '-7px' }}>{bookingDetails.duration}</span>
                            </div>



                            <div style={{ marginLeft: '30%', marginTop: '10px' }}>
                                <span>{bookingDetails.city}</span>
                                <span style={{ marginLeft: '25px' }}>Change City</span>
                            </div>

                            <div style={{ marginLeft: '15%', marginTop: '4px' }}>
                                <span>Pricing Plan : </span>
                                <span style={{ marginLeft: '2px' }}>Includes 2196 kms,excludes fuel</span>
                                <span style={{ marginLeft: '20px' }}>Change Plan</span>

                            </div>

<div>
    
</div>
                        </div>

                    </div>

                </Paper>




















                <div style={{ position: 'relative' }}>
                    <Paper elevation={3} style={{ background: 'rgb(241, 241, 241)', height: 400, marginTop: '15px' }}>

                        <div style={{ display: 'flex', height: 400, background: 'rgb(241, 241, 241)' }}>
                            <div style={{ width: '100%', marginTop: '40px' }}>
                                <Divider>IMPORTANT POINTS TO REMEMBER</Divider>
                            </div>
                            <div style={{ position: 'absolute', left: '10px', top: '20%', width: '100%' }} >
                                <span style={{ fontSize: 14, }}>
                                    CHANGE IN PRICING PLAN:
                                </span>
                                <span style={{ marginLeft: '12%', fontSize: 14 }}>
                                    The pricing plan (6 kms/hr, without fuel) cannot be changed after the booking is made
                                </span>
                            </div>

                            <div style={{ position: 'absolute', left: '10px', top: '32%', width: '100%' }} >
                                <span style={{ fontSize: 14, }}>
                                    FUEL:
                                </span>
                                <span style={{ marginLeft: '26%', fontSize: 14, }}>
                                    In case you are returning the car at a lower fuel level than what was received, we will charge a flat Rs 500   <div style={{ marginLeft: '29.5%' }}>service charge + actual fuel cost refuelling to get the tank to the same level as what was received</div>
                                </span>
                            </div>

                            <div style={{ position: 'absolute', left: '10px', top: '48%', width: '100%' }} >
                                <span style={{ fontSize: 14, }}>
                                    TOLLS, PARKING, INTER-STATE TAXES:
                                </span>
                                <span style={{ marginLeft: '6%', fontSize: 14, }}>
                                    To be paid by you.
                                </span>
                            </div>

                            <div style={{ position: 'absolute', left: '10px', top: '60%', width: '100%' }} >
                                <span style={{ fontSize: 14, }}>
                                    ID VERIFICATION:
                                </span>
                                <span style={{ marginLeft: '18%', fontSize: 14, }}>
                                    Please keep your original Driving License handy. While delivering the car to you, our executive will verify your   <div style={{ marginLeft: '29%' }}>original Driving License and ID proof (same as the ones whose details were provided while making the booking).</div>
                                    <div style={{ marginLeft: '29%' }}>
                                        This verification is mandatory. In the unfortunate case where you cannot show these documents, we will not be
                                    </div>
                                    <div style={{ marginLeft: '29%' }}>
                                        able to handover the car to you, and it will be treated as a late cancellation (100% of the fare would be payable).
                                    </div>
                                    <div style={{ marginLeft: '29%' }}>
                                        Driving license printed on A4 sheet of paper (original or otherwise) will not be considered as a valid document.
                                    </div>
                                </span>
                            </div>

                            <div style={{ position: 'absolute', left: '10px', top: '90%', width: '100%' }} >
                                <span style={{ fontSize: 14, }}>
                                    PRE-HANDOVER INSPECTION:
                                </span>
                                <span style={{ marginLeft: '10%', fontSize: 14, }}>
                                    Please inspect the car (including the fuel gauge and odometer) thoroughly before approving the checklist.                            </span>
                            </div>


                        </div>

                    </Paper>
                </div>














            </div>



            <div style={{ flex: '33%', height: 700, background: 'rgb(241, 241, 241)', marginLeft: '1.5%' }}>





                <Paper elevation={3} style={{ height: 690 }}>

                    <div style={{ display: 'flex', height: 690, background: 'rgb(241, 241, 241)' }}>

                        <div style={{ width: '100%' }}>

                            <div style={{ width: '100%', marginTop: '40px' }}>
                                <Divider>FARE DETAILS</Divider>
                            </div>

                            <div style={{ width: '100%', marginTop: '20px', marginLeft: '2%' }}>
                                <span>
                                    Base Fare
                                </span>
                                <span style={{ position: 'relative', top: '0px', marginLeft: '51%' }}>
                                &#8377;
                                </span>
                                <span>
                                    {vehicleDetails.rent}
                                </span>

                            </div>

                            <div style={{ width: '100%', marginTop: '20px', marginLeft: '2%' }}>
                                <span>
                                    Doorstep delivery & pickup
                                </span>
                                <span style={{ position: 'relative', top: '0px', marginLeft: '26%' }}>
                                &#8377;
                                </span>
                                <span>
                                {pickup}
                                </span>

                            </div>

                            <div style={{ width: '100%', marginTop: '20px', marginLeft: '2%' }}>
                                <span>
                                    Insurance & GST
                                </span>
                                <span style={{ position: 'relative', top: '8px', marginLeft: '41%' }}>
                                    Included
                                </span>


                            </div>

                            

                            <div style={{ width: '100%', marginTop: '20px', marginLeft: '2%' }}>
                                <span>
                                    Refundable security deposit
                                </span>
                                <span style={{ position: 'relative', top: '0px', marginLeft: '25.5%' }}>
                                &#8377;
                                </span>
                                <span>
                                    {sdeposit}
                                </span>

                            </div>

                            <Grid container spacing={2} style={{ width: '100%', marginTop: '30px', marginLeft: '2%' }}>
                                <Grid item xs={5}>
                                    <TextField fullWidth label="Promo Code" variant="standard" />
                                </Grid>

                                <Grid //onClick={()=>navigate("/paymentgateway")}
                                 item fullWidth xs={4} style={{ marginLeft: '90px', position: 'relative', top: '10px' }}>
                                    <div style={{ background: 'linear-gradient(270deg,#1caba2, 20%,#1c7fab)', width: '94px', display: 'flex', justifyContent: 'center', height: '36px', borderRadius: '5px' }}>
                                        <div style={{ color: '#fff', marginTop: '5px',cursor:'pointer' }}>
                                            Apply
                                        </div>


                                    </div>
                                </Grid>
                            </Grid>

                            <div style={{ marginTop: '50px' }}>
                                <hr style={{ background: '#95a5a6' }} />
                            </div>
                            <div >
                                <span style={{ fontSize: 24 }}>Total</span>
                                <span style={{ marginLeft: '52%', position: 'relative', top: '4px' }}><CurrencyRupee /> </span>
                                <span style={{ fontSize: 20 }}>
                                    {total}
                                </span>
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <hr style={{ background: '#95a5a6' }} />
                            </div>

                            <div style={{ width: '100%', marginTop: '15px', marginLeft: '2%' }}>
                                <span>
                                    Kms limit
                                </span>

                                <span style={{ position: 'relative', top: '3px', marginLeft: '50%' }}>
                                    456 kms
                                </span>

                            </div>
                            <div style={{ width: '100%', marginTop: '15px', marginLeft: '2%' }}>
                                <span>
                                    Fuel
                                </span>

                                <span style={{ position: 'relative', top: '3px', marginLeft: '57%' }}>
                                    Excluded
                                </span>

                            </div>
                            <div style={{ width: '100%', marginTop: '15px', marginLeft: '2%' }}>
                                <span>
                                    Extra kms charge
                                </span>

                                <span style={{ position: 'relative', top: '3px', marginLeft: '40%' }}>
                                    9/km
                                </span>

                            </div>

                            <div style={{ width: '100%', marginTop: '15px', marginLeft: '2%' }}>
                                <span>
                                    Tolls, Parking & Inter-state taxes
                                </span>

                                <span style={{ position: 'relative', top: '3px', marginLeft: '19%' }}>
                                    To be paid by you
                                </span>

                            </div>

                            <div style={{ width: '50%', marginTop: '15px', marginLeft: '2%' }}>
                                <span>
                                    <TextField value={location} onChange={(event)=>setLocation(event.target.value)} fullWidth label="Delivery Location" variant="standard" />
                                </span>

                                <span  onClick={handleProceed} style={{ position: 'absolute', top: '92%', marginLeft: '4%' }} >
                                    <Button  color='secondary' variant='contained'>
                                        Proceed
                                    </Button>
                                </span>

                            </div>





                        </div>

                    </div>

                </Paper>



            </div>
        </div>





    </div>
    
    )

    
}

export default BookInterface


//style={{ position: 'relative', top: '10px', marginLeft: '80%' }}