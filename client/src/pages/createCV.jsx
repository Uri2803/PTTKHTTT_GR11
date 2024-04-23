import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
  Button,
  Grid
} from "@mui/material";
import { theme } from "~/theme";

function CreateCV() {
  
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
          width: "80%",
          maxWidth: "1200px",
          minWidth: "300px",
          py: "50px",
          px: "50px",
          bgcolor: theme.bgColor.block,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "700", pb: 3 }}>
          Create a CV
        </Typography>

       <Grid container spacing={2}>
         {["Full name", "Email", "Phone number", 
           "Years of experience", 
           "Level", 
           "Skills", 
           ].map((label, index) => (
             <Grid item xs={4} key={index}>
               <FormControl sx={{ width:"100%" }} variant="outlined">
                 <InputLabel htmlFor={`outlined-adornment-${label.toLowerCase().replace(/ /g, '-')}`}>{label}</InputLabel>
                 <OutlinedInput id={`outlined-adornment-${label.toLowerCase().replace(/ /g, '-')}`} label={label}/>
               </FormControl>
             </Grid>
         ))}
       </Grid>

       {/* About yourself */}
       <FormControl sx={{ width:"100%", mt:"2", top: 20}} variant="outlined">
            <InputLabel htmlFor="about-yourself">About yourself</InputLabel>
            <OutlinedInput id="about-yourself" multiline rows={4} label="About yourself"/>
       </FormControl>

       {/* Submit button */}
       
       <Box
         sx={{
           display:"flex",
           justifyContent:"center",
           alignItems:"center",
           pt:"30px"
         }}
       >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4caf50",
              color: "white",
            }}
          >
            Go back
          </Button>
        </Box>
         <Button variant="contained">Submit</Button>
         
       </Box>
     </Box>
   </Box>   
 );
}

export default CreateCV;
