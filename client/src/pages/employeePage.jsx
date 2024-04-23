import { Box, Button } from "@mui/material";

const EmployeePage = () => {
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
          >
            Create CV
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              bgcolor: "#f44336",
              color: "white",
            }}
          >
            Create Post
          </Button>
        </Box>      
      </Box>
    </Box>
  );
};

export default EmployeePage;
