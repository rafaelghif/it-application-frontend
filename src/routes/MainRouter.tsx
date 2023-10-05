import { IonRouterOutlet, IonSpinner } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";

import Login from "../pages/Login";
import SideBar from "../layouts/SideBar";
import useAuthStore from "../stores/useAuthStore";
import { Suspense, lazy } from "react";
import PrivateRoute from "./PrivateRoute";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Department = lazy(() => import("../pages/Department"));
const User = lazy(() => import("../pages/User"));
const Phone = lazy(() => import("../pages/Phone"));
const Category = lazy(() => import("../pages/Category"));
const Software = lazy(() => import("../pages/Software"));
const Unspecific = lazy(() => import("../pages/Unspecific"));
const PersonalComputer = lazy(() => import("../pages/PersonalComputer"));
const Server = lazy(() => import("../pages/Server"));
const Laptop = lazy(() => import("../pages/Laptop"));

const MainRouter: React.FC = () => {
  const { isAuth } = useAuthStore();
  return (
    <IonReactRouter>
      <SideBar isAuth={isAuth}>
        <IonRouterOutlet id="main">
          <Route exact path="/login" component={Login} />
          <Suspense fallback={<IonSpinner name="crescent" />}>
            <Route
              exact
              path="/dashboard"
              component={() => (
                <PrivateRoute isAuth={isAuth} component={Dashboard} />
              )}
            />
            <Route
              exact
              path="/user"
              component={() => (
                <PrivateRoute
                  isAuth={isAuth}
                  component={User}
                  isStrictRole={true}
                  roles={["Super User"]}
                />
              )}
            />
            <Route
              exact
              path="/category"
              component={() => (
                <PrivateRoute isAuth={isAuth} component={Category} />
              )}
            />
            <Route
              exact
              path="/department"
              component={() => (
                <PrivateRoute isAuth={isAuth} component={Department} />
              )}
            />
            <Route
              exact
              path="/phone"
              component={() => (
                <PrivateRoute isAuth={isAuth} component={Phone} />
              )}
            />
            <Route
              exact
              path="/unspecific"
              component={() => (
                <PrivateRoute isAuth={isAuth} component={Unspecific} />
              )}
            />
            <Route
              exact
              path="/personal-computer"
              component={() => (
                <PrivateRoute isAuth={isAuth} component={PersonalComputer} />
              )}
            />
            <Route
              exact
              path="/laptop"
              component={() => (
                <PrivateRoute isAuth={isAuth} component={Laptop} />
              )}
            />
            <Route
              exact
              path="/server"
              component={() => (
                <PrivateRoute isAuth={isAuth} component={Server} />
              )}
            />
            <Route
              exact
              path="/software"
              component={() => (
                <PrivateRoute isAuth={isAuth} component={Software} />
              )}
            />
          </Suspense>
          <Route exact path="/">
            <Redirect to={isAuth ? "/dashboard" : "/login"} />
          </Route>
        </IonRouterOutlet>
      </SideBar>
    </IonReactRouter>
  );
};

export default MainRouter;
