import React from 'react'
import { BrowserRouter, Link, Redirect, Route, Router, Switch } from 'react-router-dom'
import { AboutPage } from '../AboutPage'
import HeaderNavigation from '../HeaderNavigation'
import { HomePage } from '../HomePage'
import { LoginPage } from '../LoginPage'
import { PrivateRoutes } from '../PrivateRoutes'

interface RoutingProps { }
interface RoutingState {
    isLoggedIn: boolean
}

class Routing extends React.Component<RoutingProps, RoutingState> {
    constructor(props: RoutingProps) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    handleLoginSuccess = () => {
        this.setState({ isLoggedIn: true })
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route
                        render={(routeProps) => {
                            return this.state.isLoggedIn ? <Redirect to="/home" />
                                : <LoginPage onLoginSuccess={this.handleLoginSuccess} {...routeProps} /> // bei render kommen die routeProps mit und manuell weitergeben.
                        }}
                        path="/login"
                    />
                    <Route
                        render={(routeProps) => {
                            this.setState({ isLoggedIn: false })
                            return <LoginPage onLoginSuccess={this.handleLoginSuccess} {...routeProps} />
                        }}
                        path="/logout"
                    />
                    <PrivateRoutes isLoggedIn={this.state.isLoggedIn} />
                </BrowserRouter>
            </div>
        )
    }

}

export default Routing
