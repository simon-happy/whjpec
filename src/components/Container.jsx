import {Component} from "react";
import styles from "./Container.module.css"

export default class Container extends Component {
    render() {
        return (
            <div className={styles.container} style={{width: this.props.width ?? null}}>
                {this.props.children}
            </div>
        )
    }
}