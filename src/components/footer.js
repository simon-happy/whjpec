import {Component} from "react";
import "./footer.css"
import Container from "./Container";

export default class AppFooter extends Component {
    render() {
        return (
            <footer>
                <Container>
                    <div className="footer-menu-container">
                        <div className="footer-menu-container-item">
                            <h3 className="footer-menu-container-item-title">产品</h3>
                            <a className="footer-menu-container-item-link" href="#a">IDE</a>
                            <a className="footer-menu-container-item-link" href="#a">.NET 和 Visual Studio</a>
                            <a className="footer-menu-container-item-link" href="#a">团队工具</a>
                            <a className="footer-menu-container-item-link" href="#a">插件</a>
                            <a className="footer-menu-container-item-link" href="#a">教育</a>
                            <a className="footer-menu-container-item-link" href="#a">语言</a>
                        </div>
                        <div className="footer-menu-container-item">
                            <h3 className="footer-menu-container-item-title">解决方案</h3>
                            <a className="footer-menu-container-item-link" href="#a">C++工具</a>
                            <a className="footer-menu-container-item-link" href="#a">数据工具</a>
                            <a className="footer-menu-container-item-link" href="#a">DevOps</a>
                            <a className="footer-menu-container-item-link" href="#a">教育</a>
                            <a className="footer-menu-container-item-link" href="#a">游戏开发</a>
                            <a className="footer-menu-container-item-link" href="#a">软件开发</a>
                            <a className="footer-menu-container-item-link" href="#a">业务工具</a>
                            <a className="footer-menu-container-item-link" href="#a">质量保证</a>
                        </div>
                        <div className="footer-menu-container-item">
                            <h3 className="footer-menu-container-item-title">计划</h3>
                            <a className="footer-menu-container-item-link" href="#a">Blog</a>
                            <a className="footer-menu-container-item-link" href="#a">Kotlin</a>
                            <a className="footer-menu-container-item-link" href="#a">JetBrains Mono</a>
                            <a className="footer-menu-container-item-link" href="#a">Become a OnePageCRM Champion</a>
                            <a className="footer-menu-container-item-link" href="#a">JetBrains Research</a>
                            <a className="footer-menu-container-item-link" href="#a">Contact Us</a>
                        </div>
                        <div className="footer-menu-container-item">
                            <h3 className="footer-menu-container-item-title">FIND YOUR SOLUTION</h3>
                            <a className="footer-menu-container-item-link" href="#a">CRM for Agencies</a>
                            <a className="footer-menu-container-item-link" href="#a">CRM for Software Companies</a>
                            <a className="footer-menu-container-item-link" href="#a">CRM for Financial Services</a>
                            <a className="footer-menu-container-item-link" href="#a">CRM for Real Estate</a>
                            <a className="footer-menu-container-item-link" href="#a">CRM for Manufacturing</a>
                            <a className="footer-menu-container-item-link" href="#a">CRM Comparisons</a>
                        </div>
                    </div>
                    <div className="footer-social-container">
                        <div className="footer-social-menu">
                            <a className="footer-social-menu-link" href="#">Terms of Service</a>
                            <a className="footer-social-menu-link" href="#">Privacy</a>
                            <a className="footer-social-menu-link" href="#">API Use</a>
                            <a className="footer-social-menu-link" href="#">Cookies</a>
                            <a className="footer-social-menu-link" href="#">Sitemap</a>
                        </div>
                    </div>
                    <div className="footer-copyright-container">
                        <p>&copy; 2023 OnePageCRM. All Rights Reserved.</p>
                    </div>
                </Container>
            </footer>
        )
    }
}