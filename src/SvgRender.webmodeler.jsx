import { Component, createElement } from "react";

export class preview extends Component {
    render() {
        const svgData = `<svg xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect x="0" y="0" width="150" height="100" fill="lightgrey"></rect>
          <text x="0" y="50" font-family="Verdana" font-size="12" fill="black">SVG Content Here</text>
        </g>
      </svg>`;
        const image = btoa(unescape(encodeURIComponent(svgData)));
        return <img src={`data:image/svg+xml;base64,${image}`} />;
    }
}

export function getPreviewCss() {
    return require("./ui/SvgRender.css");
}
