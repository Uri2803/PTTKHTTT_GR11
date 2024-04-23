//import React from "react";
import {
  Box,
  Typography,
  Button
} from "@mui/material";
const CompanyPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "50px",
      }}
    >
      <Box
        sx={{
          width: "50%",
          p: "30px",
          bgcolor: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Company Information
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Company Name:</strong> Elite Limited
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Email:</strong> example@example.com
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Phone Number:</strong> +123456789
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Tax Code:</strong> 1234567890
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Address:</strong> 123 Main Street, City, Country
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Company Representative:</strong> John Doe
          </Typography>
          <Typography variant="body1">
            <strong>Company Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor ligula nec ex semper, vitae efficitur ligula efficitur. Duis lobortis augue vel semper pellentesque. Integer id consequat mauris. Sed et sem id nibh blandit rutrum in in dui. Donec laoreet dui id efficitur convallis. Sed fringilla, magna at vehicula pellentesque, orci sapien interdum tortor, eget convallis velit eros ac metus. Sed id sem a urna varius efficitur non ac velit.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" sx={{ backgroundColor: "#4caf50", color: "white" }}>
            Go back
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyPage;
