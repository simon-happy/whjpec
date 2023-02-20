import {Component} from "react";
import AppHeader from "../components/header";
import AppFooter from "../components/footer";
import Container from "../components/Container";

export default class PageNotFound extends Component {
    render() {
        return (
            <>
                <AppHeader/>
                <Container>
                    <h1>404</h1>
                    <p>Not Found</p>
                </Container>
                <AppFooter/>
            </>
        );
    }
}