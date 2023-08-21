(() => {
var exports = {};
exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 13878:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 13878;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 77288:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 77288;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 46517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 6867:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/_baseIsNative");

/***/ }),

/***/ 15452:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isPlainObject");

/***/ }),

/***/ 39491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 32081:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 9523:
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 77282:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 85477:
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 24404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 76224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 90862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/send-mail/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/nodemailer/lib/nodemailer.js
var nodemailer = __webpack_require__(4098);
// EXTERNAL MODULE: ./helpers/index.ts + 3 modules
var helpers = __webpack_require__(4562);
;// CONCATENATED MODULE: ./nodemailerConfig/index.ts


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "viktor.korchagin.corp@gmail.com",
        pass: "rgpsosrcvolmsoyq"
    }
});
const mailOptions = {
    from: "viktor.korchagin.corp@gmail.com",
    to: "viktor.korchagin.corp@gmail.com"
};
const ADD_PLATFORM_MESSAGE_FIELDS = {
    "Platform name": "Platform name",
    "Website": "Website",
    "E-mail": "E-mail",
    "Message": "Message"
};
const CONTACT_MESSAGE_FIELDS = {
    "Name": "Name",
    "E-mail": "E-mail",
    "Message": "Message"
};
const generateEmailContent = (data)=>{
    const stringData = Object.entries(data).reduce((str, [key, val])=>str += `${(0,helpers/* mailDataType */.hb)(data) ? ADD_PLATFORM_MESSAGE_FIELDS[key] : CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`, "");
    const htmlData = Object.entries(data).reduce((str, [key, val])=>{
        return str += `<h3 class="form-heading" align="left">${(0,helpers/* mailDataType */.hb)(data) ? ADD_PLATFORM_MESSAGE_FIELDS[key] : CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`;
    }, "");
    return {
        text: stringData,
        html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>${(0,helpers/* mailDataType */.hb)(data) ? "New platform" : "Contacts"}</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`
    };
};

// EXTERNAL MODULE: ./node_modules/sequelize/lib/index.mjs
var lib = __webpack_require__(59260);
;// CONCATENATED MODULE: ./utils/index.ts

const sequelize = new lib/* Sequelize */.ch("crowdplace_platform", "crowdplace", "24Uqh8I$pLJK", {
    dialect: "mysql",
    host: "82.202.167.53",
    dialectModule: __webpack_require__(39169),
    port: 3306
});
/* harmony default export */ const utils = (sequelize);

;// CONCATENATED MODULE: ./models/platform.ts


class Platform extends lib/* Model */.Hn {
}
Platform.init({
    id: {
        type: lib/* DataTypes */.oS.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    createdAt: lib/* DataTypes */.oS.DATE,
    updatedAt: lib/* DataTypes */.oS.DATE,
    name: lib/* DataTypes */.oS.STRING,
    logo: lib/* DataTypes */.oS.STRING,
    country: {
        type: lib/* DataTypes */.oS.TEXT,
        get () {
            const value = this.getDataValue("country");
            return value ? JSON.parse(value) : [];
        },
        set (value) {
            if (typeof value === "string") {
                const arr = value.split(",");
                const trimValue = arr.map((item)=>item.trim());
                this.setDataValue("country", JSON.stringify(trimValue));
            }
        }
    },
    investmentType: {
        type: lib/* DataTypes */.oS.STRING,
        get () {
            const value = this.getDataValue("investmentType");
            return value ? JSON.parse(value) : [];
        },
        set (value) {
            if (typeof value === "string") {
                const arr = value.split(",");
                const trimValue = arr.map((item)=>item.trim());
                this.setDataValue("investmentType", JSON.stringify(trimValue));
            }
        }
    },
    industry: {
        type: lib/* DataTypes */.oS.STRING,
        get () {
            const value = this.getDataValue("industry");
            return value ? JSON.parse(value) : [];
        },
        set (value) {
            if (typeof value === "string") {
                const arr = value.split(",");
                const trimValue = arr.map((item)=>item.trim());
                this.setDataValue("industry", JSON.stringify(trimValue));
            }
        }
    },
    yearFounded: lib/* DataTypes */.oS.STRING,
    licenseNumber: lib/* DataTypes */.oS.STRING,
    languages: {
        type: lib/* DataTypes */.oS.STRING,
        get () {
            const value = this.getDataValue("languages");
            return value ? JSON.parse(value) : [];
        },
        set (value) {
            if (typeof value === "string") {
                const arr = value.split(",");
                const trimValue = arr.map((item)=>item.trim());
                this.setDataValue("languages", JSON.stringify(trimValue));
            }
        }
    },
    reviews: lib/* DataTypes */.oS.STRING,
    website: lib/* DataTypes */.oS.TEXT,
    minimumInvestment: lib/* DataTypes */.oS.STRING,
    advertisedReturn: lib/* DataTypes */.oS.STRING,
    investors: lib/* DataTypes */.oS.STRING,
    paymentOptions: {
        type: lib/* DataTypes */.oS.STRING,
        get () {
            const value = this.getDataValue("paymentOptions");
            return value ? JSON.parse(value) : [];
        },
        set (value) {
            if (typeof value === "string") {
                const arr = value.split(",");
                const trimValue = arr.map((item)=>item.trim());
                this.setDataValue("paymentOptions", JSON.stringify(trimValue));
            }
        }
    },
    totalFundingVolume: lib/* DataTypes */.oS.STRING,
    averageLoanDuration: lib/* DataTypes */.oS.STRING,
    description: lib/* DataTypes */.oS.TEXT,
    regulated: lib/* DataTypes */.oS.BOOLEAN,
    buybackGuarantee: lib/* DataTypes */.oS.BOOLEAN,
    publicStatistics: lib/* DataTypes */.oS.BOOLEAN,
    signupBonus: lib/* DataTypes */.oS.BOOLEAN,
    secondaryMarket: lib/* DataTypes */.oS.BOOLEAN,
    autoInvest: lib/* DataTypes */.oS.BOOLEAN,
    whoCanInvest: lib/* DataTypes */.oS.TEXT,
    slug: lib/* DataTypes */.oS.STRING
}, {
    sequelize: utils,
    modelName: "Platform"
});
/* harmony default export */ const platform = (Platform);

;// CONCATENATED MODULE: ./app/api/send-mail/route.ts



const GET = async (req, res)=>{
    const allPlatform = await platform.findAll({
        order: [
            [
                "id",
                "DESC"
            ]
        ]
    });
    return new Response(JSON.stringify(allPlatform), {
        status: 200
    });
};
const POST = async (req)=>{
    const data = await req.json();
    if ((0,helpers/* mailDataType */.hb)(data)) {
        if (!data || !data["Platform name"] || !data["Website"] || !data["E-mail"] || !data["Message"]) {
            return new Response(JSON.stringify({
                message: "Bad request"
            }), {
                status: 400
            });
        }
    } else {
        if (!data || !data["Name"] || !data["E-mail"] || !data["Message"]) {
            return new Response(JSON.stringify({
                message: "Bad request"
            }), {
                status: 400
            });
        }
    }
    try {
        const subject = (0,helpers/* mailDataType */.hb)(data) ? data["Platform name"] : data["Name"];
        await transporter.sendMail({
            ...mailOptions,
            ...generateEmailContent(data),
            subject: subject
        });
        return new Response(JSON.stringify({
            success: true
        }), {
            status: 200
        });
    } catch (err) {
        if (err instanceof Error) {
            return new Response(JSON.stringify(err.message), {
                status: 400
            });
        }
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fsend-mail%2Froute&name=app%2Fapi%2Fsend-mail%2Froute&pagePath=private-next-app-dir%2Fapi%2Fsend-mail%2Froute.ts&appDir=C%3A%5CUsers%5Ckuros%5CDesktop%5Ccrowd-place%5Capp&appPaths=%2Fapi%2Fsend-mail%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/send-mail/route","pathname":"/api/send-mail","filename":"route","bundlePath":"app/api/send-mail/route"},"resolvedPagePath":"C:\\Users\\kuros\\Desktop\\crowd-place\\app\\api\\send-mail\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/send-mail/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [733,662,501,284,562], () => (__webpack_exec__(90862)));
module.exports = __webpack_exports__;

})();