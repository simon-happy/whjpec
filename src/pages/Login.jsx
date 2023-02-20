import {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPerson} from "@fortawesome/free-solid-svg-icons";

import "./Login.css";

export default class PageLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loading: false,
        }
        this._onEmailChange = this._onEmailChange.bind(this);
        this._onPasswordChange = this._onPasswordChange.bind(this);
        this._submit = this._submit.bind(this);
    }

    _onEmailChange(e) {
        this.setState({
            email: e.target.value
        })
    }

    _onPasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    _submit(e) {
        e.preventDefault();
        this.setState({loading: true})
        console.log(this.state.loading)
        new Promise(resolve => {
            setTimeout(
                () => resolve(), 3000
            )
        }).then(() => {
            this.setState({loading: false})
            console.log(this.state.loading)
        })
    }

    render() {
        return (
            <div className="container full-height">
                <div className="form-container">
                    <form onSubmit={this._submit} className="login-container">
                        <h1>Welcome <span className="text-primary">back</span></h1>
                        <a className="login-as-google" href="#a">
                            <FontAwesomeIcon icon={faPerson}/> Continue with Google
                        </a>
                        <span className="hr-with-text">OR</span>
                        <label htmlFor="email">Email
                            <input id="email" name="email" type="email" value={this.state.email}
                                   onChange={this._onEmailChange} placeholder="type your email" required/>
                        </label>
                        <label htmlFor="password">Password
                            <input id="password" name="password" type="password" value={this.state.password}
                                   onChange={this._onPasswordChange} placeholder="type your password"
                                   required/>
                        </label>
                        <div className="forgot-password">
                            <a href="#a">Forgot password?</a>
                        </div>
                        <button type="submit" disabled={this.state.loading}>Log in</button>
                        <div className="not-has-account">
                            <p>Don't have an account</p>
                            <a href="#a">Sign up</a>
                        </div>
                    </form>
                    <div className="login-info-container">
                        <h2><span className="text-primary">WHAT'S NEW</span> Products & Services Catalog</h2>
                        <img
                            src="https://onepagecrm-static.s3.amazonaws.com/product_updates/1f128299-53d8-487d-8074-f07a17e345b5.png"
                            alt="product"/>
                        <p>Set up a centralized Catalog. Add service descriptions and prices. Group them together to
                            create Bundles.</p>
                    </div>
                </div>
            </div>
        )
    }
}