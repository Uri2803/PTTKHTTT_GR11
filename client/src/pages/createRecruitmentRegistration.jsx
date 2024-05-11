import {
    Box,
    FormControl,
    InputLabel,
    OutlinedInput,
    Typography,
    Button,
    Grid,
    IconButton,
    InputAdornment,
  
  } from "@mui/material";
  import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
  import { theme } from "~/theme";
  import { useParams, useNavigate } from "react-router-dom";
  import React, { useState,  useEffect } from 'react';
  import api from "~/apis";
  import { useLocation } from "react-router-dom";
  import Alert from '@mui/material/Alert';
  import DateRangeIcon from '@mui/icons-material/DateRange';
  import Select from '@mui/material/Select';
  import MenuItem from '@mui/material/MenuItem';
  
  function createRecruitmentRegistration() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const companyID = queryParams.get("companyID");
    const [company, setCompany] = useState([]);

    const navigate = useNavigate(); 
  
    useEffect(() => {    
      const fetchData = async () => {
        try {
          const data = await api.getCompanyByID(companyID);
          if (data.status) {
            setCompany(data.company);
          } else {
            console.error('Error fetching data');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    
    const [registForm, setRegistForm] = useState({
      CompanyID: companyID,
      AdStartDate: '',
      AdEndDate: '',
      PositionVacancies: '',
      NumberRecruitment: '',
      JobDescription: '',
      Experience: '',
      Level: '',
      ExpectedSalary: '',
      JobType: '',
      RequiredCandidates: '',
      AdType: '',
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegistForm({ ...registForm, [name]: value });
    };
  
  
    const [hiddenNotif, sethiddenNotif] = useState(true);
    const [typeNotif, settypeNotif] = useState(false);
    const [messNotif, setmessNotif] = useState('');
    const submitButton = async () =>{
        console.log('rss', registForm)
      const res = await api.createRecruimentRegist(registForm);
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
              navigate(`/CompanyManagement`);
              return 0;
            }
          });
        }, 1000);
    
        return () => clearInterval(timer);
      }
    }, [typeNotif, navigate]);

    const [AdType, setAdType] = React.useState('');

    const handleChangeType = (event) => {
        setAdType(event.target.value);
        handleInputChange(event);
    };

    
    
  
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
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
          <Typography variant="h6" sx={{ fontWeight: "700", pb: 3 }}>
            Create Recruitment Registration Form
          </Typography>
          <Box sx={{ width: "40%", height: "30px", marginBottom: "35px" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Ad Type</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="AdType"
                value={AdType}
                label="AdType"
                onChange={handleChangeType}
                >
                <MenuItem value={'Newspapers'}>Newspapers</MenuItem>
                <MenuItem value={'Advertising Banners'}>Advertising Banners</MenuItem>
                <MenuItem value={'Posting On Websites'}>Posting On Websites.</MenuItem>
                </Select>
            </FormControl>
            </Box>
          
          <Typography sx={{ fontWeight: "600", pb: 3, color: "#7bb01a" }}>
            Company Information
          </Typography>
  
     
          
         <Grid container spacing={2}  sx={{ marginBottom: "20px" }} >
            <Grid  item xs={4}> 
              <FormControl  sx={{ width:"100%" }}  variant="outlined">
                <InputLabel htmlFor="CompanyName" shrink={Boolean(company && company.Name)} >Company Name</InputLabel>
                <OutlinedInput 
                  label="Company Name"
                  name="Name"
                  id="Name"
                  value={company? company.Name: ''}
                  readOnly
                
              />
              </FormControl>
            </Grid>
  
            <Grid  item xs={4}> 
              <FormControl  sx={{ width:"100%" }}  variant="outlined">
                <InputLabel htmlFor="TaxCode" shrink={Boolean(company && company.TaxCode)}> Tax Code</InputLabel>
                <OutlinedInput 
                  label="Tax Code"
                  name="TaxCode"
                  id="TaxCode"
                  value={company? company.TaxCode : ''}
                  
                  readOnly
               
              />
              </FormControl>
            </Grid>
  
            <Grid  item xs={4}> 
              <FormControl  sx={{ width:"100%" }}  variant="outlined">
                <InputLabel htmlFor="Phonenumber" shrink={Boolean(company && company.PhoneNumber)}>Phone Number</InputLabel>
                <OutlinedInput 
                  label="Phonenumber"
                  name="PhoneNumber"
                  id="PhoneNumber"
                  value={company? company.PhoneNumber: ' '}
                  readOnly
              />
              </FormControl>
            </Grid>
         </Grid>

         <Typography sx={{ fontWeight: "600", pb: 1, color: "#7bb01a" }}>
            Job Posting Time
          </Typography>

          <Grid container spacing={2}  > 
            <Grid item xs={6} >
                <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-adstartdate">Posting Start Date</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-adstartdate"
                            type= "date"
                            startAdornment={
                            <InputAdornment position="start">
                                <DateRangeIcon />
                            </InputAdornment>
                            }
                            label="AdStartDate"
                            name="AdStartDate"
                            onChange={handleInputChange}
                        />
                </FormControl>
                    
            </Grid>

            <Grid item xs={6} pb={1}  >
                <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-adenđate">Posting End Date</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-adenđate"
                            type= "date"
                            startAdornment={
                            <InputAdornment position="start">
                                <DateRangeIcon />
                                </InputAdornment>
                                }
                                label="AdEndDate"
                                name="AdEndDate"
                                onChange={handleInputChange}
                            />
                </FormControl>
                    
            </Grid>
          </Grid>
          
          <Typography sx={{ fontWeight: "600", pb: 2, color: "#7bb01a" }}>
            Job Recruitment
          </Typography>
         <Grid container spacing={2} >
           {[
             "Position Vacancies", 
             "Number Recruitment", 
             "Expected Salary", 
             "Job Type",
             ].map((label, index) => (
               <Grid item xs={6} key={index}>
                 <FormControl sx={{ width:"100%" }} variant="outlined">
                   <InputLabel htmlFor={`outlined-adornment-${label.toLowerCase().replace(/ /, '-')}`}>{label}</InputLabel>
                   <OutlinedInput 
                   label={label}
                   name={label.replace(/ /, '')}
                   id={`outlined-adornment-${label.toLowerCase().replace(/ /g, '-')}`}
                   onChange={handleInputChange}
                   />
                 </FormControl>
               </Grid>
           ))}
         </Grid>

         <Grid marginTop={2} marginBottom={2}>
            <FormControl sx={{ width:"100%", mt:"2"}} variant="outlined">
                <InputLabel htmlFor="JobDescription">Job Description</InputLabel>
                <OutlinedInput 
                    label="JobDescription"
                    name="JobDescription"
                    id="outlined-adornment-Job-Description"     
                    onChange={handleInputChange}
                />
    
            </FormControl>

         </Grid>
         

         
         <Typography sx={{ fontWeight: "600", pb: 2, color: "#7bb01a" }}>
             Candidate Requirements
          </Typography>

          <Grid container spacing={2} >
         {[
           "Experience", 
           "Level", 
           ].map((label, index) => (
             <Grid item xs={6} key={index}>
               <FormControl sx={{ width:"100%" }} variant="outlined">
                 <InputLabel htmlFor={`outlined-adornment-${label.toLowerCase().replace(/ /g, '-')}`}>{label}</InputLabel>
                 <OutlinedInput 
                 name={label}
                 label={label}
                 id={`outlined-adornment-${label}`}
                 value={registForm[label] || ''}
                 onChange={handleInputChange}
                 />
               </FormControl>
             </Grid>
         ))}
       </Grid>

       <Grid marginTop={2} marginBottom={2}>
            <FormControl sx={{ width:"100%", mt:"2"}} variant="outlined">
                <InputLabel htmlFor="JobDescription">Required Candidates</InputLabel>
                <OutlinedInput 
                    label="Required Candidates"
                    name="RequiredCandidates"
                    id="outlined-adornment-Job-Description"
                    onChange={handleInputChange}
                />
            </FormControl>

         </Grid>
         

  
         {/* Submit button */}
         <Box
           sx={{
             display:"flex",
             justifyContent:"center",
             alignItems:"center",
             pt:"30px"
           }}
         >
           <Button variant="contained" onClick={submitButton}>Create Recruitment Registration</Button>
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
  
  export default createRecruitmentRegistration;
  