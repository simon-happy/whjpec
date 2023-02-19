import {Component} from "react";
import styles from "./new.module.css";

export default class PageNewPost extends Component {
    render() {
        return (
            <main>
                <form className={styles.form}>
                    <h1>创建一篇新的博客</h1>
                    <label htmlFor="" className={styles.titleLabel}>标题
                        <input className={styles.titleInput} type="text" placeholder="输入一个标题" required/>
                    </label>
                    <label htmlFor="" className={styles.summaryLabel}>摘要
                        <input className={styles.summaryInput} type="text" placeholder="输入一个摘要" required/>
                    </label>
                    <label htmlFor="" className={styles.contentLabel}>内容
                        <textarea placeholder="输入主体内容" className={styles.contentTextarea} name="content" id="content" rows="10"></textarea>
                    </label>
                </form>                
            </main>
        )
    }
}