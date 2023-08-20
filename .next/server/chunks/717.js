exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 4606:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 3375:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4638));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5289));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7935));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1871));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4463));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1577));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5693));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 110));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 572));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9708, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3871))

/***/ }),

/***/ 7935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BreadCrumbs_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5628);
/* harmony import */ var _BreadCrumbs_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_BreadCrumbs_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9367);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const BreadCrumbs = ({ className })=>{
    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    let splitPathName = pathName.split("/");
    if (splitPathName.length > 1) {
        splitPathName.pop();
    }
    let count = 0;
    const hrefList = [];
    while(count < splitPathName.length){
        const href = [];
        for(let i = 0; i <= count; i++){
            href.push(splitPathName[i]);
        }
        hrefList.push(href.join("/"));
        count++;
    }
    function getName(href) {
        const hrefSplit = href.split("/");
        const nameLink = hrefSplit[hrefSplit.length - 1].split("-").join(" ");
        return nameLink;
    }
    const linkDataList = hrefList.map((href)=>{
        const nameHref = getName(href);
        return {
            href: href.length > 0 ? href : "/",
            name: nameHref.length > 0 ? nameHref.replace(nameHref[0], nameHref[0].toUpperCase()) : "Main"
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BreadCrumbs_module_css__WEBPACK_IMPORTED_MODULE_5___default().breadCrumbs), className),
                children: linkDataList.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: item.href,
                                className: (_BreadCrumbs_module_css__WEBPACK_IMPORTED_MODULE_5___default().text),
                                children: item.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_BreadCrumbs_module_css__WEBPACK_IMPORTED_MODULE_5___default().dash)
                            })
                        ]
                    }, item.href))
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BreadCrumbs);


/***/ }),

/***/ 572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2262);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const ContextRedux = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
        store: _store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextRedux);


/***/ }),

/***/ 5693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _Form_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Form_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2717);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6558);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1547);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const Form = ({ defaultState, inputFields })=>{
    const { register, control, formState: { errors }, reset, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__/* .useForm */ .cI)();
    const [isSendMessage, setIsSendMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const onSubmit = async (data)=>{
        try {
            setIsLoading(true);
            await (0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .sendMail */ .Yb)(data);
            setIsLoading(false);
            reset(defaultState);
            setIsSendMessage(true);
        } catch (e) {
            setIsLoading(false);
            if (e instanceof Error) {
                console.log(e.message);
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !isSendMessage ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit(onSubmit),
            className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_6___default().form),
            children: [
                inputFields.map((inputField)=>{
                    switch(inputField.tag){
                        case "input":
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .II, {
                                className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_6___default().form__item),
                                label: inputField.label,
                                type: inputField.type,
                                register: register,
                                errors: errors,
                                required: inputField.required
                            }, inputField.label);
                        case "textArea":
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .TextArea */ .Kx, {
                                className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_6___default().form__textArea),
                                label: inputField.label,
                                register: register,
                                errors: errors,
                                maxLength: 500,
                                control: control,
                                required: inputField.required
                            }, inputField.label);
                        default:
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .CustomButton */ .op, {
                    text: "Send message",
                    color: "blue",
                    type: "submit",
                    disabled: isLoading,
                    children: isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        src: "/icons/loading.svg",
                        alt: "loading icons",
                        width: 30,
                        height: 30,
                        className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_6___default().form__loader)
                    })
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: (_Form_module_css__WEBPACK_IMPORTED_MODULE_6___default().form__sendMessage),
                children: [
                    "Your message has been sent. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "We’ll get back to you as soon as possible."
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ }),

/***/ 5289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header_Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./components/Header/Header.module.css
var Header_module = __webpack_require__(5772);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(9367);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./helpers/index.ts
var helpers = __webpack_require__(1547);
// EXTERNAL MODULE: ./components/index.ts + 22 modules
var components = __webpack_require__(2717);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-scroll.mjs + 12 modules
var use_scroll = __webpack_require__(4997);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs
var use_motion_value_event = __webpack_require__(6619);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./hooks/index.ts


const useScrollPosition = ()=>{
    const { scrollY } = (0,use_scroll/* useScroll */.v)();
    const [scrollPosition, setScrollPosition] = (0,react_.useState)(0);
    (0,use_motion_value_event/* useMotionValueEvent */.W)(scrollY, "change", (latestValue)=>{
        setScrollPosition(latestValue);
    });
    return scrollPosition;
};

;// CONCATENATED MODULE: ./components/Header/Header.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const Header = ()=>{
    const headerLinkHref = [
        {
            name: "Platforms",
            href: "/platforms"
        },
        {
            name: "Blog",
            href: "/blog"
        },
        {
            name: "Add platform",
            href: "/add-platform"
        }
    ];
    const scrollPosition = useScrollPosition();
    const buttonVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 1
        },
        hover: {
            scale: 1.05
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (Header_module_default()).header,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Header_module_default()).header__content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/icons/logo.svg",
                            alt: "logo",
                            width: 181,
                            height: 24,
                            className: (Header_module_default()).header__logo
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components/* SearchButton */.QZ, {
                        variants: buttonVariants,
                        initial: false,
                        animate: scrollPosition > 80 ? "hidden" : "visible",
                        whileHover: "hover",
                        className: (Header_module_default()).header__searchButton,
                        color: "blue"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Header_module_default()).header__nav,
                        children: headerLinkHref.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: link.href,
                                className: classnames_default()((Header_module_default()).header__link, {
                                    [(Header_module_default()).active]: (0,helpers/* isActiveLink */.H_)(link.href)
                                }),
                                children: link.name
                            }, link.href))
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Header_Header = (Header);


/***/ }),

/***/ 1577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7478);
/* harmony import */ var _Input_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Input_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9367);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Input = ({ register, required = false, errors, label, placeholder, type, className })=>{
    const errorField = errors[label];
    const errorOptions = {
        required: {
            value: required,
            message: "Field is required"
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Input_module_css__WEBPACK_IMPORTED_MODULE_2___default().input__item), className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: (_Input_module_css__WEBPACK_IMPORTED_MODULE_2___default().input__label),
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ...register(label, errorOptions),
                placeholder: placeholder,
                type: type,
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Input_module_css__WEBPACK_IMPORTED_MODULE_2___default().input__input), {
                    [(_Input_module_css__WEBPACK_IMPORTED_MODULE_2___default().error__input)]: errorField
                })
            }),
            errorField && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_Input_module_css__WEBPACK_IMPORTED_MODULE_2___default().error),
                children: errorField.message?.toString()
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 3871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lucasmogari_react_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2371);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9367);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Pagination_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1171);
/* harmony import */ var _Pagination_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Pagination_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
// components/Pagination.tsx
// @ts-ignore






const Pagination = ({ page, itemCount, perPage })=>{
    // use the usePagination hook
    // getPageItem - function that returns the type of page based on the index.
    // size - the number of pages
    const { getPageItem, totalPages, currentPage } = (0,_lucasmogari_react_pagination__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        totalItems: itemCount,
        page: page,
        itemsPerPage: perPage,
        arrows: false,
        totalPages: Math.ceil(itemCount / perPage)
    });
    // const firstPage = 1;
    // calculate the next page
    // const nextPage = Math.min(page + 1, totalPages);
    // calculate the previous page
    // const prevPage = Math.max(page - 1, firstPage);
    // create a new array based on the total pages
    const arr = new Array(totalPages);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Pagination_module_css__WEBPACK_IMPORTED_MODULE_6___default().pagination),
        children: [
            ...arr
        ].map((_, i)=>{
            // getPageItem function returns the type of page based on the index.
            // it also automatically calculates if the page is disabled.
            const { page } = getPageItem(i);
            if (page === "gap") {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_Pagination_module_css__WEBPACK_IMPORTED_MODULE_6___default().dashed),
                    children: "..."
                }, `${page}-${i}`);
            }
            return page && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PaginationLink, {
                active: page === currentPage,
                page: page,
                children: page
            }, `${page} + ${i}`);
        })
    });
};
function PaginationLink({ page, children, ...props }) {
    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();
    // we use existing data from router query, we just modify the page.
    const q = {
        page
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        scroll: false,
        // only use the query for the url, it will only modify the query, won't modify the route.
        href: page === 1 ? pathName : {
            query: q
        },
        // toggle the appropriate classes based on active, disabled states.
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Pagination_module_css__WEBPACK_IMPORTED_MODULE_6___default().button), {
            "p-2": true,
            [(_Pagination_module_css__WEBPACK_IMPORTED_MODULE_6___default().active)]: props.active,
            [(_Pagination_module_css__WEBPACK_IMPORTED_MODULE_6___default().notActive)]: !props.active,
            [(_Pagination_module_css__WEBPACK_IMPORTED_MODULE_6___default().pointer)]: props.disabled
        }),
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.memo)(Pagination));


/***/ }),

/***/ 4463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PlatformCardTags_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9109);
/* harmony import */ var _PlatformCardTags_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PlatformCardTags_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2717);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9367);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const PlatformCardTags = ({ tags, title, className })=>{
    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [containerWidth, setContainerWidth] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const [parentWidth, setParentWidth] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const [renderElem, setRenderElem] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(2);
    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const tagRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (contentRef.current) {
            const containerWidth = contentRef.current.clientWidth;
            const parentWidth = contentRef.current.parentElement?.parentElement?.clientWidth;
            if (containerWidth > parentWidth - 60) {
                setContainerWidth(containerWidth);
                setParentWidth(parentWidth - 60);
                setRenderElem(1);
            }
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: contentRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PlatformCardTags_module_css__WEBPACK_IMPORTED_MODULE_4___default().tags), className, {
            [(_PlatformCardTags_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrap)]: isVisible
        }),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: (_PlatformCardTags_module_css__WEBPACK_IMPORTED_MODULE_4___default().tags__name),
                children: [
                    title,
                    ":"
                ]
            }),
            tags.map((item, index)=>{
                if (index < renderElem) {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Tag */ .Vp, {
                        ref: tagRef,
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
                            [(_PlatformCardTags_module_css__WEBPACK_IMPORTED_MODULE_4___default().hidden)]: !isVisible && containerWidth > parentWidth && index > renderElem
                        }),
                        title: item
                    }, item);
                } else {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Tag */ .Vp, {
                        ref: tagRef,
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
                            [(_PlatformCardTags_module_css__WEBPACK_IMPORTED_MODULE_4___default().hidden)]: !isVisible
                        }),
                        title: item
                    }, item);
                }
            }),
            (containerWidth > parentWidth || tags.length > 2) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_PlatformCardTags_module_css__WEBPACK_IMPORTED_MODULE_4___default().seeMore), {
                    [(_PlatformCardTags_module_css__WEBPACK_IMPORTED_MODULE_4___default().hidden)]: isVisible
                }),
                onClick: ()=>setIsVisible(true),
                children: "+ seeMore"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlatformCardTags);


/***/ }),

/***/ 1871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4925);
/* harmony import */ var _SearchButton_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SearchButton_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9367);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3487);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const SearchButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(({ color, className }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ref: ref,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_SearchButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().searchButton), className, {
            [(_SearchButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().white)]: color === "white",
            [(_SearchButton_module_css__WEBPACK_IMPORTED_MODULE_4___default().blue)]: color === "blue"
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: color === "white" ? "/icons/search-white.svg" : "/icons/search.svg",
            alt: "search button",
            width: 21,
            height: 21
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E)(SearchButton, {
    forwardMotionProps: true
}));


/***/ }),

/***/ 4638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SelectFilters_SelectFilters)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./components/SelectFilters/SelectFilters.module.css
var SelectFilters_module = __webpack_require__(2234);
var SelectFilters_module_default = /*#__PURE__*/__webpack_require__.n(SelectFilters_module);
// EXTERNAL MODULE: ./components/index.ts + 22 modules
var components = __webpack_require__(2717);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(9367);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
;// CONCATENATED MODULE: ./hooks/redux.ts

const useAppDispatch = lib.useDispatch;
const useAppSelector = lib.useSelector;

// EXTERNAL MODULE: ./store/slices/filters.ts
var filters = __webpack_require__(2076);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
;// CONCATENATED MODULE: ./components/SelectFilters/SelectFilters.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








function processFilterArray(filterArray) {
    return filterArray.map((item)=>item.toLowerCase().replaceAll(" ", "-")).sort().join("+");
}
function generateFilterUrl(...filters) {
    const validFilters = filters.filter((filter)=>filter.length !== 0);
    if (validFilters.length === 0) {
        return "/platforms/";
    }
    return `/platforms/${validFilters.join("/")}/`;
}
const SelectFilters = ({ className, resetButton })=>{
    const params = (0,navigation.useParams)();
    const dispatch = useAppDispatch();
    const [expanded, setExpanded] = (0,react_.useState)(false);
    const clientFilters = useAppSelector((state)=>state.filters.filtersFields);
    (0,react_.useEffect)(()=>{
        for(const key in params){
            dispatch((0,filters/* addTag */._U)(decodeURIComponent(params[key]).split("+")));
        }
    }, [
        dispatch
    ]);
    const toggleCheckboxValue = (0,react_.useCallback)((value)=>{
        dispatch((0,filters/* toggleCheckbox */.vO)(value));
    }, [
        dispatch
    ]);
    const resetHandler = ()=>{
        dispatch((0,filters/* resetFilters */.aw)());
    };
    const acceptFilterHandler = (0,react_.useCallback)((type)=>{
        dispatch((0,filters/* acceptSelectFilterType */.Z0)(type));
    }, [
        dispatch
    ]);
    const clearFilterHandler = (0,react_.useCallback)((type)=>{
        dispatch((0,filters/* clearSelectFilterType */.pd)(type));
    }, [
        dispatch
    ]);
    const removeTagHandler = (0,react_.useCallback)(({ type, value })=>{
        dispatch((0,filters/* removeFilter */.ku)({
            type,
            value
        }));
    }, [
        dispatch
    ]);
    const allFilters = useAppSelector((state)=>state.filters);
    const investmentTypePath = (0,react_.useMemo)(()=>processFilterArray(allFilters.investmentType.final), [
        allFilters.investmentType.final
    ]);
    const industryPath = (0,react_.useMemo)(()=>processFilterArray(allFilters.industry.final), [
        allFilters.industry.final
    ]);
    const countryPath = (0,react_.useMemo)(()=>processFilterArray(allFilters.country.final), [
        allFilters.country.final
    ]);
    const yearFoundedPath = (0,react_.useMemo)(()=>processFilterArray(allFilters.yearFounded.final), [
        allFilters.yearFounded.final
    ]);
    const licenseNumberPath = (0,react_.useMemo)(()=>processFilterArray(allFilters.licenseNumber.final), [
        allFilters.licenseNumber.final
    ]);
    const tagFiltersList = (0,react_.useMemo)(()=>[
            {
                title: "Investment type",
                options: allFilters.investmentType.final
            },
            {
                title: "Industry",
                options: allFilters.industry.final
            },
            {
                title: "Country",
                options: allFilters.country.final
            },
            {
                title: "Years on market",
                options: allFilters.yearFounded.final
            },
            {
                title: "ECSP license",
                options: allFilters.licenseNumber.final
            }
        ], [
        allFilters.investmentType.final,
        allFilters.industry.final,
        allFilters.country.final,
        allFilters.yearFounded.final,
        allFilters.licenseNumber.final
    ]);
    const url = (0,react_.useMemo)(()=>generateFilterUrl(investmentTypePath, industryPath, countryPath, yearFoundedPath, licenseNumberPath), [
        investmentTypePath,
        industryPath,
        countryPath,
        yearFoundedPath,
        licenseNumberPath
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (SelectFilters_module_default()).filters,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classnames_default()((SelectFilters_module_default()).filtersWrapper, className),
                children: [
                    clientFilters.map((filter, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components/* Filter */.wn, {
                            type: filter.type,
                            expanded: expanded,
                            setExpanded: setExpanded,
                            index: index,
                            options: filter.options,
                            placeholder: filter.placeholder,
                            toggleCheckboxValue: toggleCheckboxValue,
                            acceptFilters: acceptFilterHandler,
                            clearFilters: clearFilterHandler
                        }, filter.placeholder)),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: url,
                        scroll: false,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components/* CustomButton */.op, {
                            className: (SelectFilters_module_default()).filters__button,
                            color: "blue",
                            text: "View"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (SelectFilters_module_default()).filters__tag_wrapper,
                children: tagFiltersList.map(({ title, options })=>options.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(components/* TagFilters */.aT, {
                        removeFilter: removeTagHandler,
                        title: title,
                        options: options
                    }, title))
            }),
            resetButton && /*#__PURE__*/ jsx_runtime_.jsx(components/* CustomButton */.op, {
                onClick: resetHandler,
                className: (SelectFilters_module_default()).filters__resetButton,
                color: "white",
                text: "Reset filters"
            })
        ]
    });
};
/* harmony default export */ const SelectFilters_SelectFilters = (SelectFilters);


