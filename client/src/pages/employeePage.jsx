import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmployeePage = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  
  const handleButtonClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

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
          <Button
            variant="contained"
            sx={{
              width: "100%",
              mb: 2,
              bgcolor: "#4caf50",
              color: "white",
            }}
            onClick={() => handleButtonClick("/createCompany")} // Handle button click
          >
            Create Company
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              mb: 2,
              bgcolor: "#2196f3",
              color: "white",
            }}
            onClick={() => handleButtonClick("/createCV")}
          >
            Create CV
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              mb: 2,
              bgcolor: "#f44336",
              color: "white",
            }}
            onClick={() => handleButtonClick("/createPost")}
          >
            Create Post
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              mb: 2,
              bgcolor: "#FFA500",
              color: "white",
            }}
            onClick={() => handleButtonClick("/")}
          >
            Home Page
          </Button>
        </Box>      
      </Box>
    </Box>
  );
};

export default EmployeePage;
