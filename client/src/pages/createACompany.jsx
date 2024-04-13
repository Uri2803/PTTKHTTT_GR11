import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
} from "@mui/material";

const CreateCompany = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Box
        sx={{
          width: "70%",
          p: "50px",
          bgcolor: "white",
          borderRadius: "20px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
          Fill in information
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField
              label="Company name"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Tax code"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Company representative"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Phone number"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Company description"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
          <Button variant="contained" sx={{ backgroundColor: "#4caf50", color: "white" }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateCompany;