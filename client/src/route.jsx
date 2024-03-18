import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Login from "./pages/login";
import HomePage from "./pages/homePage";
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
];

export const route = {
  publicPath,
};
