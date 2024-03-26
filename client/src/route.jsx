import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Login from "./pages/login";
import HomePage from "./pages/homePage";
import CreateCV from "./pages/createCV";
import CreateCompany from "./pages/createCompany";
import JobDetail from "./pages/detailJob";
const publicPath = [
  {
    path: "/login",
    content: [
      {
        component: <Login/>
      }
    ],
    propsLayout: {
        title: 'Login',
        icon: <PermIdentityIcon fontSize="large"/>
    }
  },
  {
    path: "/",
    content: [
      {
        component: <HomePage/>
      }
    ],
    propsLayout: {
        title: 'Home page',
        icon: <PermIdentityIcon fontSize="large"/>
    }
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
    path: "/jobDetail",
    content: [
      {
        component: <JobDetail/>
      }
    ],
    propsLayout: {
        title: 'Job detail',
        icon: <PermIdentityIcon fontSize="large"/>
    }
  },
];

export const route = {
  publicPath,
};
