"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var grommet_1 = require("grommet");
var utils_1 = require("grommet/utils");
var portfolio_theme_1 = require("./portfolio-theme");
var grommet_icons_1 = require("grommet-icons");
var styled_components_1 = require("styled-components");
var grommet_icons_2 = require("grommet-icons");
require("./index.css");
var StyledAnchor = styled_components_1["default"](grommet_1.Anchor)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: 200;\n"], ["\n  font-weight: 200;\n"])));
var theme = utils_1.deepMerge(grommet_1.grommet, portfolio_theme_1.portfolio_theme);
// const theme = {
//   global: {
//     colors: {
//       brand: '#272727',
//       brand2: '#2B50AA',
//       brand3: '#FF9FE5',
//       brand4: '#FFD4D4',
//       brand5: '#FF858D',
//     },
//     font: {
//       family: 'Inconsolata',
//       size: '14px',
//       height: '20px',
//     },
//   },
// };
var SideBarContent = function () { return (react_1["default"].createElement("div", null, "Some content")); };
var DoubleFooter = function () { return (react_1["default"].createElement(grommet_1.Grommet, { theme: grommet_1.grommet },
    react_1["default"].createElement(grommet_1.Main, { background: "light-4", elevation: "large", pad: "large", border: true },
        react_1["default"].createElement(grommet_1.Text, { margin: "small", size: "xsmall" }, "Main Content"),
        react_1["default"].createElement(grommet_1.Box, { flex: true })))); };
var Distribution_ex = function () { return (react_1["default"].createElement(grommet_1.Distribution, { values: [
        { value: 50, color: 'light-3', id: "test" },
        { value: 30, color: 'brand', src: "//v2.grommet.io/assets/IMG_4245.jpg" },
        { value: 20, color: 'graph-0', src: "//v2.grommet.io/assets/IMG_4245.jpg" },
        { value: 10, color: 'light-3', src: "//v2.grommet.io/assets/IMG_4245.jpg" },
        { value: 5, color: 'brand', src: "//v2.grommet.io/assets/IMG_4245.jpg" },
    ] }, function (value) { return (react_1["default"].createElement(grommet_1.Box, { pad: "small", background: value.color, fill: true },
    react_1["default"].createElement("h1", null, " value.src "),
    react_1["default"].createElement(grommet_1.Image, { src: "//v2.grommet.io/assets/IMG_4245.jpg", fit: "cover" }))); })); };
var BraggingRights = function () { return (react_1["default"].createElement("div", { id: "testing", style: { margin: '2.5%' } },
    react_1["default"].createElement("h2", null, " Bragging Rights "),
    react_1["default"].createElement("h3", null, " Programming Languages: "),
    react_1["default"].createElement("ul", null,
        react_1["default"].createElement("li", null, " Python (Machine Learning Libraries): Expert"),
        react_1["default"].createElement("li", null, " Python (Web): Proficient "),
        react_1["default"].createElement("li", null, " Javascript (Native): Proficient "),
        react_1["default"].createElement("li", null, " Javascript (React): Proficient "),
        react_1["default"].createElement("li", null, " C (Native): Experienced "),
        react_1["default"].createElement("li", null, " C (CUDA GPU) : Experienced "),
        react_1["default"].createElement("li", null, " C++ : Experienced  "),
        react_1["default"].createElement("li", null, " z/OS + PLX (IBM Mainframe) : Experienced ")),
    react_1["default"].createElement("h3", null, " Actual Languages "),
    react_1["default"].createElement("ul", null,
        react_1["default"].createElement("li", null, " Polish:   Fluent  "),
        react_1["default"].createElement("li", null, " English:  Fluent (Second Language) "),
        react_1["default"].createElement("li", null, " Russian:  Novice   ")))); };
var HeaderView = function () { return (react_1["default"].createElement(grommet_1.Grommet, null,
    react_1["default"].createElement(grommet_1.Header, { background: "light-4", pad: "medium", height: "xsmall" },
        react_1["default"].createElement(grommet_1.Heading, { level: "3" }, "damian bemben"),
        react_1["default"].createElement(grommet_1.ResponsiveContext.Consumer, null, function (size) {
            return size === 'small' ? (react_1["default"].createElement(grommet_1.Box, { justify: "end" },
                react_1["default"].createElement(grommet_1.Menu, { a11yTitle: "Navigation Menu", dropProps: { align: { top: 'bottom', right: 'right' } }, justifyContent: "center", icon: react_1["default"].createElement(grommet_icons_1.Menu, { color: "brand" }), items: [
                        {
                            icon: react_1["default"].createElement(grommet_icons_2.Twitter, null),
                            href: 'https://twitter.com/dambem',
                            label: "twitter"
                        },
                        {
                            icon: react_1["default"].createElement(grommet_icons_2.Github, null),
                            href: 'https://github.com/dambem',
                            label: "github"
                        },
                        {
                            icon: react_1["default"].createElement(grommet_icons_2.Linkedin, null),
                            href: 'https://www.linkedin.com/in/bemben/',
                            label: "linkedin"
                        },
                    ] }))) : (react_1["default"].createElement(grommet_1.Box, { justify: "end", direction: "row", gap: "medium" },
                react_1["default"].createElement(grommet_1.Anchor, { href: "https://twitter.com/dambem", icon: react_1["default"].createElement(grommet_icons_2.Twitter, null) }),
                react_1["default"].createElement(grommet_1.Anchor, { href: "https://github.com/dambem", icon: react_1["default"].createElement(grommet_icons_2.Github, null) }),
                react_1["default"].createElement(grommet_1.Anchor, { href: "https://www.linkedin.com/in/bemben/", icon: react_1["default"].createElement(grommet_icons_2.Linkedin, null) })));
        })))); };
