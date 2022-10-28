import { Component, createElement } from "react";
import { Buffer } from "buffer";

class SvgRenderer extends Component {
    render() {
        const buf = Buffer.from(decodeURIComponent(encodeURIComponent(this.props.svgData.value), "base64"));
        return <img src={`data:image/svg+xml;base64,${buf.toString("Base64")}`} />;
    }
}

export default SvgRenderer;
