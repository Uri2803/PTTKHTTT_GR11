import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Login from "./pages/login";
import HomePage from "./pages/homePage";
import RegisterCandidate from "./pages/Register/registerCandidate";
import RegisterEnterprs from "./pages/Register/registerEnterprs";
import Register from "./pages/Register";

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
];

export const route = {
  publicPath,
};
