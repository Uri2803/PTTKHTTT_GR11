/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { theme } from "~/theme";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { Link } from "react-router-dom";
import ButtonUsage from "~/components/ButtonUsage";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function RegisterEnterprs() {

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
          maxWidth: "500px",
          minWidth: "250px",
          py: "50px",
          px: "50px",
          bgcolor: theme.bgColor.block,
          borderRadius: '10px'
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "700", pb: 3 }}>
          Enterprise Register
        </Typography>

        <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-fullname">Company</InputLabel>
          <OutlinedInput
            id="outlined-adornment-fullname"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            }
            label="fullname"
          />
        </FormControl>

        <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-company-id">Company ID</InputLabel>
          <OutlinedInput
            id="outlined-adornment-company-id"
            startAdornment={
              <InputAdornment position="start">
                <MailOutlinedIcon />
              </InputAdornment>
            }
            label="company-id"
          />
        </FormControl>

        <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            startAdornment={
              <InputAdornment position="start">
                <MailOutlinedIcon />
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>

        <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-represent">Representation</InputLabel>
          <OutlinedInput
            id="outlined-adornment-represent"
            startAdornment={
              <InputAdornment position="start">
                <MailOutlinedIcon />
              </InputAdornment>
            }
            label="represent"
          />
        </FormControl>

        <Box sx = {{
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
                <Link to="/login">I have account before !</Link>
        
        </Box>
          
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: "10px",
          }}
        >
          <ButtonUsage>Submit</ButtonUsage>
        </Box>
      </Box>
    </Box>
  );
}

export default RegisterEnterprs;
