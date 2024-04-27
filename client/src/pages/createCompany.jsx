import React, { useState } from 'react'; // Import useState from React
import { Box, FormControl, InputLabel, OutlinedInput, Typography, Button, Grid } from '@mui/material';
import { theme } from '~/theme';
import api from "~/apis";
function CreateCompany() {
  const [hiddenNotif, sethiddenNotif] = useState(true);
  const [typeNotif, settypeNotif] = useState(false);
  const [messNotif, setmessNotif] = useState('');
  const [companyData, setCompanyData] = useState({
    companyname: '',
    email: '',
    phonenumber: '',
    taxcode: '',
    address: '',
    companyrepresentative: '',
    companydescription: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCompanyData({ ...companyData, [name]: value });
  };

  const submitButton = async () => {
    console.log(companyData); 
    const res = await api.createcompany(companyData);
    console.log(res);
    sethiddenNotif(false);
    settypeNotif(res.status);
    setmessNotif(res?.message);
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
          width: '80%',
          maxWidth: '1200px',
          minWidth: '300px',
          py: '50px',
          px: '50px',
          bgcolor: theme.bgColor.block,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: '700', pb: 3 }}>
          Create a Company
        </Typography>

        <Grid container spacing={2}>
          {[
            'company name',
            'email',
            'phone number',
            'tax code',
            'address',
            'company representative',
          ].map((label, index) => (
            <Grid item xs={4} key={index}>
              <FormControl sx={{ width: '100%' }} variant="outlined">
                <InputLabel htmlFor={`outlined-adornment-${label.replace(/ /g, '')}`}>{label.charAt(0).toUpperCase() + label.slice(1)}</InputLabel>
                <OutlinedInput
                    id={`outlined-adornment-${label.replace(/ /g, '')}`}
                    label={label.toLocaleUpperCase()}
                    name={label.replace(/ /g, '')}
                    value={companyData[label.replace(/ /g, '')] || ''}
                    onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
          ))}
        </Grid>

        {/* About yourself */}
        <FormControl sx={{ width: '100%', mt: '2', top: 20 }} variant="outlined">
          <InputLabel htmlFor="company-description">Company description</InputLabel>
          <OutlinedInput
            id="company-description"
            multiline
            rows={4}
            label="Company description"
            name="companydescription"
            value={companyData.companydescription || ''}
            onChange={handleInputChange}
          />
        </FormControl>

        {/* Submit button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: '30px',
          }}
        >
          <Button variant="contained" onClick={submitButton}>Submit</Button>
        </Box>
        <Box>
        <Typography
          color={typeNotif ? "#4caf50" : "error"}
          sx={{
            display: hiddenNotif ? "none" : "block",
            pt: "10px",
          }}
        >
          {typeNotif ? "Success" : messNotif}
        </Typography>
        </Box>

      </Box>
      
    </Box>
  );
}

export default CreateCompany;