/***/ }),

/***/ 110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextArea_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3757);
/* harmony import */ var _TextArea_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TextArea_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9367);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6558);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const TextArea = ({ register, control, errors, maxLength, required = false, label, placeholder, className })=>{
    const fieldValue = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__/* .useWatch */ .qo)({
        control,
        name: label
    });
    const errorField = errors[label];
    const errorOption = {
        required: {
            value: required,
            message: "Field is required"
        },
        maxLength: {
            value: maxLength,
            message: `No more than ${maxLength} characters`
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_TextArea_module_css__WEBPACK_IMPORTED_MODULE_3___default().textArea), className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: (_TextArea_module_css__WEBPACK_IMPORTED_MODULE_3___default().textArea__label),
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                placeholder: placeholder,
                ...register(label, errorOption),
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_TextArea_module_css__WEBPACK_IMPORTED_MODULE_3___default().textArea__input), {
                    [(_TextArea_module_css__WEBPACK_IMPORTED_MODULE_3___default().error__input)]: errorField
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: (_TextArea_module_css__WEBPACK_IMPORTED_MODULE_3___default().textArea__number),
                children: [
                    fieldValue?.length ?? "0",
                    "/",
                    maxLength
                ]
            }),
            errorField && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: (_TextArea_module_css__WEBPACK_IMPORTED_MODULE_3___default().error),
                children: errorField.message?.toString()
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);


/***/ }),

/***/ 2717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  XZ: () => (/* reexport */ Checkbox_Checkbox),
  op: () => (/* reexport */ components_CustomButton_CustomButton),
  wn: () => (/* reexport */ Filter_Filter),
  II: () => (/* reexport */ Input["default"]),
  QZ: () => (/* reexport */ SearchButton_SearchButton["default"]),
  Vp: () => (/* reexport */ components_Tag_Tag),
  D3: () => (/* reexport */ TagFilter_TagFilter),
  aT: () => (/* reexport */ TagFilters_TagFilters),
  Kx: () => (/* reexport */ TextArea["default"])
});

// UNUSED EXPORTS: BlogCard, BreadCrumbs, ContextRedux, CountryList, CrowdfundingCard, CustomList, Date, Footer, Form, HTag, Header, HeaderMainPage, ListingPlatforms, MainPageLayout, PTag, PageLayout, PlatformCard, PlatformCardTags, ReviewCard, SelectFilters, SocialIcon

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
;// CONCATENATED MODULE: ./components/Footer/Footer.tsx




