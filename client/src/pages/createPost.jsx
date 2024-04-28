// import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Grid
} from '@mui/material';
import { theme } from '~/theme';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: `calc(100vh - ${theme.app.HEIGHT_HEADER})`,
        bgcolor: '#f0f0f0'
      }}
    >
      <Box
        sx={{
          width: '80%',
          maxWidth: '1200px',
          minWidth: '300px',
          py: '50px',
          px: '50px',
          bgcolor: 'white',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)'
        }}
      >
        <Grid container spacing={2}>
          {[
            'Job Name',
            'Job Type',
            'Minimum of Year Experience',
            'Contract Type',
            'Level',
            'Skill Requirement'
          ].map((label, index) => (
            <Grid item xs={6} key={index}>
              <FormControl sx={{ width: '100%' }} variant='outlined'>
                <InputLabel htmlFor={`outlined-adornment-${label.toLowerCase().replace(/ /g, '-')}`}>{label}</InputLabel>
                <OutlinedInput id={`outlined-adornment-${label.toLowerCase().replace(/ /g, '-')}`} label={label} />
              </FormControl>
            </Grid>
          ))}
        </Grid>

        <FormControl sx={{ width: '100%', mt: 2 }} variant='outlined'>
          <InputLabel htmlFor='job-description'>Job Description</InputLabel>
          <OutlinedInput id='job-description' multiline rows={4} label='Job Description' />
        </FormControl>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pt: '30px'
          }}
        >
          <Button
            variant='contained'
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              mr: 2
            }}
            onClick={() => handleButtonClick('/EmployeePage')}
          >
            Go Back
          </Button>
          <Button variant='contained' sx={{ backgroundColor: theme.palette.secondary.main, color: 'white' }}>
            Submit and Post
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CreatePost;
