import {Component} from "react";
import styles from "./index.module.css";

import Container from "../components/Container";
import AppHeader from "../components/header";
import AppFooter from "../components/footer";

export default class PageIndex extends Component {
    render() {
        return (
            <>
                <AppHeader/>
                <Container>
                    <div className={styles.pageIndex}>
                        <h1>IndexPage</h1>
                    </div>
                </Container>
                <AppFooter/>
            </>
        )
    }
}