const Footer_Footer = ()=>{
    return /*#__PURE__*/ _jsx("footer", {
        className: styles.footer,
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: styles.footer__content,
                    children: [
                        /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: /*#__PURE__*/ _jsx(Image, {
                                src: "/icons/logo.svg",
                                alt: "logo",
                                width: 162,
                                height: 21,
                                className: styles.footer__logo
                            })
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: styles.footer__nav,
                            children: [
                                /*#__PURE__*/ _jsx(Link, {
                                    className: styles.footer__link,
                                    href: "/contacts",
                                    children: "Contacts"
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    className: styles.footer__link,
                                    href: "/about-us",
                                    children: "About Us"
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    className: styles.footer__link,
                                    href: "/blog",
                                    children: "Blog"
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    className: styles.footer__link,
                                    href: "/platforms",
                                    children: "Platform"
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    className: styles.footer__link,
                                    href: "/privacy",
                                    children: "Privacy"
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    className: styles.footer__link,
                                    href: "/terms",
                                    children: "Terms"
                                }),
                                /*#__PURE__*/ _jsx(Link, {
                                    className: styles.footer__link,
                                    href: "/cookies",
                                    children: "Cookies"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: styles.footer__dash
                }),
                /*#__PURE__*/ _jsxs("p", {
                    className: styles.footer__copyright,
                    children: [
                        "\xa9 CrowdPlace ",
                        new Date().getFullYear()
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer_Footer = ((/* unused pure expression or super */ null && (Footer_Footer)));

;// CONCATENATED MODULE: ./components/HeaderMainPage/HeaderMainPage.tsx




const HeaderMainPage_HeaderMainPage = ()=>{
    return /*#__PURE__*/ _jsx("header", {
        className: styles.header,
        children: /*#__PURE__*/ _jsx("div", {
            className: "container",
            children: /*#__PURE__*/ _jsxs("div", {
                className: styles.header__content,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.searchBar,
                        children: /*#__PURE__*/ _jsx(SearchButton, {
                            color: "white"
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.navMenu,
                        children: [
                            /*#__PURE__*/ _jsx(Link, {
                                className: styles.header__link,
                                href: "/platforms",
                                children: "Platforms"
                            }),
                            /*#__PURE__*/ _jsx(Link, {
                                className: styles.header__link,
                                href: "/blog",
                                children: "Blog"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_HeaderMainPage_HeaderMainPage = ((/* unused pure expression or super */ null && (HeaderMainPage_HeaderMainPage)));

;// CONCATENATED MODULE: ./components/SocialIcon/SocialIcon.tsx



const SocialIcon = ({ iconPath })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: styles.social,
        children: /*#__PURE__*/ _jsx(Image, {
            src: iconPath,
            alt: "social icon",
            width: 21,
            height: 21
        })
    });
};
/* harmony default export */ const SocialIcon_SocialIcon = ((/* unused pure expression or super */ null && (SocialIcon)));

;// CONCATENATED MODULE: ./components/CrowdfundingCard/CrowdfundingCard.tsx



const CrowdfundingCard = ({ title, iconPath, value })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.card,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: styles.card__container,
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        src: iconPath,
                        alt: "card icon",
                        width: 62,
                        height: 62
                    }),
                    value && Array.isArray(value) ? value.map((item)=>/*#__PURE__*/ _jsx("span", {
                            className: styles.card__text,
                            children: item
                        }, item)) : /*#__PURE__*/ _jsx("span", {
                        className: styles.card__text,
                        children: value
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("h3", {
                className: styles.card__title,
                children: title
            })
        ]
    });
};
/* harmony default export */ const CrowdfundingCard_CrowdfundingCard = ((/* unused pure expression or super */ null && (CrowdfundingCard)));

// EXTERNAL MODULE: ./components/CustomButton/CustomButton.module.css
var CustomButton_module = __webpack_require__(44);
var CustomButton_module_default = /*#__PURE__*/__webpack_require__.n(CustomButton_module);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(9367);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./components/CustomButton/CustomButton.tsx




const CustomButton_CustomButton = /*#__PURE__*/ (0,react_.memo)(({ text, color, className, type, children, disabled, onClick })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: onClick,
        disabled: disabled,
        type: type,
        className: classnames_default()((CustomButton_module_default()).button, className, {
            [(CustomButton_module_default()).white]: color === "white",
            [(CustomButton_module_default()).blue]: color === "blue",
            [(CustomButton_module_default()).transparent]: color === "transparent"
        }),
        children: children ? children : text
    });
});
/* harmony default export */ const components_CustomButton_CustomButton = (CustomButton_CustomButton);

// EXTERNAL MODULE: ./components/Tag/Tag.module.css
var Tag_module = __webpack_require__(5520);
var Tag_module_default = /*#__PURE__*/__webpack_require__.n(Tag_module);
;// CONCATENATED MODULE: ./components/Tag/Tag.tsx




const Tag_Tag = /*#__PURE__*/ (0,react_.forwardRef)(({ title, className }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        ref: ref,
        className: classnames_default()((Tag_module_default()).tag, className),
        children: title
    });
});
/* harmony default export */ const components_Tag_Tag = (Tag_Tag);

;// CONCATENATED MODULE: ./components/PTag/PTag.tsx



const PTag_PTag = ({ fontSize, children, className })=>{
    return /*#__PURE__*/ _jsx("p", {
        className: cn(styles.pTag, className, {
            [styles.font20]: fontSize === "20px",
            [styles.font17]: fontSize === "17px"
        }),
        children: children
    });
};
/* harmony default export */ const components_PTag_PTag = ((/* unused pure expression or super */ null && (PTag_PTag)));

;// CONCATENATED MODULE: ./components/HTag/HTag.tsx



const HTag_HTag = ({ tag, children, className })=>{
    switch(tag){
        case "h1":
            return /*#__PURE__*/ _jsx("h1", {
                className: cn(styles.hTag, className, styles.h1),
                children: children
            });
        case "h2":
            return /*#__PURE__*/ _jsx("h2", {
                className: cn(styles.hTag, className, styles.h2),
                children: children
            });
        case "h3":
            return /*#__PURE__*/ _jsx("h3", {
                className: cn(styles.hTag, className, styles.h3),
                children: children
            });
        case "h4":
            return /*#__PURE__*/ _jsx("h4", {
                className: cn(styles.hTag, className, styles.h4),
                children: children
            });
        case "h5":
            return /*#__PURE__*/ _jsx("h5", {
                className: cn(styles.hTag, className, styles.h5),
                children: children
            });
        case "h6":
            return /*#__PURE__*/ _jsx("h6", {
                className: cn(styles.hTag, className, styles.h6),
                children: children
            });
        default:
            return /*#__PURE__*/ _jsx(_Fragment, {});
    }
};
/* harmony default export */ const components_HTag_HTag = ((/* unused pure expression or super */ null && (HTag_HTag)));

;// CONCATENATED MODULE: ./components/BlogCard/BlogCard.tsx




const BlogCard = ({ title, tag, text, pathImage, date })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.card,
        children: [
            /*#__PURE__*/ _jsx(Image, {
                className: styles.card__image,
                src: pathImage,
                alt: "blog card image",
                width: 511,
                height: 215
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.card__content,
                children: [
                    /*#__PURE__*/ _jsx(HTag, {
                        className: styles.card__title,
                        tag: "h3",
                        children: title
                    }),
                    /*#__PURE__*/ _jsx(PTag, {
                        className: styles.card__text,
                        fontSize: "20px",
                        children: text
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.card__footer,
                        children: [
                            /*#__PURE__*/ _jsx(Tag, {
                                title: tag
                            }),
                            /*#__PURE__*/ _jsx(Date, {
                                date: date
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const BlogCard_BlogCard = ((/* unused pure expression or super */ null && (BlogCard)));

;// CONCATENATED MODULE: ./components/Date/Date.tsx


const Date_Date = ({ date })=>{
    return /*#__PURE__*/ _jsx("span", {
        className: styles.date,
        children: date
    });
};
/* harmony default export */ const components_Date_Date = ((/* unused pure expression or super */ null && (Date_Date)));

// EXTERNAL MODULE: ./components/Filter/Filter.module.css
var Filter_module = __webpack_require__(517);
var Filter_module_default = /*#__PURE__*/__webpack_require__.n(Filter_module);
;// CONCATENATED MODULE: ./components/Filter/Filter.tsx






const Filter = /*#__PURE__*/ (0,react_.memo)(({ options, placeholder, clearFilters, acceptFilters, expanded, toggleCheckboxValue, type, setExpanded, index })=>{
    const isOpen = expanded === index;
    const acceptHandler = ()=>{
        acceptFilters(type);
        setExpanded(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Filter_module_default()).filter,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: (Filter_module_default()).filterActive,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: placeholder
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: (Filter_module_default()).filter__button,
                        onClick: ()=>setExpanded(isOpen ? false : index),
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/icons/triangle-arrow.svg",
                            alt: "toggle arrow",
                            width: 14,
                            height: 7,
                            className: classnames_default()({
                                [(Filter_module_default()).arrowUp]: isOpen,
                                [(Filter_module_default()).arrowDown]: !isOpen
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classnames_default()((Filter_module_default()).filterList, {
                    [(Filter_module_default()).active]: isOpen
                }),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (Filter_module_default()).filterList__checkboxes,
                        children: options.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(Checkbox_Checkbox, {
                                toggleCheckboxValue: toggleCheckboxValue,
                                type: type,
                                value: option.title,
                                title: option.title,
                                checked: option.checked
                            }, option.title))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Filter_module_default()).filterList__buttons,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: classnames_default()((Filter_module_default()).filterList__button, (Filter_module_default()).filterList__button_clear),
                                onClick: ()=>clearFilters(type),
                                children: "Clear"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: classnames_default()((Filter_module_default()).filterList__button, (Filter_module_default()).filterList__button_add),
                                onClick: acceptHandler,
                                children: "Add"
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const Filter_Filter = (Filter);

// EXTERNAL MODULE: ./components/SelectFilters/SelectFilters.tsx + 1 modules
var SelectFilters = __webpack_require__(4638);
;// CONCATENATED MODULE: ./consts/index.ts
const CrowdfundingCardValues = [
    {
        title: "P2P lending platforms",
        iconPath: "/icons/people.svg"
    },
    {
        title: "Equity crowdfunding platforms",
        iconPath: "/icons/money.svg"
    },
    {
        title: "Property crowdfunding platforms",
        iconPath: "/icons/home.svg"
    },
    {
        title: "Startup crowdfunding platforms",
        iconPath: "/icons/rocket.svg"
    },
    {
        title: "Personal loans crowdfunding platforms",
        iconPath: "/icons/coins.svg"
    },
    {
        title: "Green energy crowdfunding platforms",
        iconPath: "/icons/leaf.svg"
    },
    {
        title: "Crowdfunding platform for education",
        iconPath: "/icons/book.svg"
    },
    {
        title: "Debt crowdfunding platform",
        iconPath: "/icons/hand-coins.svg"
    }
];
const SelectFiltersValues = [
    {
        options: [
            "Equity",
            "Debt",
            "P2P lending",
            "Reward",
            "Donation",
            "Buy-to-let",
            "Mini-bonds"
        ],
        placeholder: "Select investment type"
    },
    {
        options: [
            "Real estate",
            "Startups",
            "SME",
            "Sustainability",
            "Litigation",
            "Green energy",
            "Health & Science",
            "Logistics",
            "Personal loans",
            "Art",
            "Mortgages",
            "Social cause",
            "Education",
            "Farming",
            "Sport",
            "Maritime"
        ],
        placeholder: "Select industry"
    },
    {
        options: [
            "Andorra",
            "Albania",
            "Austria",
            "Belgium",
            "Bulgaria",
            "Croatia",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Estonia",
            "Finland",
            "France",
            "Germany",
            "Greece",
            "Hungary",
            "Iceland",
            "Ireland",
            "Israel",
            "Italy",
            "Latvia",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macedonia",
            "Malta",
            "Moldova",
            "Monaco",
            "Netherlands",
            "Norway",
            "Poland",
            "Portugal",
            "Romania",
            "Turkey",
            "Serbia",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Sweden",
            "Switzerland",
            "United Kingdom",
            "Ukraine"
        ],
        placeholder: "Select country of operation"
    },
    {
        options: [
            "1 year",
            "2-3 years",
            "4-5 years",
            "more than 5"
        ],
        placeholder: "Years on market"
    },
    {
        options: [
            "Yes"
        ],
        placeholder: "ECSP license"
    }
];
const BlogCardsValues = [
    {
        pathImage: "/img/blog_card_1.png",
        title: "Making a difference: the power and potential of impact investing1",
        text: "Impact investing is one of the emerging yet steady trends in the crowdfunding sector. It’s becoming increasingly widespread for investors to be interested not only in the possible returns but the collateral social or environmental impact. In other words people want their investment choices to be aligned with their values.",
        tag: "Investing",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_2.png",
        title: "P2P mortgage loans: unlocking opportunities in the accommodation market",
        text: "The demand for accommodation and prices are growing, so many people worldwide opt for mortgage loans. Getting a mortgage loan from a bank is a long and demanding procedure that’s why peer-to-peer lending alternatives is increasing in popularity.",
        tag: "P2P lending",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_3.png",
        title: "Most common equity crowdfunding mistakes: unveiling the pitfalls",
        text: "Crowdfunding, particularly equity crowdfunding, has already shown that it’s a viable alternative for startups and early-stage businesses to raise funding. As straightforward as it may seem, there are quite a few intricacies that, when overlooked, can damage your campaign.",
        tag: "Crowdfunding business",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_1.png",
        title: "Making a difference: the power and potential of impact investing2",
        text: "Impact investing is one of the emerging yet steady trends in the crowdfunding sector. It’s becoming increasingly widespread for investors to be interested not only in the possible returns but the collateral social or environmental impact. In other words people want their investment choices to be aligned with their values.",
        tag: "Investing",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_2.png",
        title: "P2P mortgage loans: unlocking opportunities in the accommodation market",
        text: "The demand for accommodation and prices are growing, so many people worldwide opt for mortgage loans. Getting a mortgage loan from a bank is a long and demanding procedure that’s why peer-to-peer lending alternatives is increasing in popularity.",
        tag: "P2P lending",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_3.png",
        title: "Most common equity crowdfunding mistakes: unveiling the pitfalls",
        text: "Crowdfunding, particularly equity crowdfunding, has already shown that it’s a viable alternative for startups and early-stage businesses to raise funding. As straightforward as it may seem, there are quite a few intricacies that, when overlooked, can damage your campaign.",
        tag: "Crowdfunding business",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_1.png",
        title: "Making a difference: the power and potential of impact investing3",
        text: "Impact investing is one of the emerging yet steady trends in the crowdfunding sector. It’s becoming increasingly widespread for investors to be interested not only in the possible returns but the collateral social or environmental impact. In other words people want their investment choices to be aligned with their values.",
        tag: "Investing",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_2.png",
        title: "P2P mortgage loans: unlocking opportunities in the accommodation market",
        text: "The demand for accommodation and prices are growing, so many people worldwide opt for mortgage loans. Getting a mortgage loan from a bank is a long and demanding procedure that’s why peer-to-peer lending alternatives is increasing in popularity.",
        tag: "P2P lending",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_3.png",
        title: "Most common equity crowdfunding mistakes: unveiling the pitfalls",
        text: "Crowdfunding, particularly equity crowdfunding, has already shown that it’s a viable alternative for startups and early-stage businesses to raise funding. As straightforward as it may seem, there are quite a few intricacies that, when overlooked, can damage your campaign.",
        tag: "Crowdfunding business",
        date: "June 12, 2023"
    }
];
const consts_CountryListValue = [
    {
        country: "Austria",
        pathFlag: "/flags/Austria.svg"
    },
    {
        country: "Belgium",
        pathFlag: "/flags/Belgium.svg"
    },
    {
        country: "Croatia",
        pathFlag: "/flags/Croatia.svg"
    },
    {
        country: "Cyprus",
        pathFlag: "/flags/Cyprus.svg"
    },
    {
        country: "Czech Republic",
        pathFlag: "/flags/Czech_Republic.svg"
    },
    {
        country: "Denmark",
        pathFlag: "/flags/Denmark.svg"
    },
    {
        country: "Estonia",
        pathFlag: "/flags/Estonia.svg"
    },
    {
        country: "Finland",
        pathFlag: "/flags/Finland.svg"
    },
    {
        country: "France",
        pathFlag: "/flags/France.svg"
    },
    {
        country: "Germany",
        pathFlag: "/flags/Germany.svg"
    },
    {
        country: "Greece",
        pathFlag: "/flags/Greece.svg"
    },
    {
        country: "Ireland",
        pathFlag: "/flags/Ireland.svg"
    },
    {
        country: "Italy",
        pathFlag: "/flags/Italy.svg"
    },
    {
        country: "Latvia",
        pathFlag: "/flags/Latvia.svg"
    },
    {
        country: "Lithuania",
        pathFlag: "/flags/Lithuania.svg"
    },
    {
        country: "Luxembourg",
        pathFlag: "/flags/Luxembourg.svg"
    },
    {
        country: "Malta",
        pathFlag: "/flags/Malta.svg"
    },
    {
        country: "Netherlands",
        pathFlag: "/flags/Netherlands.svg"
    },
    {
        country: "Norway",
        pathFlag: "/flags/Norway.svg"
    },
    {
        country: "Poland",
        pathFlag: "/flags/Poland.svg"
    },
    {
        country: "Portugal",
        pathFlag: "/flags/Portugal.svg"
    },
    {
        country: "Romania",
        pathFlag: "/flags/Romania.svg"
    },
    {
        country: "Slovakia",
        pathFlag: "/flags/Slovakia.svg"
    },
    {
        country: "Spain",
        pathFlag: "/flags/Spain.svg"
    },
    {
        country: "Sweden",
        pathFlag: "/flags/Sweden.svg"
    },
    {
        country: "Switzerland",
        pathFlag: "/flags/Switzerland.svg"
    },
    {
        country: "Ukraine",
        pathFlag: "/flags/Ukraine.svg"
    },
    {
        country: "United Kingdom",
        pathFlag: "/flags/United_Kingdom.svg"
    }
] // const investmentTypeSlugs = ['buy-to-let', 'debt', 'donation', 'equity', 'mini-bonds', 'p2p-lending', 'reward'];
 // const industrySlugs = ['real-estate', 'startups', 'sme', 'sustainability', 'litigation', 'green-energy', 'health-science', 'logistics', 'personal-loans', 'art', 'mortgages', 'social-cause', 'education', 'farming', 'sport', 'maritime'];
 // const countrySlugs = ['andorra', 'albania', 'austria', 'belgium', 'bulgaria', 'croatia', 'cyprus', 'czech-republic', 'denmark', 'estonia', 'finland', 'france', 'germany', 'greece', 'hungary', 'iceland', 'ireland', 'israel', 'italy', 'latvia', 'liechtenstein', 'lithuania', 'luxembourg', 'macedonia', 'malta', 'moldova', 'monaco', 'netherlands', 'norway', 'poland', 'portugal', 'romania', 'turkey', 'serbia', 'slovakia', 'slovenia', 'spain', 'sweden', 'switzerland', 'united-kingdom', 'ukraine'];
 // const yearFoundedSlugs = ['1-year', '2-3-years', '4-5-years', 'more-than-5'];
 // const licenseNumberSlugs = ['yes'];
 // export const industryCombinationPaths = generateCombinations(industrySlugs).slice(1);
 // export const countryCombinationPaths = generateCombinations(countrySlugs).slice(1);
 // export const yearFoundedCombinationPaths = generateCombinations(yearFoundedSlugs).slice(1);
 // export const licenseNumberCombinationPaths = generateCombinations(licenseNumberSlugs).slice(1);
;

;// CONCATENATED MODULE: ./components/CountryList/CountryList.tsx





const CountryList = ()=>{
    return /*#__PURE__*/ _jsx("section", {
        className: styles.countryList,
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _jsx(HTag, {
                    className: styles.countryList__title,
                    tag: "h2",
                    children: "Crowdfunding platforms by country"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: styles.countryList__list,
                    children: CountryListValue.map((countryValue)=>/*#__PURE__*/ _jsxs("div", {
                            className: styles.countryList__item,
                            children: [
                                /*#__PURE__*/ _jsx(Image, {
                                    src: countryValue.pathFlag,
                                    alt: "lag icon",
                                    width: 26,
                                    height: 21,
                                    className: styles.countryList__flag
                                }),
                                /*#__PURE__*/ _jsx("span", {
                                    className: styles.countryList__name,
                                    children: countryValue.country
                                })
                            ]
                        }, countryValue.country))
                }),
                /*#__PURE__*/ _jsx(CustomButton, {
                    color: "white",
                    text: "See all"
                })
            ]
        })
    });
};
/* harmony default export */ const CountryList_CountryList = ((/* unused pure expression or super */ null && (CountryList)));

;// CONCATENATED MODULE: ./components/MainPageLayout/MainPageLayout.tsx


const MainPageLayout = ({ children })=>{
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(HeaderMainPage, {}),
            /*#__PURE__*/ _jsx("main", {
                children: children
            }),
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const MainPageLayout_MainPageLayout = ((/* unused pure expression or super */ null && (MainPageLayout)));

// EXTERNAL MODULE: ./components/Header/Header.tsx + 1 modules
var Header_Header = __webpack_require__(5289);
;// CONCATENATED MODULE: ./components/PageLayout/PageLayout.tsx


const PageLayout = ({ children })=>{
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Header, {}),
            /*#__PURE__*/ _jsx("main", {
                children: children
            }),
            /*#__PURE__*/ _jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const PageLayout_PageLayout = ((/* unused pure expression or super */ null && (PageLayout)));

// EXTERNAL MODULE: ./components/BreadCrumbs/BreadCrumbs.tsx
var BreadCrumbs = __webpack_require__(7935);
// EXTERNAL MODULE: ./components/SearchButton/SearchButton.tsx
var SearchButton_SearchButton = __webpack_require__(1871);
;// CONCATENATED MODULE: ./components/ReviewCard/ReviewCard.tsx





const ReviewCard = ({ title, href, pathImg })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.review__item,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: styles.review__item_content,
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        src: pathImg,
                        alt: `${title} logo`,
                        width: 55,
                        height: 55,
                        className: styles.review__item_img
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: styles.review__item_text,
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Link, {
                href: href,
                children: /*#__PURE__*/ _jsx(CustomButton, {
                    text: "Website",
                    color: "white",
                    className: styles.review__item_button
                })
            })
        ]
    });
};
/* harmony default export */ const ReviewCard_ReviewCard = ((/* unused pure expression or super */ null && (ReviewCard)));

;// CONCATENATED MODULE: ./components/PlatformCard/PlatformCard.tsx





const PlatformCard_PlatformCard = ({ pathLogo, title, countries, description, industry, type, href })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.card,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: styles.card__header,
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        className: styles.card__image,
                        src: pathLogo,
                        alt: "logo platform",
                        width: 56,
                        height: 56
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.card__title,
                        children: [
                            /*#__PURE__*/ _jsx(HTag, {
                                tag: "h4",
                                children: title
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                className: styles.card__countryList,
                                children: countries.map((country, index)=>{
                                    const lastIndex = countries.length - 1;
                                    return /*#__PURE__*/ _jsx("span", {
                                        className: styles.card__country,
                                        children: index === lastIndex ? country.trim() : `${country.trim()}, `
                                    }, country);
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(PTag, {
                fontSize: "17px",
                className: styles.card__description,
                children: description
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.card__tags,
                children: [
                    /*#__PURE__*/ _jsx(PlatformCardTags, {
                        tags: industry,
                        title: "Industry"
                    }),
                    /*#__PURE__*/ _jsx(PlatformCardTags, {
                        tags: type,
                        title: "Type"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(Link, {
                href: href,
                children: /*#__PURE__*/ _jsx(CustomButton, {
                    className: styles.card__button,
                    text: "View profile",
                    color: "white"
                })
            })
        ]
    });
};
/* harmony default export */ const components_PlatformCard_PlatformCard = ((/* unused pure expression or super */ null && (PlatformCard_PlatformCard)));

// EXTERNAL MODULE: ./components/PlatformCardTags/PlatformCardTags.tsx
var PlatformCardTags_PlatformCardTags = __webpack_require__(4463);
;// CONCATENATED MODULE: ./components/CustomList/CustomList.tsx




const CustomList = ({ title, as, children, className })=>{
    switch(as){
        case "ul":
            return /*#__PURE__*/ _jsxs("div", {
                className: cn(styles.list__container, className),
                children: [
                    title && /*#__PURE__*/ _jsx(HTag, {
                        className: styles.list__title,
                        tag: "h6",
                        children: title
                    }),
                    /*#__PURE__*/ _jsx("ul", {
                        className: styles.ulList,
                        children: children
                    })
                ]
            });
        case "ol":
            return /*#__PURE__*/ _jsxs("div", {
                className: cn(styles.list__container, className),
                children: [
                    title && /*#__PURE__*/ _jsx(HTag, {
                        className: styles.list__title,
                        tag: "h6",
                        children: title
                    }),
                    /*#__PURE__*/ _jsx("ol", {
                        className: styles.olList,
                        children: children
                    })
                ]
            });
    }
};
/* harmony default export */ const CustomList_CustomList = ((/* unused pure expression or super */ null && (CustomList)));

// EXTERNAL MODULE: ./components/Form/Form.tsx
var Form = __webpack_require__(5693);
// EXTERNAL MODULE: ./components/Input/Input.tsx
var Input = __webpack_require__(1577);
// EXTERNAL MODULE: ./components/TextArea/TextArea.tsx
var TextArea = __webpack_require__(110);
// EXTERNAL MODULE: ./components/Checkbox/Checkbox.module.css
var Checkbox_module = __webpack_require__(8697);
var Checkbox_module_default = /*#__PURE__*/__webpack_require__.n(Checkbox_module);
;// CONCATENATED MODULE: ./components/Checkbox/Checkbox.tsx



const Checkbox = /*#__PURE__*/ (0,react_.memo)(({ value, toggleCheckboxValue, checked, type, title })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
        className: (Checkbox_module_default()).checkbox,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: (Checkbox_module_default()).checkbox__input,
                type: "checkbox",
                checked: checked,
                value: value,
                onChange: ()=>toggleCheckboxValue({
                        type,
                        value
                    })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Checkbox_module_default()).checkbox__checkmark
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Checkbox_module_default()).checkbox__title,
                children: title
            })
        ]
    });
});
/* harmony default export */ const Checkbox_Checkbox = (Checkbox);

// EXTERNAL MODULE: ./components/ContextRedux/ContextRedux.tsx
var ContextRedux = __webpack_require__(572);
// EXTERNAL MODULE: ./components/TagFilters/TagFilters.module.css
var TagFilters_module = __webpack_require__(3639);
var TagFilters_module_default = /*#__PURE__*/__webpack_require__.n(TagFilters_module);
;// CONCATENATED MODULE: ./components/TagFilters/TagFilters.tsx




const TagFilters = /*#__PURE__*/ (0,react_.memo)(({ removeFilter, title, options })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (TagFilters_module_default()).filters__tags,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: (TagFilters_module_default()).filters__tag_title,
                children: [
                    title,
                    ":"
                ]
            }),
            options.map((option)=>/*#__PURE__*/ jsx_runtime_.jsx(TagFilter_TagFilter, {
                    removeFilter: removeFilter,
                    type: title,
                    value: option
                }, option))
        ]
    });
});
/* harmony default export */ const TagFilters_TagFilters = (TagFilters);

// EXTERNAL MODULE: ./components/TagFilter/TagFilter.module.css
var TagFilter_module = __webpack_require__(9943);
var TagFilter_module_default = /*#__PURE__*/__webpack_require__.n(TagFilter_module);
;// CONCATENATED MODULE: ./components/TagFilter/TagFilter.tsx



const TagFilter = /*#__PURE__*/ (0,react_.memo)(({ removeFilter, type, value })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        className: (TagFilter_module_default()).filters__tag,
        children: [
            value,
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                onClick: ()=>removeFilter({
                        type,
                        value
                    }),
                className: (TagFilter_module_default()).filters__tag_delete,
                children: "+"
            })
        ]
    });
});
/* harmony default export */ const TagFilter_TagFilter = (TagFilter);

// EXTERNAL MODULE: ./components/Pagination/Pagination.tsx
var Pagination_Pagination = __webpack_require__(3871);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./helpers/index.ts
var helpers = __webpack_require__(1547);
;// CONCATENATED MODULE: ./components/ListingPlatforms/ListingPlatforms.tsx






const ListingPlatforms = async ({ params, searchParams })=>{
    const perPage = 12;
    let currentPage = 1;
    if (Number(searchParams.page) >= 1) {
        currentPage = Number(searchParams.page);
    }
    const paramsPath = Object.values(params).map((value)=>decodeURIComponent(value)).join("/");
    if (searchParams.page === "1") {
        redirect(`/platforms/${paramsPath}/`);
    }
    const { count: totalCount, rows: platforms } = await getType(params, currentPage, perPage);
    return /*#__PURE__*/ _jsx("section", {
        className: styles.reviews,
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container",
            children: [
                /*#__PURE__*/ _jsx(HTag, {
                    className: styles.reviews__title,
                    tag: "h2",
                    children: "Reviews"
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: styles.reviews__list,
                    children: platforms.map((platform)=>/*#__PURE__*/ _jsx(PlatformCard, {
                            pathLogo: platform.logo,
                            title: platform.name,
                            countries: platform.country,
                            description: platform.description,
                            type: platform.investmentType,
                            industry: platform.industry,
                            href: `/platform/${platform.name.split(" ").join("").toLowerCase()}`
                        }, platform.name))
                }),
                /*#__PURE__*/ _jsx(Pagination, {
                    itemCount: totalCount,
                    page: currentPage,
                    perPage: perPage
                })
            ]
        })
    });
};
/* harmony default export */ const ListingPlatforms_ListingPlatforms = ((/* unused pure expression or super */ null && (ListingPlatforms)));

;// CONCATENATED MODULE: ./components/index.ts

































/***/ }),

/***/ 1547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H_: () => (/* binding */ isActiveLink),
/* harmony export */   Yb: () => (/* binding */ sendMail)
/* harmony export */ });
/* unused harmony exports extractValuesByKeyArray, createFilterObject, searchTypeFilter, generateQueryParams, convertToObjectValue, getType, getMetadataValues */
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2262);


