/* eslint-disable react/prop-types */
import { Box, Button, Container, Typography } from "@mui/material";
import { theme } from "~/theme";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function DefaultLayout({ props, children }) {
  
  // const user = {
  //   ID : localStorage.getItem('ID'),
  //   UserName: localStorage.getItem('UserName'),
  //   Role: localStorage.getItem('Role')
  // }
  const navigate = useNavigate();
  const dataUser = localStorage.getItem('user')
  const user = JSON.parse(dataUser);
  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };
  const login =() =>{
    navigate('/login');
  }
 
  return (
    <>
      {console.log("layout", props)}
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: theme.bgColor.main,
        }}
      >
        {/* Header */}
        <Box
          sx={{
            bgcolor: theme.bgColor.block,
            width: "100%",
            position: "fixed",
            zIndex: 100,
            borderBottom: "0.5px solid #ccc",
          }}
        >
          <Container
            sx={{
              height: theme.app.HEIGHT_HEADER,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Link to="/" style={{ textDecoration: 'none'}}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                  color: '#000',
                }}
              >
                Jobs
              </Typography>
            </Link>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "700",
              }}
            >
              {props?.title ? props.title : "Empty"}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {user ? (
                <Box sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <Typography variant="h6"> {user.Role}: {user.UserName}</Typography>
                  <Button variant="outlined" sx={{ width: "60%", mb: 1 , height: "30px"}} onClick={logout}>
                     Logout
                  </Button>
                </Box>
                
                
                   
                ) : (
                  <Box >
                    <Button variant="outlined" sx={{ width: "150%", mb: 1}} onClick={login} >
                     login
                  </Button>
                  </Box>
                  

              )}
            </Box>
          
            
    
            
          </Container>
        </Box>

        <Box>
          <Container
            sx={{
              py: "69px",
            }}
          >
            <Box>{children}</Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default DefaultLayout;
