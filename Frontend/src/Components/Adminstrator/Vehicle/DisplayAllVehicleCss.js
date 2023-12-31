import { makeStyles } from "@mui/styles";

export const useStyles=makeStyles({
    box:{
        width:"90%",
        
        padding:10,
        borderRadius:10,
        marginTop:'5%',
        background:'#fff',
        
        
        },
        headingStyle:{
            fontWidth:24,
            fontWeight:'bold',
            letterSpacing:1,
            paddingTop:5,
            paddingBottom:5,
        
        },
        center:{
            display:'flex',
            justifyContent:'center',
            alignItem:'center'
        },
        
      
        dialogContainer:{
            display:'flex',
           
            width:'70vw',
            height:'100vh'
        },
        dialogBox:{
           
            width:"120%",
            height:250,
           // padding:10,
            borderRadius:10,
           // marginTop:'5%',
            background:'#fff',  
        },
})