function extractValuesByKeyArray(obj, keysArray) {
    const result = [];
    for(let i = 0; i < keysArray.length; i++){
        const key = keysArray[i];
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
    }
    return result;
}
function createFilterObject(obj, keysArray) {
    const filteredObject = {};
    keysArray.forEach((key)=>{
        if (obj.hasOwnProperty(key)) {
            filteredObject[key] = obj[key];
        }
    });
    return filteredObject;
}
function searchTypeFilter(arrayParams) {
    let filterType = "";
    arrayParams.forEach((value)=>{
        store.getState().filters.filtersFields.forEach((filter, index)=>{
            filter.options.forEach((option)=>{
                if (option.slug.includes(value)) {
                    filterType = store.getState().filters.filtersFields[index].type;
                }
            });
        });
    });
    return filterType;
}
function generateQueryParams(object) {
    return Object.entries(object).filter(([_, value])=>value !== undefined).map(([key, value])=>`${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
}
// export function searchTypeFilters(arrayParams: string[]) {
//     let filterType: string[] = [];
//
//     arrayParams.forEach((value) => {
//         store.getState().filters.filtersFields.forEach((filter, index) => {
//             filter.options.forEach((option) => {
//                 if (option.slug.includes(value)) {
//                     const type = store.getState().filters.filtersFields[index].type;
//                     if (!filterType.includes(type)) {
//                         filterType.push();
//                     }
//                 }
//             })
//         })
//     })
//
//     return filterType;
// }
function convertToObjectValue(arrayValue) {
    const filterType = searchTypeFilter(arrayValue);
    const filtersOption = store.getState().filters.filtersFields.find((type)=>type.type === filterType);
    if (filtersOption) {
        const slugTitleObject = filtersOption.options.reduce((acc, item)=>{
            acc[item.slug] = item.title;
            return acc;
        }, {});
        return createFilterObject(slugTitleObject, arrayValue);
    }
}
function isActiveLink(href) {
    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname)();
    return pathName === href;
}
async function sendMail(data) {
    const response = await fetch(`http://1864875-cn27374.twc1.net:3001/api/send-mail`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    });
    if (response.status === 400) {
        const errorMessage = await response.json();
        throw new Error(errorMessage);
    }
    return await response.json();
}
// Filter params validation
// function filterParamsValidation(params: Record<FilterType, string>) {
//     const filters = store.getState().filters.filtersFields;
//
//     for (const key in params) {
//         const filterIndex = filters.findIndex((filter) => filter.type === key);
//         let count = 0;
//         filters[filterIndex].options.forEach((option) => {
//             if (decodeURIComponent(params[key] as string).split('+').includes(option.slug)) {
//                 count++;
//             }
//         });
//         if (count !==  decodeURIComponent(params[key] as string).split('+').length) {
//             redirect('/platforms/')
//         }
//     }
// }
async function getType(params, page, perPage) {
    const paramsValues = Object.values(params).map((param)=>decodeURIComponent(param).split("+"));
    const investObjects = paramsValues.map(convertToObjectValue);
    const filters = paramsValues.map(searchTypeFilter);
    const queryParams = investObjects.map((object)=>{
        if (object) {
            return generateQueryParams(object);
        }
    }).join("&and&");
    const allFilters = filters.join("-");
    const res = await fetch(`${process.env.SERVER}/api/select-platforms?${queryParams}&page=${page}&perPage=${perPage}&typeFilter=${allFilters}`);
    return await res.json();
}
function getMetadataValues(params) {
    const paramsValues = Object.values(params).map((param)=>decodeURIComponent(param).split("+"));
    const valueObjects = paramsValues.map(convertToObjectValue);
    const sortedValues = valueObjects.map((obj)=>{
        if (obj) {
            return Object.values(obj).sort().join(" ");
        }
    });
    const allValue = sortedValues.join("+");
    const allPath = Object.values(params).map((value)=>decodeURIComponent(value)).join("/");
    return {
        title: `${allValue} | Crowd Place`,
        description: `${allValue} | Crowd Place`,
        alternates: {
            canonical: `${process.env.DOMAIN}/platform/${allPath}/`
        }
    };
}


/***/ }),

/***/ 2262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ store)
});

// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(1388);
// EXTERNAL MODULE: ./store/slices/filters.ts
var filters = __webpack_require__(2076);
;// CONCATENATED MODULE: ./store/slices/platforms.ts

const initialState = {
    count: 0,
    rows: [
        {
            name: "",
            slug: "",
            industry: [
                ""
            ],
            investmentType: [
                ""
            ],
            autoInvest: false,
            signupBonus: false,
            secondaryMarket: false,
            publicStatistics: false,
            reviews: "",
            country: [
                ""
            ],
            buybackGuarantee: false,
            licenseNumber: "",
            languages: [
                ""
            ],
            logo: "",
            advertisedReturn: "",
            averageLoanDuration: "",
            description: "",
            investors: "",
            website: "",
            minimumInvestment: "",
            regulated: false,
            yearFounded: "",
            paymentOptions: [
                ""
            ],
            totalFundingVolume: "",
            whoCanInvest: ""
        }
    ]
};
const PlatformsSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "platforms",
    initialState,
    reducers: {
        setPlatforms: (state, action)=>{
            state.count = action.payload.count;
            state.rows = action.payload.rows;
        }
    }
});
const { setPlatforms } = PlatformsSlice.actions;
/* harmony default export */ const platforms = (PlatformsSlice.reducer);

;// CONCATENATED MODULE: ./store/index.ts



const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        filters: filters/* default */.ZP,
        platforms: platforms
    }
});


/***/ }),

/***/ 2076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z0: () => (/* binding */ acceptSelectFilterType),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   _U: () => (/* binding */ addTag),
/* harmony export */   aw: () => (/* binding */ resetFilters),
/* harmony export */   ku: () => (/* binding */ removeFilter),
/* harmony export */   pd: () => (/* binding */ clearSelectFilterType),
/* harmony export */   vO: () => (/* binding */ toggleCheckbox)
/* harmony export */ });
/* unused harmony exports addMiddleFilter, addServerState, addServerOptions */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    filtersFields: [
        {
            options: [
                {
                    title: "Equity",
                    checked: false,
                    slug: "equity"
                },
                {
                    title: "Debt",
                    checked: false,
                    slug: "debt"
                },
                {
                    title: "P2P lending",
                    checked: false,
                    slug: "p2p-lending"
                },
                {
                    title: "Reward",
                    checked: false,
                    slug: "reward"
                },
                {
                    title: "Donation",
                    checked: false,
                    slug: "donation"
                },
                {
                    title: "Buy-to-let",
                    checked: false,
                    slug: "buy-to-let"
                },
                {
                    title: "Mini-bonds",
                    checked: false,
                    slug: "mini-bonds"
                }
            ],
            placeholder: "Select investment type",
            type: "investmentType"
        },
        {
            options: [
                {
                    title: "Real estate",
                    checked: false,
                    slug: "real-estate"
                },
                {
                    title: "Startups",
                    checked: false,
                    slug: "startups"
                },
                {
                    title: "SME",
                    checked: false,
                    slug: "sme"
                },
                {
                    title: "Sustainability",
                    checked: false,
                    slug: "sustainability"
                },
                {
                    title: "Litigation",
                    checked: false,
                    slug: "litigation"
                },
                {
                    title: "Green energy",
                    checked: false,
                    slug: "green-energy"
                },
                {
                    title: "Health & Science",
                    checked: false,
                    slug: "health-science"
                },
                {
                    title: "Logistics",
                    checked: false,
                    slug: "logistics"
                },
                {
                    title: "Personal loans",
                    checked: false,
                    slug: "personal-loans"
                },
                {
                    title: "Art",
                    checked: false,
                    slug: "art"
                },
                {
                    title: "Mortgages",
                    checked: false,
                    slug: "mortgages"
                },
                {
                    title: "Social cause",
                    checked: false,
                    slug: "social-cause"
                },
                {
                    title: "Education",
                    checked: false,
                    slug: "education"
                },
                {
                    title: "Farming",
                    checked: false,
                    slug: "farming"
                },
                {
                    title: "Sport",
                    checked: false,
                    slug: "sport"
                },
                {
                    title: "Maritime",
                    checked: false,
                    slug: "maritime"
                }
            ],
            placeholder: "Select industry",
            type: "industry"
        },
        {
            options: [
                {
                    title: "Andorra",
                    checked: false,
                    slug: "andorra"
                },
                {
                    title: "Albania",
                    checked: false,
                    slug: "albania"
                },
                {
                    title: "Austria",
                    checked: false,
                    slug: "austria"
                },
                {
                    title: "Belgium",
                    checked: false,
                    slug: "belgium"
                },
                {
                    title: "Bulgaria",
                    checked: false,
                    slug: "bulgaria"
                },
                {
                    title: "Croatia",
                    checked: false,
                    slug: "croatia"
                },
                {
                    title: "Cyprus",
                    checked: false,
                    slug: "cyprus"
                },
                {
                    title: "Czech Republic",
                    checked: false,
                    slug: "czech-republic"
                },
                {
                    title: "Denmark",
                    checked: false,
                    slug: "denmark"
                },
                {
                    title: "Estonia",
                    checked: false,
                    slug: "estonia"
                },
                {
                    title: "Finland",
                    checked: false,
                    slug: "finland"
                },
                {
                    title: "France",
                    checked: false,
                    slug: "france"
                },
                {
                    title: "Germany",
                    checked: false,
                    slug: "germany"
                },
                {
                    title: "Greece",
                    checked: false,
                    slug: "greece"
                },
                {
                    title: "Hungary",
                    checked: false,
                    slug: "hungary"
                },
                {
                    title: "Iceland",
                    checked: false,
                    slug: "iceland"
                },
                {
                    title: "Ireland",
                    checked: false,
                    slug: "ireland"
                },
                {
                    title: "Israel",
                    checked: false,
                    slug: "israel"
                },
                {
                    title: "Italy",
                    checked: false,
                    slug: "italy"
                },
                {
                    title: "Latvia",
                    checked: false,
                    slug: "latvia"
                },
                {
                    title: "Liechtenstein",
                    checked: false,
                    slug: "liechtenstein"
                },
                {
                    title: "Lithuania",
                    checked: false,
                    slug: "lithuania"
                },
                {
                    title: "Luxembourg",
                    checked: false,
                    slug: "luxembourg"
                },
                {
                    title: "Macedonia",
                    checked: false,
                    slug: "macedonia"
                },
                {
                    title: "Malta",
                    checked: false,
                    slug: "malta"
                },
                {
                    title: "Moldova",
                    checked: false,
                    slug: "moldova"
                },
                {
                    title: "Monaco",
                    checked: false,
                    slug: "monaco"
                },
                {
                    title: "Netherlands",
                    checked: false,
                    slug: "netherlands"
                },
                {
                    title: "Norway",
                    checked: false,
                    slug: "norway"
                },
                {
                    title: "Poland",
                    checked: false,
                    slug: "poland"
                },
                {
                    title: "Portugal",
                    checked: false,
                    slug: "portugal"
                },
                {
                    title: "Romania",
                    checked: false,
                    slug: "romania"
                },
                {
                    title: "Turkey",
                    checked: false,
                    slug: "turkey"
                },
                {
                    title: "Serbia",
                    checked: false,
                    slug: "serbia"
                },
                {
                    title: "Slovakia",
                    checked: false,
                    slug: "slovakia"
                },
                {
                    title: "Slovenia",
                    checked: false,
                    slug: "slovenia"
                },
                {
                    title: "Spain",
                    checked: false,
                    slug: "spain"
                },
                {
                    title: "Sweden",
                    checked: false,
                    slug: "sweden"
                },
                {
                    title: "Switzerland",
                    checked: false,
                    slug: "switzerland"
                },
                {
                    title: "United Kingdom",
                    checked: false,
                    slug: "united-kingdom"
                },
                {
                    title: "Ukraine",
                    checked: false,
                    slug: "ukraine"
                }
            ],
            placeholder: "Select country of operation",
            type: "country"
        },
        {
            options: [
                {
                    title: "1 year",
                    checked: false,
                    slug: "1-year"
                },
                {
                    title: "2-3 years",
                    checked: false,
                    slug: "2-3-years"
                },
                {
                    title: "4-5 years",
                    checked: false,
                    slug: "4-5-years"
                },
                {
                    title: "more than 5",
                    checked: false,
                    slug: "more-than-5"
                }
            ],
            placeholder: "Years on market",
            type: "yearFounded"
        },
        {
            options: [
                {
                    title: "Yes",
                    checked: false,
                    slug: "yes"
                }
            ],
            placeholder: "ECSP license",
            type: "licenseNumber"
        }
    ],
    investmentType: {
        final: [],
        middle: []
    },
    industry: {
        final: [],
        middle: []
    },
    country: {
        final: [],
        middle: []
    },
    yearFounded: {
        final: [],
        middle: []
    },
    licenseNumber: {
        final: [],
        middle: []
    }
};
const filtersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "filters",
    initialState,
    reducers: {
        toggleCheckbox: (state, action)=>{
            const findValue = state[action.payload.type].middle.find((value)=>value === action.payload.value);
            const currentFieldIndex = state.filtersFields.findIndex((field)=>field.type === action.payload.type);
            const currentOptionIndex = state.filtersFields[currentFieldIndex].options.findIndex((option)=>option.title === action.payload.value);
            if (!findValue) {
                state[action.payload.type].middle.push(action.payload.value);
                if (currentOptionIndex !== -1) {
                    state.filtersFields[currentFieldIndex].options[currentOptionIndex].checked = true;
                }
            }
            if (findValue) {
                state[action.payload.type].middle = state[action.payload.type].middle.filter((item)=>item !== findValue);
                if (currentOptionIndex !== -1) {
                    state.filtersFields[currentFieldIndex].options[currentOptionIndex].checked = false;
                }
            }
        },
        acceptSelectFilterType: (state, action)=>{
            state[action.payload].final = [
                ...state[action.payload].middle
            ];
        },
        addMiddleFilter: (state, action)=>{
            state[action.payload.type].middle = [
                ...action.payload.valueArray
            ];
        },
        clearSelectFilterType: (state, action)=>{
            state[action.payload].middle = [];
            const currentFilterIndex = state.filtersFields.findIndex((filter)=>filter.type === action.payload);
            if (currentFilterIndex !== -1) {
                state.filtersFields[currentFilterIndex].options = state.filtersFields[currentFilterIndex].options.map((item)=>({
                        ...item,
                        checked: false
                    }));
            }
        },
        addServerState: (state, action)=>{
            return {
                ...state,
                ...action.payload
            };
        },
        addServerOptions: (state, action)=>{
            const currentIndex = state.filtersFields.findIndex((field)=>field.type === action.payload.type);
            if (currentIndex !== -1) {
                state.filtersFields[currentIndex].options = [
                    ...action.payload.options
                ];
            }
        },
        addTag: (state, action)=>{
            const currentFilterIndex = state.filtersFields.findIndex((filter)=>{
                const isNull = filter.options.findIndex((option)=>option.slug === action.payload[0]);
                return isNull !== -1;
            });
            const currentType = state.filtersFields[currentFilterIndex].type;
            const updateFilter = state.filtersFields[currentFilterIndex].options.map((option)=>{
                if (action.payload.includes(option.slug)) {
                    return {
                        ...option,
                        checked: true
                    };
                } else {
                    return option;
                }
            });
            const optionsValues = updateFilter.filter((option)=>action.payload.includes(option.slug)).map((option)=>option.title);
            state.filtersFields[currentFilterIndex].options = updateFilter;
            state[currentType].middle = optionsValues;
            state[currentType].final = optionsValues;
        },
        removeFilter: (state, action)=>{
            switch(action.payload.type){
                case "Investment type":
                    {
                        const filterIndex = state.filtersFields.findIndex((options)=>options.type === "investmentType");
                        const currentOption = state.filtersFields[filterIndex].options.findIndex((option)=>option.title === action.payload.value);
                        state.filtersFields[filterIndex].options[currentOption].checked = false;
                        state.investmentType.middle = state.investmentType.middle.filter((value)=>value !== action.payload.value);
                        state.investmentType.final = state.investmentType.final.filter((value)=>value !== action.payload.value);
                        break;
                    }
                case "Industry":
                    {
                        const filterIndex = state.filtersFields.findIndex((options)=>options.type === "industry");
                        const currentOption = state.filtersFields[filterIndex].options.findIndex((option)=>option.title === action.payload.value);
                        state.filtersFields[filterIndex].options[currentOption].checked = false;
                        state.industry.middle = state.industry.middle.filter((value)=>value !== action.payload.value);
                        state.industry.final = state.industry.final.filter((value)=>value !== action.payload.value);
                        break;
                    }
                case "Country":
                    {
                        const filterIndex = state.filtersFields.findIndex((options)=>options.type === "country");
                        const currentOption = state.filtersFields[filterIndex].options.findIndex((option)=>option.title === action.payload.value);
                        state.filtersFields[filterIndex].options[currentOption].checked = false;
                        state.country.middle = state.country.middle.filter((value)=>value !== action.payload.value);
                        state.country.final = state.country.final.filter((value)=>value !== action.payload.value);
                        break;
                    }
                case "Years on market":
                    {
                        const filterIndex = state.filtersFields.findIndex((options)=>options.type === "yearFounded");
                        const currentOption = state.filtersFields[filterIndex].options.findIndex((option)=>option.title === action.payload.value);
                        state.filtersFields[filterIndex].options[currentOption].checked = false;
                        state.yearFounded.middle = state.yearFounded.middle.filter((value)=>value !== action.payload.value);
                        state.yearFounded.final = state.yearFounded.final.filter((value)=>value !== action.payload.value);
                        break;
                    }
                case "ECSP license":
                    {
                        const filterIndex = state.filtersFields.findIndex((options)=>options.type === "licenseNumber");
                        const currentOption = state.filtersFields[filterIndex].options.findIndex((option)=>option.title === action.payload.value);
                        state.filtersFields[filterIndex].options[currentOption].checked = false;
                        state.licenseNumber.middle = state.licenseNumber.middle.filter((value)=>value !== action.payload.value);
                        state.licenseNumber.final = state.licenseNumber.final.filter((value)=>value !== action.payload.value);
                        break;
                    }
            }
        },
        resetFilters: (state)=>{
            state.investmentType.middle = [];
            state.investmentType.final = [];
            state.industry.middle = [];
            state.industry.final = [];
            state.country.middle = [];
            state.country.final = [];
            state.yearFounded.middle = [];
            state.yearFounded.final = [];
            state.licenseNumber.middle = [];
            state.licenseNumber.final = [];
            state.filtersFields = state.filtersFields.map((filterField)=>{
                return {
                    ...filterField,
                    options: filterField.options.map((option)=>({
                            ...option,
                            checked: false
                        }))
                };
            });
        }
    }
});
const { acceptSelectFilterType, clearSelectFilterType, resetFilters, toggleCheckbox, addMiddleFilter, addServerState, addServerOptions, removeFilter, addTag } = filtersSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filtersSlice.reducer);


