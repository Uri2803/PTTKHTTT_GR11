/* eslint-disable react/prop-types */
import { Box, Container, Typography } from "@mui/material";
import { theme } from "~/theme";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import { Link } from "react-router-dom";

function DefaultLayout({ props, children }) {

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
              {props?.isLogin ? (
                props?.icon ? (
                  <>
                    {props.icon}
                    <Typography variant="body1">Mạch Vĩ Kiệt</Typography>
                  </>
                ) : (
                  <>
                    <CheckBoxOutlineBlankOutlinedIcon />
                  </>
                )
              ) : (
                <Link to="/login">Vui lòng đăng nhập</Link>
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
