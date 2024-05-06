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
import api from "~/apis";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function HomePage() {
  const [postings, setPostings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getallposting(); 
        if (data.status) {
          console.log(data)
          setPostings(data.posting);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const formatNumber = (number) => {
    // Định dạng số với ba số mỗi lần
    return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: `calc(100vh - ${theme.app.HEIGHT_HEADER})`,
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
        {postings.map((post, index) => {
          return (
            <Grid xs={4} key={index}>
              <Link to={`/jobdetail/${post.PostingID}`} style={{ textDecoration: 'none' }}>
              <Item
                sx={{
                  width: "100%",
                  minHeight: "200px",
                  height: "100%",
                  borderRadius: "40px",
                  padding: "20px",
                  "&:hover": {
                    cursor: "pointer",
                  }
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
                        {post.Position}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {post.Name}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>

                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  {[post.Eperience, formatNumber(post.ExpectedSalary) + '$', post.Level, post.JobType].map(
                    (title, index) => {
                      return (
                        <Button 
                        key = {index}
                          variant="contained"
                          onClick={(e) => {
                            console.log("aaaa");
                            e.stopPropagation();
                          }}
                          sx={{
                            borderRadius: "20px",
                            padding: "10px 15px",
                            mr: 1,
                            bgcolor: "#fff",
                            color: theme.color.main,
                            fontSize: "11px",
                            boxShadow:
                              "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
                            "&:hover": {
                              bgcolor: "#eee",
                            },
                          }}
                        >
                          {title}
                        </Button>
                      );
                    }
                  )}
                </Box>
              </Item>
              </Link>
            </Grid>
          );
        })}
        
      </Grid>
    </Box>
  );
}

export default HomePage;
