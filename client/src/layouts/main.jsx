/* eslint-disable react/prop-types */
import { Box, Container, Typography } from "@mui/material";
import { theme } from "~/theme";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
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
            <Typography
              variant="h5"
              sx={{
                fontWeight: "700",
              }}
            >
              Jobs
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "700",
              }}
            >
              {props?.title ? props.title : "Empty"}
            </Typography>
            <Box>
              {props?.icon ? (
                props.icon
              ) : (
                <>
                  <CheckBoxOutlineBlankOutlinedIcon />
                </>
              )}
            </Box>
          </Container>
        </Box>

        <Box>
          <Container
            sx={{
              pt: "69px",
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
