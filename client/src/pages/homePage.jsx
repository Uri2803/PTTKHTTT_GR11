import { Box, Button, Typography } from "@mui/material";
import { theme } from "~/theme";
// import Grid from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Image from "~/assets/tempIcon.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function HomePage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: `calc(100vh - ${theme.app.HEIGHT_HEADER})`,
      }}
    >
      <Typography
        sx={{
          fontWeight: "700",
          width: "100%",
          textAlign: "center",
          py: "30px",
        }}
        variant="h4"
      >
        Welcome to our job recruitment website
      </Typography>

      <Grid container spacing={2} sx={{ width: "100%" }}>
        {["", "", "", "", ""].map((container, index) => {
          return (
            <Grid xs={4} key={index}>
              <Item
                sx={{
                  width: "100%",
                  minHeight: "170px",
                  height: "100%",
                  borderRadius: "40px",
                  padding: "20px",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    width: "100%",
                    borderRadius: "40px",
                    outline: "none",
                    boxShadow: "none",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: "80px",
                      width: "80px",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "fixed",
                      objectFit: "fill",
                    }}
                    image={Image}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto", py: 0 }}>
                      <Typography component="div" variant="h5">
                        Live From Space
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Mac Miller
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>

                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  {["UI Designer", "figma", "Landing Page"].map(
                    (title, index) => {
                      return (
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "20px",
                            padding: "5px 10px",
                            mr: 1,
                            bgcolor: '#fff',
                            color: theme.color.main,
                            boxShadow:
                              "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                            '&:hover': {
                                // color: '#fff',
                                bgcolor: '#eee'
                            }
                          }}
                          key={index}
                        >
                          {title}
                        </Button>
                      );
                    }
                  )}
                </Box>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default HomePage;