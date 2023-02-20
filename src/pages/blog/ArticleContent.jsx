import {Component} from "react";
import styles from "./ArticleContent.module.css";

export default class ArticleContent extends Component {
    render() {
        return this.props.article ? (
            <article>
                <img
                    className={styles.cover}
                    loading="lazy"
                    src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1280/https://www.onepagecrm.com/wp-content/uploads/blog-conversion-rate-header.png"
                    alt="cover"/>
                <h1 className={styles.title}>{this.props.article.title}</h1>
                {this.props.article.summary ? this.props.article.summary.map((val, idx) => (<p className={styles.summary} key={idx}>{val}</p>)) : ""}
                <hr/>
                <div className={styles.body} dangerouslySetInnerHTML={{__html: this.props.article.content}}>< /div>
            </article>
        ) : null
    }
}