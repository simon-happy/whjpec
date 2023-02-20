import {Component} from "react";
import styles from "./header.module.css";
import Avatar from "../avatar.webp";
import Container from "./Container";

export default class AppHeader extends Component {
    render() {
        return (
            <header className={styles.appHeader}>
                <Container>
                    <div className={styles.container}>
                        <div className={styles.left}>
                            <a href="/" className={styles.logo}></a>
                            <div className={styles.menu}>
                                <div className={styles.withSubmenu}>
                                    <a className={styles.link} href="#">特性</a>
                                    <div className={styles.submenu}>
                                        <h3>主要特性</h3>
                                        <a href="#">Next Action Sales Method</a>
                                        <a href="#">Next Action Sales Method</a>
                                        <a href="#">Next Action Sales Method</a>
                                        <a href="#">Next Action Sales Method</a>
                                        <a href="#">Next Action Sales Method</a>
                                        <a href="#">Next Action Sales Method</a>
                                        <a href="#">Next Action Sales Method</a>
                                        <a href="#">Next Action Sales Method</a>
                                        <a href="#">Next Action Sales Method</a>
                                        <a href="#">Next Action Sales Method</a>
                                    </div>
                                </div>
                                <div><a className={styles.link} href="#">Who is it for?</a></div>
                                <div><a className={styles.link} href="/blog">博客</a></div>
                                <div><a className={styles.link} href="#">信息价</a></div>
                                <div><a className={styles.link} href="#">关于</a></div>
                            </div>
                        </div>
                        <div className={styles.right} style={{display: "none"}}>
                            <a className={styles.signInLink} href="/login">登录</a>
                            <a className={styles.signUpLink} href="#">免费注册</a>
                        </div>
                        <div className={styles.right2}>
                            <a className={styles.avatar} href="#a"><img className={styles.avatarImg} src={Avatar} alt="avatar"/></a>
                            <div className={styles.userMenu}>
                                <p>孙联发</p>
                                <ul>
                                    <li><a href="#a">个人中心</a></li>
                                    <li><a href="#a">退出登录</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
        )
    }
}