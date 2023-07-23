const initialState = {
    booking: {},
    userDetails:{},
    vehicle:{},
    doorStep:{}
}

export default function RootReducer(state = initialState, actions) {


    switch (actions.type) {
        case 'ADD_BOOKING':
            //alert('1')
            //console.log("Payload",actions.payload)
            state.booking = actions.payload
            // console.log("Redux",state.employee)
            return ({ booking: state.booking,userDetails:state.userDetails,vehicle:state.vehicle ,doorStep:state.doorStep})

            case 'ADD_USER':
            
            console.log("ADD USER",actions)
            state.userDetails [actions.payload[0]]=actions.payload[1]
            // console.log("Redux",state.employee)
            return ({ booking: state.booking,userDetails:state.userDetails,vehicle:state.vehicle,doorStep:state.doorStep })

            case 'ADD_VEHICLE':
            
            console.log("ADD VEHICLE",actions)
            state.vehicle [actions.payload[0]]=actions.payload[1]
            // console.log("Redux",state.employee)
            return ({ booking: state.booking,userDetails:state.userDetails,vehicle:state.vehicle,doorStep:state.doorStep })
        

            case 'ADD_DOOR_STEP':
            //alert('1')
            //console.log("Payload",actions.payload)
            state.doorStep = actions.payload
            // console.log("Redux",state.employee)
            return ({ booking: state.booking,userDetails:state.userDetails,vehicle:state.vehicle ,doorStep:state.doorStep})
            default:
            return state
    }
}