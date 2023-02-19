import {Component} from "react";
import styles from "./new.module.css";

export default class PageNewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            summary: "",
            content: "",
            formStatus: 0
        }
    }

    _onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    _onSummaryChange = (e) => {
        this.setState({
            summary: e.target.value
        })
    }
    _onContentChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            formStatus: 1
        })
        console.log(`title: ${this.state.title}\nsummary: ${this.state.summary}\ncontent:${this.state.content}`)
    }

    render() {
        return (
            <main>
                <form onSubmit={this._handleSubmit} className={styles.form}>
                    <h1>创建一篇新的博文</h1>
                    <label htmlFor="" className={styles.titleLabel}>标题
                        <input value={this.state.title} onChange={this._onTitleChange} className={styles.titleInput}
                               type="text" placeholder="输入一个标题" required/>
                    </label>
                    <label htmlFor="" className={styles.summaryLabel}>摘要
                        <input value={this.state.summary} onChange={this._onSummaryChange}
                               className={styles.summaryInput} type="text" placeholder="输入一个摘要" required/>
                    </label>
                    <label htmlFor="" className={styles.contentLabel}>内容
                        <textarea value={this.state.content} onChange={this._onContentChange} placeholder="输入主体内容"
                                  className={styles.contentTextarea} name="content"
                                  id="content" rows="10"></textarea>
                    </label>
                    <button disabled={this.state.formStatus !== 0} type="submit" className={styles.submitButton}>提交
                    </button>
                </form>
            </main>
        )
    }
}