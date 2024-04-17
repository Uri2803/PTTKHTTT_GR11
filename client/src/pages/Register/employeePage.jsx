// import React from "react";
import {
  Box,
  Typography,
  Button
} from "@mui/material";

function EmployeePage(){
//   const {
//     fullName,
//     email,
//     phoneNumber,
//     yearOfExperience,
//     level,
//     skills,
//     aboutMyself
//   } = employee;

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
            Employee Information
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Full Name:</strong> fullName
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Email:</strong> email
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Phone Number:</strong> phoneNumber
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Year of Experience:</strong> yearOfExperience
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Level:</strong> level
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Skills:</strong> skills
          </Typography>
          <Typography variant="body1">
            <strong>About Myself:</strong> aboutMyself
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" sx={{ backgroundColor: "#4caf50", color: "white" }}>
            Find jobs now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default EmployeePage;
