import React, { useContext } from "react";
import { BaseContext } from "./context/BaseProvider";
import { Link } from "react-router-dom";

class Header extends React.Component {
    // const baseContext = useContext(BaseContext);
    static contextType = BaseContext;
    constructor(props) {
        super(props);
        this.state = {
            language: "en"
        }
    }
    componentDidMount() {
        const value = this.context
        this.setState({ language: value.lang })
        console.log(value)
    }

    componentDidUpdate() {
        let value = this.context;
        console.log(value)
    }
    
    languageChangeValue = (evt) => {
        this.setState({ language: evt.target.value });
        let value = this.context;
        value.setLang(evt.target.value);

    }

    render() {
        return <>
            <BaseContext.Consumer>
                {v => <header>
                    <p>This is header </p>
                    <select name="language" id="language" value={v.lang} onChange={(e) => { this.languageChangeValue(e) }}>
                        <option value="en">English</option>
                        <option value="jp">Japanese</option>
                        <option value="vn">VietNamese</option>
                    </select><br />
                    <Link to="/login">Login</Link>
                </header>}
            </BaseContext.Consumer>

        </>

    }
}

export default Header;