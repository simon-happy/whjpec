import './App.css';
import {Component, Fragment} from "react";
import PageIndex from "./pages";
import PagePost from "./pages/blog/post";
import PageNewPost from "./pages/blog/new";
import PageNotFound from "./pages/NotFound";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.notFound = <PageNotFound/>
        this.routers = [
            {
                path: "^/$",
                element: <PageIndex/>
            },
            {
                path: "^/blog/[0-9]+$",
                element: <PagePost/>
            },
            {
                path: "^(/blog/new)$",
                element: <PageNewPost/>
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
        return this.notFound;
    }

    render() {
        return (
            <Fragment>
                {this.matchRouter()}
            </Fragment>
        )
    }
}



