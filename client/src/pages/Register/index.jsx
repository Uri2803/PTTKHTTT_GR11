import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { theme } from "~/theme";

function Register() {
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
          borderRadius: "10px",
        }}
      >
        {[
          {
            title: "For Candidate",
            link: "/register_for_candidate",
          },
          {
            title: "For Enterprise",
            link: "/register_for_Enterprs",
          },
        ].map((value ,index) => {
          return (
            <>
              <Link
                key={index}
                to= {value.link}
                style={{
                  display: "block",
                  width: "100%",
                  height: "50px",
                  background: "#e9e9e9",
                  textAlign: "center",
                  lineHeight: "50px",
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "700",
                  marginBottom: '20px',
                  borderRadius: '10px'
                }}
              >
                {value.title}
              </Link>
            </>
          );
        })}
      </Box>
    </Box>
  );
}

export default Register;
