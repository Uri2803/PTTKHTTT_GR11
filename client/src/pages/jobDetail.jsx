// // export default function JobDetail() {
// //     return (
// //         <>
// //             <div className="flex mt-10 mx-20 h-[700px] gap-10">
// //                 {/* Left Side */}
// //                 <div className="flex flex-col gap-10 bg-white w-[930px] px-12 py-10 rounded-md">
// //                     {/* Header */}
// //                     <div className="flex gap-5">
// //                         <div>
// //                             <img className="w-[60px] h-[60px]" src="https://i.ibb.co/HD0WyCz/image-38.png?fbclid=IwAR1dWav9ILuTn7twhv1nVfm4OadtZXzPTo24hko6tCEw9ihi6i7eO_M0SdU_aem_ATa7xE3RugLmGIT1Cvz7Y31MdrcdQW-IIC45FpojukzfFiSv1p42g72Op-r4ZJlDUhScj9vZjIdoE1EK0bIJVJyj" alt="" />
// //                         </div>
// //                         <div className="flex flex-col">
// //                             <div className="text-sm text-gray-500">
// //                                 ELITE LIMITED
// //                             </div>
// //                             <div className="font-medium">
// //                                 FIGMA DESIGNER
// //                             </div>
// //                         </div>
// //                     </div>
// //                     <div className="flex flex-col gap-2">
// //                         <div className="text-xl">
// //                             Job Overview
// //                         </div>
// //                         <div className="text-gray-500 text-sm w-11/12">
// //                             <p>
// //                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
// //                             </p>
// //                         </div>
// //                     </div>
// //                     <div className="flex flex-col gap-4">
// //                         <div className="text-xl">Skills</div>
// //                         <div className="flex gap-4">
// //                             <div className="bg-gray-200 px-8 py-2 rounded-md text-gray-500">Ui Designer</div>
// //                             <div className="bg-gray-200 px-8 py-2 rounded-md text-gray-500">Figma</div>
// //                             <div className="bg-gray-200 px-8 py-2 rounded-md text-gray-500">Landing Page</div>
// //                         </div>

// //                     </div>
// //                     <div className="flex justify-end mt-40">
// //                         <button className="bg-green-button text-white px-20 py-3 rounded hover:bg-green-600">Apply now</button>
// //                     </div>
// //                 </div>
// //                 {/* Right Side */}
// //                 <div className="flex flex-col gap-3 w-[440px] mt-2">
// //                     <div>
// //                         <button className="bg-create-button text-white w-full h-12 rounded">Create a cv to apply</button>
// //                     </div>
// //                     <div className="flex flex-col bg-white h-[632px] rounded-md px-4 py-6 gap-6">
// //                         <div className="font-semibold text-xl">
// //                             General Information
// //                         </div>
// //                         <div className="flex flex-col gap-2">
// //                             <div className="font-medium">Minimum year of experience</div>
// //                             <div className="text-gray-500 text-sm ml-2">1 Year</div>
// //                         </div>
// //                         <div className="flex flex-col gap-2">
// //                             <div className="font-medium">Level</div>
// //                             <div className="text-gray-500 text-sm ml-2">Junior</div>
// //                         </div>
// //                         <div className="flex flex-col gap-2">
// //                             <div className="font-medium">Job type</div>
// //                             <div className="text-gray-500 text-sm ml-2">In Office</div>
// //                         </div>
// //                         <div className="flex flex-col gap-2">
// //                             <div className="font-medium">Contract type</div>
// //                             <div className="text-gray-500 text-sm ml-2">Full time</div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     )
// // }

// import React from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   FormControl,
//   InputLabel,
//   OutlinedInput,
//   InputAdornment,
// } from "@mui/material";
// import { PermIdentity as PermIdentityIcon } from "@mui/icons-material";

// const JobDetail = () => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f0f0f0",
//       }}
//     >
//       <Box
//         sx={{
//           width: "50%",
//           maxWidth: "600px",
//           p: "30px",
//           bgcolor: "white",
//           borderRadius: "10px",
//           boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
//         }}
//       >
//         <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
//           Job Detail
//         </Typography>

//         <FormControl sx={{ width: "100%", mb: 3 }} variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-title">Title</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-title"
//             label="Title"
//             readOnly
//             defaultValue="Figma Designer"
//             startAdornment={
//               <InputAdornment position="start">
//                 <PermIdentityIcon />
//               </InputAdornment>
//             }
//           />
//         </FormControl>

//         <Typography variant="h6" sx={{ mb: 2 }}>
//           Job Overview
//         </Typography>
//         <Typography sx={{ mb: 3 }}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//           porttitor ligula nec ex semper, vitae efficitur ligula efficitur.
//           Duis lobortis augue vel semper pellentesque. Integer id consequat
//           mauris. Sed et sem id nibh blandit rutrum in in dui. Donec laoreet
//           dui id efficitur convallis. Sed fringilla, magna at vehicula
//           pellentesque, orci sapien interdum tortor, eget convallis velit eros
//           ac metus. Sed id sem a urna varius efficitur non ac velit.
//         </Typography>

//         <Typography variant="h6" sx={{ mb: 2 }}>
//           Skills
//         </Typography>
//         <Box sx={{ display: "flex", gap: "10px", mb: 3 }}>
//           <Button variant="outlined">UI Designer</Button>
//           <Button variant="outlined">Figma</Button>
//           <Button variant="outlined">Landing Page</Button>
//         </Box>

