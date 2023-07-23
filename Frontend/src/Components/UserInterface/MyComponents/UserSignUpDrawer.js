import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { Button, TextField, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import OtpInterface from './OtpInterface';
import UserDetailsDrawer from './UserDetailsDrawer'
import { Warning } from '@mui/icons-material';


export default function UserSignUpDrawer(props) {
    const [value, setValue] = React.useState('');
    const [mobile, setMobile] = React.useState('');
    const [getOtp, setOtp] = React.useState('');

    const [btnStatus, setBtnStatus] = React.useState(false);
    const [mobStatus, setMobStatus] = React.useState(false);
    const [btnMessage, setBtnMessage] = React.useState('Get An Otp');
    var [status, setStatus] = React.useState(false)
    const handleClick = () => {
        // alert('fff')
        setStatus(true)
    }
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleClose = () => {
        setState({ ...state, ['right']: false });

    }
    //const [anchor, setAnchor] = React.useState('right')
    //alert(props.status)
    React.useEffect(function () {
        // toggleDrawer(anchor, props.status)
        setState({ ...state, ['right']: props.status });

    }, [props])

    const GenerateOtp = () => {

        if (btnMessage == 'Change Mobile Number') {
            setBtnStatus(false)
            setBtnMessage('Get An Otp')
            setMobile('')

        }
        else {
            var otp = parseInt(Math.random() * 8999) + 1000
            alert(otp)
            setBtnStatus(true)
            setBtnMessage('Change Mobile Number')
            setOtp(otp)
            
        }
    }

    const handleOtpChange = (value) => {
        //setOtp(value)
    }
    const handleStatus = () => {

        setStatus(false)
    }
    const handleMobileNo = (event) => {
        if (event.target.value.length ==10) {
            setMobStatus(false)
            setMobile(event.target.value )
            //onChange={(event) => setMobile(event.target.value)}
        }
        else  {
            setMobStatus(true)
            setMobile(event.target.value )
        }
    }
    const handleGetOtpBtn=()=>{
        if(mobile!=''){
           
            return(
                <Button variant='contained' fullWidth style={{ background: 'linear-gradient(270deg,#1caba2, 20%,#1c7fab)'}} onClick={GenerateOtp}>{btnMessage}</Button>
                )
            
        }
        else{
            return(
                <Button variant='contained' fullWidth style={{ background: 'linear-gradient(270deg,#1caba2, 20%,#1c7fab)',cursor:'not-allowed',opacity:0.4 }} >{btnMessage}</Button>
                )  
        }
    }

    const toggleDrawer =
        (anchor, open) =>
            (event) => {
                if (
                    event.type === 'keydown' &&
                    (event.key === 'Tab' ||
                        (event.key === 'Shift'))
                ) {
                    return;
                }
                props.handleStatus()
                setState({ ...state, ['right']: open });
            };
    const list = (anchor) => (
        <Grid container spacing={3} style={{ width: 400, padding: 30 }}>
            <Grid item xs={12}>
                <img src='/assets/logo1.png' style={{ width: 70, padding: 3 }} />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'center', width: 24, fontFamily: 'Poppins', fontWeight: 700 }}>
                Login
            </Grid>
            <Grid item xs={12}>
                <TextField  value={mobile}
                    onChange={handleMobileNo}
                    variant='outlined' fullWidth label={<span style={{ width: 24, fontFamily: 'Poppins', fontWeight: 700 }}
                    //   inputProps={{ maxLength: 11 }}
                    >Mobile Number</span>}
                    inputProps={{ maxLength: 10, style: { fontFamily: 'Poppins', fontWeight: 900, } }}
                />
            </Grid>
            {mobStatus ? <><Grid
    item xs={12} style={{ textAlign: 'center', width: 24, fontFamily: 'Poppins', fontWeight: 700 }}>
       <Warning/> Mobile Number Should be 10 Digits
    </Grid></>:<></>}

            <Grid item xs={12}>
            {handleGetOtpBtn()}
            </Grid>
            {btnStatus ? <Grid item xs={12}>
                <OtpInterface mobile={mobile} handleClose={handleClose} getOtp={getOtp} GenerateOtp={GenerateOtp}
                    onchange={handleOtpChange}

                />


            </Grid> : <></>}

        </Grid>
    );

    return (
        <div>
            <React.Fragment >
                <Drawer
                    anchor={'right'}
                    open={state.right}
                    onClose={toggleDrawer('right', false)}
                >
                    {list('right')}
                </Drawer>
            </React.Fragment>
            <UserDetailsDrawer status={status} handleStatus={handleStatus} />

        </div>
    );
}