/***/ }),

/***/ 2887:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "BlogCard_card__WuB5K",
	"card__image": "BlogCard_card__image__HiqBf",
	"card__content": "BlogCard_card__content__osQCj",
	"card__footer": "BlogCard_card__footer__S7oWz",
	"card__title": "BlogCard_card__title__PKbxB",
	"card__text": "BlogCard_card__text__1Tzjr"
};


/***/ }),

/***/ 5628:
/***/ ((module) => {

// Exports
module.exports = {
	"breadCrumbs": "BreadCrumbs_breadCrumbs__311uN",
	"text": "BreadCrumbs_text__N_Ndy",
	"dash": "BreadCrumbs_dash__orImy"
};


/***/ }),

/***/ 8697:
/***/ ((module) => {

// Exports
module.exports = {
	"checkbox": "Checkbox_checkbox__C_iqO",
	"checkbox__input": "Checkbox_checkbox__input__pDel_",
	"checkbox__checkmark": "Checkbox_checkbox__checkmark__Slhjl"
};


/***/ }),

/***/ 1289:
/***/ ((module) => {

// Exports
module.exports = {
	"countryList": "CountryList_countryList__3jbJI",
	"countryList__title": "CountryList_countryList__title__xDgDL",
	"countryList__list": "CountryList_countryList__list__0A5so",
	"countryList__item": "CountryList_countryList__item___hXjq",
	"countryList__name": "CountryList_countryList__name__6vPh_"
};


/***/ }),

/***/ 3075:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "CrowdfundingCard_card__FGyZH",
	"card__title": "CrowdfundingCard_card__title__9OvDH",
	"card__container": "CrowdfundingCard_card__container__Ew42d",
	"card__text": "CrowdfundingCard_card__text__cH0oW"
};


/***/ }),

/***/ 8265:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "CustomButton_button__Icrl5",
	"white": "CustomButton_white__C1NHu",
	"transparent": "CustomButton_transparent__Vm7D4",
	"blue": "CustomButton_blue__MiNdM"
};


/***/ }),

/***/ 44:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "CustomButton_button__Icrl5",
	"white": "CustomButton_white__C1NHu",
	"transparent": "CustomButton_transparent__Vm7D4",
	"blue": "CustomButton_blue__MiNdM"
};


/***/ }),

/***/ 2294:
/***/ ((module) => {

// Exports
module.exports = {
	"list__container": "CustomList_list__container__pq__U",
	"list__title": "CustomList_list__title__Ejhz9",
	"ulList": "CustomList_ulList__cN_32",
	"olList": "CustomList_olList__j2xg7"
};


/***/ }),

/***/ 1419:
/***/ ((module) => {

// Exports
module.exports = {
	"date": "Date_date__HvZTP"
};


/***/ }),

/***/ 517:
/***/ ((module) => {

// Exports
module.exports = {
	"filter": "Filter_filter__9SuaG",
	"filterActive": "Filter_filterActive__kxavm",
	"filterList": "Filter_filterList__wWvpu",
	"filterList__checkboxes": "Filter_filterList__checkboxes__b5SYQ",
	"filter__button": "Filter_filter__button__YoMy6",
	"active": "Filter_active__RSg7m",
	"arrowUp": "Filter_arrowUp__qpnp5",
	"arrowDown": "Filter_arrowDown__N_gTE",
	"filterList__buttons": "Filter_filterList__buttons__9vmJu",
	"filterList__button": "Filter_filterList__button__ltbSB",
	"filterList__button_clear": "Filter_filterList__button_clear__Ys4kI",
	"filterList__button_add": "Filter_filterList__button_add__iR_vP"
};


/***/ }),

/***/ 8074:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Footer_footer__o4_Ec",
	"footer__content": "Footer_footer__content__bOcQD",
	"footer__socials": "Footer_footer__socials__WkDLt",
	"footer__link": "Footer_footer__link__kDSHh",
	"footer__nav": "Footer_footer__nav__uaMBh",
	"footer__dash": "Footer_footer__dash__UiC_G",
	"footer__copyright": "Footer_footer__copyright__hqwOk"
};


/***/ }),

/***/ 11:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "Form_form__zp_JH",
	"form__item": "Form_form__item__ARWR_",
	"form__textArea": "Form_form__textArea__L9Gex",
	"form__sendMessage": "Form_form__sendMessage__Yo_jr",
	"form__loader_container": "Form_form__loader_container__j1XGT"
};


/***/ }),

/***/ 9773:
/***/ ((module) => {

// Exports
module.exports = {
	"hTag": "HTag_hTag__EQvbm",
	"h1": "HTag_h1__dZ6Ot",
	"h2": "HTag_h2__P3qJg",
	"h3": "HTag_h3__bcSBD",
	"h4": "HTag_h4__p7K3B",
	"h6": "HTag_h6___Didc"
};


/***/ }),

/***/ 5485:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "HeaderMainPage_header__9Nvwl",
	"header__content": "HeaderMainPage_header__content__dotaF",
	"header__link": "HeaderMainPage_header__link__MKYLR",
	"navMenu": "HeaderMainPage_navMenu__swsJ6"
};


/***/ }),

/***/ 5772:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__pXml_",
	"header__content": "Header_header__content__SJIEr",
	"header__logo": "Header_header__logo__utK25",
	"header__nav": "Header_header__nav__H0Mpw",
	"header__link": "Header_header__link__6YhDe",
	"active": "Header_active__6WZ5_",
	"header__searchButton": "Header_header__searchButton__krWtC"
};


/***/ }),

/***/ 7478:
/***/ ((module) => {

// Exports
module.exports = {
	"input__label": "Input_input__label__1TQkC",
	"input__input": "Input_input__input__yKNaZ",
	"error__input": "Input_error__input__UV7MJ",
	"error": "Input_error__1LZTs"
};


/***/ }),

/***/ 4785:
/***/ ((module) => {

// Exports
module.exports = {
	"reviews": "ListingPlatforms_reviews__nv8tq",
	"reviews__title": "ListingPlatforms_reviews__title__v1l0y",
	"reviews__list": "ListingPlatforms_reviews__list__UDTaP"
};


/***/ }),

/***/ 6161:
/***/ ((module) => {

// Exports
module.exports = {
	"pTag": "PTag_pTag__BuZLd",
	"font20": "PTag_font20__v4mqI",
	"font17": "PTag_font17__Zyflx"
};


/***/ }),

/***/ 1171:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Pagination_button__ayjXr",
	"active": "Pagination_active__awQnD",
	"pagination": "Pagination_pagination__O7JWM",
	"dashed": "Pagination_dashed__4yFiW"
};


/***/ }),

/***/ 9109:
/***/ ((module) => {

// Exports
module.exports = {
	"tags": "PlatformCardTags_tags__xn6Gb",
	"wrap": "PlatformCardTags_wrap__ama3g",
	"tags__name": "PlatformCardTags_tags__name__XpCa4",
	"seeMore": "PlatformCardTags_seeMore__iBq70",
	"hidden": "PlatformCardTags_hidden__mbcLB"
};


/***/ }),

/***/ 4511:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "PlatformCard_card__iZYOj",
	"card__header": "PlatformCard_card__header__wdXsT",
	"card__image": "PlatformCard_card__image__1BUbV",
	"card__countryList": "PlatformCard_card__countryList__Pf2kt",
	"card__country": "PlatformCard_card__country__rStF7",
	"card__description": "PlatformCard_card__description__lpQbq",
	"card__button": "PlatformCard_card__button__AkmYJ",
	"card__tags": "PlatformCard_card__tags__2fa5_"
};


/***/ }),

/***/ 5898:
/***/ ((module) => {

// Exports
module.exports = {
	"review__item": "ReviewCard_review__item__wdeGf",
	"review__item_content": "ReviewCard_review__item_content__szXyj",
	"review__item_text": "ReviewCard_review__item_text__gs0dk",
	"review__item_button": "ReviewCard_review__item_button__1WGyR"
};


/***/ }),

/***/ 4925:
/***/ ((module) => {

// Exports
module.exports = {
	"searchButton": "SearchButton_searchButton__togoL",
	"white": "SearchButton_white__lMWJK",
	"blue": "SearchButton_blue__OZibe"
};


/***/ }),

/***/ 2234:
/***/ ((module) => {

// Exports
module.exports = {
	"filters": "SelectFilters_filters__bnOOy",
	"filtersWrapper": "SelectFilters_filtersWrapper__EZwSg",
	"filters__button": "SelectFilters_filters__button__0mChL",
	"filters__resetButton": "SelectFilters_filters__resetButton__2HlCA",
	"filters__tag_wrapper": "SelectFilters_filters__tag_wrapper__JB4Wj"
};


/***/ }),

/***/ 9943:
/***/ ((module) => {

// Exports
module.exports = {
	"filters__tags": "TagFilter_filters__tags__F4Exd",
	"filters__tag": "TagFilter_filters__tag__BzEsi",
	"filters__tag_delete": "TagFilter_filters__tag_delete__hptVy"
};


/***/ }),

/***/ 3639:
/***/ ((module) => {

// Exports
module.exports = {
	"filters__tags": "TagFilters_filters__tags__MuAu_",
	"filters__tag_title": "TagFilters_filters__tag_title__tlK_5"
};


/***/ }),

/***/ 4843:
/***/ ((module) => {

// Exports
module.exports = {
	"tag": "Tag_tag__9IK3Z"
};


/***/ }),

/***/ 5520:
/***/ ((module) => {

// Exports
module.exports = {
	"tag": "Tag_tag__9IK3Z"
};


/***/ }),

/***/ 3757:
/***/ ((module) => {

// Exports
module.exports = {
	"textArea__label": "TextArea_textArea__label__3JI1v",
	"textArea__input": "TextArea_textArea__input__zoxux",
	"textArea__number": "TextArea_textArea__number__1DqAW",
	"error__input": "TextArea_error__input__gf7Ms",
	"error": "TextArea_error__bHpif"
};


/***/ }),

/***/ 1921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7272);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8374);



const metadata = {
    title: "Crowd Place",
    description: "Crowd Place"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: "full-height",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .ContextRedux */ .HR, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 3543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\kuros\Desktop\crowd-place\components\Pagination\Pagination.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 8374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $h: () => (/* reexport */ BlogCard_BlogCard),
  bu: () => (/* reexport */ BreadCrumbs),
  HR: () => (/* reexport */ ContextRedux),
  TZ: () => (/* reexport */ CountryList_CountryList),
  Gn: () => (/* reexport */ CrowdfundingCard_CrowdfundingCard),
  op: () => (/* reexport */ CustomButton_CustomButton),
  SP: () => (/* reexport */ CustomList_CustomList),
  Ej: () => (/* reexport */ components_Date_Date),
  $_: () => (/* reexport */ Footer_Footer),
  l0: () => (/* reexport */ Form),
  _p: () => (/* reexport */ HTag_HTag),
  h4: () => (/* reexport */ Header),
  LD: () => (/* reexport */ HeaderMainPage_HeaderMainPage),
  mM: () => (/* reexport */ ListingPlatforms_ListingPlatforms),
  k8: () => (/* reexport */ MainPageLayout_MainPageLayout),
  oY: () => (/* reexport */ PTag_PTag),
  Xg: () => (/* reexport */ PageLayout_PageLayout),
  uO: () => (/* reexport */ PlatformCard_PlatformCard),
  VH: () => (/* reexport */ PlatformCardTags),
  Ak: () => (/* reexport */ ReviewCard_ReviewCard),
  QZ: () => (/* reexport */ SearchButton),
  qc: () => (/* reexport */ SelectFilters),
  Vp: () => (/* reexport */ Tag_Tag)
});

// UNUSED EXPORTS: Checkbox, Filter, Input, SocialIcon, TagFilter, TagFilters, TextArea

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./components/Footer/Footer.module.css
var Footer_module = __webpack_require__(8074);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Footer/Footer.tsx




const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (Footer_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).footer__content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/icons/logo.svg",
                                alt: "logo",
                                width: 162,
                                height: 21,
                                className: (Footer_module_default()).footer__logo
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Footer_module_default()).footer__nav,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: (Footer_module_default()).footer__link,
                                    href: "/contacts",
                                    children: "Contacts"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: (Footer_module_default()).footer__link,
                                    href: "/about-us",
                                    children: "About Us"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: (Footer_module_default()).footer__link,
                                    href: "/blog",
                                    children: "Blog"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: (Footer_module_default()).footer__link,
                                    href: "/platforms",
                                    children: "Platform"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: (Footer_module_default()).footer__link,
                                    href: "/privacy",
                                    children: "Privacy"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: (Footer_module_default()).footer__link,
                                    href: "/terms",
                                    children: "Terms"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: (Footer_module_default()).footer__link,
                                    href: "/cookies",
                                    children: "Cookies"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Footer_module_default()).footer__dash
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: (Footer_module_default()).footer__copyright,
                    children: [
                        "\xa9 CrowdPlace ",
                        new Date().getFullYear()
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

// EXTERNAL MODULE: ./components/HeaderMainPage/HeaderMainPage.module.css
var HeaderMainPage_module = __webpack_require__(5485);
var HeaderMainPage_module_default = /*#__PURE__*/__webpack_require__.n(HeaderMainPage_module);
;// CONCATENATED MODULE: ./components/HeaderMainPage/HeaderMainPage.tsx




const HeaderMainPage = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (HeaderMainPage_module_default()).header,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (HeaderMainPage_module_default()).header__content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (HeaderMainPage_module_default()).searchBar,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(SearchButton, {
                            color: "white"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (HeaderMainPage_module_default()).navMenu,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: (HeaderMainPage_module_default()).header__link,
                                href: "/platforms",
                                children: "Platforms"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: (HeaderMainPage_module_default()).header__link,
                                href: "/blog",
                                children: "Blog"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const HeaderMainPage_HeaderMainPage = (HeaderMainPage);

;// CONCATENATED MODULE: ./components/SocialIcon/SocialIcon.tsx



const SocialIcon = ({ iconPath })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: styles.social,
        children: /*#__PURE__*/ _jsx(Image, {
            src: iconPath,
            alt: "social icon",
            width: 21,
            height: 21
        })
    });
};
/* harmony default export */ const SocialIcon_SocialIcon = ((/* unused pure expression or super */ null && (SocialIcon)));

