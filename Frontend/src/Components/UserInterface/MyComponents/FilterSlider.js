import { useState, useEffect } from "react";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { getData } from "../../Services/FetchNodeServices";


export default function FilterSlider(props) {
    const [subCategory, setSubCategory] = useState([])
    const [Company, setCompany] = useState([])
    const [selectedSegmentCompany, setSelectedSegmentCompany] = useState({})
    const [selectedFuelType, setSelectedFuelType] = useState({})
    const [selectedSeatingCapacity, setSelectedSeatingCapacity] = useState({})
    const [filterList,setFilterList]=useState({})

    useEffect(function () {
        fetchAllSubCategory()
        fetchAllCompany()
    }, [])
    const fetchAllSubCategory = async () => {
        var result = await getData('user/all_subcategory')
        setSubCategory(result.data)
        //console.log('Result',category)
    }
    const fetchAllCompany = async () => {
        var result = await getData('user/all_company')
        setCompany(result.data)
        //console.log('Result',category)
    }
    const handleSegmentChangeCompany = (event) => {
        var segment = selectedSegmentCompany
        /*alert(event.target.value)
        alert(event.target.checked)*/
        if (event.target.checked) {
            segment[event.target.value] = event.target.value
        }
        else {
            delete segment[event.target.value]
            //alert(JSON.stringify(segmentCompany))
        }
        setSelectedSegmentCompany(segment)
       // alert(JSON.stringify(segment))
var filter=filterList
filter={...filter,'segment':segment}
setFilterList(filter)
        props.filterOperations(filter)

    }
    const handleFuelType = (event) => {
        var FuelType = selectedFuelType
        /*alert(event.target.value)
        alert(event.target.checked)*/
        if (event.target.checked) {
            FuelType[event.target.value] = event.target.value
        }
        else {
            delete FuelType[event.target.value]
            //alert(JSON.stringify(segmentCompany))
        }
        setSelectedFuelType(FuelType)
        //alert(JSON.stringify(FuelType))
        var filter=filterList

        filter={...filter,'fuel':FuelType}
        setFilterList(filter)
                props.filterOperations(filter)
      //  props.filterOperations(selectedSegmentCompany)

    }

    const handleSeatingCapacity = (event) => {
        var SeatingCapacity = selectedSeatingCapacity
        /*alert(event.target.value)
        alert(event.target.checked)*/
        if (event.target.checked) {
            SeatingCapacity[event.target.value] = event.target.value
        }
        else {
            delete SeatingCapacity[event.target.value]
            //alert(JSON.stringify(segmentCompany))
        }
        setSelectedSeatingCapacity(SeatingCapacity)
       // alert(JSON.stringify(SeatingCapacity))
        var filter=filterList

        filter={...filter,'Seat':SeatingCapacity}
        setFilterList(filter)
                props.filterOperations(filter)
      //  props.filterOperations(selectedSegmentCompany)

    }


    const showSegmentOfCategory = () => {
        return subCategory.map((item) => {
            return (
                <div key={item.subcategoryid}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'left', marginLeft: '16.3%' }}  >

                        <span ><FormControlLabel control={<Checkbox />} label={<span style={{ fontFamily: 'Poppins' }}>{item.subcategoryname}</span>} /></span>

                    </div>
                </div>
            )
        })
    }
    const showSegmentOfCompany = () => {
        return Company.map((item) => {
            return (
                <div key={item.companyid}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'left', marginLeft: '16.3%' }}  >

                        <span ><FormControlLabel control={<Checkbox id="c1" value={item.companyid} onChange={handleSegmentChangeCompany} />}  label={<span style={{ fontFamily: 'Poppins' }}>{item.companyname}</span>} /></span>

                    </div>
                </div>
            )
        })
    }
    const showSegmentOfFuelType = () => {
        return (

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginLeft: '16.3%' }} >

                <div>
                    <span ><FormControlLabel control={<Checkbox value="PETROL"  onChange={handleFuelType} />} label={<span style={{ fontFamily: 'Poppins' }}>{"PETROL"}</span>} /></span>
                </div>
                <div style={{ marginTop: '-4%' }}>
                    <span ><FormControlLabel control={<Checkbox value="DISEL" onChange={handleFuelType} />} label={<span style={{ fontFamily: 'Poppins' }}>{"DISEL"}</span>} /></span>
                </div>
                <div style={{ marginTop: '-4%' }}>
                    <span ><FormControlLabel value="CNG" control={<Checkbox onChange={handleFuelType} />} label={<span style={{ fontFamily: 'Poppins' }}>{"CNG"}</span>} /> </span>

                </div>
                <div style={{ marginTop: '-4%' }}>
                    <span ><FormControlLabel control={<Checkbox value="ELECTRIC" onChange={handleFuelType} />} label={<span style={{ fontFamily: 'Poppins' }}>{"ELECTRIC"}</span>} /></span>
                </div>

            </div>


        )
    }
    const showSegmentOfTransmissionType = () => {
        return (

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginLeft: '16.3%' }} >


                <div style={{ marginTop: '-4%' }}>
                    <span ><FormControlLabel control={<Checkbox />} label={<span style={{ fontFamily: 'Poppins' }}>{"Automatic"}</span>} /></span>
                </div>
                <div style={{ marginTop: '-4%' }}>
                    <span ><FormControlLabel control={<Checkbox />} label={<span style={{ fontFamily: 'Poppins' }}>{"Manual"}</span>} /></span>
                </div>

            </div>


        )
    }

    const showSegmentOfSeatingCapacity = () => {
        return (

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginLeft: '16.3%' }} >


                <div style={{ marginTop: '-4%' }}>
                    <span ><FormControlLabel control={<Checkbox value="5" onChange={handleSeatingCapacity} />} label={<span style={{ fontFamily: 'Poppins' }}>{"5 Seats"}</span>} /></span>
                </div>
                <div style={{ marginTop: '-4%' }}>
                    <span ><FormControlLabel control={<Checkbox value="4" onChange={handleSeatingCapacity} />} label={<span style={{ fontFamily: 'Poppins' }}>{"4 Seats"}</span>} /></span>
                </div>

            </div>


        )
    }
    const handleClearAllChange=(event)=>{

    }

    return (
        <div style={{ width: '100%', height: '100%', background: '#fff', marginTop: '0.2%' }}>

            <div>
                <div >
                    <span style={{ marginLeft: '15.3%', fontFamily: 'Poppins' }}>
                        <b>Filter</b>
                    </span>
                    <span onClick={handleClearAllChange} style={{ marginLeft: '38%', cursor: 'pointer', fontFamily: 'Poppins' }}>
                        clear all
                    </span>

                </div>

                <div style={{ marginTop: '5%', marginLeft: '15.3%', fontFamily: 'Poppins' }} >

                    <b>Segment</b>

                </div>

                <div style={{ marginTop: '2%' }} >

                    {showSegmentOfCategory()}

                </div>

                <div style={{ marginTop: '1%', marginLeft: '15.3%', fontFamily: 'Poppins' }} >

                    <b>Company</b>

                </div>
                <div style={{ marginTop: '1%' }} >

                    {showSegmentOfCompany()}

                </div>
                <div style={{ marginTop: '1%', marginLeft: '15.3%', fontFamily: 'Poppins' }} >

                    <b>FuelType</b>

                </div>

                <div style={{ marginTop: '1%' }} >

                    {showSegmentOfFuelType()}

                </div>
                <div style={{ marginTop: '1%', marginLeft: '15.3%', fontFamily: 'Poppins' }} >

                    <b>Transmission Type</b>

                </div>

                <div style={{ marginTop: '1%' }} >

                    {showSegmentOfTransmissionType()}

                </div>
                <div style={{ marginTop: '1%', marginLeft: '15.3%', fontFamily: 'Poppins' }} >

                    <b>Seating Capacity</b>

                </div>

                <div style={{ marginTop: '1%' }} >

                    {showSegmentOfSeatingCapacity()}

                </div>
            </div>
        </div>
    )
    /*<div style={{ position: 'relative' }}>
  <div style={{ position: 'absolute', left: '0%', top: '50%', width: '30%', height: '100%', background: '#f2f2f2' }}>

      <div style={{ position: 'relative', background: '#f2f2f2' }}>

          <div style={{ position: 'absolute', left: '30%', top: '20%' }}>
              Filter
          </div>
          <div style={{ position: 'absolute', left: '60%', cursor: 'pointer' }}>
              clear all
          </div>

      </div>


      <div style={{ cursor: 'pointer' }}>
          <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolte', left: '50%', top: '10%' }} >
                  {showSegmentOfCategory()}
              </div>
          </div>
      </div>



  </div>
</div>*/
}