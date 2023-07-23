import {useState} from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

export default function AdvancePayment(){
    var navigate=useNavigate()
    var dispatch=useDispatch()
const [securityPay,setSecurityPay]=useState({'2000':2000})
const [doorPay,setDoorPay]=useState({'0':0})

/*
const handleAdvancePaymentClick=(event)=>{
    
    var ap=advancePay
    if (event.target.checked) {

        ap['3000']=3000
    }
    else{
        delete  delete  ap['3000']
     
    }
    setAdvancePay(ap)
   alert(JSON.stringify(advancePay))

}*/

const handleDoorStepClick=(event)=>{
    var dsp=doorPay
    if (event.target.checked) {
        delete  dsp[dsp[0]]
        dsp[event.target.value]=event.target.value
    }
    else{
        dsp[0]=0
        delete  dsp[event.target.value]
     
    }
    setDoorPay(dsp)
    //alert(JSON.stringify(doorPay))
    }

    const handleClick=()=>{
        // alert('fff')
        ;//to add new key value
        dispatch({type:"ADD_DOOR_STEP",payload:{securitypay:securityPay,doorpay:doorPay}})
 navigate('/bookinterface')
     
     }
    return(
        <div>
            
     <FormControlLabel control={<Checkbox onChange={handleDoorStepClick} value={400} />} label="Door Step Delivery" />
     <FormControlLabel control={<Checkbox   //onClick={handleAdvancePaymentClick} 
     value={securityPay} />} label="SecurityPayment" checked  />
<div>
    <Button variant='contained' onClick={handleClick}>
        Submit
    </Button>
</div>
        </div>

    )
}