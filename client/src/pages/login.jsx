import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { theme } from "~/theme";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import HttpsIcon from "@mui/icons-material/Https";

import ButtonUsage from "~/components/ButtonUsage";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
          width: "50%",
          maxWidth: "400px",
          minWidth: "250px",
          py: "50px",
          px: "50px",
          bgcolor: theme.bgColor.block,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "700", pb: 3 }}>
          Login
        </Typography>

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
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            startAdornment={<InputAdornment position="start"><HttpsIcon/></InputAdornment>}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {/* {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon />} */}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: "30px",
          }}
        >
          <ButtonUsage>Submit</ButtonUsage>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
