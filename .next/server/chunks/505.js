exports.id = 505;
exports.ids = [505];
exports.modules = {

/***/ 564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
;// CONCATENATED MODULE: ./src/components/Preloader.js

const Preloader = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        id: "preloader",
        className: "preloaded",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "line"
        })
    });
};
/* harmony default export */ const components_Preloader = (Preloader);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/Switcher.js



const colors = [
    {
        id: 1,
        name: "yellow"
    },
    {
        id: 2,
        name: "green"
    },
    {
        id: 3,
        name: "red"
    },
    {
        id: 4,
        name: "blue"
    },
    {
        id: 5,
        name: "orange"
    },
    {
        id: 6,
        name: "yellowgreen"
    },
    {
        id: 7,
        name: "pink"
    },
    {
        id: 8,
        name: "goldenrod"
    }
];
const Switcher = ()=>{
    const [color, setColor] = (0,external_react_.useState)("yellow");
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("link", {
                    rel: "stylesheet",
                    href: `css/skins/${color}.css`
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "switcher",
                className: toggle ? "open" : "close",
                style: {
                    display: "block"
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "content-switcher",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                            children: "COLOR SWITCHER"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("ul", {
                            children: colors.map((color)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                        href: "#",
                                        title: color.name,
                                        className: "color",
                                        onClick: ()=>setColor(color.name),
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: `assets/styleswitcher/${color.name}.png`,
                                            alt: color.name
                                        })
                                    })
                                }, color.id))
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            id: "hideSwitcher",
                            onClick: ()=>setToggle(false),
                            children: "\xd7"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                id: "showSwitcher",
                className: `styleSecondColor ${toggle ? "close" : "open"}`,
                onClick: ()=>setToggle(true),
                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                    className: "fa fa-cog"
                })
            })
        ]
    });
};
/* harmony default export */ const components_Switcher = (Switcher);

;// CONCATENATED MODULE: ./src/SalimovHead.js


const SalimovHead = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("title", {
                children: "Vaishnav - Personal Portfolio"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: ""
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                href: "https://fonts.googleapis.com/css2?family=Livvic:wght@100;200;300;400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "shortcut icon",
                href: "assets/fundalogo.png",
                type: "image/x-icon"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "stylesheet",
                href: "css/devicon.min.css"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "stylesheet",
                href: "css/all.min.css"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "stylesheet",
                href: "css/bootstrap.min.css"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "stylesheet",
                href: "css/swiper-bundle.min.css"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "stylesheet",
                href: "css/animate.min.css"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "stylesheet",
                href: "css/jquery.mCustomScrollbar.min.css"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "stylesheet",
                href: "css/style.css"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "stylesheet",
                href: "css/skins/yellow.css"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "stylesheet",
                href: "css/styleswitcher.css"
            })
        ]
    });
};
/* harmony default export */ const src_SalimovHead = (SalimovHead);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: ./pages/_app.js






const App = ({ Component, pageProps })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(src_SalimovHead, {}),
            /*#__PURE__*/ jsx_runtime.jsx(components_Switcher, {}),
            /*#__PURE__*/ jsx_runtime.jsx(components_Preloader, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 88:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ })

};
;