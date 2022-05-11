import React, { ChangeEvent } from "react"
import { Button } from "../Button"
import { LoginPageProps, LoginPageState } from "./interface"

export class LoginPage extends React.Component<LoginPageProps, LoginPageState> {

    constructor(props: LoginPageProps) {
        super(props)

        this.state = {
            username: "",
            password: "",
            errorMessage: ""
        }
    }

    handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event)
        this.setState({ username: event.currentTarget.value })
    }
    handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event)
        this.setState({ password: event.currentTarget.value })
    }

    handleLogin = () => {
        if (this.state.username == 'admin' && this.state.password == 'admin') {
            this.props.onLoginSuccess()
            this.props.history.push("/home")
            sessionStorage.setItem("isLoggedIn", "true")
        } else {
            this.setState({ errorMessage: "Wrong username or password" })
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div>Username:</div>
                <input onChange={this.handleUsernameChange} value={this.state.username} />
                <div>Password:</div>
                <input onChange={this.handlePasswordChange} value={this.state.password} />
                <br />
                {this.state.errorMessage && (
                    <>
                        <br />
                        <span>
                            {this.state.errorMessage}
                        </span>
                        <br />
                    </>
                )}
                <br />
                <Button onClick={this.handleLogin}>Log in</Button>
            </div>
        )
    }
}