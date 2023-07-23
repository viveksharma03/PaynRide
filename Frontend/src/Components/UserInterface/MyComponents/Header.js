import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { getData, postData, serverURL } from '../../Services/FetchNodeServices';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
export default function Header(props) {
    var navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [anchorEl, setAnchorEl] = useState(null)
    const [subCategories, setSubCategories] = useState([])
    const open = Boolean(anchorEl);
    const [userClose, setUserClose] = useState(null)


    var userinfo = localStorage.getItem("user")
    
    /*var userinfo = useSelector((state) => state.userDetails);
    var userDetails = Object.values(userinfo)[0];
    var user=JSON.stringify(userDetails.fullname);*/
    const handleSignUpButton = () => {
       // var username = userinfo.data.fullname
        var username = JSON.parse(userinfo)
        if (username == null) {
            return (

                <Button color="inherit" style={{ fontWeight: 'bold', fontFamily: 'poppins' }}>Login/Signup</Button>

            )
        }
        else {
            return (
            <> <Button onClick={handleUserMenuClick} style={{ cursor: "pointer" }}>

                <Avatar >
                    {username[0].fullname.charAt(0)}

                </Avatar>
                
            </Button>
            {showUserMenu()}
            </>
            )
        }
    }

    const [anchorElU, setAnchorElU] = useState(null)
    const openU = Boolean(anchorElU);

    const handleUserMenuClick = (event) => {
        setAnchorElU(event.currentTarget)
    }
    const handleMenuClose = () => {
        setAnchorElU(null);
    };

    const handleLogOut=()=>{
/*localStorage.remove('user')
window.location.href=`/home`*/
localStorage.clear("user")
        window.location.href = `/home`
    }
    const showUserMenu = () => {
        return (
            <Menu
                anchorEl={anchorElU}
                open={openU}
                onClose={handleMenuClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => (navigate("/user/dashboard/profile"))}>
                    My Profile
                </MenuItem>
                <MenuItem onClick={() => (navigate("/user/dashboard/displaybookings"))}>
                    My Bookings
                </MenuItem>
                <MenuItem  onClick={handleLogOut}
                >
                    Logout
                </MenuItem>
            </Menu>
        )
    }
    /*
       const showUserMenu=()=>{
        return(
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
    >
                        <MenuItem onClick={handleClose}><span style={{fontFamily:'Poppins'}}>profile</span></MenuItem>
                        <MenuItem onClick={handleClose}><span style={{fontFamily:'Poppins'}}>logout</span></MenuItem>
                        <MenuItem onClick={handleClose}><span style={{fontFamily:'Poppins'}}>booking</span></MenuItem>
    
    </Menu>
    )
       }*/

    const fetchAllCategories = async () => {
        var response = await getData('user/display_all_category')
        setCategories(response.data)
    }
    const fetchAllSubCategories = async (cid) => {
        var body = { categoryid: cid }
        var response = await postData('user/fetch_all_subcategory_by_category', body)
        setSubCategories(response.data)
    }
    useEffect(function () {
        fetchAllCategories();
    }, [])
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
        // alert(event.currentTarget.value)
        fetchAllSubCategories(event.currentTarget.value)
        // alert(event.currentTarget.value)
    }
    const handleClose = () => {
        setAnchorEl(null)
        //setUserClose(null)
    }

    const showMainMenu = () => {
        return (categories.map((item) => {
            return (
                <Button value={item.categoryid} onClick={handleClick}><span style={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>{item.categoryname}</span></Button>
            )

        })
        )
    }

    const showSubMainMenu = () => {
        return (subCategories.map((item) => {
            return (
                <MenuItem onClick={handleClose}><span style={{ fontFamily: 'Poppins' }}>{item.subcategoryname}</span></MenuItem>
            )

        })
        )
    }
    return (

        <Box sx={{ flexGrow: 1 }}>
            {/*console.log("use",username)*/}
            {/*console.log("username", userinfo.data.fullname)*/}
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <img src='/assets/logo1.png' style={{ width: 70, padding: 3 }} />
                    <Box sx={{ flexGrow: 1 }} component="div">
                    </Box>
                    <Box>
                        {showMainMenu()}
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            {showSubMainMenu()}
                        </Menu>
                    </Box>
                    {handleSignUpButton()}

                </Toolbar>
            </AppBar>
        </Box>

    )
}