import { 
  Box, 
  Typography, 
  Button, 
} from "@mui/material";

import React, { useState, useEffect } from 'react';
import api from "~/apis";

import { useParams, useNavigate } from "react-router-dom";

const JobDetail = () => {

  const navigate = useNavigate(); 
 

  const {id} = useParams();
  const [jobDetail, setJobDetail] = useState(null); 
  const formatNumber = (number) => {
    // Định dạng số với ba số mỗi lần
    return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getjobdetail(id);
        if (data.status) {
          setJobDetail(data.JobDetail);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!jobDetail) {
    return <div>Loading...</div>;
  }
  const { posting, company } = jobDetail;
  const applyButton = () =>{
    navigate(`/createCV?postingID=${posting.PostingID}`);
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "40px",
      }}
    >
      <Box
        sx={{
          width: "55%",
          p: "30px",
          bgcolor: "white",
          borderRadius: "15px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <Typography variant="h4">
              <img
                src="https://i.ibb.co/HD0WyCz/image-38.png?fbclid=IwAR1dWav9ILuTn7twhv1nVfm4OadtZXzPTo24hko6tCEw9ihi6i7eO_M0SdU_aem_ATa7xE3RugLmGIT1Cvz7Y31MdrcdQW-IIC45FpojukzfFiSv1p42g72Op-r4ZJlDUhScj9vZjIdoE1EK0bIJVJyj"
                alt="Logo"
                style={{ width: "65px", height: "65px", paddingRight: "10px" }}
              />
              {company.Name} Company
            </Typography>
            <Box sx={{paddingLeft: "65px"}}>
        
              <Typography variant="h5">{posting.Position}</Typography>
            </Box>
          </Box>
          
          
        </Box>
       
       

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
            Job Overview
            <Box sx={{ ml: 1 , paddingTop: '10px'}}>
            <Typography variant="body1" sx={{ mb: 3 }}>
            {posting.JobDescription}
          </Typography>

            </Box>
            
          </Typography>
          
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
            Company
            <Box sx={{ ml: 1 , paddingTop: '10px'}}> 
            <Typography variant="body1" sx={{ mb: 1 }}>
            <strong> Address: </strong>{company.Address}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Phone Number: </strong> {company.PhoneNumber}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Representative: </strong> {company.Representative}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Company Dicription </strong> {company.CompanyDicription}
            </Typography>


            </Box>
            
          
          </Typography>
          
          

          <Box sx={{ display: "flex", gap: "10px", mb: 3 }}>
            <Button variant="outlined">{formatNumber(posting.ExpectedSalary)}$ </Button>
            <Button variant="outlined">{posting.JobType}</Button>
            <Button variant="outlined">{posting.Level}</Button>
            <Button variant="outlined">{posting.Eperience}</Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" sx={{ backgroundColor: "#4caf50", color: "white" }} onClick={applyButton}>
            Apply now
            
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: "40%",
          ml: "50px",
          p: "30px",
          bgcolor: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        }}
      >
        <Box sx={{ mb: 3 }}>
        <Button variant="outlined" sx={{ width: "100%", mb: 3 }} onClick={applyButton}>
            Create a cv to apply
          </Button>
          <Box sx={{ backgroundColor: "#ffffff", borderRadius: "5px", p: 3 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              General Information
            </Typography>
            <Box> 
            <Typography variant="body1" sx={{ mb: 1 }}>
            <strong> Minimum year of experience: </strong>{posting.Eperience}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1}}>
              <strong> Level:  </strong> {posting.Level}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1}}>
              <strong> Job type: </strong>{posting.JobType}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1}}>
              <strong> Contract type: </strong>{posting.ContractType}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1}}>
              <strong> Expected Salary: </strong>{formatNumber(posting.ExpectedSalary)}$
            </Typography>


            </Box>
           
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobDetail;
