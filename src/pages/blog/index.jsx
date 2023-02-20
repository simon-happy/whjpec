import {Component} from "react";
import "./index.css";
import Container from "../../components/Container";
import Pagination from "../../components/pagination";
import Article from "./Article";
import AppHeader from "../../components/header";
import AppFooter from "../../components/footer";

export default class PageBlogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            pageAmount: 0,
            articles: []
        };
    }

    async _getArticles(current) {
        const res = await fetch(`http://localhost:8000/api/articles?page=${current}`);
        const data = await res.json();
        const [articles, pageAmount] = [data.articles || [], data.pageAmount];
        return [articles, pageAmount];
    }

    async componentDidMount() {
        const url = new URL(window.location.href);
        let current = Number(url.searchParams.get("page") || "1");
        const [articles, pageAmount] = await this._getArticles(current);

        this.setState({
            current,
            pageAmount,
            articles
        })
    }

    render() {
        return (
            <>
                <AppHeader/>
                <Container>
                    <div className="blog-title-container">
                        <h1>Blog</h1>
                        <h2>Stay up to date with the latest sales insights, CRM tips, and OnePageCRM updates.</h2>
                    </div>

                    <form className="blog-search-container">
                        <input type="search" name="keyword" placeholder="Search"/>
                        <button type="submit">🔍</button>
                    </form>

                    <div className="blog-article-container">
                        {this.state.articles.map(article => (<Article article={article} />))}
                    </div>

                    <div className="page-nav-container">
                        {this.state.pageAmount > 0 ?
                            <Pagination current={this.state.current} pageAmount={this.state.pageAmount}/> :
                            null}

                    </div>
                </Container>
                <AppFooter/>
            </>
        )
    }
}