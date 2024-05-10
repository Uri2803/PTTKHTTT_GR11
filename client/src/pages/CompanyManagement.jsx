import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Collapse,
  Grid ,
  Button,
  TextField,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

import { KeyboardArrowDown as KeyboardArrowDownIcon, KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';
import api from "~/apis";
import { theme } from '~/theme';
import { useNavigate } from "react-router-dom";
function CompanyManagement() {
    const [company, setCompany] = useState([]);
    const [open, setOpen] = useState([]);
    const [regisFrom, setRegistForm] = useState([]);
    const [posting, setPosting] = useState([]);
    const [searchKey, setSearchKey] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
        try {
          const data = await api.getallcompany(); 
          if (data.status) {
            console.log(data)
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

  useEffect(()=>{
    const fetchData = async () => {
        try {
          const data = await api.searchCompany(searchKey); 
          if (data.status) {
            console.log(data)
            setCompany(data.company);
          } else {
            console.error('Error fetching data');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    const delayFetchData = setTimeout(() => {
        fetchData();
      }, 500);
  
      return () => clearTimeout(delayFetchData);
    }, [searchKey]);
  const handleRowClick = async (index, CompanyID) => {
    const newOpen = [...open];
    newOpen.fill(false);
    newOpen[index] = !open[index];
    setOpen(newOpen);
    try {
        const res = await api.getRecruimentRegist(CompanyID);
        const res1 = await api.getPosting(CompanyID);
        setRegistForm(res.registForm);
        setPosting(res1.posting)
        console.log('testabc', res.registForm);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };
  const navigate = useNavigate();
  const buttonAddRegistForm = (companyID)=>{
    navigate(`/createRecruitmentRegistration/?companyID=${companyID}`);

  }


  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: `calc(100vh - ${theme.app.HEIGHT_HEADER})`,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '1200px',
          py: '50px',
          px: '50px',
          bgcolor: theme.bgColor.block,
          marginTop: "auto"
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: '700', pb: 3 }}>
          <strong> Company Management </strong>
          
        </Typography>

       
        <Box >
        <TextField
            id="search"
            label="Search company"
            variant="outlined"
            size="smail"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}

            sx={{mb: 2,
                width: '50%',        
            }}
            InputProps={{
                endAdornment: (
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                ),
              }}

            />
           
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell align="center" />
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>ID</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Company Name</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Representative</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Tax Code</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Email</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {company.map((row, index) => (
                <React.Fragment key={row.CompanyID}>
                  <TableRow onClick={() => handleRowClick(index, row.CompanyID)}>
                    <TableCell>
                      <IconButton aria-label="expand row" size="small">
                        {open[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.CompanyID}
                    </TableCell>
                    <TableCell align="center">{row.Name}</TableCell>
                    <TableCell align="center">{row.Representative}</TableCell>
                    <TableCell align="center">{row.TaxCode}</TableCell>
                    <TableCell align="center">{row.Email}</TableCell>
                    <TableCell align="center">{row.PhoneNumber}</TableCell>

                  </TableRow>
                  
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                      <Collapse in={open[index]} timeout="auto" unmountOnExit>
                      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={4}>
                            <Typography variant="h5" gutterBottom component="div">
                                Details
                            </Typography>
                            
                            <Grid> 
                            <Typography variant="body3" gutterBottom component="div">
                                Address: {row.Address}
                            </Typography>
                            <Typography variant="body3"  gutterBottom component="div">
                                Description: {row.CompanyDicription}
                            </Typography>

                            </Grid>
                            
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h5" gutterBottom component="div">
                                Recruitment Regist
                                <Button variant="outlined" sx={{
                                        width: "10%",
                                        border: 'none',
                                        margin: "5px",
                                    }}
                                    onClick={() => buttonAddRegistForm(row.CompanyID)}
                                    >
                                   <AddIcon />
                                </Button>
                            </Typography>
                           
                            {regisFrom.map((form, index) =>{
                            return(
                                <Button variant="outlined" sx={{
                                        width: "100%",
                                        mb: 3,
                                        color: form.Status ? "#4caf50" : "#000000",
                                        borderColor: form.Status ? "#4caf50" : "#000000"
                                    }}
                                    >
                                    <Typography variant="body2" gutterBottom component="div">
                                        {form.RegistFormID} - {form.PositionVacancies}  {form.Status}
                                    </Typography>
                                </Button>
                                
                            )
                            })

                            }
                            <Typography gutterBottom component="div">
                            
                            </Typography>
                        </Grid>
                        <Grid item xs={4} >
                            <Typography variant="h5" gutterBottom component="div">
                                Posting
                            </Typography>
                            {posting.map((posting, index) =>{
                            return(
                                <Button variant="outlined">
                                    <Typography variant="body2" gutterBottom component="div">
                                        {posting.PostingID} - {posting.Position} - Applicant: {posting.CountApplicaton}
                                    </Typography>
                                    
                                </Button>
                                
                            )
                            })

                            }
                            <Typography gutterBottom component="div">
                            
                            </Typography>
                        </Grid>

                    </Grid>
                        {/* <Box sx={{ margin: 1 }}>
                          <Typography variant="h6" gutterBottom component="div">
                            Details
                          </Typography>
                          <Typography gutterBottom component="div">
                            Address: {row.Address}
                          </Typography>
                          <Typography gutterBottom component="div">
                            Representative: {row.Representative}
                          </Typography>
                          <Typography gutterBottom component="div">
                            Description: {row.CompanyDicription}
                          </Typography>
                          <Typography gutterBottom component="div">
                            Censorship: {row.Censorship}
                          </Typography>
                        </Box> */}
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default CompanyManagement;
