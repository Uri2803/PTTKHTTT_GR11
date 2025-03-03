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
function RecruitmentRegistForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const registFormID = queryParams.get("ID");
  const [form, setForm] = useState([]);
  const [company, setCompany] = useState([]);
  const [hiddenNotif, setHiddenNotif] = useState(true);
  const [typeNotif, setTypeNotif] = useState(false);
  const [messNotif, setMessNotif] = useState('');

  const navigate = useNavigate(); 

  useEffect(() => {    
    const fetchData = async () => {
      try {
        const data = await api.getRecruimentRegistByID(registFormID);
        if (data.status) {
            console.log(data.registForm)
          setForm(data.registForm);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [registFormID]);

  useEffect(() => {    
    const fetchData = async () => {
      try {
        const data = await api.getCompanyByID(form.CompanyID);
        if (data.status) {
          setCompany(data.company);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (form.CompanyID) {
      fetchData();
    }
  }, [form]);

  const formatDate = (dateString) => {
    if (!dateString) return ''; // Tránh lỗi nếu dateString không có
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
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
      
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "700", pb: 3 }}>
          Recruitment Registration Form
        </Typography>

        <Grid container  spacing={2} >
        <Grid item>
            <FormControl fullWidth>
                <InputLabel htmlFor="CompanyName" shrink={Boolean(company && company.Name)}>Ad Type</InputLabel>
                <OutlinedInput 
                label="Company Name"
                name="Name"
                id="Name"
                value={form ? form.AdType : ''}
                readOnly
                />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl fullWidth>
                <InputLabel htmlFor="CompanyName" shrink={Boolean(company && company.Name)}>Status</InputLabel>
                <OutlinedInput 
                label="Company Name"
                name="Name"
                id="Name"
                value={form.Status?  form.Status: ' chưa xử lý'}
                readOnly
                />
            </FormControl>
        </Grid>
        </Grid>
        
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
                value={company ? company.Name : ''}
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
                value={company ? company.TaxCode : ''}
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
                value={company ? company.PhoneNumber : ''}
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
                type="date"
                startAdornment={<InputAdornment position="start"><DateRangeIcon /></InputAdornment>}
                label="AdStartDate"
                value={form ? formatDate(form.AdStartDate) : ''}
                readOnly
              />
            </FormControl>
          </Grid>

          <Grid item xs={6} pb={1}  >
            <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-adenđate">Posting End Date</InputLabel>
              <OutlinedInput
                id="outlined-adornment-adenđate"
                type="date"
                startAdornment={<InputAdornment position="start"><DateRangeIcon /></InputAdornment>}
                label="AdEndDate"
                value={form ? formatDate(form.AdEndDate) : ''}
                readOnly
              />
            </FormControl>
          </Grid>
        </Grid>

        <Typography sx={{ fontWeight: "600", pb: 2, color: "#7bb01a" }}>
          Job Recruitment
        </Typography>
        <Grid container spacing={2} >
          {["Position Vacancies", "Number Recruitment", "Expected Salary", "Job Type"].map((label, index) => (
            <Grid item xs={6} key={index}>
              <FormControl sx={{ width:"100%" }} variant="outlined">
                <InputLabel htmlFor={`outlined-adornment-${label.toLowerCase().replace(/ /, '-')}`} shrink={Boolean(form)}>{label}</InputLabel>
                <OutlinedInput 
                  label={label}
                  name={label.replace(/ /, '')}
                  id={`outlined-adornment-${label.toLowerCase().replace(/ /g, '-')}`}
                  value={form ? form[label.replace(/ /, '')] : ''}
                  readOnly
                />
              </FormControl>
            </Grid>
          ))}
        </Grid>

        <Grid marginTop={2} marginBottom={2}>
          <FormControl sx={{ width:"100%", mt:"2"}} variant="outlined">
            <InputLabel htmlFor="JobDescription" shrink={Boolean(form)}>Job Description</InputLabel>
            <OutlinedInput 
              label="JobDescription"
              name="JobDescription"
              id="outlined-adornment-Job-Description"     
              value={form ? form.JobDescription : ''}
              readOnly
            />
          </FormControl>
        </Grid>

        <Typography sx={{ fontWeight: "600", pb: 2, color: "#7bb01a" }}>
          Candidate Requirements
        </Typography>

        <Grid container spacing={2} >
          {["Experience", "Level"].map((label, index) => (
            <Grid item xs={6} key={index}>
              <FormControl sx={{ width:"100%" }} variant="outlined">
                <InputLabel htmlFor={`outlined-adornment-${label.toLowerCase().replace(/ /g, '-')}`} shrink={Boolean(form)}>{label}</InputLabel>
                <OutlinedInput 
                  name={label}
                  label={label}
                  id={`outlined-adornment-${label}`}
                  value={form ? form[label] : ''}
                  readOnly
                />
              </FormControl>
            </Grid>
          ))}
        </Grid>

        <Grid marginTop={2} marginBottom={2}>
          <FormControl sx={{ width:"100%", mt:"2"}} variant="outlined">
            <InputLabel htmlFor="JobDescription" shrink={Boolean(form)}>Required Candidates</InputLabel>
            <OutlinedInput 
              label="Required Candidates"
              name="RequiredCandidates"
              id="outlined-adornment-Job-Description"
              value={form? form.RequiredCandidates : ''}
              readOnly
            />
          </FormControl>
        </Grid>

        {/* Submit button */}
        <Box  marginTop="15px">
      <Grid container justifyContent="center" spacing={20} >
        <Grid item>
          <Button variant="contained">Create Posting</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">Create Receipts</Button>
        </Grid>
      </Grid>
    </Box>
        

        <Box
          sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            pt:"30px"
          }}
        >
          
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
            ) : (
              <Alert severity="error">{messNotif}</Alert>
            )}
          </Typography>
        </Box>
      </Box>
    </Box>   
  )
}

export default RecruitmentRegistForm;