//         <Button variant="contained" sx={{ backgroundColor: "#4caf50", color: "white" }}>
//           Apply now
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default JobDetail;

// import React from "react";
// import { 
//   Box, 
//   Typography, 
//   Button, 
//   FormControl, 
//   InputLabel, 
//   OutlinedInput, 
//   InputAdornment 
// } from "@mui/material";
// import { PermIdentity as PermIdentityIcon } from "@mui/icons-material";

// const JobDetail = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f0f0f0",
//       }}
//     >
//       <Box
//         sx={{
//           width: "50%",
//           maxWidth: "600px",
//           p: "30px",
//           bgcolor: "white",
//           borderRadius: "10px",
//           boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
//         }}
//       >
//         <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
//           Job Detail
//         </Typography>

//         <FormControl sx={{ width: "100%", mb: 3 }} variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-title">Title</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-title"
//             label="Title"
//             readOnly
//             defaultValue="Figma Designer"
//             startAdornment={
//               <InputAdornment position="start">
//                 <PermIdentityIcon />
//               </InputAdornment>
//             }
//           />
//         </FormControl>

//         <Typography variant="h6" sx={{ mb: 2 }}>
//           Job Overview
//         </Typography>
//         <Typography sx={{ mb: 3 }}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//           porttitor ligula nec ex semper, vitae efficitur ligula efficitur.
//           Duis lobortis augue vel semper pellentesque. Integer id consequat
//           mauris. Sed et sem id nibh blandit rutrum in in dui. Donec laoreet
//           dui id efficitur convallis. Sed fringilla, magna at vehicula
//           pellentesque, orci sapien interdum tortor, eget convallis velit eros
//           ac metus. Sed id sem a urna varius efficitur non ac velit.
//         </Typography>

//         <Typography variant="h6" sx={{ mb: 2 }}>
//           Skills
//         </Typography>
//         <Box sx={{ display: "flex", gap: "10px", mb: 3 }}>
//           <Button variant="outlined">UI Designer</Button>
//           <Button variant="outlined">Figma</Button>
//           <Button variant="outlined">Landing Page</Button>
//         </Box>

//         <Button variant="contained" sx={{ backgroundColor: "#4caf50", color: "white", mb: 3 }}>
//           Apply now
//         </Button>

//         <Button variant="outlined" sx={{ mb: 3 }}>
//           Create a cv to apply
//         </Button>

//         <Box sx={{ backgroundColor: "#ffffff", borderRadius: "5px", p: 3, mb: 3 }}>
//           <Typography variant="h6" sx={{ mb: 2 }}>
//             General Information
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 1 }}>
//             Minimum year of experience: 1 Year
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 1 }}>
//             Level: Junior
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 1 }}>
//             Job type: In Office
//           </Typography>
//           <Typography variant="body1">
//             Contract type: Full time
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default JobDetail;


import React from "react";
import { 
  Box, 
  Typography, 
  Button, 
  FormControl, 
  InputLabel, 
  OutlinedInput, 
  InputAdornment 
} from "@mui/material";
import { PermIdentity as PermIdentityIcon } from "@mui/icons-material";

const JobDetail = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "50px",
      }}
    >
      <Box
        sx={{
          width: "50%",
          p: "30px",
          bgcolor: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <img
              src="https://i.ibb.co/HD0WyCz/image-38.png?fbclid=IwAR1dWav9ILuTn7twhv1nVfm4OadtZXzPTo24hko6tCEw9ihi6i7eO_M0SdU_aem_ATa7xE3RugLmGIT1Cvz7Y31MdrcdQW-IIC45FpojukzfFiSv1p42g72Op-r4ZJlDUhScj9vZjIdoE1EK0bIJVJyj"
              alt="Logo"
              style={{ width: "60px", height: "60px" }}
            />
          </Box>
          <Box>
            <Typography variant="h6">ELITE LIMITED</Typography>
            <Typography variant="body1">FIGMA DESIGNER</Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
            Job Overview
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor ligula nec ex semper, vitae efficitur ligula efficitur. Duis lobortis augue vel semper pellentesque. Integer id consequat mauris. Sed et sem id nibh blandit rutrum in in dui. Donec laoreet dui id efficitur convallis. Sed fringilla, magna at vehicula pellentesque, orci sapien interdum tortor, eget convallis velit eros ac metus. Sed id sem a urna varius efficitur non ac velit.
          </Typography>
          <Box sx={{ display: "flex", gap: "10px", mb: 3 }}>
            <Button variant="outlined">UI Designer</Button>
            <Button variant="outlined">Figma</Button>
            <Button variant="outlined">Landing Page</Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" sx={{ backgroundColor: "#4caf50", color: "white" }}>
            Apply now
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: "40%",
          ml: "50px",
          p: "30px",
          bgcolor: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Button variant="outlined" sx={{ width: "100%", mb: 3 }}>
            Create a cv to apply
          </Button>
          <Box sx={{ backgroundColor: "#ffffff", borderRadius: "5px", p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              General Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Minimum year of experience: 1 Year
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Level: Junior
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Job type: In Office
            </Typography>
            <Typography variant="body1">
              Contract type: Full time
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default JobDetail;
