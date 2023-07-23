import React, { useEffect, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { SocialDistance } from "@mui/icons-material";
import { propsToClassKey } from "@mui/styles";
import UserDetailsDrawer from './UserDetailsDrawer'
import { postData } from "../../Services/FetchNodeServices";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function OtpInterface(props) {
    const [txtOne, setTxtOne] = useState('')
    const [txtTwo, setTxtTwo] = useState('')
    const [txtThree, setTxtThree] = useState('')
    const [txtFour, setTxtFour] = useState('')
    const [inputOtp, setInputOtp] = useState('')

    const [seconds, setSeconds] = useState(true)
    const [status, setStatus] = useState(false)
    const [userDetails, setUserDetails] = useState({})

    //const [seconds, setSeconds] = useState({ time: 5, status:true })
    var [time, setTime] = useState(8)
    var [refresh, setRefresh] = useState(false)
    var navigate = useNavigate()
    var dispatch = useDispatch()
    var interval

    const fetchUserDetails = async () => {
        var result = await postData('user/check_user_mobileno', { mobileno: props.mobile })
        setUserDetails(result);

    }

    useEffect(function () {
        myTimer(seconds)
        fetchUserDetails()
    }, [])

    const myTimer = (status) => {
        if (status) {
            var t = time

            interval = setInterval(() => {

                if (t > 0) {
                    t = t - 1
                    setTime(t)
                    //alert('if',t)

                }
                else {
                    // alert('else',t)
                    clearInterval(interval)
                    setSeconds(false)

                }
            }, 1000)
        }
        //setRefresh(!refresh)

    }
    const handleResend = () => {
        props.GenerateOtp()
        setSeconds(true)
        myTimer(seconds)
        alert('handle', seconds)

    }
    /*const myTimer = () => {
        HUM ISSE BHI USE KR SKTE H
        SHI KAAM KR RAHA H

        var t = seconds.time
        if (seconds.status) {
            interval = setInterval(() => {
                if (t > 0) {
                    t = t - 1;
                    setSeconds({ time: t, status: true })
                }
                else {
                    clearInterval(interval)
                    setSeconds({ time: 5, status: false })

                }
            }, 1000)
        }



    }*/


    const handleTextOneChange = (event) => {
        if (event.target.value.length >= 1) {
            setTxtOne(event.target.value)
            document.getElementById('t2').focus()

        }
    }
    const handleTextTwoChange = (event) => {
        if (event.target.value.length >= 1) {
            setTxtTwo(event.target.value)
            document.getElementById('t3').focus()

        }
    }
    const handleTextThreeChange = (event) => {
        if (event.target.value.length >= 1) {
            setTxtThree(event.target.value)
            document.getElementById('t4').focus()

        }
    }
    const handleTextFourChange = (event) => {
        if (event.target.value.length >= 1) {
            setTxtFour(event.target.value)
            setInputOtp(txtOne + txtTwo + txtThree + event.target.value)
            props.onChange(txtOne + txtTwo + txtThree + txtFour)
            //alert( txtOne+txtTwo+txtThree+event.target.value  ) 



        }
    }
    const handleVerifyBtn = () => {

    }
    const verifyOtp = () => {
        alert(inputOtp + " = " + props.getOtp)
        if (inputOtp == props.getOtp) {
            alert(' correct')
            //setStatus(true)     
            //props.handleClose()
            //alert(userDetails.status)
           
            //alert(localStorage.getItem("user"))
            if (userDetails.status) {
                // alert('move to nexct page')
                localStorage.setItem("user", JSON.stringify(userDetails.data))
                navigate('/advancepayment')
               
                props.handleClose()
                dispatch({ type: 'ADD_USER', payload: [props.mobile, userDetails.data] })
            }
            else {

                setStatus(true)

                //props.handleClose()
            }
        }
        else {
            alert('not correct')
        }
    }
    const handleStatus = () => {

        setStatus(false)
    }


    return (<div >
        <Grid container spacing={2} style={{ width: 300, padding: 20 }}>

            <Grid item xs={3}>
                <TextField id="t1" inputProps={{ maxLength: 1, style: { fontFamily: 'Poppins', fontWeight: 900, } }} onChange={handleTextOneChange} />
            </Grid>
            <Grid item xs={3}>
                <TextField id="t2" inputProps={{ maxLength: 1, style: { fontFamily: 'Poppins', fontWeight: 900, } }} onChange={handleTextTwoChange} />
            </Grid>
            <Grid item xs={3}>
                <TextField id="t3" inputProps={{ maxLength: 1, style: { fontFamily: 'Poppins', fontWeight: 900, } }} onChange={handleTextThreeChange} />
            </Grid>
            <Grid item xs={3}>
                <TextField id="t4" inputProps={{ maxLength: 1, style: { fontFamily: 'Poppins', fontWeight: 900, } }} onChange={handleTextFourChange} />
            </Grid>
            <Grid item xs={12}>
                <div style={{ fontSize: 18 }}>
                    {seconds ? <div>Waiting for Otp..{time}</div> : <div style={{ cursor: 'pointer' }} onClick={props.GenerateOtp}>Resend Otp</div>}
                </div>
            </Grid>
            <Grid item xs={12}>
                <Button onClick={verifyOtp} style={{ background: 'linear-gradient(270deg,#1caba2, 20%,#1c7fab)' }} fullWidth variant="contained">
                    Verify Otp
                </Button>
            </Grid>


        </Grid>
        <UserDetailsDrawer mobile={props.mobile} status={status} handleStatus={handleStatus} />

    </div>)
}







