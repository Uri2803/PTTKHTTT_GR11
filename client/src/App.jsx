// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DefaultLayout from "./layouts/main";
import { Routes, Route } from "react-router-dom";
import { route } from "./route";

function App() {
  return (
    // <>
    //   <DefaultLayout
    //     title = "Home page"
    //     icon = {
    //       <PermIdentityIcon fontSize='large'/>
    //     }
    //   >

    //   </DefaultLayout>
    // </>
    <>
    {    console.log(route)}
      <Routes>
        {route?.publicPath.map((route, index) => {
          let contents = route.content;
          let path = route.path;
          let Layout = route?.layout ? route.layout : DefaultLayout;
          let propsLayout = route?.propsLayout ? route.propsLayout : {}
          return (
            <>
              <Route
                key={index}
                path={path}
                element={
                  <Layout props = {propsLayout} >
                    {contents.map((content) => {
                      let Component = content?.component
                        ? content.component
                        : content;
                      return Component;
                    })}
                  </Layout>
                }
              />
            </>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
