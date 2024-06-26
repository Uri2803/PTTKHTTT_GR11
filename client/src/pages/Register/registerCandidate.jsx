/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { theme } from "~/theme";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";
import ButtonUsage from "~/components/ButtonUsage";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DateRangeIcon from '@mui/icons-material/DateRange';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import api from "~/apis";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';

function RegisterCandidate() {
  const navigate = useNavigate(); 
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [hiddenNotif, sethiddenNotif] = useState(true);
  const [typeNotif, settypeNotif] = useState(false);
  const [messNotif, setmessNotif] = useState('');
  const [candidate, setCandidate] = useState({
    fullname: '',
    username: '',
    birthday: '',
    phonenumber: '',
    email: '',
    password: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCandidate({ ...candidate, [name]: value });
  };
  const submitButton = async () => {
    console.log('cd' ,candidate); 
    const res = await api.createCandidate(candidate);
    console.log(res);
    sethiddenNotif(false);
    settypeNotif(res.status);
    setmessNotif(res?.message);
  }
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    if (typeNotif) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 0) {
            return prevCountdown - 1;
          } else {
            clearInterval(timer);
            navigate('/login');
            return 0;
          }
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }
  }, [typeNotif, navigate]);  
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: `calc(100vh - ${theme.app.HEIGHT_HEADER})`,
      }}
    >
      <Box
        sx={{
          width: "80%",
          maxWidth: "500px",
          minWidth: "250px",
          py: "50px",
          px: "50px",
          bgcolor: theme.bgColor.block,
          borderRadius: '10px'
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "700", pb: 3 }}>
          Candidate Register
        </Typography>

        <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-fullname">Fullname</InputLabel>
          <OutlinedInput
            id="outlined-adornment-fullname"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            }
            label="fullname"
            name="fullname"
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
          <OutlinedInput
            id="outlined-adornment-username"
            startAdornment={
              <InputAdornment position="start">
                <PersonOutlineIcon  />
              </InputAdornment>
            }
            label="username"
            name="username"
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-birth">Birth</InputLabel>
          <OutlinedInput
            id="outlined-adornment-birth"
            type= "date"
            startAdornment={
              <InputAdornment position="start">
                <DateRangeIcon />
              </InputAdornment>
            }
            label="birthday"
            name="birthday"
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-phone">Phone</InputLabel>
          <OutlinedInput
            id="outlined-adornment-phone"
            startAdornment={
              <InputAdornment position="start">
                <LocalPhoneIcon />
              </InputAdornment>
            }
            label="phonenumber"
            name="phonenumber"
            onChange={handleInputChange}
          />
        </FormControl>



        <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            startAdornment={
              <InputAdornment position="start">
                <MailOutlinedIcon />
              </InputAdornment>
            }
            label="email"
            name="email"
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            startAdornment={<InputAdornment position="start"><HttpsIcon/></InputAdornment>}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                </IconButton>
              </InputAdornment>
            }
            label="password"
            name="password"
            onChange={handleInputChange}
          />
        </FormControl>

        <Box sx = {{
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
                <Link to="/login">I have account before !</Link>
        
        </Box>
          
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: "10px",
          }}
          onClick={submitButton}
        >
          
          <ButtonUsage >Submit</ButtonUsage>
        </Box>
        <Box>
        <Typography
          color={typeNotif ? "#4caf50" : "error"}
          sx={{
            display: hiddenNotif ? "none" : "block",
            pt: "10px",
          }}
        >
          {typeNotif ?( 
            <Alert severity="success">Success: Đăng ký thành công {countdown}</Alert>
          ) : ( <Alert severity="error">{messNotif}</Alert>)}
        </Typography>
        </Box>

      </Box>
    </Box>
  );
}

export default RegisterCandidate;