var FooterView = function () { return (react_1["default"].createElement(grommet_1.Footer, { background: "dark-2", pad: { horizontal: 'large', vertical: 'small' } },
    react_1["default"].createElement(grommet_1.Box, { direction: "row", gap: "small" },
        react_1["default"].createElement(grommet_1.Text, { alignSelf: "center" }, "damian bemben")),
    react_1["default"].createElement(grommet_1.Text, { textAlign: "center", size: "small" }, "\u00A9 2021 Copyright (just kidding, this stuff is free to use)"))); };
var MainApplication = function () {
    var myRef = react_1.useRef(null);
    var executeScroll = function () {
        if (myRef.current) {
            myRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    var _a = react_1["default"].useState(false), darkMode = _a[0], setDarkMode = _a[1];
    var _b = react_1["default"].useState(false), showSidebar = _b[0], setState = _b[1];
    return (react_1["default"].createElement(grommet_1.Grommet, { full: true, theme: theme, themeMode: darkMode ? "dark" : "light" },
        react_1["default"].createElement(grommet_1.ResponsiveContext.Consumer, null, function (size) { return (react_1["default"].createElement(grommet_1.Box, { fill: true },
            react_1["default"].createElement(grommet_1.Box, { direction: 'row', flex: true },
                react_1["default"].createElement(grommet_1.Box, { flex: true, alignContent: "stretch" },
                    react_1["default"].createElement(grommet_1.Stack, { anchor: "center" },
                        react_1["default"].createElement(Distribution_ex, null),
                        react_1["default"].createElement(grommet_1.Box, { background: 'light-2', id: "welcome_badge", align: 'center', justify: 'center' },
                            react_1["default"].createElement(grommet_1.Heading, { level: "3" }, "welcome to my portfolio"),
                            react_1["default"].createElement(grommet_1.Button, { icon: react_1["default"].createElement(grommet_icons_1.Notification, null), onClick: function () { return setState(!showSidebar); }, id: 'rotator', label: "skills" }),
                            react_1["default"].createElement("br", null),
                            react_1["default"].createElement(grommet_1.Button, { icon: react_1["default"].createElement(grommet_icons_2.CaretDown, null), onClick: executeScroll, id: 'rotator', label: "examples" }))),
                    react_1["default"].createElement(grommet_1.Box, { flex: true, align: 'center' },
                        react_1["default"].createElement("h1", { ref: myRef }),
                        react_1["default"].createElement(BraggingRights, null),
                        react_1["default"].createElement(BraggingRights, null))),
                (!showSidebar || size !== 'small') ? (react_1["default"].createElement(grommet_1.Collapsible, { direction: "horizontal", open: showSidebar },
                    react_1["default"].createElement(grommet_1.Box, { flex: true, width: 'medium', background: 'light-2', elevation: 'small', align: 'center', justify: 'center' },
                        react_1["default"].createElement(BraggingRights, null)))) : (react_1["default"].createElement(grommet_1.Layer, null,
                    react_1["default"].createElement(grommet_1.Box, { background: 'light-2', tag: 'header', justify: 'end', align: 'center', direction: 'row' },
                        react_1["default"].createElement(grommet_1.Button, { icon: react_1["default"].createElement(grommet_icons_1.FormClose, null), onClick: function () { return setState(false); } })),
                    react_1["default"].createElement(grommet_1.Box, { fill: true, background: 'light-2', align: 'center', justify: 'center' }, "sidebar")))))); })));
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (react_1["default"].createElement(grommet_1.Grommet, { full: true, theme: theme },
            react_1["default"].createElement(HeaderView, null),
            react_1["default"].createElement(MainApplication, null),
            react_1["default"].createElement(FooterView, null)));
    };
    return App;
}(react_1.Component));
exports["default"] = App;
var templateObject_1;
