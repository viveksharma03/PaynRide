import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import { getData, postData, ServerURL,isValidAuth } from "../../Services/FetchNodeServices";
import { Avatar, Button, TextField, Grid } from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// ***we can use this also *** import { Avatar,Button,TextField,Grid} from "@mui/material";
import { useStyles } from "./DisplayAllBookingCss";
import Swal from "sweetalert2";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useNavigate } from "react-router-dom";

export default function DisplayAllBooking(props) {
    var classes = useStyles()
    //var [icon,setIcon]=useState({filename:'/assets/defaultcar.png',bytes:''})
    // var [prevIcon,setPrevIcon]=useState('')
    //var [oldIcon,setOldIcon]=useState('')
    var [categoryName, setCategoryName] = useState('')
    var [bookingId, setBookingId] = useState('')
    var [buttonStatus, setButtonStatus] = useState({ upload: true })
    var [booking, setBooking] = useState([])
    var [bookingStatus, setBookingStatus] = useState('')
    var [paymentStatus, setPaymentStatus] = useState('')

    //var navigate=useNavigate()
    const [open, setOpen] = useState(false)
    const fetchAllBooking = async () => {
        var result = await getData('user/display_all_booking')
        setBooking(result.data)
    }


//verification of auth

const checkAuth=async()=>{
    var result=await isValidAuth()
   
    if(result.auth)
    { 
        fetchAllBooking()
    }
    else
    {
      alert(result.message)
    }
  
   }
   

  ////

    useEffect(function () {
        checkAuth();
    }, [])
    const handleSetDataForDialog = (rowData) => {
        setOpen(true)
        setBookingId(rowData.bookingid)
        setCategoryName(rowData.categoryname)
        //setIcon({filename:`${ServerURL}/images/${rowData.icon}`,bytes:''})
        //setPrevIcon(`${ServerURL}/images/${rowData.icon}`)
        //setOldIcon(rowData.icon)


    }
    function displayCategories() {
        return (
            <MaterialTable
                title="List Of Booking"
                columns={[
                    { title: 'Id', field: 'bookingid' },
                    { title: 'User Email', field: 'useremail' },
                    { title: 'User Mobile', field: 'userphone' },
                    { title: 'Start date', field: 'bookingstarttime' },
                    { title: 'End date', field: 'bookingendtime' },
                    { title: 'Booking date', field: 'bookingdatetime' },
                    { title: 'Booking City', field: 'bookingcity' },
                    { title: 'Total amount', field: 'totalamount' },
                    { title: 'Refundable Security amount', field: 'advancepayment' },
                    { title: 'Booking Status', field: 'bookingstatus' },
                    { title: 'Payment Status', field: 'paymentstatus' },
                    { title: 'Vehicle Registration Number', field: 'vehicleregistrationnum' },
                    { title: 'Delivery Location', field: 'deliverylocation' },



                   
                ]}
                data={booking}
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'Edit Booking',
                        onClick: (event, rowData) => handleSetDataForDialog(rowData)
                    },
                    /*{
                      icon: 'add',
                      tooltip: 'Add Category',
                      isFreeAction: true,
                      onClick: (event) => navigate('/dashboard/category')
                    }*/
                ]}
            />
        )
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleDiscard = () => {
        //setIcon({filename:prevIcon,bytes:''})
        setButtonStatus({ upload: true })

    }/*
const handlePicture=(event)=>{
setIcon({filename:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})
setButtonStatus({upload:false})
}*/
    const handleEditBooking = async () => {
        var body = { bookingstatus: bookingStatus,paymentstatus:paymentStatus, bookingid: bookingId }


        var response = await postData('user/edit_booking', body)
        if (response.status) {
            Swal.fire({

                icon: 'success',
                title: 'Done',
                text: 'Category Updated Successfully'


            })
        }
        else {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        }
        setOpen(false)

        fetchAllBooking()
    }


    const CancelBooking = async () => {
        var body = {
            bookingid: bookingId//,oldicon:oldIcon
        }


        var response = await postData('user/delete_booking', body)
        if (response.status) {
            Swal.fire({

                icon: 'success',
                title: 'Done',
                text: 'Category Deleted Successfully'


            })
        }
        else {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        }
        setOpen(false)

        fetchAllBooking()
    }



   /* const handleSavePicture = async () => {
        var formData = new FormData()
        formData.append('categoryid', categoryId)
        /*formData.append('icon',icon.bytes)
        formData.append('oldicon',oldIcon)*/
        //var response = await postData('category/edit_picture', formData)
        /*if (response.status) {
            Swal.fire({

                icon: 'success',
                title: 'Done',
                text: 'Icon Updated Successfully'


            })
        }
        else {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
            })
        }
        setOpen(false)
        setButtonStatus({ upload: true })
        fetchAllBooking()
    }*/


   /* const showHidePictureButton = () => {
        return (
            <div>
                {buttonStatus.upload ? <><Button fullWidth variant="contained" component="label" >
                    Upload
                    <input // onChange={handlePicture} 
                        hidden accept="image/*" multiple type="file" />
                </Button></> : <><Button color="primary" onClick={handleSavePicture} >Save</Button><Button onClick={handleDiscard} color="secondary"  >Discard</Button></>}
            </div>
        )
    }*/
    const handleBookingSatus = (event) => {
        setBookingStatus(event.target.value)
    }
    const handlePaymentStatus = (event) => {
        setPaymentStatus(event.target.value)
    }
    const showDialog = () => {

        return (
            <div>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >

                    <DialogContent>

                        <div className={classes.box}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} className={classes.headingStyle}>
                                    Edit BookingDetails
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Booking Status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={bookingStatus}
                                            label="Booking Status"
                                        onChange={handleBookingSatus}

                                        >
                                            <MenuItem value="Pending">Pending</MenuItem>
                                            <MenuItem value=" Completed">Completed</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={6}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Payment Status</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={paymentStatus}
                                            label="Payment Status"
                                        onChange={handlePaymentStatus}

                                        >
                                            <MenuItem value="Paid Full Amount">Paid Full Amount</MenuItem>
                                            <MenuItem value=" Not Paid Full Amount">Not Paid Full Amount</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>

                                
                                <Grid item xs={6}>
                                    <Button variant="contained" fullWidth onClick={handleEditBooking}>
                                        Edit Booking
                                    </Button>
                                </Grid >
                                <Grid item xs={6}>
                                    <Button variant="contained" fullWidth onClick={CancelBooking} >
                                        Cancel Booking
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
    return (
        <div className={classes.dialogContainer}>
            <div className={classes.dialogBox}>
                {displayCategories()}
            </div>
            {showDialog()}
        </div>
    )
}


