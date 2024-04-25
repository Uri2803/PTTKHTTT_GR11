import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Login from "./pages/login";
import HomePage from "./pages/homePage";
import RegisterCandidate from "./pages/Register/registerCandidate";
import RegisterEnterprs from "./pages/Register/registerEnterprs";
import Register from "./pages/Register";

import CreateCV from "./pages/createCV";
import CreateCompany from "./pages/createCompany";
// import JobDetail from "./pages/detailJob";
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
      title: " ",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },

  {
    path: "/register",
    content: [
      {
        component: <Register />,
      },
    ],
    propsLayout: {
      title: " ",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },

  {
    path: "/register_for_candidate",
    content: [
      {
        component: <RegisterCandidate />,
      },
    ],
    propsLayout: {
      title: " ",
      icon: <PermIdentityIcon fontSize="large" />,
    },
  },

  {
    path: "/register_for_Enterprs",
    content: [
      {
        component: <RegisterEnterprs />,
      },
    ],
    propsLayout: {
      title: " ",
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
    path: "/createCV",
    content: [
      {
        component: <CreateCV/>
      }
    ],
    propsLayout: {
        title: 'Create CV',
        icon: <PermIdentityIcon fontSize="large"/>
    }
  },
  {
    path: "/createCompany",
    content: [
      {
        component: <CreateCompany/>
      }
    ],
    propsLayout: {
        title: 'Create Company',
        icon: <PermIdentityIcon fontSize="large"/>
    }
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
