import Button from "@mui/material/Button";

// eslint-disable-next-line react/prop-types
export default function ButtonUsage({ children, variant, sx , }) {
  return (
    <Button variant={variant ? variant : "contained"} sx={sx} >
      {children}
    </Button>
  );
}
