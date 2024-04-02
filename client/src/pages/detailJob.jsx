import React from 'react';
import {
    Box,
  } from "@mui/material";
  import { theme } from "~/theme";
const DetailJob = () => {
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
          width: "100%",
          maxWidth: "1200px",
          minWidth: "300px",
          py: "50px",
          px: "50px",
          bgcolor: theme.bgColor.block,
        }}
      >
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '50%' }}>
        <h2>Figma Designer</h2>
        <div>
          <h3>Job Overview</h3>
          <p>Lorem ipsum...</p>
        </div>
        <div>
          <h3>Skills:</h3>
          <ul>
            <li>UI Designer</li>
            <li>Figma</li>
            <li>Landing Page</li>
          </ul>
        </div>
        <button style={{ position: 'absolute', bottom: 20, right: 20 }}>Apply now</button>
      </div>
      <div style={{ width: '50%' }}>
        <button>Create a CV to apply</button>
        <div>
          <h3>General information</h3>
          <p>Minimum year of experience: 1 Year</p>
          <p>Level: Junior</p>
          <p>Job type: In Office</p>
          <p>Contract type: Full time</p>
        </div>
      </div>
    </div>
    </Box>
    </Box>
  );
};

export default DetailJob;
