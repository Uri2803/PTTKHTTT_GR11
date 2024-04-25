import { 
  Box, 
  Typography, 
  Button, 
} from "@mui/material";

const JobDetail = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
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
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <img
              src="https://i.ibb.co/HD0WyCz/image-38.png?fbclid=IwAR1dWav9ILuTn7twhv1nVfm4OadtZXzPTo24hko6tCEw9ihi6i7eO_M0SdU_aem_ATa7xE3RugLmGIT1Cvz7Y31MdrcdQW-IIC45FpojukzfFiSv1p42g72Op-r4ZJlDUhScj9vZjIdoE1EK0bIJVJyj"
              alt="Logo"
              style={{ width: "60px", height: "60px" }}
            />
          </Box>
          <Box>
            <Typography variant="h6">ELITE LIMITED</Typography>
            <Typography variant="body1">FIGMA DESIGNER</Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
            Job Overview
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor ligula nec ex semper, vitae efficitur ligula efficitur. Duis lobortis augue vel semper pellentesque. Integer id consequat mauris. Sed et sem id nibh blandit rutrum in in dui. Donec laoreet dui id efficitur convallis. Sed fringilla, magna at vehicula pellentesque, orci sapien interdum tortor, eget convallis velit eros ac metus. Sed id sem a urna varius efficitur non ac velit.
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", mb: 3 }}>
            <Button variant="outlined">UI Designer</Button>
            <Button variant="outlined">Figma</Button>
            <Button variant="outlined">Landing Page</Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" sx={{ backgroundColor: "#4caf50", color: "white" }}>
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
          <Button variant="outlined" sx={{ width: "100%", mb: 3 }}>
            Create a cv to apply
          </Button>
          <Box sx={{ backgroundColor: "#ffffff", borderRadius: "5px", p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              General Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Minimum year of experience: 1 Year
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Level: Junior
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Job type: In Office
            </Typography>
            <Typography variant="body1">
              Contract type: Full time
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobDetail;