// EXTERNAL MODULE: ./components/CrowdfundingCard/CrowdfundingCard.module.css
var CrowdfundingCard_module = __webpack_require__(3075);
var CrowdfundingCard_module_default = /*#__PURE__*/__webpack_require__.n(CrowdfundingCard_module);
;// CONCATENATED MODULE: ./components/CrowdfundingCard/CrowdfundingCard.tsx



const CrowdfundingCard = ({ title, iconPath, value })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CrowdfundingCard_module_default()).card,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (CrowdfundingCard_module_default()).card__container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: iconPath,
                        alt: "card icon",
                        width: 62,
                        height: 62
                    }),
                    value && Array.isArray(value) ? value.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (CrowdfundingCard_module_default()).card__text,
                            children: item
                        }, item)) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (CrowdfundingCard_module_default()).card__text,
                        children: value
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: (CrowdfundingCard_module_default()).card__title,
                children: title
            })
        ]
    });
};
/* harmony default export */ const CrowdfundingCard_CrowdfundingCard = (CrowdfundingCard);

// EXTERNAL MODULE: ./components/CustomButton/CustomButton.module.css
var CustomButton_module = __webpack_require__(8265);
var CustomButton_module_default = /*#__PURE__*/__webpack_require__.n(CustomButton_module);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(8097);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
;// CONCATENATED MODULE: ./components/CustomButton/CustomButton.tsx




const CustomButton = /*#__PURE__*/ (0,react_shared_subset.memo)(({ text, color, className, type, children, disabled, onClick })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: onClick,
        disabled: disabled,
        type: type,
        className: classnames_default()((CustomButton_module_default()).button, className, {
            [(CustomButton_module_default()).white]: color === "white",
            [(CustomButton_module_default()).blue]: color === "blue",
            [(CustomButton_module_default()).transparent]: color === "transparent"
        }),
        children: children ? children : text
    });
});
/* harmony default export */ const CustomButton_CustomButton = (CustomButton);

// EXTERNAL MODULE: ./components/Tag/Tag.module.css
var Tag_module = __webpack_require__(4843);
var Tag_module_default = /*#__PURE__*/__webpack_require__.n(Tag_module);
;// CONCATENATED MODULE: ./components/Tag/Tag.tsx




const Tag = /*#__PURE__*/ (0,react_shared_subset.forwardRef)(({ title, className }, ref)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        ref: ref,
        className: classnames_default()((Tag_module_default()).tag, className),
        children: title
    });
});
/* harmony default export */ const Tag_Tag = (Tag);

// EXTERNAL MODULE: ./components/PTag/PTag.module.css
var PTag_module = __webpack_require__(6161);
var PTag_module_default = /*#__PURE__*/__webpack_require__.n(PTag_module);
;// CONCATENATED MODULE: ./components/PTag/PTag.tsx



const PTag = ({ fontSize, children, className })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: classnames_default()((PTag_module_default()).pTag, className, {
            [(PTag_module_default()).font20]: fontSize === "20px",
            [(PTag_module_default()).font17]: fontSize === "17px"
        }),
        children: children
    });
};
/* harmony default export */ const PTag_PTag = (PTag);

// EXTERNAL MODULE: ./components/HTag/HTag.module.css
var HTag_module = __webpack_require__(9773);
var HTag_module_default = /*#__PURE__*/__webpack_require__.n(HTag_module);
;// CONCATENATED MODULE: ./components/HTag/HTag.tsx



const HTag = ({ tag, children, className })=>{
    switch(tag){
        case "h1":
            return /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: classnames_default()((HTag_module_default()).hTag, className, (HTag_module_default()).h1),
                children: children
            });
        case "h2":
            return /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: classnames_default()((HTag_module_default()).hTag, className, (HTag_module_default()).h2),
                children: children
            });
        case "h3":
            return /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: classnames_default()((HTag_module_default()).hTag, className, (HTag_module_default()).h3),
                children: children
            });
        case "h4":
            return /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: classnames_default()((HTag_module_default()).hTag, className, (HTag_module_default()).h4),
                children: children
            });
        case "h5":
            return /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                className: classnames_default()((HTag_module_default()).hTag, className, (HTag_module_default()).h5),
                children: children
            });
        case "h6":
            return /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                className: classnames_default()((HTag_module_default()).hTag, className, (HTag_module_default()).h6),
                children: children
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    }
};
/* harmony default export */ const HTag_HTag = (HTag);

// EXTERNAL MODULE: ./components/BlogCard/BlogCard.module.css
var BlogCard_module = __webpack_require__(2887);
var BlogCard_module_default = /*#__PURE__*/__webpack_require__.n(BlogCard_module);
;// CONCATENATED MODULE: ./components/BlogCard/BlogCard.tsx




const BlogCard = ({ title, tag, text, pathImage, date })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (BlogCard_module_default()).card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                className: (BlogCard_module_default()).card__image,
                src: pathImage,
                alt: "blog card image",
                width: 511,
                height: 215
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (BlogCard_module_default()).card__content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(HTag_HTag, {
                        className: (BlogCard_module_default()).card__title,
                        tag: "h3",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PTag_PTag, {
                        className: (BlogCard_module_default()).card__text,
                        fontSize: "20px",
                        children: text
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (BlogCard_module_default()).card__footer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Tag_Tag, {
                                title: tag
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Date_Date, {
                                date: date
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const BlogCard_BlogCard = (BlogCard);

// EXTERNAL MODULE: ./components/Date/Date.module.css
var Date_module = __webpack_require__(1419);
var Date_module_default = /*#__PURE__*/__webpack_require__.n(Date_module);
;// CONCATENATED MODULE: ./components/Date/Date.tsx


const Date_Date = ({ date })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: (Date_module_default()).date,
        children: date
    });
};
/* harmony default export */ const components_Date_Date = (Date_Date);

;// CONCATENATED MODULE: ./components/Filter/Filter.tsx






const Filter = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(({ options, placeholder, clearFilters, acceptFilters, expanded, toggleCheckboxValue, type, setExpanded, index })=>{
    const isOpen = expanded === index;
    const acceptHandler = ()=>{
        acceptFilters(type);
        setExpanded(false);
    };
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.filter,
        children: [
            /*#__PURE__*/ _jsxs("label", {
                className: styles.filterActive,
                children: [
                    /*#__PURE__*/ _jsx("span", {
                        children: placeholder
                    }),
                    /*#__PURE__*/ _jsx("button", {
                        className: styles.filter__button,
                        onClick: ()=>setExpanded(isOpen ? false : index),
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: "/icons/triangle-arrow.svg",
                            alt: "toggle arrow",
                            width: 14,
                            height: 7,
                            className: cn({
                                [styles.arrowUp]: isOpen,
                                [styles.arrowDown]: !isOpen
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: cn(styles.filterList, {
                    [styles.active]: isOpen
                }),
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.filterList__checkboxes,
                        children: options.map((option)=>/*#__PURE__*/ _jsx(Checkbox, {
                                toggleCheckboxValue: toggleCheckboxValue,
                                type: type,
                                value: option.title,
                                title: option.title,
                                checked: option.checked
                            }, option.title))
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.filterList__buttons,
                        children: [
                            /*#__PURE__*/ _jsx("button", {
                                className: cn(styles.filterList__button, styles.filterList__button_clear),
                                onClick: ()=>clearFilters(type),
                                children: "Clear"
                            }),
                            /*#__PURE__*/ _jsx("button", {
                                className: cn(styles.filterList__button, styles.filterList__button_add),
                                onClick: acceptHandler,
                                children: "Add"
                            })
                        ]
                    })
                ]
            })
        ]
    });
})));
/* harmony default export */ const Filter_Filter = ((/* unused pure expression or super */ null && (Filter)));

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./components/SelectFilters/SelectFilters.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\kuros\Desktop\crowd-place\components\SelectFilters\SelectFilters.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const SelectFilters = (__default__);
// EXTERNAL MODULE: ./components/CountryList/CountryList.module.css
var CountryList_module = __webpack_require__(1289);
var CountryList_module_default = /*#__PURE__*/__webpack_require__.n(CountryList_module);
// EXTERNAL MODULE: ./consts/index.ts
var consts = __webpack_require__(2134);
;// CONCATENATED MODULE: ./components/CountryList/CountryList.tsx





const CountryList = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (CountryList_module_default()).countryList,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HTag_HTag, {
                    className: (CountryList_module_default()).countryList__title,
                    tag: "h2",
                    children: "Crowdfunding platforms by country"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (CountryList_module_default()).countryList__list,
                    children: consts/* CountryListValue */.MY.map((countryValue)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (CountryList_module_default()).countryList__item,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: countryValue.pathFlag,
                                    alt: "lag icon",
                                    width: 26,
                                    height: 21,
                                    className: (CountryList_module_default()).countryList__flag
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: (CountryList_module_default()).countryList__name,
                                    children: countryValue.country
                                })
                            ]
                        }, countryValue.country))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(CustomButton_CustomButton, {
                    color: "white",
                    text: "See all"
                })
            ]
        })
    });
};
/* harmony default export */ const CountryList_CountryList = (CountryList);

;// CONCATENATED MODULE: ./components/MainPageLayout/MainPageLayout.tsx


const MainPageLayout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderMainPage_HeaderMainPage, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    });
};
/* harmony default export */ const MainPageLayout_MainPageLayout = (MainPageLayout);

;// CONCATENATED MODULE: ./components/Header/Header.tsx

const Header_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\kuros\Desktop\crowd-place\components\Header\Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Header_esModule, $$typeof: Header_$$typeof } = Header_proxy;
const Header_default_ = Header_proxy.default;


/* harmony default export */ const Header = (Header_default_);
;// CONCATENATED MODULE: ./components/PageLayout/PageLayout.tsx


const PageLayout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    });
};
/* harmony default export */ const PageLayout_PageLayout = (PageLayout);

;// CONCATENATED MODULE: ./components/BreadCrumbs/BreadCrumbs.tsx

const BreadCrumbs_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\kuros\Desktop\crowd-place\components\BreadCrumbs\BreadCrumbs.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: BreadCrumbs_esModule, $$typeof: BreadCrumbs_$$typeof } = BreadCrumbs_proxy;
const BreadCrumbs_default_ = BreadCrumbs_proxy.default;


/* harmony default export */ const BreadCrumbs = (BreadCrumbs_default_);
;// CONCATENATED MODULE: ./components/SearchButton/SearchButton.tsx

const SearchButton_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\kuros\Desktop\crowd-place\components\SearchButton\SearchButton.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: SearchButton_esModule, $$typeof: SearchButton_$$typeof } = SearchButton_proxy;
const SearchButton_default_ = SearchButton_proxy.default;


/* harmony default export */ const SearchButton = (SearchButton_default_);
// EXTERNAL MODULE: ./components/ReviewCard/ReviewCard.module.css
var ReviewCard_module = __webpack_require__(5898);
var ReviewCard_module_default = /*#__PURE__*/__webpack_require__.n(ReviewCard_module);
;// CONCATENATED MODULE: ./components/ReviewCard/ReviewCard.tsx





const ReviewCard = ({ title, href, pathImg })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ReviewCard_module_default()).review__item,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ReviewCard_module_default()).review__item_content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: pathImg,
                        alt: `${title} logo`,
                        width: 55,
                        height: 55,
                        className: (ReviewCard_module_default()).review__item_img
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (ReviewCard_module_default()).review__item_text,
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: href,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomButton_CustomButton, {
                    text: "Website",
                    color: "white",
                    className: (ReviewCard_module_default()).review__item_button
                })
            })
        ]
    });
};
/* harmony default export */ const ReviewCard_ReviewCard = (ReviewCard);

// EXTERNAL MODULE: ./components/PlatformCard/PlatformCard.module.css
var PlatformCard_module = __webpack_require__(4511);
var PlatformCard_module_default = /*#__PURE__*/__webpack_require__.n(PlatformCard_module);
;// CONCATENATED MODULE: ./components/PlatformCard/PlatformCard.tsx





const PlatformCard = ({ pathLogo, title, countries, description, industry, type, href })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (PlatformCard_module_default()).card,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (PlatformCard_module_default()).card__header,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: (PlatformCard_module_default()).card__image,
                        src: pathLogo,
                        alt: "logo platform",
                        width: 56,
                        height: 56
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (PlatformCard_module_default()).card__title,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(HTag_HTag, {
                                tag: "h4",
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (PlatformCard_module_default()).card__countryList,
                                children: countries.map((country, index)=>{
                                    const lastIndex = countries.length - 1;
                                    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (PlatformCard_module_default()).card__country,
                                        children: index === lastIndex ? country.trim() : `${country.trim()}, `
                                    }, country);
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PTag_PTag, {
                fontSize: "17px",
                className: (PlatformCard_module_default()).card__description,
                children: description
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (PlatformCard_module_default()).card__tags,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(PlatformCardTags, {
                        tags: industry,
                        title: "Industry"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PlatformCardTags, {
                        tags: type,
                        title: "Type"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: href,
                children: /*#__PURE__*/ jsx_runtime_.jsx(CustomButton_CustomButton, {
                    className: (PlatformCard_module_default()).card__button,
                    text: "View profile",
                    color: "white"
                })
            })
        ]
    });
};
/* harmony default export */ const PlatformCard_PlatformCard = (PlatformCard);

;// CONCATENATED MODULE: ./components/PlatformCardTags/PlatformCardTags.tsx

const PlatformCardTags_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\kuros\Desktop\crowd-place\components\PlatformCardTags\PlatformCardTags.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: PlatformCardTags_esModule, $$typeof: PlatformCardTags_$$typeof } = PlatformCardTags_proxy;
const PlatformCardTags_default_ = PlatformCardTags_proxy.default;


/* harmony default export */ const PlatformCardTags = (PlatformCardTags_default_);
// EXTERNAL MODULE: ./components/CustomList/CustomList.module.css
var CustomList_module = __webpack_require__(2294);
var CustomList_module_default = /*#__PURE__*/__webpack_require__.n(CustomList_module);
;// CONCATENATED MODULE: ./components/CustomList/CustomList.tsx




const CustomList = ({ title, as, children, className })=>{
    switch(as){
        case "ul":
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classnames_default()((CustomList_module_default()).list__container, className),
                children: [
                    title && /*#__PURE__*/ jsx_runtime_.jsx(HTag_HTag, {
                        className: (CustomList_module_default()).list__title,
                        tag: "h6",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: (CustomList_module_default()).ulList,
                        children: children
                    })
                ]
            });
        case "ol":
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: classnames_default()((CustomList_module_default()).list__container, className),
                children: [
                    title && /*#__PURE__*/ jsx_runtime_.jsx(HTag_HTag, {
                        className: (CustomList_module_default()).list__title,
                        tag: "h6",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                        className: (CustomList_module_default()).olList,
                        children: children
                    })
                ]
            });
    }
};
/* harmony default export */ const CustomList_CustomList = (CustomList);

;// CONCATENATED MODULE: ./components/Form/Form.tsx

const Form_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\kuros\Desktop\crowd-place\components\Form\Form.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Form_esModule, $$typeof: Form_$$typeof } = Form_proxy;
const Form_default_ = Form_proxy.default;


/* harmony default export */ const Form = (Form_default_);
;// CONCATENATED MODULE: ./components/Input/Input.tsx

const Input_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\kuros\Desktop\crowd-place\components\Input\Input.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Input_esModule, $$typeof: Input_$$typeof } = Input_proxy;
const Input_default_ = Input_proxy.default;


/* harmony default export */ const Input = ((/* unused pure expression or super */ null && (Input_default_)));
;// CONCATENATED MODULE: ./components/TextArea/TextArea.tsx

const TextArea_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\kuros\Desktop\crowd-place\components\TextArea\TextArea.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: TextArea_esModule, $$typeof: TextArea_$$typeof } = TextArea_proxy;
const TextArea_default_ = TextArea_proxy.default;


/* harmony default export */ const TextArea = ((/* unused pure expression or super */ null && (TextArea_default_)));
;// CONCATENATED MODULE: ./components/Checkbox/Checkbox.tsx



const Checkbox_Checkbox = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(({ value, toggleCheckboxValue, checked, type, title })=>{
    return /*#__PURE__*/ _jsxs("label", {
        className: styles.checkbox,
        children: [
            /*#__PURE__*/ _jsx("input", {
                className: styles.checkbox__input,
                type: "checkbox",
                checked: checked,
                value: value,
                onChange: ()=>toggleCheckboxValue({
                        type,
                        value
                    })
            }),
            /*#__PURE__*/ _jsx("span", {
                className: styles.checkbox__checkmark
            }),
            /*#__PURE__*/ _jsx("span", {
                className: styles.checkbox__title,
                children: title
            })
        ]
    });
})));
/* harmony default export */ const components_Checkbox_Checkbox = ((/* unused pure expression or super */ null && (Checkbox_Checkbox)));

