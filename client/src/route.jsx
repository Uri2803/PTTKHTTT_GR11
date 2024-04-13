import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Login from "./pages/login";
import HomePage from "./pages/homePage";
import JobDetail from "./pages/jobDetail";
import Company from "./pages/createACompany";
// import Layout from "./layout";

const publicPath = [
  {
    path: "/login",
    content: [
      {
        component: <Login />,
      },
    ],
    propsLayout: {
      title: "Login",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },

  {
    path: "/",
    content: [
      {
        component: <HomePage />,
      },
    ],
    propsLayout: {
      title: "Home page",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },


  {
    path: "/jobdetail",
    content: [
      {
        component: <JobDetail />,
      },
    ],
    propsLayout: {
      title: "Job Detail",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },
  {
    path: "/company",
    content: [
      {
        component: <Company/>,
      },
    ],
    propsLayout: {
      title: "Create a Company",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },

];

export const route = {
  publicPath,
};
