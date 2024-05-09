import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Button,
  Grid
} from "@mui/material";
import { theme } from "~/theme";
import { useParams, useNavigate } from "react-router-dom";
import React, { useState,  useEffect } from 'react';
import api from "~/apis";
import { useLocation } from "react-router-dom";
import Alert from '@mui/material/Alert';


function CreateCV() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const postingID = queryParams.get("postingID");
  const dataUser = localStorage.getItem('user')
  const user = JSON.parse(dataUser);
  const userName=user.UserName;
  const [userInfor, setUserInfor] = useState(null); 
  console.log(user.UserName)
  const navigate = useNavigate(); 

  useEffect(() => {    
    console.log('test')
    const fetchData = async () => {
      try {
        const data = await api.findInfor(userName);
        if (data.status) {
          console.log('data', data)
          setUserInfor(data.userInfor);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCV({ ...CV, [name]: value });
  };
  const [CV, setCV] = useState({
    experience: '',
    level: '',
    skill: '',
    aboutyourself: '',
    postingid: postingID,
    candidateid: user.ID
    
  });


  const [hiddenNotif, sethiddenNotif] = useState(true);
  const [typeNotif, settypeNotif] = useState(false);
  const [messNotif, setmessNotif] = useState('');
  const submitButton = async () =>{
    const res = await api.createcv(CV);
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
            navigate(`/jobdetail/${postingID}`);
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
          maxWidth: "1200px",
          minWidth: "300px",
          py: "50px",
          px: "50px",
          bgcolor: theme.bgColor.block,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "700", pb: 3 }}>
          Create a CV
        </Typography>

   
        {/* <Grid container spacing={2}>
         {["Full name", "Email", "Phone number", 
           
           ].map((label, index) => (
             <Grid item xs={4} key={index}>
               <FormControl sx={{ width:"100%" }} variant="outlined">
                 <InputLabel htmlFor={`outlined-adornment-${label.toLowerCase().replace(/ /g, '-')}`}>{label}</InputLabel>
                 <OutlinedInput 
                 name={label.toLowerCase().replace(/ /g, '-')}
                 label={label}
                 id={`outlined-adornment-${label.toLowerCase().replace(/ /g, '-')}`}
                 value={CV[label.toLowerCase().replace(/ /g, '-')] || ''}
                 onChange={handleInputChange}
                 />
               </FormControl>
             </Grid>
         ))}
       </Grid> */}

       <Grid container spacing={2}  sx={{ marginBottom: "20px" }} >
          <Grid  item xs={4}> 
            <FormControl  sx={{ width:"100%" }} variant="outlined">
              <InputLabel htmlFor="Full name">Full name</InputLabel>
              <OutlinedInput 
                label="Full name"
                name="Full name"
                id="outlined-adornment-about-yourself"
                value={userInfor ? userInfor.FullName : ''}
                readOnly
              
            />
            </FormControl>
          </Grid>

          <Grid  item xs={4}> 
            <FormControl  sx={{ width:"100%" }} variant="outlined">
              <InputLabel htmlFor="Email"> Email</InputLabel>
              <OutlinedInput 
                label="Email"
                name="Email"
                id="Email"
                value={userInfor ? userInfor.Email : ''}
                readOnly
             
            />
            </FormControl>
          </Grid>

          <Grid  item xs={4}> 
            <FormControl  sx={{ width:"100%" }} variant="outlined">
              <InputLabel htmlFor="Phone number">Phone number</InputLabel>
              <OutlinedInput 
                label="Phone number"
                name="Phone number"
                id="Phone number"
                value={userInfor ? userInfor.PhoneNumber : ''}
                readOnly
            />
            </FormControl>
          </Grid>
          
       </Grid>
       <Grid container spacing={2}  >
         {[
           "experience", 
           "Level", 
           "Skill", 
           ].map((label, index) => (
             <Grid item xs={4} key={index}>
               <FormControl sx={{ width:"100%" }} variant="outlined">
                 <InputLabel htmlFor={`outlined-adornment-${label.toLowerCase().replace(/ /g, '-')}`}>{label}</InputLabel>
                 <OutlinedInput 
                 name={label.toLowerCase().replace(/ /g, '-')}
                 label={label}
                 id={`outlined-adornment-${label.toLowerCase().replace(/ /g, '-')}`}
                 value={CV[label.toLowerCase().replace(/ /g, '-')] || ''}
                 onChange={handleInputChange}
                 />
               </FormControl>
             </Grid>
         ))}
       </Grid>

       {/* About yourself */}
       <FormControl sx={{ width:"100%", mt:"2", top: 20}} variant="outlined">
            <InputLabel htmlFor="about yourself">About yourself</InputLabel>
            <OutlinedInput 
              label="About yourself"
              name="aboutyourself"
              id="outlined-adornment-about-yourself"
              value={CV.aboutyourself || ''}
              onChange={handleInputChange}
            />

       </FormControl>

       {/* Submit button */}
       <Box
         sx={{
           display:"flex",
           justifyContent:"center",
           alignItems:"center",
           pt:"30px"
         }}
       >
         <Button variant="contained" onClick={submitButton}>Submit and Apply</Button>
       </Box>

       <Box>
        <Typography
          color={typeNotif ? "#4caf50" : "error"}
          sx={{
            display: hiddenNotif ? "none" : "block",
            pt: "10px",
          }}
        >
          {typeNotif ? (
            <Alert severity="success">Success: Đăng ký thành công {'('} {countdown} {')'}</Alert>
            )
           :( <Alert severity="error">{messNotif}</Alert>)}
        </Typography>
        </Box>
       
       
     </Box>
   </Box>   
 )
}

export default CreateCV;
