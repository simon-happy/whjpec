import {Component} from "react";
import styles from "./new.module.css";
import AppHeader from "../../components/header";
import AppFooter from "../../components/footer";
import Container from "../../components/Container";

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

    _handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            formStatus: 1
        });

        const res = await fetch("http://localhost:8000/api/articles", {
                method: "POST",
                body: JSON.stringify({
                    title: this.state.title,
                    summary: this.state.summary,
                    content: this.state.content,
                    user_id: 1
                })
            }
        );

        if (res.status !== 201) {
            alert(res.status);
        } else {
            alert("OK");
        }

        this.setState({
            formStatus: 0
        });
    }

    render() {
        return (
            <>
                <AppHeader/>
                <Container>
                    <form onSubmit={this._handleSubmit} className={styles.form}>
                        <h1>创建一篇新的博文</h1>
                        <label htmlFor="title" className={styles.titleLabel}>标题
                            <input id="title" name="title" value={this.state.title} onChange={this._onTitleChange} className={styles.titleInput}
                                   type="text" placeholder="输入一个标题" required/>
                        </label>
                        <label htmlFor="summary" className={styles.summaryLabel}>摘要
                            <textarea id="summary" name="summary" value={this.state.summary} onChange={this._onSummaryChange} rows="3"
                                   className={styles.summaryInput} placeholder="输入一个摘要" required/>
                        </label>
                        <label htmlFor="content" className={styles.contentLabel}>内容
                            <textarea value={this.state.content} onChange={this._onContentChange}
                                      placeholder="输入主体内容"
                                      className={styles.contentTextarea} name="content"
                                      id="content" rows="10"></textarea>
                        </label>
                        <button disabled={this.state.formStatus !== 0} type="submit" className={styles.submitButton}>提交
                        </button>
                    </form>
                </Container>
                <AppFooter/>
            </>
        )
    }
}