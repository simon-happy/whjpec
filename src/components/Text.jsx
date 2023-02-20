import {Component, Fragment} from "react";

export default class Text extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                {this.props.text || ""}
            </Fragment>
        )
    }
}