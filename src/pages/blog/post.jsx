import {Component} from "react";
import styles from "./post.module.css";
import Container from "../../components/Container";
import ArticleContent from "./ArticleContent";

export default class PageBlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: {}
        }
    }

    async _getArticle(id) {
        const res = await fetch(`http://localhost:8000/api/articles/${id}`);
        return await res.json();
    }

    async componentDidMount() {
        const url = new URL(window.location.href);
        const id = url.pathname.slice("/blog/".length);
        const article = await this._getArticle(id);
        this.setState({
            article
        });
    }


    render() {
        return (
            <Container width="786px">
                <a className={styles.goBack} href="/blog">&lt; Go Back</a>
                <ArticleContent article={this.state.article}/>
            </Container>
        )
    }
}