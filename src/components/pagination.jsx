import {Component} from "react";
import styles from "./pagination.module.css";

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: props.current || 0,
            pageAmount: props.pageAmount || 0,
            pages: []
        }
        this._getPagesNav.bind(this);
    }

    componentDidMount() {
        this.setState({
            pages: this._getPagesNav()
        })
    }


    _getPagesNav() {
        let pagesNav = [];
        if (this.state.current > 1) {
            pagesNav.push("<");
        }

        let flag = false
        for (let i = 1; i <= this.state.pageAmount; i++) {
            if (i === 1 || i === this.state.pageAmount) {
                flag = false
                pagesNav.push(i);
                continue;
            }
            if (i < this.state.current - 2 || i > this.state.current + 2) {
                if (flag) {
                    continue
                }
                flag = true
                pagesNav.push("...");
                continue
            }
            flag = false
            pagesNav.push(i);
        }
        if (this.state.current < this.state.pageAmount) {
            pagesNav.push(">")
        }

        return pagesNav;
    }

    render() {
        return (
            <ul className={styles.pagination}>
                {this.state.pages.map((page, idx) => {
                    switch (page) {
                        case "<":
                            return (<li key={idx} className={styles.paginationItemActive}>
                                <a className={styles.paginationLink}
                                   href={`?page=${this.state.current - 1}`}>&lt;</a>
                            </li>);
                        case ">":
                            return (<li key={idx} className={styles.paginationItemActive}>
                                <a className={styles.paginationLink}
                                   href={`?page=${this.state.current + 1}`}>&gt;</a>
                            </li>);
                        case "...":
                            return (<li key={idx} className={styles.paginationItemEllipsis}>
                                <span className={styles.paginationLink}>...</span></li>);
                        default:
                            return this.state.current === Number(page) ?
                                (<li key={idx} className={styles.paginationItemCurrent}>
                                    <span className={styles.paginationLink}>{page}</span>
                                </li>) :
                                (<li key={idx} className={styles.paginationItem}>
                                    <a className={styles.paginationLink}
                                       href={`?page=${page}`}>{page}</a>
                                </li>)
                    }
                })}
            </ul>
        )
    }
}