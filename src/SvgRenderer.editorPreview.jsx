import { Component, createElement } from "react";
import SvgRenderer from "./SvgRenderer";

export class preview extends Component {
    render() {
        return <SvgRenderer props={this.props} />;
    }
}
