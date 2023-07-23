import { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import VehicleComponent from "./MyComponents/VehicleComponent";
import SecondHeader from "./MyComponents/SecondHeader";
import Header from "./MyComponents/Header";
import FilterSlider from "./MyComponents/FilterSlider";
import { Divider } from "@mui/material";
import { ServerURL, getData } from "../Services/FetchNodeServices";
export default function VehicleDetails(props) {
    const [vehicleList, setVehicleList] = useState([])
    const [tempVehicleList, setTempVehicleList] = useState([])

    const fetchAllVehicle = async () => {
        var response = await getData('vehicle/display_all_vehicle')
        setVehicleList(response.data)
        setTempVehicleList(response.data)
    }

    useEffect(function () {
        fetchAllVehicle()

    }, [])

    const segmentCompanyFilter = (ids) => {
        //alert(JSON.stringify(ids))
        var models = Object.values(ids?.segment ? ids.segment : {})
        var fuel = Object.values(ids?.fuel ? ids.fuel : {})
        var Seat = Object.values(ids?.Seat ? ids.Seat : {})
        //alert(Seat)
        /*var condition =models.map((id)=>{
      str=str+'item.companyid=='+id+' ||'
      return str
        })*/
        var segment_str = ''
        //Company
        if (models.length > 0) {
            for (var i = 0; i < models.length; i++) {
                segment_str = segment_str + "item.companyid==" + models[i] + " || "
                //return str
            }
            //alert (str)
            segment_str = segment_str.substring(0, segment_str.lastIndexOf('||'))
            //alert(str)
            //item.companyid==3||item.companyid==4 we have to make like this
            //alert(models[0])
            //alert(models.some((item)=>item==7))
            //alert(models)

        }
        //  alert("Segement"+segment_str)

        //Fuel
        var fuel_str = ''
        if (fuel.length > 0) {
            for (i = 0; i < fuel.length; i++) {
                fuel_str = fuel_str + "item.fueltype=='" + fuel[i] + "' || "
            }
            fuel_str = fuel_str.substring(0, fuel_str.lastIndexOf('||'))
            // alert(fuel_str)
        }
        // alert("Fuel"+fuel_str)
        var Seat_str = ''
        if (Seat.length > 0) {
            for (i = 0; i < Seat.length; i++) {
                Seat_str = Seat_str + "item.capacity=='" + Seat[i] + "' || "
                //alert(Seat[i])
            }
            Seat_str = Seat_str.substring(0, Seat_str.lastIndexOf('||'))
           // alert('Seat_Str : ' + Seat_str)
        }

        var final_query = ''
        if (segment_str != '') {
            final_query = final_query + segment_str + " && "
            // alert('Segment Final 1'+final_query)
        }
        if (fuel_str != '') {
            final_query = final_query + fuel_str + "&&"
            // alert('Fuel Final 1'+final_query)

        }
        if (Seat_str != '') {
            final_query = final_query + Seat_str + "&&"
            // alert('Seat Final 1'+final_query)

        }
        if (segment_str != '' || fuel_str != '' || Seat_str != '')
            final_query = final_query.substring(0, final_query.lastIndexOf('&&'))//or -1 
        else {
            final_query = final_query.substring(0, final_query.lastIndexOf('||') - 1)

        }
        //if (Seat_str!='')



        //alert('final :'+final_query)

        var temp = tempVehicleList.filter((item) => {


            // return models.some((id)=>id==item.companyid )   we can also use this
            return eval(final_query)

        })
        // alert("TEMP = "+JSON.stringify(temp))

        setVehicleList(temp)

    }

    const filterOperations = (parameter) => {
        //alert(JSON.stringify(parameter))
        segmentCompanyFilter(parameter)
    }

    const listVehicle = () => {

        if (vehicleList.length == 0) {
            return (
                <div >
                    <div style={{ fontFamily: 'Poppins', marginLeft: '90%', fontSize: 20, fontWeight: 'bolder', width: '100%' }}>
                        <span>0 Cars available for rental in Hyderabad</span></div>
                    <div style={{ marginTop: '30%', marginLeft: '130%' }}>
                        <img src="assets/resetCarFilter.svg" />
                    </div>
                    <div style={{ marginTop: '5%', fontFamily: 'Poppins', marginLeft: '92%', fontSize: 18, fontWeight: 'bolder', width: '100%' }}>
                        Sorry, No cars available for your search
                    </div>
                    <div style={{ marginTop: '0%', marginLeft: '97%', fontFamily: 'Poppins', fontSize: 18, fontWeight: 'bolder', width: '100%' }}>
                        Try changing dates or reset filters
                    </div>
                    <div style={{ marginTop: '3%', fontFamily: 'Poppins', marginLeft: '122%', fontSize: 18, fontWeight: 'bolder', width: '70%' }} >
                        <Button variant='contained' style={{ fontFamily: 'poppins', background: 'linear-gradient(270deg,#1caba2, 20%,#1c7fab)' }} >Reset filters</Button>
                    </div>
                </div>
            )
        }
        else {
            return vehicleList.map((item) => {
                return (
                    <div style={{ padding: 3, margin: 5, background: '#fff', borderRadius: 10 }} >
                        <VehicleComponent item={item} />
                    </div>
                )



            })
        }

    }


    return (
        <div style={{ background: '#dfe6e9' }} >
            <div  >
                <Header />

            </div>
            <Divider />
            <div>

                <SecondHeader />
            </div>
            <Grid container spacing={1}>

                <Grid item xs={2}>
                    <div >
                        <FilterSlider filterOperations={filterOperations} />
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', margin: 20 }}>
                        {listVehicle()}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}