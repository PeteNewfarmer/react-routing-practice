import { RouteComponentProps } from "react-router";

export interface LoginPageProps extends RouteComponentProps {
    onLoginSuccess(): void
}

export interface LoginPageState {
    username: string
    password: string
    errorMessage: string
}