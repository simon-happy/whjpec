import {Component} from "react";
import Author from "../../avatar.webp";
import styles from "./Article.module.css";

export default class Article extends Component {

    render() {
        return (
            <article className={styles.article} key={this.props.article.id}>
                <header className={styles.header}>
                    <a href="#a" className={styles.authorContainer}>
                        <img className={styles.authorImage} loading="lazy" src={Author} alt="author"/>{this.props.article.author}
                    </a>
                    <time className={styles.date}>{this.props.article.date}</time>
                </header>
                <div className={styles.body}>
                    <img className={styles.cover} src={this.props.article.cover} alt="abc"/>
                    <h2><a className={styles.title} href={`/blog/${this.props.article.id}`}>{this.props.article.title}</a>
                    </h2>
                    <div className={styles.summary}>
                        {this.props.article.summary.map((s, idx) => (<p key={idx}>{s}</p>))}
                    </div>
                </div>
                <footer className={styles.footer}></footer>
            </article>
        )
    }
}