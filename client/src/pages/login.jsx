/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
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
import { Link } from "react-router-dom";
import api from "~/apis";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [username, setusrname] = useState("");
  const [password, setpassword] = useState("");
  const [typeNotif, settypeNotif] = useState(true);
  const [messNotif, setmessNotif] = useState("");
  const [hiddenNotif, sethiddenNotif] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate(); 

  const submitButton = async () => {
    console.log(username, password);
    const res = await api.login(username, password);
    console.log(res);
    sethiddenNotif(false);
    settypeNotif(res.status);
    setmessNotif(res?.message);
    if(res.status){
      if(res.Role === 'Nhân viên'){
        navigate('/employeePage');
      }
      if(res.Role === 'Ứng viên'){
        navigate('/');
      }

    }
    

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
      {/* <Alert variant="outlined" severity="success">
        This is an outlined success Alert.
      </Alert> */}
      {/* <Box
        sx={{
          position: "fixed",
          top: "120px",
          right: "40px",
        }}
      >
        <Alert variant="outlined" severity="error">
          This is an outlined error Alert.
        </Alert>
      </Box> */}
      <Box
        sx={{
          width: "80%",
          maxWidth: "500px",
          minWidth: "250px",
          py: "50px",
          px: "50px",
          bgcolor: theme.bgColor.block,
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "700", pb: 3 }}>
          Login
        </Typography>

        <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Username</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            startAdornment={
              <InputAdornment position="start">
                <MailOutlinedIcon />
              </InputAdornment>
            }
            label="Username"
            value={username}
            onChange={(e) => {
              setusrname(e.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ width: "100%", mt: 2, mb: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            startAdornment={
              <InputAdornment position="start">
                <HttpsIcon />
              </InputAdornment>
            }
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
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            label="Password"
          />
        </FormControl>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Link to="/register">Don't have account ?</Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pt: "10px",
          }}
        >
          <Button variant="contained" onClick={submitButton}>
            Submit
          </Button>
        </Box>
        <Typography
          color={typeNotif ? "#4caf50" : "error"}
          sx={{
            display: hiddenNotif ? "none" : "block",
            pt: "10px",
          }}
        >
          {typeNotif ? "Success" : messNotif}
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
