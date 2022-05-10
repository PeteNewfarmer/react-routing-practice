import { Redirect, Route, Switch } from "react-router";
import { AboutPage } from "../AboutPage";
import HeaderNavigation from "../HeaderNavigation";
import { HomePage } from "../HomePage";

interface PrivateRoutesProps {
    isLoggedIn: boolean;
}

export const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ isLoggedIn }) => {
    return isLoggedIn ? (
        <>
            <HeaderNavigation />
            <Switch>
                <Route component={AboutPage} path="/about" />
                <Route component={HomePage} path="/home" />
            </Switch>
        </>
    ) : <Redirect to="/login" />
}