;// CONCATENATED MODULE: ./components/ContextRedux/ContextRedux.tsx

const ContextRedux_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\kuros\Desktop\crowd-place\components\ContextRedux\ContextRedux.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ContextRedux_esModule, $$typeof: ContextRedux_$$typeof } = ContextRedux_proxy;
const ContextRedux_default_ = ContextRedux_proxy.default;


/* harmony default export */ const ContextRedux = (ContextRedux_default_);
;// CONCATENATED MODULE: ./components/TagFilters/TagFilters.tsx




const TagFilters = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(({ removeFilter, title, options })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.filters__tags,
        children: [
            /*#__PURE__*/ _jsxs("span", {
                className: styles.filters__tag_title,
                children: [
                    title,
                    ":"
                ]
            }),
            options.map((option)=>/*#__PURE__*/ _jsx(TagFilter, {
                    removeFilter: removeFilter,
                    type: title,
                    value: option
                }, option))
        ]
    });
})));
/* harmony default export */ const TagFilters_TagFilters = ((/* unused pure expression or super */ null && (TagFilters)));

;// CONCATENATED MODULE: ./components/TagFilter/TagFilter.tsx



const TagFilter_TagFilter = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(({ removeFilter, type, value })=>{
    return /*#__PURE__*/ _jsxs("span", {
        className: styles.filters__tag,
        children: [
            value,
            /*#__PURE__*/ _jsx("span", {
                onClick: ()=>removeFilter({
                        type,
                        value
                    }),
                className: styles.filters__tag_delete,
                children: "+"
            })
        ]
    });
})));
/* harmony default export */ const components_TagFilter_TagFilter = ((/* unused pure expression or super */ null && (TagFilter_TagFilter)));

// EXTERNAL MODULE: ./components/ListingPlatforms/ListingPlatforms.module.css
var ListingPlatforms_module = __webpack_require__(4785);
var ListingPlatforms_module_default = /*#__PURE__*/__webpack_require__.n(ListingPlatforms_module);
// EXTERNAL MODULE: ./components/Pagination/Pagination.tsx
var Pagination = __webpack_require__(3543);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(4980);
// EXTERNAL MODULE: ./helpers/index.ts + 3 modules
var helpers = __webpack_require__(4562);
;// CONCATENATED MODULE: ./components/ListingPlatforms/ListingPlatforms.tsx






const ListingPlatforms = async ({ params, searchParams })=>{
    const perPage = 12;
    let currentPage = 1;
    if (Number(searchParams.page) >= 1) {
        currentPage = Number(searchParams.page);
    }
    const paramsPath = Object.values(params).map((value)=>decodeURIComponent(value)).join("/");
    if (searchParams.page === "1") {
        (0,navigation.redirect)(`/platforms/${paramsPath}/`);
    }
    const { count: totalCount, rows: platforms } = await (0,helpers/* getType */.oL)(params, currentPage, perPage);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (ListingPlatforms_module_default()).reviews,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HTag_HTag, {
                    className: (ListingPlatforms_module_default()).reviews__title,
                    tag: "h2",
                    children: "Reviews"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ListingPlatforms_module_default()).reviews__list,
                    children: platforms.map((platform)=>/*#__PURE__*/ jsx_runtime_.jsx(PlatformCard_PlatformCard, {
                            pathLogo: platform.logo,
                            title: platform.name,
                            countries: platform.country,
                            description: platform.description,
                            type: platform.investmentType,
                            industry: platform.industry,
                            href: `/platform/${platform.name.split(" ").join("").toLowerCase()}`
                        }, platform.name))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Pagination/* default */.ZP, {
                    itemCount: totalCount,
                    page: currentPage,
                    perPage: perPage
                })
            ]
        })
    });
};
/* harmony default export */ const ListingPlatforms_ListingPlatforms = (ListingPlatforms);

;// CONCATENATED MODULE: ./components/index.ts

































/***/ }),

/***/ 2134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bl: () => (/* binding */ BlogCardsValues),
/* harmony export */   C8: () => (/* binding */ CrowdfundingCardValues),
/* harmony export */   MY: () => (/* binding */ CountryListValue)
/* harmony export */ });
/* unused harmony export SelectFiltersValues */
const CrowdfundingCardValues = [
    {
        title: "P2P lending platforms",
        iconPath: "/icons/people.svg"
    },
    {
        title: "Equity crowdfunding platforms",
        iconPath: "/icons/money.svg"
    },
    {
        title: "Property crowdfunding platforms",
        iconPath: "/icons/home.svg"
    },
    {
        title: "Startup crowdfunding platforms",
        iconPath: "/icons/rocket.svg"
    },
    {
        title: "Personal loans crowdfunding platforms",
        iconPath: "/icons/coins.svg"
    },
    {
        title: "Green energy crowdfunding platforms",
        iconPath: "/icons/leaf.svg"
    },
    {
        title: "Crowdfunding platform for education",
        iconPath: "/icons/book.svg"
    },
    {
        title: "Debt crowdfunding platform",
        iconPath: "/icons/hand-coins.svg"
    }
];
const SelectFiltersValues = [
    {
        options: [
            "Equity",
            "Debt",
            "P2P lending",
            "Reward",
            "Donation",
            "Buy-to-let",
            "Mini-bonds"
        ],
        placeholder: "Select investment type"
    },
    {
        options: [
            "Real estate",
            "Startups",
            "SME",
            "Sustainability",
            "Litigation",
            "Green energy",
            "Health & Science",
            "Logistics",
            "Personal loans",
            "Art",
            "Mortgages",
            "Social cause",
            "Education",
            "Farming",
            "Sport",
            "Maritime"
        ],
        placeholder: "Select industry"
    },
    {
        options: [
            "Andorra",
            "Albania",
            "Austria",
            "Belgium",
            "Bulgaria",
            "Croatia",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Estonia",
            "Finland",
            "France",
            "Germany",
            "Greece",
            "Hungary",
            "Iceland",
            "Ireland",
            "Israel",
            "Italy",
            "Latvia",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macedonia",
            "Malta",
            "Moldova",
            "Monaco",
            "Netherlands",
            "Norway",
            "Poland",
            "Portugal",
            "Romania",
            "Turkey",
            "Serbia",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Sweden",
            "Switzerland",
            "United Kingdom",
            "Ukraine"
        ],
        placeholder: "Select country of operation"
    },
    {
        options: [
            "1 year",
            "2-3 years",
            "4-5 years",
            "more than 5"
        ],
        placeholder: "Years on market"
    },
    {
        options: [
            "Yes"
        ],
        placeholder: "ECSP license"
    }
];
const BlogCardsValues = [
    {
        pathImage: "/img/blog_card_1.png",
        title: "Making a difference: the power and potential of impact investing1",
        text: "Impact investing is one of the emerging yet steady trends in the crowdfunding sector. It’s becoming increasingly widespread for investors to be interested not only in the possible returns but the collateral social or environmental impact. In other words people want their investment choices to be aligned with their values.",
        tag: "Investing",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_2.png",
        title: "P2P mortgage loans: unlocking opportunities in the accommodation market",
        text: "The demand for accommodation and prices are growing, so many people worldwide opt for mortgage loans. Getting a mortgage loan from a bank is a long and demanding procedure that’s why peer-to-peer lending alternatives is increasing in popularity.",
        tag: "P2P lending",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_3.png",
        title: "Most common equity crowdfunding mistakes: unveiling the pitfalls",
        text: "Crowdfunding, particularly equity crowdfunding, has already shown that it’s a viable alternative for startups and early-stage businesses to raise funding. As straightforward as it may seem, there are quite a few intricacies that, when overlooked, can damage your campaign.",
        tag: "Crowdfunding business",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_1.png",
        title: "Making a difference: the power and potential of impact investing2",
        text: "Impact investing is one of the emerging yet steady trends in the crowdfunding sector. It’s becoming increasingly widespread for investors to be interested not only in the possible returns but the collateral social or environmental impact. In other words people want their investment choices to be aligned with their values.",
        tag: "Investing",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_2.png",
        title: "P2P mortgage loans: unlocking opportunities in the accommodation market",
        text: "The demand for accommodation and prices are growing, so many people worldwide opt for mortgage loans. Getting a mortgage loan from a bank is a long and demanding procedure that’s why peer-to-peer lending alternatives is increasing in popularity.",
        tag: "P2P lending",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_3.png",
        title: "Most common equity crowdfunding mistakes: unveiling the pitfalls",
        text: "Crowdfunding, particularly equity crowdfunding, has already shown that it’s a viable alternative for startups and early-stage businesses to raise funding. As straightforward as it may seem, there are quite a few intricacies that, when overlooked, can damage your campaign.",
        tag: "Crowdfunding business",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_1.png",
        title: "Making a difference: the power and potential of impact investing3",
        text: "Impact investing is one of the emerging yet steady trends in the crowdfunding sector. It’s becoming increasingly widespread for investors to be interested not only in the possible returns but the collateral social or environmental impact. In other words people want their investment choices to be aligned with their values.",
        tag: "Investing",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_2.png",
        title: "P2P mortgage loans: unlocking opportunities in the accommodation market",
        text: "The demand for accommodation and prices are growing, so many people worldwide opt for mortgage loans. Getting a mortgage loan from a bank is a long and demanding procedure that’s why peer-to-peer lending alternatives is increasing in popularity.",
        tag: "P2P lending",
        date: "June 12, 2023"
    },
    {
        pathImage: "/img/blog_card_3.png",
        title: "Most common equity crowdfunding mistakes: unveiling the pitfalls",
        text: "Crowdfunding, particularly equity crowdfunding, has already shown that it’s a viable alternative for startups and early-stage businesses to raise funding. As straightforward as it may seem, there are quite a few intricacies that, when overlooked, can damage your campaign.",
        tag: "Crowdfunding business",
        date: "June 12, 2023"
    }
];
const CountryListValue = [
    {
        country: "Austria",
        pathFlag: "/flags/Austria.svg"
    },
    {
        country: "Belgium",
        pathFlag: "/flags/Belgium.svg"
    },
    {
        country: "Croatia",
        pathFlag: "/flags/Croatia.svg"
    },
    {
        country: "Cyprus",
        pathFlag: "/flags/Cyprus.svg"
    },
    {
        country: "Czech Republic",
        pathFlag: "/flags/Czech_Republic.svg"
    },
    {
        country: "Denmark",
        pathFlag: "/flags/Denmark.svg"
    },
    {
        country: "Estonia",
        pathFlag: "/flags/Estonia.svg"
    },
    {
        country: "Finland",
        pathFlag: "/flags/Finland.svg"
    },
    {
        country: "France",
        pathFlag: "/flags/France.svg"
    },
    {
        country: "Germany",
        pathFlag: "/flags/Germany.svg"
    },
    {
        country: "Greece",
        pathFlag: "/flags/Greece.svg"
    },
    {
        country: "Ireland",
        pathFlag: "/flags/Ireland.svg"
    },
    {
        country: "Italy",
        pathFlag: "/flags/Italy.svg"
    },
    {
        country: "Latvia",
        pathFlag: "/flags/Latvia.svg"
    },
    {
        country: "Lithuania",
        pathFlag: "/flags/Lithuania.svg"
    },
    {
        country: "Luxembourg",
        pathFlag: "/flags/Luxembourg.svg"
    },
    {
        country: "Malta",
        pathFlag: "/flags/Malta.svg"
    },
    {
        country: "Netherlands",
        pathFlag: "/flags/Netherlands.svg"
    },
    {
        country: "Norway",
        pathFlag: "/flags/Norway.svg"
    },
    {
        country: "Poland",
        pathFlag: "/flags/Poland.svg"
    },
    {
        country: "Portugal",
        pathFlag: "/flags/Portugal.svg"
    },
    {
        country: "Romania",
        pathFlag: "/flags/Romania.svg"
    },
    {
        country: "Slovakia",
        pathFlag: "/flags/Slovakia.svg"
    },
    {
        country: "Spain",
        pathFlag: "/flags/Spain.svg"
    },
    {
        country: "Sweden",
        pathFlag: "/flags/Sweden.svg"
    },
    {
        country: "Switzerland",
        pathFlag: "/flags/Switzerland.svg"
    },
    {
        country: "Ukraine",
        pathFlag: "/flags/Ukraine.svg"
    },
    {
        country: "United Kingdom",
        pathFlag: "/flags/United_Kingdom.svg"
    }
] // const investmentTypeSlugs = ['buy-to-let', 'debt', 'donation', 'equity', 'mini-bonds', 'p2p-lending', 'reward'];
 // const industrySlugs = ['real-estate', 'startups', 'sme', 'sustainability', 'litigation', 'green-energy', 'health-science', 'logistics', 'personal-loans', 'art', 'mortgages', 'social-cause', 'education', 'farming', 'sport', 'maritime'];
 // const countrySlugs = ['andorra', 'albania', 'austria', 'belgium', 'bulgaria', 'croatia', 'cyprus', 'czech-republic', 'denmark', 'estonia', 'finland', 'france', 'germany', 'greece', 'hungary', 'iceland', 'ireland', 'israel', 'italy', 'latvia', 'liechtenstein', 'lithuania', 'luxembourg', 'macedonia', 'malta', 'moldova', 'monaco', 'netherlands', 'norway', 'poland', 'portugal', 'romania', 'turkey', 'serbia', 'slovakia', 'slovenia', 'spain', 'sweden', 'switzerland', 'united-kingdom', 'ukraine'];
 // const yearFoundedSlugs = ['1-year', '2-3-years', '4-5-years', 'more-than-5'];
 // const licenseNumberSlugs = ['yes'];
 // export const industryCombinationPaths = generateCombinations(industrySlugs).slice(1);
 // export const countryCombinationPaths = generateCombinations(countrySlugs).slice(1);
 // export const yearFoundedCombinationPaths = generateCombinations(yearFoundedSlugs).slice(1);
 // export const licenseNumberCombinationPaths = generateCombinations(licenseNumberSlugs).slice(1);
;


/***/ }),

/***/ 4562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aW: () => (/* binding */ getMetadataValues),
  oL: () => (/* binding */ getType)
});

// UNUSED EXPORTS: convertToObjectValue, createFilterObject, extractValuesByKeyArray, generateQueryParams, isActiveLink, searchTypeFilter, sendMail

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(4980);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(2527);
;// CONCATENATED MODULE: ./store/slices/filters.ts

