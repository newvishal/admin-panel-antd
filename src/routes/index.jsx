import { useRoutes } from "react-router";
import LoginPage from "../containers/LoginPage";
import HomePage from "../containers/HomePage";

const routes = [
    {
        path: 'login',
        element: (
            <LoginPage />
        )
    },
    {
        path: '/',
        element: (
            <HomePage />
        )
    }
];

const RenderRouter = () => useRoutes(routes);

export default RenderRouter;