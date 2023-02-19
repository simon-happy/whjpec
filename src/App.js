import './App.css';
import {Component, Fragment} from "react";
import PageIndex from "./pages";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.notFound = <div>404 Not Found</div>
        this.routers = [
            {
                path: "^/$",
                element: <PageIndex/>
            }
        ]
        this.matchRouter = this.matchRouter.bind(this);
    }

    matchRouter() {
        const currentPath = new URL(window.location.href).pathname;
        for (let router of this.routers) {
            if (new RegExp(router.path).test(currentPath)) {
                return router.element;
            }
        }
        return this.NotFound;
    }

    render() {
        return (
            <Fragment>
                {this.matchRouter()}
            </Fragment>
        )
    }
}