const initialState = {
    filtersFields: [
        {
            options: [
                {
                    title: "Equity",
                    checked: false,
                    slug: "equity"
                },
                {
                    title: "Debt",
                    checked: false,
                    slug: "debt"
                },
                {
                    title: "P2P lending",
                    checked: false,
                    slug: "p2p-lending"
                },
                {
                    title: "Reward",
                    checked: false,
                    slug: "reward"
                },
                {
                    title: "Donation",
                    checked: false,
                    slug: "donation"
                },
                {
                    title: "Buy-to-let",
                    checked: false,
                    slug: "buy-to-let"
                },
                {
                    title: "Mini-bonds",
                    checked: false,
                    slug: "mini-bonds"
                }
            ],
            placeholder: "Select investment type",
            type: "investmentType"
        },
        {
            options: [
                {
                    title: "Real estate",
                    checked: false,
                    slug: "real-estate"
                },
                {
                    title: "Startups",
                    checked: false,
                    slug: "startups"
                },
                {
                    title: "SME",
                    checked: false,
                    slug: "sme"
                },
                {
                    title: "Sustainability",
                    checked: false,
                    slug: "sustainability"
                },
                {
                    title: "Litigation",
                    checked: false,
                    slug: "litigation"
                },
                {
                    title: "Green energy",
                    checked: false,
                    slug: "green-energy"
                },
                {
                    title: "Health & Science",
                    checked: false,
                    slug: "health-science"
                },
                {
                    title: "Logistics",
                    checked: false,
                    slug: "logistics"
                },
                {
                    title: "Personal loans",
                    checked: false,
                    slug: "personal-loans"
                },
                {
                    title: "Art",
                    checked: false,
                    slug: "art"
                },
                {
                    title: "Mortgages",
                    checked: false,
                    slug: "mortgages"
                },
                {
                    title: "Social cause",
                    checked: false,
                    slug: "social-cause"
                },
                {
                    title: "Education",
                    checked: false,
                    slug: "education"
                },
                {
                    title: "Farming",
                    checked: false,
                    slug: "farming"
                },
                {
                    title: "Sport",
                    checked: false,
                    slug: "sport"
                },
                {
                    title: "Maritime",
                    checked: false,
                    slug: "maritime"
                }
            ],
            placeholder: "Select industry",
            type: "industry"
        },
        {
            options: [
                {
                    title: "Andorra",
                    checked: false,
                    slug: "andorra"
                },
                {
                    title: "Albania",
                    checked: false,
                    slug: "albania"
                },
                {
                    title: "Austria",
                    checked: false,
                    slug: "austria"
                },
                {
                    title: "Belgium",
                    checked: false,
                    slug: "belgium"
                },
                {
                    title: "Bulgaria",
                    checked: false,
                    slug: "bulgaria"
                },
                {
                    title: "Croatia",
                    checked: false,
                    slug: "croatia"
                },
                {
                    title: "Cyprus",
                    checked: false,
                    slug: "cyprus"
                },
                {
                    title: "Czech Republic",
                    checked: false,
                    slug: "czech-republic"
                },
                {
                    title: "Denmark",
                    checked: false,
                    slug: "denmark"
                },
                {
                    title: "Estonia",
                    checked: false,
                    slug: "estonia"
                },
                {
                    title: "Finland",
                    checked: false,
                    slug: "finland"
                },
                {
                    title: "France",
                    checked: false,
                    slug: "france"
                },
                {
                    title: "Germany",
                    checked: false,
                    slug: "germany"
                },
                {
                    title: "Greece",
                    checked: false,
                    slug: "greece"
                },
                {
                    title: "Hungary",
                    checked: false,
                    slug: "hungary"
                },
                {
                    title: "Iceland",
                    checked: false,
                    slug: "iceland"
                },
                {
                    title: "Ireland",
                    checked: false,
                    slug: "ireland"
                },
                {
                    title: "Israel",
                    checked: false,
                    slug: "israel"
                },
                {
                    title: "Italy",
                    checked: false,
                    slug: "italy"
                },
                {
                    title: "Latvia",
                    checked: false,
                    slug: "latvia"
                },
                {
                    title: "Liechtenstein",
                    checked: false,
                    slug: "liechtenstein"
                },
                {
                    title: "Lithuania",
                    checked: false,
                    slug: "lithuania"
                },
                {
                    title: "Luxembourg",
                    checked: false,
                    slug: "luxembourg"
                },
                {
                    title: "Macedonia",
                    checked: false,
                    slug: "macedonia"
                },
                {
                    title: "Malta",
                    checked: false,
                    slug: "malta"
                },
                {
                    title: "Moldova",
                    checked: false,
                    slug: "moldova"
                },
                {
                    title: "Monaco",
                    checked: false,
                    slug: "monaco"
                },
                {
                    title: "Netherlands",
                    checked: false,
                    slug: "netherlands"
                },
                {
                    title: "Norway",
                    checked: false,
                    slug: "norway"
                },
                {
                    title: "Poland",
                    checked: false,
                    slug: "poland"
                },
                {
                    title: "Portugal",
                    checked: false,
                    slug: "portugal"
                },
                {
                    title: "Romania",
                    checked: false,
                    slug: "romania"
                },
                {
                    title: "Turkey",
                    checked: false,
                    slug: "turkey"
                },
                {
                    title: "Serbia",
                    checked: false,
                    slug: "serbia"
                },
                {
                    title: "Slovakia",
                    checked: false,
                    slug: "slovakia"
                },
                {
                    title: "Slovenia",
                    checked: false,
                    slug: "slovenia"
                },
                {
                    title: "Spain",
                    checked: false,
                    slug: "spain"
                },
                {
                    title: "Sweden",
                    checked: false,
                    slug: "sweden"
                },
                {
                    title: "Switzerland",
                    checked: false,
                    slug: "switzerland"
                },
                {
                    title: "United Kingdom",
                    checked: false,
                    slug: "united-kingdom"
                },
                {
                    title: "Ukraine",
                    checked: false,
                    slug: "ukraine"
                }
            ],
            placeholder: "Select country of operation",
            type: "country"
        },
        {
            options: [
                {
                    title: "1 year",
                    checked: false,
                    slug: "1-year"
                },
                {
                    title: "2-3 years",
                    checked: false,
                    slug: "2-3-years"
                },
                {
                    title: "4-5 years",
                    checked: false,
                    slug: "4-5-years"
                },
                {
                    title: "more than 5",
                    checked: false,
                    slug: "more-than-5"
                }
            ],
            placeholder: "Years on market",
            type: "yearFounded"
        },
        {
            options: [
                {
                    title: "Yes",
                    checked: false,
                    slug: "yes"
                }
            ],
            placeholder: "ECSP license",
            type: "licenseNumber"
        }
    ],
    investmentType: {
        final: [],
        middle: []
    },
    industry: {
        final: [],
        middle: []
    },
    country: {
        final: [],
        middle: []
    },
    yearFounded: {
        final: [],
        middle: []
    },
    licenseNumber: {
        final: [],
        middle: []
    }
};
const filtersSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "filters",
    initialState,
    reducers: {
        toggleCheckbox: (state, action)=>{
            const findValue = state[action.payload.type].middle.find((value)=>value === action.payload.value);
            const currentFieldIndex = state.filtersFields.findIndex((field)=>field.type === action.payload.type);
            const currentOptionIndex = state.filtersFields[currentFieldIndex].options.findIndex((option)=>option.title === action.payload.value);
            if (!findValue) {
                state[action.payload.type].middle.push(action.payload.value);
                if (currentOptionIndex !== -1) {
                    state.filtersFields[currentFieldIndex].options[currentOptionIndex].checked = true;
                }
            }
            if (findValue) {
                state[action.payload.type].middle = state[action.payload.type].middle.filter((item)=>item !== findValue);
                if (currentOptionIndex !== -1) {
                    state.filtersFields[currentFieldIndex].options[currentOptionIndex].checked = false;
                }
            }
        },
        acceptSelectFilterType: (state, action)=>{
            state[action.payload].final = [
                ...state[action.payload].middle
            ];
        },
        addMiddleFilter: (state, action)=>{
            state[action.payload.type].middle = [
                ...action.payload.valueArray
            ];
        },
        clearSelectFilterType: (state, action)=>{
            state[action.payload].middle = [];
            const currentFilterIndex = state.filtersFields.findIndex((filter)=>filter.type === action.payload);
            if (currentFilterIndex !== -1) {
                state.filtersFields[currentFilterIndex].options = state.filtersFields[currentFilterIndex].options.map((item)=>({
                        ...item,
                        checked: false
                    }));
            }
        },
        addServerState: (state, action)=>{
            return {
                ...state,
                ...action.payload
            };
        },
        addServerOptions: (state, action)=>{
            const currentIndex = state.filtersFields.findIndex((field)=>field.type === action.payload.type);
            if (currentIndex !== -1) {
                state.filtersFields[currentIndex].options = [
                    ...action.payload.options
                ];
            }
        },
        addTag: (state, action)=>{
            const currentFilterIndex = state.filtersFields.findIndex((filter)=>{
                const isNull = filter.options.findIndex((option)=>option.slug === action.payload[0]);
                return isNull !== -1;
            });
            const currentType = state.filtersFields[currentFilterIndex].type;
            const updateFilter = state.filtersFields[currentFilterIndex].options.map((option)=>{
                if (action.payload.includes(option.slug)) {
                    return {
                        ...option,
                        checked: true
                    };
                } else {
                    return option;
                }
            });
            const optionsValues = updateFilter.filter((option)=>action.payload.includes(option.slug)).map((option)=>option.title);
            state.filtersFields[currentFilterIndex].options = updateFilter;
            state[currentType].middle = optionsValues;
            state[currentType].final = optionsValues;
        },
        removeFilter: (state, action)=>{
            switch(action.payload.type){
                case "Investment type":
                    {
                        const filterIndex = state.filtersFields.findIndex((options)=>options.type === "investmentType");
                        const currentOption = state.filtersFields[filterIndex].options.findIndex((option)=>option.title === action.payload.value);
                        state.filtersFields[filterIndex].options[currentOption].checked = false;
                        state.investmentType.middle = state.investmentType.middle.filter((value)=>value !== action.payload.value);
                        state.investmentType.final = state.investmentType.final.filter((value)=>value !== action.payload.value);
                        break;
                    }
                case "Industry":
                    {
                        const filterIndex = state.filtersFields.findIndex((options)=>options.type === "industry");
                        const currentOption = state.filtersFields[filterIndex].options.findIndex((option)=>option.title === action.payload.value);
                        state.filtersFields[filterIndex].options[currentOption].checked = false;
                        state.industry.middle = state.industry.middle.filter((value)=>value !== action.payload.value);
                        state.industry.final = state.industry.final.filter((value)=>value !== action.payload.value);
                        break;
                    }
                case "Country":
                    {
                        const filterIndex = state.filtersFields.findIndex((options)=>options.type === "country");
                        const currentOption = state.filtersFields[filterIndex].options.findIndex((option)=>option.title === action.payload.value);
                        state.filtersFields[filterIndex].options[currentOption].checked = false;
                        state.country.middle = state.country.middle.filter((value)=>value !== action.payload.value);
                        state.country.final = state.country.final.filter((value)=>value !== action.payload.value);
                        break;
                    }
                case "Years on market":
                    {
                        const filterIndex = state.filtersFields.findIndex((options)=>options.type === "yearFounded");
                        const currentOption = state.filtersFields[filterIndex].options.findIndex((option)=>option.title === action.payload.value);
                        state.filtersFields[filterIndex].options[currentOption].checked = false;
                        state.yearFounded.middle = state.yearFounded.middle.filter((value)=>value !== action.payload.value);
                        state.yearFounded.final = state.yearFounded.final.filter((value)=>value !== action.payload.value);
                        break;
                    }
                case "ECSP license":
                    {
                        const filterIndex = state.filtersFields.findIndex((options)=>options.type === "licenseNumber");
                        const currentOption = state.filtersFields[filterIndex].options.findIndex((option)=>option.title === action.payload.value);
                        state.filtersFields[filterIndex].options[currentOption].checked = false;
                        state.licenseNumber.middle = state.licenseNumber.middle.filter((value)=>value !== action.payload.value);
                        state.licenseNumber.final = state.licenseNumber.final.filter((value)=>value !== action.payload.value);
                        break;
                    }
            }
        },
        resetFilters: (state)=>{
            state.investmentType.middle = [];
            state.investmentType.final = [];
            state.industry.middle = [];
            state.industry.final = [];
            state.country.middle = [];
            state.country.final = [];
            state.yearFounded.middle = [];
            state.yearFounded.final = [];
            state.licenseNumber.middle = [];
            state.licenseNumber.final = [];
            state.filtersFields = state.filtersFields.map((filterField)=>{
                return {
                    ...filterField,
                    options: filterField.options.map((option)=>({
                            ...option,
                            checked: false
                        }))
                };
            });
        }
    }
});
const { acceptSelectFilterType, clearSelectFilterType, resetFilters, toggleCheckbox, addMiddleFilter, addServerState, addServerOptions, removeFilter, addTag } = filtersSlice.actions;
/* harmony default export */ const filters = (filtersSlice.reducer);

;// CONCATENATED MODULE: ./store/slices/platforms.ts

const platforms_initialState = {
    count: 0,
    rows: [
        {
            name: "",
            slug: "",
            industry: [
                ""
            ],
            investmentType: [
                ""
            ],
            autoInvest: false,
            signupBonus: false,
            secondaryMarket: false,
            publicStatistics: false,
            reviews: "",
            country: [
                ""
            ],
            buybackGuarantee: false,
            licenseNumber: "",
            languages: [
                ""
            ],
            logo: "",
            advertisedReturn: "",
            averageLoanDuration: "",
            description: "",
            investors: "",
            website: "",
            minimumInvestment: "",
            regulated: false,
            yearFounded: "",
            paymentOptions: [
                ""
            ],
            totalFundingVolume: "",
            whoCanInvest: ""
        }
    ]
};
const PlatformsSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "platforms",
    initialState: platforms_initialState,
    reducers: {
        setPlatforms: (state, action)=>{
            state.count = action.payload.count;
            state.rows = action.payload.rows;
        }
    }
});
const { setPlatforms } = PlatformsSlice.actions;
/* harmony default export */ const platforms = (PlatformsSlice.reducer);

;// CONCATENATED MODULE: ./store/index.ts



const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        filters: filters,
        platforms: platforms
    }
});

;// CONCATENATED MODULE: ./helpers/index.ts


function extractValuesByKeyArray(obj, keysArray) {
    const result = [];
    for(let i = 0; i < keysArray.length; i++){
        const key = keysArray[i];
        if (obj.hasOwnProperty(key)) {
            result.push(obj[key]);
        }
    }
    return result;
}
function createFilterObject(obj, keysArray) {
    const filteredObject = {};
    keysArray.forEach((key)=>{
        if (obj.hasOwnProperty(key)) {
            filteredObject[key] = obj[key];
        }
    });
    return filteredObject;
}
function searchTypeFilter(arrayParams) {
    let filterType = "";
    arrayParams.forEach((value)=>{
        store.getState().filters.filtersFields.forEach((filter, index)=>{
            filter.options.forEach((option)=>{
                if (option.slug.includes(value)) {
                    filterType = store.getState().filters.filtersFields[index].type;
                }
            });
        });
    });
    return filterType;
}
function generateQueryParams(object) {
    return Object.entries(object).filter(([_, value])=>value !== undefined).map(([key, value])=>`${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
}
// export function searchTypeFilters(arrayParams: string[]) {
//     let filterType: string[] = [];
//
//     arrayParams.forEach((value) => {
//         store.getState().filters.filtersFields.forEach((filter, index) => {
//             filter.options.forEach((option) => {
//                 if (option.slug.includes(value)) {
//                     const type = store.getState().filters.filtersFields[index].type;
//                     if (!filterType.includes(type)) {
//                         filterType.push();
//                     }
//                 }
//             })
//         })
//     })
//
//     return filterType;
// }
function convertToObjectValue(arrayValue) {
    const filterType = searchTypeFilter(arrayValue);
    const filtersOption = store.getState().filters.filtersFields.find((type)=>type.type === filterType);
    if (filtersOption) {
        const slugTitleObject = filtersOption.options.reduce((acc, item)=>{
            acc[item.slug] = item.title;
            return acc;
        }, {});
        return createFilterObject(slugTitleObject, arrayValue);
    }
}
function isActiveLink(href) {
    const pathName = usePathname();
    return pathName === href;
}
async function sendMail(data) {
    const response = await fetch(`http://1864875-cn27374.twc1.net:3001/api/send-mail`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    });
    if (response.status === 400) {
        const errorMessage = await response.json();
        throw new Error(errorMessage);
    }
    return await response.json();
}
// Filter params validation
// function filterParamsValidation(params: Record<FilterType, string>) {
//     const filters = store.getState().filters.filtersFields;
//
//     for (const key in params) {
//         const filterIndex = filters.findIndex((filter) => filter.type === key);
//         let count = 0;
//         filters[filterIndex].options.forEach((option) => {
//             if (decodeURIComponent(params[key] as string).split('+').includes(option.slug)) {
//                 count++;
//             }
//         });
//         if (count !==  decodeURIComponent(params[key] as string).split('+').length) {
//             redirect('/platforms/')
//         }
//     }
// }
async function getType(params, page, perPage) {
    const paramsValues = Object.values(params).map((param)=>decodeURIComponent(param).split("+"));
    const investObjects = paramsValues.map(convertToObjectValue);
    const filters = paramsValues.map(searchTypeFilter);
    const queryParams = investObjects.map((object)=>{
        if (object) {
            return generateQueryParams(object);
        }
    }).join("&and&");
    const allFilters = filters.join("-");
    const res = await fetch(`${process.env.SERVER}/api/select-platforms?${queryParams}&page=${page}&perPage=${perPage}&typeFilter=${allFilters}`);
    return await res.json();
}
function getMetadataValues(params) {
    const paramsValues = Object.values(params).map((param)=>decodeURIComponent(param).split("+"));
    const valueObjects = paramsValues.map(convertToObjectValue);
    const sortedValues = valueObjects.map((obj)=>{
        if (obj) {
            return Object.values(obj).sort().join(" ");
        }
    });
    const allValue = sortedValues.join("+");
    const allPath = Object.values(params).map((value)=>decodeURIComponent(value)).join("/");
    return {
        title: `${allValue} | Crowd Place`,
        description: `${allValue} | Crowd Place`,
        alternates: {
            canonical: `${process.env.DOMAIN}/platform/${allPath}/`
        }
    };
}


/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;