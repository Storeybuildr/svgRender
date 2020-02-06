import "./ui/SvgRender.css";

import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

class SvgRender extends Component {
    render() {
        const image = btoa(unescape(encodeURIComponent(this.props.svgData.value)));
        return <img src={`data:image/svg+xml;base64,${image}`} />;
    }
}

export default hot(SvgRender);
