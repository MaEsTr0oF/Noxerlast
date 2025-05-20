module.exports = {

"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/utils/globalVariables.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "iconsBaseLink": (()=>iconsBaseLink)
});
const iconsBaseLink = "https://static-sda.ru/front_end/icons/";
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/utils/api/index.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiInstance": (()=>apiInstance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
// Определяем baseURL динамически на основе текущего хоста
const getBaseUrl = ()=>{
    // Для серверного рендеринга или во время сборки
    if ("TURBOPACK compile-time truthy", 1) {
        return "/api";
    }
    "TURBOPACK unreachable";
//return `https://noxer-ai.ru/api`;
};
const apiInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: getBaseUrl()
});
apiInstance.interceptors.request.use((config)=>{
    return config;
}, (err)=>{
    console.debug(err);
});
apiInstance.interceptors.response.use((response)=>response, async (err)=>{
    const request = err.config;
    if (err.response?.status === 401 && !request._retry) {
        request._retry = true;
    }
    console.debug(err);
});
}}),
"[project]/store/DataStore.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DataStore": (()=>DataStore),
    "dataStore": (()=>dataStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx/dist/mobx.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$persist$2d$store$2f$lib$2f$esm5$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-persist-store/lib/esm5/index.js [app-ssr] (ecmascript) <module evaluation>");
;
;
;
class DataStore {
    data = {};
    error = null;
    lastUpdated = 0;
    refreshInterval = null;
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeAutoObservable"])(this);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }
    /**
   * Устанавливает интервал для автоматического обновления данных
   * @param interval Интервал в миллисекундах
   */ setupAutoRefresh(interval) {
        // Очищаем предыдущий интервал, если есть
        if (this.refreshInterval) {
            clearInterval(this.refreshInterval);
        }
        // Устанавливаем новый интервал
        this.refreshInterval = window.setInterval(()=>{
            this.fetchProducts();
        }, interval);
    }
    /**
   * Принудительно обновляет данные из API
   */ async refreshData() {
        return this.fetchProducts();
    }
    /**
   * Загружает данные из API
   */ async fetchProducts() {
        this.error = null;
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiInstance"].get("/products");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
                this.data = response.data;
                this.lastUpdated = Date.now();
                // Генерируем событие обновления данных для компонентов
                if ("TURBOPACK compile-time falsy", 0) {
                    "TURBOPACK unreachable";
                }
            });
            return true;
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
                this.error = error instanceof Error ? error.message : "Неизвестная ошибка";
            });
            return false;
        }
    }
}
const dataStore = new DataStore();
}}),
"[project]/utils/detectIOS.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "detectIOS": (()=>detectIOS)
});
const detectIOS = ()=>{
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
};
}}),
"[project]/widgets/header/TheHeader.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/globalVariables.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/DataStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/detectIOS.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const TheHeader = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [tgApp, setTgApp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const profileImageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const profileNameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const settingButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tgApp = window.Telegram.WebApp;
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        return ()=>{
            window.removeEventListener("pageshow", ()=>{});
        };
    }, [
        location
    ]);
    function openLinkHandler() {
        let channelName = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.telegram_header_link_value || "noxerai_bot";
        // Если имя канала начинается с @, удаляем этот символ для URL
        if (channelName.startsWith("@")) {
            channelName = channelName.substring(1);
        }
        const link = `https://t.me/${channelName}`;
        if ("TURBOPACK compile-time truthy", 1) {
            window.open(link, "_blank");
        }
    }
    function detectMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    const formatName = (name)=>{
        if (!name) return "";
        return name.charAt(0).toLocaleUpperCase() + name.slice(1).toLocaleLowerCase();
    };
    const getProjectName = ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.project_name_value || "noxerai_bot";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `header 
    ${!detectMobile() ? "header-mobile" : ""}
    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectIOS"])() ? "header-ios" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header-profile",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        ref: profileImageRef,
                        className: "header-profile-image",
                        src: user.photo_url,
                        alt: "",
                        id: "header-avatar-image"
                    }, void 0, false, {
                        fileName: "[project]/widgets/header/TheHeader.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: profileNameRef,
                        className: "header-profile-text",
                        id: "header-username-text",
                        children: [
                            user.first_name ? formatName(user.first_name) : "Вы",
                            " ",
                            user.last_name || ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/widgets/header/TheHeader.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/widgets/header/TheHeader.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: openLinkHandler,
                className: "header-telegram",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}telegram-icon.svg`,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/widgets/header/TheHeader.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "header-telegram-text index-telegram-open-special_tg",
                        children: getProjectName()
                    }, void 0, false, {
                        fileName: "[project]/widgets/header/TheHeader.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/widgets/header/TheHeader.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/widgets/header/TheHeader.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = TheHeader;
}}),
"[project]/store/ShoppingCartStore.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ShoppingCartStore": (()=>ShoppingCartStore),
    "shoppingCartStore": (()=>shoppingCartStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx/dist/mobx.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$persist$2d$store$2f$lib$2f$esm5$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-persist-store/lib/esm5/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/DataStore.ts [app-ssr] (ecmascript)");
;
;
;
class ShoppingCartStore {
    items = [];
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeAutoObservable"])(this);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }
    addToCart(id, cartData) {
        const isObject = typeof cartData === "object" && cartData !== null;
        const paramTitle = isObject ? cartData.paramTitle : cartData;
        const colorId = isObject ? cartData.colorId : null;
        const colorImage = isObject ? cartData.colorImage : null;
        // Проверяем, есть ли уже такой товар в корзине
        const existingItem = this.items.find((item)=>{
            const paramMatch = item.Product_ID === id && (!paramTitle || item.parameters?.parameter_string === paramTitle);
            const colorMatch = !colorId || item.selectedColor?.id === colorId;
            return paramMatch && colorMatch;
        });
        if (existingItem) {
            this.increaseQuantity(existingItem.Product_ID, paramTitle, colorId);
            return;
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data || !__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data.products) {
            return;
        }
        const baseProduct = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data.products.find((product)=>product.Product_ID === id);
        if (!baseProduct) {
            return;
        }
        // Находим выбранный параметр
        let selectedParameter = null;
        if (paramTitle && baseProduct.parameters && Array.isArray(baseProduct.parameters)) {
            selectedParameter = baseProduct.parameters.find((param)=>param.parameter_string === paramTitle);
            if (!selectedParameter && baseProduct.parameters.length > 0) {
                selectedParameter = baseProduct.parameters[0];
            }
        }
        // Находим выбранный цвет
        let selectedColor = null;
        if (colorId && baseProduct.colors && Array.isArray(baseProduct.colors)) {
            selectedColor = baseProduct.colors.find((color)=>color.Color_ID === colorId);
            // Если не нашли цвет в списке цветов товара, но у нас есть ID и данные о цвете из карточки товара
            if (!selectedColor && isObject && cartData.colorName) {
                selectedColor = {
                    Color_ID: colorId,
                    Color_Name: cartData.colorName,
                    Color_Code: cartData.colorCode || "",
                    Color_image: colorImage,
                    Product_ID: id,
                    discount: cartData.discount || 0
                };
            }
        }
        // Вычисляем итоговую цену с учетом скидки
        let finalPrice = selectedParameter?.price || baseProduct.Price || 0;
        // Применяем скидку на цвет (абсолютное значение)
        if (selectedColor && selectedColor.discount) {
            finalPrice = Math.max(0, finalPrice - selectedColor.discount);
        }
        const productToAdd = {
            ...baseProduct,
            parameters: selectedParameter,
            selectedColor: selectedColor ? {
                id: selectedColor.Color_ID,
                name: selectedColor.Color_Name,
                code: selectedColor.Color_Code,
                image: selectedColor.Color_image || colorImage,
                discount: selectedColor.discount
            } : null,
            final_price: finalPrice,
            quantity: 1
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
            this.items = [
                ...this.items,
                productToAdd
            ];
        });
    }
    removeFromCart(productId, parameterString, colorId) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
            this.items = this.items.filter((item)=>{
                const paramMatch = !(item.Product_ID === productId && (!parameterString || item.parameters?.parameter_string === parameterString));
                const colorMatch = !colorId || item.selectedColor?.id !== colorId;
                return paramMatch || colorMatch;
            });
        });
    }
    clearCart() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
            this.items = [];
        });
        // Очищаем также элементы из localStorage, связанные с корзиной
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }
    increaseQuantity(productId, parameterString, colorId) {
        const updatedItems = [
            ...this.items
        ];
        const itemIndex = updatedItems.findIndex((item)=>{
            const paramMatch = item.Product_ID === productId && (!parameterString || item.parameters?.parameter_string === parameterString);
            const colorMatch = !colorId || item.selectedColor?.id === colorId;
            return paramMatch && colorMatch;
        });
        if (itemIndex !== -1) {
            updatedItems[itemIndex] = {
                ...updatedItems[itemIndex],
                quantity: (updatedItems[itemIndex].quantity || 1) + 1
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
                this.items = updatedItems;
            });
        }
    }
    decreaseQuantity(productId, parameterString, colorId) {
        const updatedItems = [
            ...this.items
        ];
        const itemIndex = updatedItems.findIndex((item)=>{
            const paramMatch = item.Product_ID === productId && (!parameterString || item.parameters?.parameter_string === parameterString);
            const colorMatch = !colorId || item.selectedColor?.id === colorId;
            return paramMatch && colorMatch;
        });
        if (itemIndex !== -1 && updatedItems[itemIndex].quantity > 1) {
            updatedItems[itemIndex] = {
                ...updatedItems[itemIndex],
                quantity: updatedItems[itemIndex].quantity - 1
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
                this.items = updatedItems;
            });
        }
    }
}
const shoppingCartStore = new ShoppingCartStore();
}}),
"[project]/widgets/footer/TheFooter.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/observer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/ShoppingCartStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/detectIOS.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const TheFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observer"])(()=>{
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    const [isIOS, setIsIOS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [links, setLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            icon: '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M7.34655 18.9553H3.98376C2.74494 18.9553 1.74121 17.9516 1.74121 16.7127V10.1159C1.74197 9.63537 1.84541 9.1605 2.0446 8.72315C2.2438 8.2858 2.53415 7.89606 2.89621 7.58005L8.95742 2.30077C9.36557 1.94571 9.88831 1.75015 10.4293 1.75015C10.9703 1.75015 11.493 1.94571 11.9011 2.30077L17.9624 7.58107C18.3243 7.89697 18.6146 8.28654 18.8138 8.72371C19.0129 9.16087 19.1165 9.63554 19.1174 10.1159V16.7127C19.1174 17.3073 18.8812 17.8776 18.4609 18.2981C18.0406 18.7186 17.4704 18.955 16.8758 18.9553H13.7921V12.2287C13.7921 11.3006 13.0398 10.5473 12.1107 10.5473H9.02897C8.09986 10.5473 7.34757 11.3006 7.34757 12.2287L7.34655 18.9553ZM7.34655 18.9553H13.7931" stroke="#8B8B8B" strokeWidth="1.3" strokeLinejoin="round"/>\n' + "</svg>",
            href: "/",
            isActive: false
        },
        {
            id: 2,
            icon: '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M4.375 8.75H6.125C7.875 8.75 8.75 7.875 8.75 6.125V4.375C8.75 2.625 7.875 1.75 6.125 1.75H4.375C2.625 1.75 1.75 2.625 1.75 4.375V6.125C1.75 7.875 2.625 8.75 4.375 8.75Z" stroke="#8B8B8B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>\n' + '<path d="M14.875 8.75H16.625C18.375 8.75 19.25 7.875 19.25 6.125V4.375C19.25 2.625 18.375 1.75 16.625 1.75H14.875C13.125 1.75 12.25 2.625 12.25 4.375V6.125C12.25 7.875 13.125 8.75 14.875 8.75Z" stroke="#8B8B8B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>\n' + '<path d="M14.875 19.25H16.625C18.375 19.25 19.25 18.375 19.25 16.625V14.875C19.25 13.125 18.375 12.25 16.625 12.25H14.875C13.125 12.25 12.25 13.125 12.25 14.875V16.625C12.25 18.375 13.125 19.25 14.875 19.25Z" stroke="#8B8B8B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>\n' + '<path d="M4.375 19.25H6.125C7.875 19.25 8.75 18.375 8.75 16.625V14.875C8.75 13.125 7.875 12.25 6.125 12.25H4.375C2.625 12.25 1.75 13.125 1.75 14.875V16.625C1.75 18.375 2.625 19.25 4.375 19.25Z" stroke="#8B8B8B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>\n' + "</svg>",
            href: "/catalog",
            isActive: false
        },
        {
            id: 4,
            icon: '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M11.0425 18.2088C10.745 18.3138 10.255 18.3138 9.9575 18.2088C7.42 17.3426 1.75 13.7288 1.75 7.60384C1.75 4.90009 3.92875 2.71259 6.615 2.71259C8.2075 2.71259 9.61625 3.48259 10.5 4.67259C11.3837 3.48259 12.8013 2.71259 14.385 2.71259C17.0713 2.71259 19.25 4.90009 19.25 7.60384C19.25 13.7288 13.58 17.3426 11.0425 18.2088Z" stroke="#8B8B8B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>\n' + "</svg>",
            href: "/favorites",
            isActive: false
        },
        {
            id: 5,
            icon: '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n' + '<path d="M7.70913 1.75L4.54163 4.92625" stroke="#8B8B8B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>\n' + '<path d="M13.2916 1.75L16.4591 4.92625" stroke="#8B8B8B" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>\n' + '<path d="M1.75 6.86816C1.75 5.24941 2.61625 5.11816 3.6925 5.11816H17.3075C18.3838 5.11816 19.25 5.24941 19.25 6.86816C19.25 8.74941 18.3838 8.61816 17.3075 8.61816H3.6925C2.61625 8.61816 1.75 8.74941 1.75 6.86816Z" stroke="#8B8B8B" strokeWidth="1.3"/>\n' + '<path d="M8.54004 12.25V15.3562" stroke="#8B8B8B" strokeWidth="1.3" strokeLinecap="round"/>\n' + '<path d="M12.5653 12.25V15.3562" stroke="#8B8B8B" strokeWidth="1.3" strokeLinecap="round"/>\n' + '<path d="M3.0625 8.75L4.29625 16.31C4.57625 18.0075 5.25 19.25 7.7525 19.25H13.0288C15.75 19.25 16.1525 18.06 16.4675 16.415L17.9375 8.75" stroke="#8B8B8B" strokeWidth="1.3" strokeLinecap="round"/>\n' + "</svg>",
            href: "/shoppingcart",
            isActive: false
        }
    ]);
    const cartCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const items = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items
        ];
        return items.reduce((acc, item)=>acc + (item.quantity || 1), 0);
    }, [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLinks(links.map((link)=>{
            return link.href === location.pathname ? {
                ...link,
                isActive: true
            } : {
                ...link,
                isActive: false
            };
        }));
    }, [
        location
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: `footer ${isIOS ? "footer-ios" : ""}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "footer-nav",
            children: [
                links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
                        to: link.href,
                        className: `footer-nav-link click-effect-block ${link.isActive ? "activeLink" : ""}`,
                        dangerouslySetInnerHTML: {
                            __html: link.icon
                        }
                    }, link.id, false, {
                        fileName: "[project]/widgets/footer/TheFooter.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)),
                cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `footer-cart-badge${location.pathname.includes("shoppingcart") ? " footer-cart-badge--active" : ""}`,
                    children: cartCount
                }, void 0, false, {
                    fileName: "[project]/widgets/footer/TheFooter.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/widgets/footer/TheFooter.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/widgets/footer/TheFooter.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
});
const __TURBOPACK__default__export__ = TheFooter;
}}),
"[project]/widgets/PageWrapper.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$header$2f$TheHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/header/TheHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$footer$2f$TheFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/footer/TheFooter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/detectIOS.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/DataStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const PageWrapper = ({ children })=>{
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    const isProductPage = location.pathname.includes("/product/");
    function clickBotHandler() {
        let username = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.telegram_bot_username_value || "noxerai_bot";
        // Если имя пользователя начинается с @, удаляем этот символ для URL
        if (username.startsWith("@")) {
            username = username.substring(1);
        }
        const link = `https://t.me/${username}`;
        if ("TURBOPACK compile-time truthy", 1) {
            window.open(link, "_blank");
        }
    }
    const getProjectName = ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.project_name_value || "noxerai_bot";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$header$2f$TheHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/widgets/PageWrapper.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `wrapper-footer 
          ${isProductPage ? "wrapper-footer-productPage" : ""}
          ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectIOS"])() ? "wrapper-footer--ios" : ""}
          `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "footer-text",
                    children: [
                        "Разработано на платформе Noxer ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/widgets/PageWrapper.tsx",
                            lineNumber: 51,
                            columnNumber: 42
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            onClick: clickBotHandler,
                            className: "index-telegram-open-special_tg footer-link",
                            children: [
                                "@",
                                getProjectName()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/widgets/PageWrapper.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/widgets/PageWrapper.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/widgets/PageWrapper.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$footer$2f$TheFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/widgets/PageWrapper.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = PageWrapper;
}}),
"[project]/store/FavoritesStore.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FavoritesStore": (()=>FavoritesStore),
    "favoritesStore": (()=>favoritesStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx/dist/mobx.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$persist$2d$store$2f$lib$2f$esm5$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-persist-store/lib/esm5/index.js [app-ssr] (ecmascript) <module evaluation>");
;
;
class FavoritesStore {
    favoritesIds = [];
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["makeAutoObservable"])(this);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }
    toggleFavorite(id) {
        this.favoritesIds.includes(id) ? this.favoritesIds = this.favoritesIds.filter((favId)=>favId !== id) : this.favoritesIds.push(id);
    }
    removeFavorite(id) {
        this.favoritesIds = this.favoritesIds.filter((favId)=>favId !== id);
    }
    isFavorite(id) {
        return this.favoritesIds.includes(id);
    }
}
const favoritesStore = new FavoritesStore();
}}),
"[project]/messages/ru.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"entities\":{\"product\":{\"buttonText\":\"Подробнее\"}},\"features\":{},\"shared\":{\"search\":{\"placeholder\":\"Найти товары\"}},\"widgets\":{\"header\":{\"closeButtonText\":\"Закрыть\",\"returnButtonText\":\"Назад\",\"tgBotName\":\"@ai_brandbot\"},\"catalog\":{\"title\":\"Каталог\"},\"favorites\":{\"title\":\"Избранное\"}}}"));}}),
"[project]/utils/getTagBackground.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTagBackground": (()=>getTagBackground)
});
const getTagBackground = (tag)=>{
    switch(tag?.toLowerCase()){
        case "хит":
            return "bg-[#ff6723]";
        case "hit":
            return "bg-[#ff6723]";
        case "new":
            return "bg-[#45b649]";
        case "sale":
            return "bg-[#ffca28]";
        default:
            return "bg-[#292928]";
    }
};
}}),
"[project]/utils/getTagLabel.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getTagLabel": (()=>getTagLabel)
});
const getTagLabel = (tag)=>{
    switch(tag?.toLowerCase()){
        case "хит":
        case "hit":
            return "ХИТ";
        case "new":
            return "NEW";
        case "sale":
            return "SALE";
        default:
            return tag;
    }
};
}}),
"[project]/entities/Product.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/observer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$ru$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/messages/ru.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$FavoritesStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/FavoritesStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getTagBackground$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/getTagBackground.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getTagLabel$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/getTagLabel.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const Product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observer"])(({ id, tag, images, initialPrice, currentPrice, title, categoryId })=>{
    const stopPropagation = (e)=>{
        e.preventDefault();
        e.stopPropagation();
    };
    // Проверяем валидность данных
    const hasValidId = id && typeof id === "number";
    const hasValidTag = tag && typeof tag === "string";
    const hasValidImages = Array.isArray(images) && images.length > 0;
    const hasValidPrice = currentPrice && typeof currentPrice === "string";
    const hasValidTitle = title && typeof title === "string";
    if (!hasValidId) {
        console.error("Продукт без валидного ID:", id);
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
        to: `/product/${id}`,
        className: "product-card click-effect-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "product-card-sliderWrapper",
                children: [
                    hasValidTag && tag.trim() !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `product-card-sliderWrapper-tag ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getTagBackground$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTagBackground"])(tag)}`,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getTagLabel$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTagLabel"])(tag)
                    }, void 0, false, {
                        fileName: "[project]/entities/Product.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this),
                    hasValidImages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                        modules: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                        ],
                        spaceBetween: 10,
                        slidesPerView: 1,
                        pagination: {
                            clickable: true
                        },
                        className: "product-card-swiper",
                        style: {
                            width: "100%",
                            height: "100%"
                        },
                        children: images.map((image)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "product-slide-container",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        className: "product-card-slide-image",
                                        src: image.Image_URL ? image.Image_URL : "/placeholder-image.jpg",
                                        alt: `Изображение товара ${title || "Товар"}`,
                                        onError: (e)=>{
                                            e.currentTarget.src = "/placeholder-image.jpg";
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/entities/Product.tsx",
                                        lineNumber: 78,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/entities/Product.tsx",
                                    lineNumber: 75,
                                    columnNumber: 19
                                }, this)
                            }, image.Image_ID || Math.random(), false, {
                                fileName: "[project]/entities/Product.tsx",
                                lineNumber: 74,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/entities/Product.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "product-card-no-image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Нет изображения"
                        }, void 0, false, {
                            fileName: "[project]/entities/Product.tsx",
                            lineNumber: 96,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/entities/Product.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.preventDefault();
                            e.stopPropagation();
                            __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$FavoritesStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favoritesStore"].toggleFavorite(id);
                        },
                        className: "product-card-addToFavoritesButton",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "18",
                            height: "16",
                            viewBox: "0 0 18 16",
                            fill: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$FavoritesStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favoritesStore"].favoritesIds.some((item)=>item === id) ? "#FE646F" : "transparent",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9.30663 14.7267L9.30662 14.7267L9.30029 14.7289C9.24983 14.7467 9.14099 14.7668 8.99996 14.7668C8.85893 14.7668 8.75009 14.7467 8.69963 14.7289L8.69964 14.7289L8.69329 14.7267C7.57825 14.346 5.71238 13.3333 4.13388 11.716C2.56322 10.1067 1.31663 7.94228 1.31663 5.24183C1.31663 3.02277 3.10364 1.2335 5.29996 1.2335C6.60123 1.2335 7.75317 1.86153 8.47812 2.8377C8.60075 3.00282 8.79429 3.10016 8.99996 3.10016C9.20563 3.10016 9.39917 3.00282 9.5218 2.8377C10.2464 1.86206 11.4064 1.2335 12.7 1.2335C14.8963 1.2335 16.6833 3.02277 16.6833 5.24183C16.6833 7.94228 15.4367 10.1067 13.866 11.716C12.2875 13.3333 10.4217 14.346 9.30663 14.7267Z",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$FavoritesStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favoritesStore"].favoritesIds.some((item)=>item === id) ? "#FE646F" : "#6C6C6C",
                                strokeWidth: "1.3",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/entities/Product.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/entities/Product.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/entities/Product.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/entities/Product.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "product-card-priceContainer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "product-card-priceContainer-current product-card-text",
                        children: hasValidPrice ? `${currentPrice} ₽` : "Цена по запросу"
                    }, void 0, false, {
                        fileName: "[project]/entities/Product.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    initialPrice && initialPrice !== "0" && initialPrice !== currentPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "product-card-priceContainer-initial product-card-text",
                        children: [
                            initialPrice,
                            " ₽"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/entities/Product.tsx",
                        lineNumber: 143,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/entities/Product.tsx",
                lineNumber: 135,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "product-card-title product-card-text",
                children: hasValidTitle ? title : "Товар без названия"
            }, void 0, false, {
                fileName: "[project]/entities/Product.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "product-card-link-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "product-card-link product-card-text",
                    suppressHydrationWarning: true,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$ru$2e$json__$28$json$29$__["default"].entities.product.buttonText || "Перейти к товару"
                }, void 0, false, {
                    fileName: "[project]/entities/Product.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/entities/Product.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/entities/Product.tsx",
        lineNumber: 56,
        columnNumber: 7
    }, this);
});
const __TURBOPACK__default__export__ = Product;
}}),
"[project]/shared/Loading.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
;
function Loading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "loading-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loading-spinner"
        }, void 0, false, {
            fileName: "[project]/shared/Loading.tsx",
            lineNumber: 6,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/shared/Loading.tsx",
        lineNumber: 5,
        columnNumber: 12
    }, this);
}
const __TURBOPACK__default__export__ = Loading;
}}),
"[project]/widgets/sections/ProductsSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/observer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/DataStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$FavoritesStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/FavoritesStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$entities$2f$Product$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/entities/Product.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/Loading.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const ProductsSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observer"])(({ isFavorites, categoryFilter, tagFilter, customTagFilter, searchQuery = "", importanceFilter = false, limit, showOnMainOnly = false })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() || "";
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loaderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [originalProducts, setOriginalProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sortedProducts, setSortedProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoad, setIsLoad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("pending");
    const [isDataLoad, setIsDataLoad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(12); // Начальное количество отображаемых товаров
    const [loadingMore, setLoadingMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Флаг загрузки дополнительных товаров
    const [allLoaded, setAllLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Флаг, что все товары загружены
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    // Функция для безопасного получения цен из параметров продукта
    const getProductPrices = (product)=>{
        // Проверяем наличие массива параметров и его непустоту
        if (!product.parameters || !Array.isArray(product.parameters) || product.parameters.length === 0) {
            return {
                initialPrice: "",
                currentPrice: "0"
            };
        }
        // Находим параметр с пометкой chosen или берем первый
        const chosenParam = product.parameters.find((p)=>p.chosen) || product.parameters[0];
        if (!chosenParam) {
            return {
                initialPrice: "",
                currentPrice: "0"
            };
        }
        // Безопасно извлекаем цены
        const initialPrice = chosenParam.old_price ? String(chosenParam.old_price) : "";
        const currentPrice = chosenParam.price ? String(chosenParam.price) : "0";
        return {
            initialPrice,
            currentPrice
        };
    };
    const filterProducts = (products, filter)=>{
        if (!filter) return products;
        return products.filter((product)=>product.categories && Array.isArray(product.categories) && product.categories.length > 0 && product.categories[0].Category_ID === filter);
    };
    const filterCustomProducts = (products, filters)=>{
        if (!filters || filters.length === 0) return products;
        const filteredProducts = products.filter((product)=>{
            // Разделим фильтры на "sale" и остальные кастомные теги
            const hasSaleFilter = filters.includes("sale");
            const otherFilters = filters.filter((filter)=>filter !== "sale");
            // Проверим, соответствует ли товар фильтру "sale", если он активен
            let matchesSale = true;
            if (hasSaleFilter) {
                const hasSaleMark = product.marks && Array.isArray(product.marks) && product.marks.some((mark)=>{
                    const isMatch = mark.Mark_Name && mark.Mark_Name.toLowerCase() === "sale";
                    return isMatch;
                });
                matchesSale = hasSaleMark;
            }
            // Проверим, соответствует ли товар другим кастомным тегам, если они есть
            let matchesOtherTags = true;
            if (otherFilters.length > 0) {
                // Товар должен соответствовать хотя бы одному из выбранных тегов
                matchesOtherTags = product.tags && Array.isArray(product.tags) && otherFilters.some((filter)=>product.tags.includes(filter));
            }
            // В режиме отображения товаров со скидкой с дополнительными тегами:
            // товар должен иметь метку sale И соответствовать хотя бы одному из выбранных тегов
            return matchesSale && matchesOtherTags;
        });
        return filteredProducts;
    };
    const filterBySearchQuery = (products, query)=>{
        if (!query || query.trim() === "") return products;
        // Приводим запрос к нижнему регистру и разбиваем на отдельные слова
        const searchWords = query.toLowerCase().trim().split(/\s+/).filter((word)=>word.length > 0);
        if (searchWords.length === 0) return products;
        return products.filter((product)=>{
            // Если нет названия продукта, пропускаем его
            if (!product.Product_Name) return false;
            // Получаем текст для поиска: название продукта
            const productName = product.Product_Name.toLowerCase();
            // Получаем описание продукта, если оно есть
            let productDescription = "";
            if (product.extras && Array.isArray(product.extras) && product.extras.length > 0 && product.extras[0].Characteristics) {
                productDescription = product.extras[0].Characteristics.toLowerCase();
            }
            // Объединяем название и описание для поиска
            const searchText = productName + " " + productDescription;
            // Проверяем, содержит ли текст все слова из запроса
            return searchWords.every((word)=>searchText.includes(word));
        });
    };
    const sortProducts = (products, sortType)=>{
        if (!sortType) return [
            ...products
        ];
        switch(sortType){
            case "Сначала новые":
                return [
                    ...products
                ].sort((a, b)=>{
                    if (!a.Created_At || !b.Created_At) return 0;
                    return new Date(b.Created_At).getTime() - new Date(a.Created_At).getTime();
                });
            case "Сначала старые":
                return [
                    ...products
                ].sort((a, b)=>{
                    if (!a.Created_At || !b.Created_At) return 0;
                    return new Date(a.Created_At).getTime() - new Date(b.Created_At).getTime();
                });
            case "Сначала дешевле":
                return [
                    ...products
                ].sort((a, b)=>{
                    const { currentPrice: aCurrentPrice } = getProductPrices(a);
                    const { currentPrice: bCurrentPrice } = getProductPrices(b);
                    const aPrice = parseFloat(aCurrentPrice) || 0;
                    const bPrice = parseFloat(bCurrentPrice) || 0;
                    return aPrice - bPrice;
                });
            case "Сначала дороже":
                return [
                    ...products
                ].sort((a, b)=>{
                    const { currentPrice: aCurrentPrice } = getProductPrices(a);
                    const { currentPrice: bCurrentPrice } = getProductPrices(b);
                    // Преобразуем цены в числа для корректного сравнения
                    const aPrice = parseFloat(aCurrentPrice) || 0;
                    const bPrice = parseFloat(bCurrentPrice) || 0;
                    return bPrice - aPrice;
                });
            case "Сначала популярные":
                return [
                    ...products
                ].sort((a, b)=>{
                    if (a.importance_num !== null && b.importance_num !== null) {
                        return b.importance_num - a.importance_num;
                    }
                    if (a.importance_num !== null) return -1;
                    if (b.importance_num !== null) return 1;
                    return 0;
                });
            default:
                return [
                    ...products
                ];
        }
    };
    const getCorrectArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isFavorites) {
            return sortedProducts.filter((product)=>__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$FavoritesStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favoritesStore"].favoritesIds.includes(product.Product_ID));
        } else {
            return sortedProducts;
        }
    }, [
        isFavorites,
        sortedProducts,
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$FavoritesStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favoritesStore"].favoritesIds
    ]);
    const filterOnMainProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((products)=>{
        if (!showOnMainOnly) return products;
        return products.filter((product)=>product.OnMain === true);
    }, [
        showOnMainOnly
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let result = [
            ...originalProducts
        ];
        if (showOnMainOnly) {
            result = filterOnMainProducts(result);
        }
        if (categoryFilter) {
            result = filterProducts(result, categoryFilter);
        }
        if (tagFilter) {
            result = sortProducts(result, tagFilter);
        }
        if (customTagFilter && customTagFilter.length > 0) {
            result = filterCustomProducts(result, customTagFilter);
        }
        if (searchQuery) {
            result = filterBySearchQuery(result, searchQuery);
        }
        if (importanceFilter) {
            result = [
                ...result
            ].sort((a, b)=>{
                if (a.importance_num !== null && b.importance_num !== null) {
                    return b.importance_num - a.importance_num;
                }
                if (a.importance_num !== null) return -1;
                if (b.importance_num !== null) return 1;
                return 0;
            });
        }
        setSortedProducts(result);
    }, [
        originalProducts,
        categoryFilter,
        tagFilter,
        customTagFilter,
        searchQuery,
        importanceFilter,
        showOnMainOnly
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data).length) {
            setIsDataLoad(true);
            setOriginalProducts(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.products || []);
            setSortedProducts(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.products || []);
        } else {
            setIsDataLoad(false);
        }
    }, [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDataLoad) {
            const productsArray = getCorrectArray();
            setIsLoad(productsArray.length > 0);
        }
    }, [
        getCorrectArray,
        isDataLoad
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (pathname.includes("shoppingcart")) {
        // Ничего не делаем, так как limit теперь является prop
        }
    }, [
        pathname
    ]);
    // Функция для загрузки дополнительных товаров
    const loadMoreProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (loadingMore || allLoaded) return;
        setLoadingMore(true);
        // Имитация задержки загрузки для плавности
        setTimeout(()=>{
            const currentArray = getCorrectArray();
            // Если достигли конца списка или задан лимит, не загружаем больше
            if (visibleCount >= currentArray.length || limit && visibleCount >= limit) {
                setAllLoaded(true);
            } else {
                // Загружаем следующие 12 товаров
                setVisibleCount((prevCount)=>Math.min(prevCount + 12, limit || currentArray.length));
            }
            setLoadingMore(false);
        }, 300);
    }, [
        visibleCount,
        loadingMore,
        allLoaded,
        getCorrectArray,
        limit
    ]);
    // Настройка наблюдателя за прокруткой
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loaderRef.current || !isClient) return;
        const observer = new IntersectionObserver((entries)=>{
            if (entries[0].isIntersecting && !loadingMore && !allLoaded) {
                loadMoreProducts();
            }
        }, {
            threshold: 0.1
        } // Начинаем загрузку, когда видно 10% загрузчика
        );
        observer.observe(loaderRef.current);
        return ()=>{
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [
        loadMoreProducts,
        loadingMore,
        allLoaded,
        isClient
    ]);
    // Сбрасываем счетчики при изменении фильтров
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setVisibleCount(12);
        setAllLoaded(false);
    }, [
        categoryFilter,
        tagFilter,
        customTagFilter,
        searchQuery,
        showOnMainOnly
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "productsSection",
        ref: sectionRef,
        children: isLoad === false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "no-products-message",
            children: "товар не найден"
        }, void 0, false, {
            fileName: "[project]/widgets/sections/ProductsSection.tsx",
            lineNumber: 378,
            columnNumber: 11
        }, this) : isLoad === "pending" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/widgets/sections/ProductsSection.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "productsSection-grid",
                    children: getCorrectArray().slice(0, limit ? Math.min(visibleCount, limit) : visibleCount).map((product, index)=>{
                        if (!product || !product.Product_ID) {
                            return null;
                        }
                        const { initialPrice, currentPrice } = getProductPrices(product);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$entities$2f$Product$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            id: product.Product_ID,
                            tag: product.marks && Array.isArray(product.marks) && product.marks.length > 0 ? product.marks[0].Mark_Name : "",
                            images: Array.isArray(product.images) ? product.images : [],
                            initialPrice: initialPrice,
                            currentPrice: currentPrice,
                            title: product.Product_Name || "",
                            categoryId: product.categories && Array.isArray(product.categories) && product.categories.length > 0 ? product.categories[0].Category_ID : 0
                        }, `${product.Product_ID}-${index}`, false, {
                            fileName: "[project]/widgets/sections/ProductsSection.tsx",
                            lineNumber: 394,
                            columnNumber: 21
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/widgets/sections/ProductsSection.tsx",
                    lineNumber: 383,
                    columnNumber: 13
                }, this),
                !allLoaded && isLoad === true && getCorrectArray().length > visibleCount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: loaderRef,
                    className: "productsSection-loader",
                    children: loadingMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/widgets/sections/ProductsSection.tsx",
                        lineNumber: 427,
                        columnNumber: 35
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/widgets/sections/ProductsSection.tsx",
                    lineNumber: 426,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/widgets/sections/ProductsSection.tsx",
        lineNumber: 376,
        columnNumber: 7
    }, this);
});
const __TURBOPACK__default__export__ = ProductsSection;
}}),
"[project]/shared/Slider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const Slider = ({ children, height, between = "10px" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: height
        },
        className: "slider-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                gap: between
            },
            className: "slider-content",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.map(children, (child, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "slider-item",
                    children: child
                }, index, false, {
                    fileName: "[project]/shared/Slider.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/shared/Slider.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/shared/Slider.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Slider;
}}),
"[project]/data/categories.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiData": (()=>apiData),
    "categories": (()=>categories),
    "getApiData": (()=>getApiData),
    "useApiData": (()=>useApiData),
    "useCategories": (()=>useCategories)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/DataStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
function getApiData() {
    // Формируем структуру данных, используя данные из DataStore
    // Если данные еще не загружены, возвращаем пустые массивы и объекты
    const apiData = {
        categories: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.categories || [],
        overall_product_tags_by_category: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.overall_product_tags_by_category || {},
        product_marks: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.product_marks || []
    };
    return apiData;
}
const categories = getApiData().categories;
const apiData = getApiData();
function useCategories() {
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getApiData().categories);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Начальная установка категорий
        setCategories(getApiData().categories);
        // Функция обновления категорий при изменении данных
        const updateCategories = ()=>{
            setCategories(getApiData().categories);
        };
        // Регистрируем функцию в качестве обработчика обновления данных
        window.addEventListener("storeDataUpdated", updateCategories);
        // Очистка при размонтировании компонента
        return ()=>{
            window.removeEventListener("storeDataUpdated", updateCategories);
        };
    }, []);
    return categories;
}
function useApiData() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getApiData());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Начальная установка данных
        setData(getApiData());
        // Функция обновления данных
        const updateData = ()=>{
            setData(getApiData());
        };
        // Регистрируем функцию в качестве обработчика обновления данных
        window.addEventListener("storeDataUpdated", updateData);
        // Очистка при размонтировании компонента
        return ()=>{
            window.removeEventListener("storeDataUpdated", updateData);
        };
    }, []);
    return data;
}
}}),
"[project]/widgets/pageContents/HomePageContent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/observer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/globalVariables.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/DataStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$sections$2f$ProductsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/sections/ProductsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/Slider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/Loading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/detectIOS.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/categories.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const HomePageContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observer"])(()=>{
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reviewsHref, setReviewsHref] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("/");
    const [reviewsButtonText, setReviewsButtonText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Отзывы");
    const [reviewsRating, setReviewsRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("4,9 • 37 000 оценок");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
        // Получаем ссылку на отзывы
        const linkValue = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.reviews_link_value || __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.main_page_reviews_block_d_value;
        if (linkValue) {
            setReviewsHref(linkValue);
        }
        // Получаем текст кнопки отзывов
        const reviewsText = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.main_page_reviews_block_d_description;
        if (reviewsText) {
            setReviewsButtonText(reviewsText);
        }
        // Получаем текст с рейтингом
        const ratingText = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.main_page_reviews_block_d_extra_field_1;
        if (ratingText) {
            setReviewsRating(ratingText);
        }
    }, [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data
    ]);
    const renderBanner = ()=>{
        if (!isClient) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "banner-placeholder",
                style: {
                    width: "100%",
                    height: "150px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this);
        }
        const swiperSettings = {
            modules: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
            ],
            spaceBetween: 10,
            slidesPerView: 1,
            pagination: {
                clickable: true
            },
            className: "product-card-swiper",
            style: {
                width: "100%",
                height: "100%"
            },
            simulateTouch: true,
            touchRatio: 1,
            resistanceRatio: 0,
            preventInteractionOnTransition: false,
            autoplay: {
                delay: 4000,
                disableOnInteraction: true
            }
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
            ...swiperSettings,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data.special_project_parameters_actions?.map((banner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "swiper-slide-content",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: banner.image_url ? banner.image_url : undefined,
                            alt: "",
                            className: "bannerImage"
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                            lineNumber: 97,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                        lineNumber: 96,
                        columnNumber: 15
                    }, this)
                }, banner.id, false, {
                    fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                    lineNumber: 95,
                    columnNumber: 13
                }, this))
        }, void 0, false, {
            fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        "data-page": "index",
        className: `homeMain ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectIOS"])() ? "homeMain--ios" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "banner",
                children: renderBanner()
            }, void 0, false, {
                fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "infoCards",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: reviewsHref,
                        className: "reviewsCard click-effect-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "reviewsTitle",
                                children: reviewsButtonText
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ratingContainer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}rating-icon.png`,
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "ratingText",
                                children: reviewsRating
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
                        to: "/catalog?tag=sale",
                        className: "salesCard click-effect-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}sales-icon.svg`,
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "salesText",
                                children: [
                                    "Акции ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                                        lineNumber: 135,
                                        columnNumber: 19
                                    }, this),
                                    "и скидки"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "categoriesContainer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    height: "100%",
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategories"])().map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
                            to: `/catalog?category=${category.Category_ID}`,
                            className: "categoryItem",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: category.Category_Image ? category.Category_Image : undefined,
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "categoryTitle",
                                    children: category.Category_ID === 2 ? "Аксессуары и техника" : category.Category_Name
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, category.Category_ID, true, {
                            fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                            lineNumber: 148,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$sections$2f$ProductsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isFavorites: false,
                importanceFilter: true,
                limit: 10,
                showOnMainOnly: true
            }, void 0, false, {
                fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/widgets/pageContents/HomePageContent.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
});
const __TURBOPACK__default__export__ = HomePageContent;
}}),
"[project]/shared/CategoryFilter.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/categories.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/Slider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const CategoryFilter = ({ activeCategory, onCategoryChange })=>{
    // Получаем актуальные данные категорий с помощью хука
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategories"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const categoryRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Новая функция для прокрутки к активной категории
    const scrollToActiveCategory = ()=>{
        if (!activeCategory || !containerRef.current) return;
        // Находим индекс активной категории
        const activeCategoryIndex = categories.findIndex((cat)=>cat.Category_ID === activeCategory);
        // Если нашли категорию и есть ссылка на DOM-элемент
        if (activeCategoryIndex !== -1 && categoryRefs.current[activeCategoryIndex]) {
            const activeElement = categoryRefs.current[activeCategoryIndex];
            // Проверяем, что элемент существует
            if (activeElement) {
                // Находим контейнер со скроллом
                const scrollContainer = containerRef.current.querySelector(".slider-container");
                if (scrollContainer) {
                    // Прокручиваем элемент в видимую область
                    activeElement.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center"
                    });
                }
            }
        }
    };
    // Вызываем скролл при изменении активной категории или списка категорий
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeCategory && categories.length > 0) {
            // Задержка для уверенности, что DOM готов
            setTimeout(scrollToActiveCategory, 300);
        }
    }, [
        activeCategory,
        categories
    ]);
    // Обработчик клика по категории
    const handleCategoryClick = (categoryId)=>{
        onCategoryChange(categoryId);
        // Если выбирается новая категория (не снимается выбор), скроллим к ней
        if (categoryId !== activeCategory) {
            setTimeout(scrollToActiveCategory, 50);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "categoryFilter",
        ref: containerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            height: "38px",
            children: categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: (el)=>{
                        categoryRefs.current[index] = el;
                    },
                    className: `categoryFilter-tag ${activeCategory === category.Category_ID ? "categoryFilter-tag--active" : ""}`,
                    onClick: ()=>handleCategoryClick(category.Category_ID),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: category.Category_Image,
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/shared/CategoryFilter.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "categoryFilter-tag-title",
                            children: category.Category_Name
                        }, void 0, false, {
                            fileName: "[project]/shared/CategoryFilter.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this),
                        activeCategory === category.Category_ID && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "categoryFilter-tag-closeButton",
                            onClick: (e)=>{
                                e.stopPropagation();
                                onCategoryChange(category.Category_ID);
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "10",
                                height: "10",
                                viewBox: "0 0 9 10",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M1 8.5L8 1.5",
                                        stroke: "#ffffff",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/shared/CategoryFilter.tsx",
                                        lineNumber: 117,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 8.5L1 1.5",
                                        stroke: "#ffffff",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/shared/CategoryFilter.tsx",
                                        lineNumber: 124,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shared/CategoryFilter.tsx",
                                lineNumber: 110,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/shared/CategoryFilter.tsx",
                            lineNumber: 103,
                            columnNumber: 15
                        }, this)
                    ]
                }, category.Category_ID, true, {
                    fileName: "[project]/shared/CategoryFilter.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/shared/CategoryFilter.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/shared/CategoryFilter.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CategoryFilter;
}}),
"[project]/data/tags.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "tags": (()=>tags)
});
const tags = [
    {
        id: 5,
        title: "Популярные"
    },
    {
        id: 1,
        title: "Новые"
    },
    {
        id: 3,
        title: "Сначала дешевле"
    },
    {
        id: 4,
        title: "Сначала дороже"
    }
];
}}),
"[project]/shared/TagsFilter.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/tags.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/Slider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const TagsFilter = ({ activeTag, onTagChange })=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tagRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Новая функция для прокрутки к активному тегу
    const scrollToActiveTag = ()=>{
        if (!activeTag || !containerRef.current) return;
        // Находим индекс активного тега
        const activeTagIndex = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tags"].findIndex((tag)=>tag.title === activeTag);
        // Если нашли тег и есть ссылка на DOM-элемент
        if (activeTagIndex !== -1 && tagRefs.current[activeTagIndex]) {
            const activeElement = tagRefs.current[activeTagIndex];
            // Проверяем, что элемент существует
            if (activeElement) {
                // Находим контейнер со скроллом
                const scrollContainer = containerRef.current.querySelector(".slider-container");
                if (scrollContainer) {
                    // Прокручиваем элемент в видимую область
                    activeElement.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center"
                    });
                }
            }
        }
    };
    // Вызываем скролл при изменении активного тега
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeTag && __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tags"].length > 0) {
            // Задержка для уверенности, что DOM готов
            setTimeout(scrollToActiveTag, 300);
        }
    }, [
        activeTag
    ]);
    // Обработчик клика по тегу
    const handleTagClick = (tag)=>{
        onTagChange(tag);
        // Если выбирается новый тег (не снимается выбор), скроллим к нему
        if (tag !== activeTag) {
            setTimeout(scrollToActiveTag, 50);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tagsFilter",
        ref: containerRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            height: "38px",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$tags$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tags"].map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: (el)=>{
                        tagRefs.current[index] = el;
                    },
                    className: `tagsFilter-tag ${activeTag === tag.title ? "tagsFilter-tag--active" : ""} ${tag.title === "Сначала дешевле" ? "price-sort-tag" : ""}`,
                    onClick: ()=>handleTagClick(tag.title),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "tagsFilter-tag-title",
                            children: tag.title
                        }, void 0, false, {
                            fileName: "[project]/shared/TagsFilter.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this),
                        activeTag === tag.title && activeTag.trim() === tag.title.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "tagsFilter-tag-closeButton",
                            style: {
                                display: activeTag === tag.title ? "block" : "none"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "10",
                                height: "10",
                                viewBox: "0 0 9 10",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M1 8.5L8 1.5",
                                        stroke: "#ffffff",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/shared/TagsFilter.tsx",
                                        lineNumber: 97,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 8.5L1 1.5",
                                        stroke: "#ffffff",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/shared/TagsFilter.tsx",
                                        lineNumber: 104,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shared/TagsFilter.tsx",
                                lineNumber: 90,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/shared/TagsFilter.tsx",
                            lineNumber: 84,
                            columnNumber: 17
                        }, this)
                    ]
                }, tag.id, true, {
                    fileName: "[project]/shared/TagsFilter.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/shared/TagsFilter.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/shared/TagsFilter.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = TagsFilter;
}}),
"[project]/shared/CustomTagsFilter.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/observer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/DataStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/Loading.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const CustomTagsFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observer"])(({ activeCustomTag, onCustomTagChange, activeCategory })=>{
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeCategoryTags, setActiveCategoryTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const tagRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visibleTagCount, setVisibleTagCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [initialCalculatedTagCount, setInitialCalculatedTagCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [allTagsAreVisible, setAllTagsAreVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tagWidths, setTagWidths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [movingTag, setMovingTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [animating, setAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Обработчик клика по тегу с анимацией
    const handleTagClick = (tagName)=>{
        if (animating) return; // Избегаем двойных кликов во время анимации
        const isAlreadyActive = activeCustomTag.includes(tagName);
        // Проверка, является ли тег "sale" тегом
        const isSaleTag = tagName.toLowerCase() === "sale";
        if (!isAlreadyActive) {
            // Если тег активируется, запускаем анимацию
            setMovingTag(tagName);
            setAnimating(true);
            // Даем время CSS-анимации
            setTimeout(()=>{
                // Вызываем обработчик изменения тега
                onCustomTagChange(tagName);
                // После завершения анимации сбрасываем состояние
                setTimeout(()=>{
                    setMovingTag(null);
                    setAnimating(false);
                }, 400); // Время анимации
            }, 200);
        } else {
            // Если тег деактивируется, просто вызываем обработчик без анимации
            onCustomTagChange(tagName);
        }
    };
    // Функция для прокрутки к активному тегу
    const scrollToActiveTag = ()=>{
        if (!isClient || !containerRef.current || activeCustomTag.length === 0) return;
        // Находим индекс первого активного тега
        const activeTagIndex = Object.keys(activeCategoryTags).findIndex((tag)=>activeCustomTag.includes(tag));
        if (activeTagIndex !== -1 && tagRefs.current[activeTagIndex]) {
            const activeTagElement = tagRefs.current[activeTagIndex];
            if (activeTagElement) {
                // Прокручиваем контейнер так, чтобы активный тег был виден
                const container = containerRef.current;
                const tagRect = activeTagElement.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                // Вычисляем позицию для прокрутки, чтобы тег был по центру
                const scrollLeft = activeTagElement.offsetLeft - containerRect.width / 2 + tagRect.width / 2;
                // Плавная прокрутка к тегу
                container.scrollTo({
                    left: scrollLeft,
                    behavior: "smooth"
                });
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    // useEffect для измерения ширин тегов
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isClient || isLoading || Object.keys(activeCategoryTags).length === 0) {
            if (Object.keys(activeCategoryTags).length === 0) {
                setTagWidths([]);
            }
            return;
        }
        const measureTagWidths = ()=>{
            const currentTotalTags = Object.keys(activeCategoryTags).length;
            let allRefsAvailable = tagRefs.current.length >= currentTotalTags;
            if (allRefsAvailable) {
                for(let i = 0; i < currentTotalTags; i++){
                    if (!tagRefs.current[i]) {
                        allRefsAvailable = false;
                        break;
                    }
                }
            }
            if (allRefsAvailable) {
                const newWidths = Array(currentTotalTags);
                for(let i = 0; i < currentTotalTags; i++){
                    newWidths[i] = tagRefs.current[i].offsetWidth;
                }
                setTagWidths(newWidths);
            } else {}
        };
        const measurementTimeoutId = setTimeout(measureTagWidths, 50);
        return ()=>clearTimeout(measurementTimeoutId);
    }, [
        isClient,
        isLoading,
        activeCategoryTags
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isClient || "undefined" === "undefined" || isLoading || Object.keys(activeCategoryTags).length === 0 || tagWidths.length === 0 || tagWidths.length !== Object.keys(activeCategoryTags).length) {
            return;
        }
        "TURBOPACK unreachable";
        const calculateMaxTags = undefined;
        const timerId = undefined;
    }, [
        isClient,
        activeCategoryTags,
        isLoading,
        allTagsAreVisible,
        tagWidths
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isClient) return;
        const timer = setTimeout(()=>{
            let categoryTags = {};
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.overall_product_tags_by_category) {
                setActiveCategoryTags({});
                setIsLoading(false);
                return;
            }
            if (!activeCategory) {
                Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data.overall_product_tags_by_category).forEach(([, categoryTagsObj])=>{
                    if (categoryTagsObj) {
                        Object.entries(categoryTagsObj).forEach(([tagName, count])=>{
                            if (categoryTags[tagName]) {
                                categoryTags[tagName] += count;
                            } else {
                                categoryTags[tagName] = count;
                            }
                        });
                    }
                });
            } else {
                categoryTags = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data.overall_product_tags_by_category[activeCategory] || {};
            }
            // Добавляем специальный тег "Sale" для товаров со скидкой
            // Получаем количество товаров со скидкой из данных
            let saleItemsCount = 0;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.products && Array.isArray(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data.products)) {
                // Фильтруем продукты по текущей категории, если она выбрана
                let filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data.products;
                if (activeCategory) {
                    const activeCategoryId = parseInt(activeCategory, 10);
                    filteredProducts = filteredProducts.filter((product)=>product.categories && Array.isArray(product.categories) && product.categories.some((cat)=>cat.Category_ID === activeCategoryId));
                }
                // Проверяем, есть ли "sale" в активных тегах
                const isSaleActive = activeCustomTag.includes("sale");
                // Находим товары со скидкой
                const saleProducts = filteredProducts.filter((product)=>product.marks && Array.isArray(product.marks) && product.marks.some((mark)=>mark.Mark_Name && mark.Mark_Name.toLowerCase() === "sale"));
                saleItemsCount = saleProducts.length;
                // Если "sale" активен, перестраиваем список тегов
                if (isSaleActive && saleItemsCount > 0) {
                    // Собираем теги, которые есть в товарах со скидкой
                    const tagsInSaleProducts = {};
                    // Всегда добавляем "sale" тег
                    tagsInSaleProducts["sale"] = saleItemsCount;
                    // Подсчитываем встречаемость других тегов в товарах со скидкой
                    saleProducts.forEach((product)=>{
                        if (product.tags && Array.isArray(product.tags)) {
                            product.tags.forEach((tag)=>{
                                if (tag.toLowerCase() !== "sale") {
                                    // Исключаем сам тег sale
                                    if (tagsInSaleProducts[tag]) {
                                        tagsInSaleProducts[tag]++;
                                    } else {
                                        tagsInSaleProducts[tag] = 1;
                                    }
                                }
                            });
                        }
                    });
                    // Заменяем список тегов только на те, которые есть в товарах со скидкой
                    categoryTags = tagsInSaleProducts;
                } else if (saleItemsCount > 0) {
                    categoryTags["sale"] = saleItemsCount;
                }
            }
            setActiveCategoryTags(categoryTags);
            setIsLoading(false);
            // Если есть активные теги, делаем все теги видимыми, чтобы активные теги были видны
            if (activeCustomTag.length > 0) {
                setAllTagsAreVisible(true);
                setVisibleTagCount(Object.keys(categoryTags).length);
            } else if (categoryTags && Object.keys(categoryTags).length > 0) {
                setVisibleTagCount(Object.keys(categoryTags).length);
            } else {
                setVisibleTagCount(0);
            }
            setInitialCalculatedTagCount(0);
        }, 500);
        return ()=>clearTimeout(timer);
    }, [
        activeCategory,
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data,
        isClient,
        activeCustomTag
    ]);
    // Добавляем эффект для отслеживания изменений в активных тегах
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isClient || isLoading || Object.keys(activeCategoryTags).length === 0) return;
        // Если есть активные теги, делаем все теги видимыми
        if (activeCustomTag.length > 0) {
            setAllTagsAreVisible(true);
            setVisibleTagCount(Object.keys(activeCategoryTags).length);
            // Прокручиваем к активному тегу после небольшой задержки,
            // чтобы дать время для рендеринга
            setTimeout(()=>{
                scrollToActiveTag();
            }, 300);
        }
    }, [
        activeCustomTag,
        isClient,
        isLoading,
        activeCategoryTags
    ]);
    // Эффект для прокрутки к активному тегу после полной загрузки компонента
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isClient && !isLoading && activeCustomTag.length > 0) {
            setTimeout(()=>{
                scrollToActiveTag();
            }, 500);
        }
    }, [
        isClient,
        isLoading
    ]);
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tagsFilter custom-tagsFilter tagsFilter-loading",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shared/CustomTagsFilter.tsx",
                lineNumber: 429,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/shared/CustomTagsFilter.tsx",
            lineNumber: 428,
            columnNumber: 9
        }, this);
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tagsFilter custom-tagsFilter tagsFilter-loading",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shared/CustomTagsFilter.tsx",
                lineNumber: 437,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/shared/CustomTagsFilter.tsx",
            lineNumber: 436,
            columnNumber: 9
        }, this);
    }
    if (Object.keys(activeCategoryTags).length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tagsFilter custom-tagsFilter tagsFilter-empty",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tagsFilter-empty-message"
            }, void 0, false, {
                fileName: "[project]/shared/CustomTagsFilter.tsx",
                lineNumber: 445,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/shared/CustomTagsFilter.tsx",
            lineNumber: 444,
            columnNumber: 9
        }, this);
    }
    // Сортируем теги так, чтобы "sale" и активные были вначале
    const allTagsArray = Object.entries(activeCategoryTags).sort((a, b)=>{
        // Специальный тег "sale" всегда в начале
        if (a[0].toLowerCase() === "sale") return -1;
        if (b[0].toLowerCase() === "sale") return 1;
        // Затем идут активные теги
        const isAActive = activeCustomTag.includes(a[0]);
        const isBActive = activeCustomTag.includes(b[0]);
        if (isAActive && !isBActive) return -1;
        if (!isAActive && isBActive) return 1;
        return 0;
    });
    const tagsToDisplay = allTagsArray.slice(0, visibleTagCount === 0 && !allTagsAreVisible && initialCalculatedTagCount === 0 ? 0 : visibleTagCount);
    const showMoreButton = !allTagsAreVisible && allTagsArray.length > initialCalculatedTagCount && initialCalculatedTagCount > 0;
    const showHideButton = allTagsAreVisible && allTagsArray.length > initialCalculatedTagCount;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tagsFilter custom-tagsFilter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: `custom-tagsFilter-tags ${showHideButton ? "custom-tagsFilter-tags--open" : ""}`,
                children: [
                    tagsToDisplay.map(([tagName, count], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (el)=>{
                                tagRefs.current[index] = el;
                            },
                            suppressHydrationWarning: true,
                            className: `tagsFilter-tag 
                ${activeCustomTag.includes(tagName) ? "tagsFilter-tag--active" : ""} 
                ${tagName.toLowerCase() === "sale" ? "tagsFilter-tag--sale" : ""}
                ${movingTag === tagName ? "tagsFilter-tag--moving-front" : ""}
                ${movingTag && movingTag !== tagName && index < 3 ? "tagsFilter-tag--shifting" : ""}
              `,
                            onClick: ()=>handleTagClick(tagName),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "tagsFilter-tag-title",
                                children: [
                                    tagName.toLowerCase() === "sale" ? "Sale" : tagName,
                                    !activeCustomTag.includes(tagName) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tagsFilter-tag-count",
                                        children: count
                                    }, void 0, false, {
                                        fileName: "[project]/shared/CustomTagsFilter.tsx",
                                        lineNumber: 503,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tagsFilter-tag-close",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "10",
                                            height: "10",
                                            viewBox: "0 0 9 10",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M1 8.5L8 1.5",
                                                    stroke: "#ffffff",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/CustomTagsFilter.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M8 8.5L1 1.5",
                                                    stroke: "#ffffff",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/shared/CustomTagsFilter.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shared/CustomTagsFilter.tsx",
                                            lineNumber: 506,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/shared/CustomTagsFilter.tsx",
                                        lineNumber: 505,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/shared/CustomTagsFilter.tsx",
                                lineNumber: 500,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/shared/CustomTagsFilter.tsx",
                            lineNumber: 486,
                            columnNumber: 13
                        }, this)),
                    showHideButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: " tagsFilter-hideButton",
                        onClick: ()=>{
                            setAllTagsAreVisible(false);
                            setVisibleTagCount(initialCalculatedTagCount);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Скрыть"
                        }, void 0, false, {
                            fileName: "[project]/shared/CustomTagsFilter.tsx",
                            lineNumber: 542,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/shared/CustomTagsFilter.tsx",
                        lineNumber: 535,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shared/CustomTagsFilter.tsx",
                lineNumber: 481,
                columnNumber: 9
            }, this),
            showMoreButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "tagsFilter-moreButton",
                onClick: ()=>{
                    setAllTagsAreVisible(true);
                    setVisibleTagCount(allTagsArray.length);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        " Ещё (",
                        allTagsArray.length - initialCalculatedTagCount,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/shared/CustomTagsFilter.tsx",
                    lineNumber: 554,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/shared/CustomTagsFilter.tsx",
                lineNumber: 547,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shared/CustomTagsFilter.tsx",
        lineNumber: 480,
        columnNumber: 7
    }, this);
});
const __TURBOPACK__default__export__ = CustomTagsFilter;
}}),
"[project]/widgets/filters/Filters.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$CategoryFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/CategoryFilter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$TagsFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/TagsFilter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$CustomTagsFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/CustomTagsFilter.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Filters = ({ activeCustomTag, activeTag, activeCategory, setActiveCustomTag, setActiveTag, setActiveCategory, showTagFilter, showCategoryFilter, showCustomTags = false, handleTagChange, handleCategoryChange, handleCustomTagChange })=>{
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [initialLoadDone, setInitialLoadDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Обработка URL-параметров при первой загрузке
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialLoadDone) return;
        const tagParam = searchParams?.get("tag");
        const categoryParam = searchParams?.get("category");
        // Обрабатываем параметр tag
        if (tagParam) {
            if (tagParam.toLowerCase() === "sale") {
                // Если это тег sale, добавляем его в activeCustomTag
                if (!activeCustomTag.includes("sale")) {
                    handleCustomTagChange("sale");
                }
            } else {
                // Для других тегов используем обычный обработчик
                setActiveTag(tagParam);
            }
        }
        // Обрабатываем параметр category
        if (categoryParam) {
            const categoryId = Number(categoryParam);
            setActiveCategory(categoryId);
        }
        setInitialLoadDone(true);
    }, [
        searchParams,
        setActiveTag,
        setActiveCategory,
        handleCustomTagChange,
        activeCustomTag,
        initialLoadDone
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `filters-panel ${showCategoryFilter ? "filters-panel--visible" : ""}`,
                suppressHydrationWarning: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `category-container ${showCategoryFilter ? "category-container--visible" : ""}`,
                    suppressHydrationWarning: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$CategoryFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        activeCategory: activeCategory,
                        onCategoryChange: handleCategoryChange
                    }, void 0, false, {
                        fileName: "[project]/widgets/filters/Filters.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/widgets/filters/Filters.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/widgets/filters/Filters.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `filters-panel ${showTagFilter ? "filters-panel--visible" : ""}`,
                suppressHydrationWarning: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `tags-container ${showTagFilter ? "tags-container--visible" : ""}`,
                    suppressHydrationWarning: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$TagsFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        activeTag: activeTag,
                        onTagChange: handleTagChange
                    }, void 0, false, {
                        fileName: "[project]/widgets/filters/Filters.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/widgets/filters/Filters.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/widgets/filters/Filters.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `filters-panel custom-filters-panel ${showCustomTags ? "filters-panel--visible" : ""}`,
                suppressHydrationWarning: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `tags-container ${showCustomTags ? "tags-container--visible" : ""}`,
                    suppressHydrationWarning: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$CustomTagsFilter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        activeCustomTag: activeCustomTag,
                        onCustomTagChange: handleCustomTagChange,
                        activeCategory: activeCategory ? activeCategory.toString() : null
                    }, void 0, false, {
                        fileName: "[project]/widgets/filters/Filters.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/widgets/filters/Filters.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/widgets/filters/Filters.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Filters;
}}),
"[project]/shared/Search.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/observer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$ru$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/messages/ru.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/globalVariables.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observer"])(({ onSearch, inputRef, initialValue = "" })=>{
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const debounceTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Эффект для инициализации клиентской части и начального значения
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
        if (initialValue) {
            setSearchValue(initialValue);
            setDebouncedValue(initialValue);
        }
    }, [
        initialValue
    ]);
    // Отдельный эффект для дебаунса ввода
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isClient) return;
        // Очищаем предыдущий таймер
        if (debounceTimerRef.current) {
            clearTimeout(debounceTimerRef.current);
        }
        // Устанавливаем новый таймер для дебаунса
        debounceTimerRef.current = setTimeout(()=>{
            setDebouncedValue(searchValue);
        }, 300); // 300ms дебаунс
        // Очистка при размонтировании
        return ()=>{
            if (debounceTimerRef.current) {
                clearTimeout(debounceTimerRef.current);
            }
        };
    }, [
        searchValue,
        isClient
    ]);
    // Запускаем поиск только когда дебаунсированное значение изменилось
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isClient && debouncedValue !== undefined) {
            onSearch(debouncedValue);
        }
    }, [
        debouncedValue,
        onSearch,
        isClient
    ]);
    const handleClearSearch = ()=>{
        setSearchValue("");
        setDebouncedValue("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "search-container",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "search",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}search-component-icon.svg`,
                    alt: ""
                }, void 0, false, {
                    fileName: "[project]/shared/Search.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$ru$2e$json__$28$json$29$__["default"].shared.search.placeholder,
                    className: "search-input",
                    value: searchValue,
                    onChange: (e)=>setSearchValue(e.target.value),
                    ref: inputRef
                }, void 0, false, {
                    fileName: "[project]/shared/Search.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this),
                searchValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "clear-search-btn",
                    onClick: handleClearSearch,
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/shared/Search.tsx",
                    lineNumber: 82,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/shared/Search.tsx",
            lineNumber: 69,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/shared/Search.tsx",
        lineNumber: 68,
        columnNumber: 7
    }, this);
});
const __TURBOPACK__default__export__ = Search;
}}),
"[project]/widgets/pageContents/CatalogContent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/globalVariables.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$ru$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/messages/ru.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$sections$2f$ProductsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/sections/ProductsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$filters$2f$Filters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/filters/Filters.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Search$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/Search.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/detectIOS.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const STORAGE_KEYS = {
    ACTIVE_CATEGORY: "brandbot_active_category",
    ACTIVE_TAG: "brandbot_active_tag",
    ACTIVE_CUSTOM_TAG: "brandbot_active_custom_tag",
    SHOW_CATEGORY_FILTER: "brandbot_show_category_filter",
    SHOW_TAG_FILTER: "brandbot_show_tag_filter",
    SHOW_CUSTOM_TAG_FILTER: "brandbot_show_custom_tag_filter",
    SEARCH_QUERY: "brandbot_search_query",
    SHOW_SEARCH: "brandbot_show_search"
};
const CatalogContent = ()=>{
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const getStoredValue = (key, defaultValue)=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        return defaultValue;
    };
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeTag, setActiveTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeCustomTag, setActiveCustomTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showCategoryFilter, setShowCategoryFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showTagFilter, setShowTagFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCustomTags, setShowCustomTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSearch, setShowSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const getHashParam = (name)=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
            return null;
        };
        setSearchQuery(getStoredValue(STORAGE_KEYS.SEARCH_QUERY, ""));
        // Проверяем параметр category в URL
        const categoryParam = searchParams ? searchParams.get("category") : null;
        const hashCategoryParam = getHashParam("category");
        // Если есть параметр категории в URL, используем его
        if (categoryParam) {
            const categoryId = parseInt(categoryParam, 10);
            setActiveCategory(categoryId);
            localStorage.setItem(STORAGE_KEYS.ACTIVE_CATEGORY, JSON.stringify(categoryId));
        } else if (hashCategoryParam) {
            const categoryId = parseInt(hashCategoryParam, 10);
            setActiveCategory(categoryId);
            localStorage.setItem(STORAGE_KEYS.ACTIVE_CATEGORY, JSON.stringify(categoryId));
        } else {
            // Если параметра нет, используем сохраненное значение
            setActiveCategory(getStoredValue(STORAGE_KEYS.ACTIVE_CATEGORY, null));
        }
        setActiveTag(getStoredValue(STORAGE_KEYS.ACTIVE_TAG, null));
        const storedCustomTags = getStoredValue(STORAGE_KEYS.ACTIVE_CUSTOM_TAG, []);
        // Проверяем параметр tag в стандартных search params
        const tagParam = searchParams ? searchParams.get("tag") : null;
        // Проверяем параметр tag в хеше URL
        const hashTagParam = getHashParam("tag");
        // Обработка URL-параметра tag=sale для фильтрации товаров со скидкой
        if (tagParam === "sale" || hashTagParam === "sale") {
            setActiveCustomTag([
                "sale"
            ]);
            setShowCustomTags(true);
            localStorage.setItem(STORAGE_KEYS.ACTIVE_CUSTOM_TAG, JSON.stringify([
                "sale"
            ]));
            localStorage.setItem(STORAGE_KEYS.SHOW_CUSTOM_TAG_FILTER, JSON.stringify(true));
        } else {
            setActiveCustomTag(Array.isArray(storedCustomTags) ? storedCustomTags : []);
            // Если есть активные кастомные теги, всегда показываем фильтр
            const hasActiveCustomTags = Array.isArray(storedCustomTags) && storedCustomTags.length > 0;
            setShowCustomTags(hasActiveCustomTags || getStoredValue(STORAGE_KEYS.SHOW_CUSTOM_TAG_FILTER, false));
            // Если есть параметр категории, автоматически показываем фильтр тегов
            if (categoryParam || hashCategoryParam) {
                setShowCustomTags(true);
                localStorage.setItem(STORAGE_KEYS.SHOW_CUSTOM_TAG_FILTER, JSON.stringify(true));
            }
        }
        setShowTagFilter(getStoredValue(STORAGE_KEYS.SHOW_TAG_FILTER, false));
        setShowSearch(getStoredValue(STORAGE_KEYS.SHOW_SEARCH, false));
        setIsClient(true);
    }, [
        searchParams
    ]);
    const handleSearchChange = (query)=>{
        setSearchQuery(query);
        localStorage.setItem(STORAGE_KEYS.SEARCH_QUERY, JSON.stringify(query));
    };
    const handleCategoryChange = (categoryId)=>{
        const newCategoryValue = categoryId === activeCategory ? null : categoryId;
        localStorage.setItem(STORAGE_KEYS.ACTIVE_CUSTOM_TAG, JSON.stringify([]));
        setActiveCustomTag([]);
        setActiveCategory(newCategoryValue);
        localStorage.setItem(STORAGE_KEYS.ACTIVE_CATEGORY, JSON.stringify(newCategoryValue));
    };
    const handleTagChange = (tag)=>{
        const newTagValue = tag === activeTag ? null : tag;
        setActiveTag(newTagValue);
        localStorage.setItem(STORAGE_KEYS.ACTIVE_TAG, JSON.stringify(newTagValue));
    };
    const handleCustomTagChange = (tag)=>{
        const isSaleTag = tag.toLowerCase() === "sale";
        setActiveCustomTag((prevActiveTags)=>{
            // Проверяем, включен ли уже тег в список активных
            const isTagAlreadyActive = prevActiveTags.includes(tag);
            let newActiveTags;
            if (isTagAlreadyActive) {
                // Если тег уже активен, удаляем его из списка
                newActiveTags = prevActiveTags.filter((t)=>t !== tag);
                // Если деактивируем тег "sale", обновляем отображение фильтра тегов
                if (isSaleTag) {
                // Деактивация тега Sale
                }
            } else {
                // Если тег не активен, добавляем его к существующим тегам
                newActiveTags = [
                    ...prevActiveTags,
                    tag
                ];
            }
            // Сохраняем обновленный список активных тегов в localStorage
            localStorage.setItem(STORAGE_KEYS.ACTIVE_CUSTOM_TAG, JSON.stringify(newActiveTags));
            // Автоматически показываем секцию фильтров по тегам, если включен хотя бы один тег
            if (newActiveTags.length > 0 && !showCustomTags) {
                setShowCustomTags(true);
                localStorage.setItem(STORAGE_KEYS.SHOW_CUSTOM_TAG_FILTER, JSON.stringify(true));
            }
            return newActiveTags;
        });
    };
    const toggleCategoryFilter = ()=>{
        const newValue = !showCustomTags;
        setShowCustomTags(newValue);
        localStorage.setItem(STORAGE_KEYS.SHOW_CUSTOM_TAG_FILTER, JSON.stringify(newValue));
    };
    const toggleTagFilter = ()=>{
        const newValue = !showTagFilter;
        setShowTagFilter(newValue);
        localStorage.setItem(STORAGE_KEYS.SHOW_TAG_FILTER, JSON.stringify(newValue));
    };
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleSearch = ()=>{
        setShowSearch(!showSearch);
        localStorage.setItem(STORAGE_KEYS.SHOW_SEARCH, JSON.stringify(!showSearch));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showSearch && searchInputRef.current) {
            setTimeout(()=>{
                searchInputRef.current?.focus();
            }, 300);
        }
    }, [
        showSearch
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `mt-[20px] px-[10px] w-full catalogMain 
        ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectIOS"])() ? "catalogMain--ios" : ""}
        `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[13px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "catalog-top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "catalog-top-title",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$ru$2e$json__$28$json$29$__["default"].widgets.catalog.title
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "catalog-top-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        suppressHydrationWarning: true,
                                        className: `catalog-top-right-button ${isClient && showSearch ? "active" : ""}`,
                                        onClick: toggleSearch,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}search-icon.svg`,
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        suppressHydrationWarning: true,
                                        className: `catalog-top-right-button ${isClient && showTagFilter ? "active" : ""}`,
                                        onClick: toggleTagFilter,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}sort-icon.svg`,
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        suppressHydrationWarning: true,
                                        className: `catalog-top-right-button ${isClient && showCustomTags ? "active" : ""}`,
                                        onClick: toggleCategoryFilter,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}filter-icon.svg`,
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                                            lineNumber: 273,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        suppressHydrationWarning: true,
                        className: `search-panel ${isClient && showSearch ? "search-panel--visible" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Search$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onSearch: handleSearchChange,
                            inputRef: searchInputRef,
                            initialValue: searchQuery
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    isClient && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$filters$2f$Filters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            activeTag: activeTag,
                            activeCategory: activeCategory,
                            activeCustomTag: activeCustomTag,
                            setActiveTag: setActiveTag,
                            setActiveCategory: setActiveCategory,
                            showTagFilter: showTagFilter,
                            showCategoryFilter: true,
                            showCustomTags: showCustomTags,
                            handleTagChange: handleTagChange,
                            handleCategoryChange: handleCategoryChange,
                            handleCustomTagChange: handleCustomTagChange,
                            setActiveCustomTag: setActiveCustomTag
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                            lineNumber: 291,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$sections$2f$ProductsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isFavorites: false,
                categoryFilter: activeCategory,
                tagFilter: activeTag,
                customTagFilter: activeCustomTag,
                searchQuery: searchQuery
            }, void 0, false, {
                fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/widgets/pageContents/CatalogContent.tsx",
        lineNumber: 242,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CatalogContent;
}}),
"[project]/widgets/pageContents/FavoritesContent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/observer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$FavoritesStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/FavoritesStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$sections$2f$ProductsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/sections/ProductsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/Loading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/detectIOS.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const FavoritesContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observer"])(()=>{
    const hasFavorites = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$FavoritesStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favoritesStore"].favoritesIds.length > 0;
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsLoading(!!__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$FavoritesStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favoritesStore"]);
    }, [
        hasFavorites
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `favoritesMain 
    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectIOS"])() ? "favoritesMain--ios" : ""}
    `,
        children: isLoading ? hasFavorites ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$sections$2f$ProductsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            isFavorites: true
        }, void 0, false, {
            fileName: "[project]/widgets/pageContents/FavoritesContent.tsx",
            lineNumber: 29,
            columnNumber: 11
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "favoritesMain-empty",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "favoritesMain-empty-title",
                    children: "У вас пока нет избранных товаров"
                }, void 0, false, {
                    fileName: "[project]/widgets/pageContents/FavoritesContent.tsx",
                    lineNumber: 32,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "favoritesMain-empty-text",
                    children: [
                        "Нажмите на",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "18",
                            height: "16",
                            viewBox: "0 0 18 16",
                            fill: "transparent",
                            xmlns: "http://www.w3.org/2000/svg",
                            style: {
                                display: "inline-block"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9.30663 14.7267L9.30662 14.7267L9.30029 14.7289C9.24983 14.7467 9.14099 14.7668 8.99996 14.7668C8.85893 14.7668 8.75009 14.7467 8.69963 14.7289L8.69964 14.7289L8.69329 14.7267C7.57825 14.346 5.71238 13.3333 4.13388 11.716C2.56322 10.1067 1.31663 7.94228 1.31663 5.24183C1.31663 3.02277 3.10364 1.2335 5.29996 1.2335C6.60123 1.2335 7.75317 1.86153 8.47812 2.8377C8.60075 3.00282 8.79429 3.10016 8.99996 3.10016C9.20563 3.10016 9.39917 3.00282 9.5218 2.8377C10.2464 1.86206 11.4064 1.2335 12.7 1.2335C14.8963 1.2335 16.6833 3.02277 16.6833 5.24183C16.6833 7.94228 15.4367 10.1067 13.866 11.716C12.2875 13.3333 10.4217 14.346 9.30663 14.7267Z",
                                stroke: "#6C6C6C",
                                strokeWidth: "1.3",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/FavoritesContent.tsx",
                                lineNumber: 47,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/FavoritesContent.tsx",
                            lineNumber: 37,
                            columnNumber: 15
                        }, this),
                        ", чтобы сохранить любой понравившийся товар"
                    ]
                }, void 0, true, {
                    fileName: "[project]/widgets/pageContents/FavoritesContent.tsx",
                    lineNumber: 35,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/widgets/pageContents/FavoritesContent.tsx",
            lineNumber: 31,
            columnNumber: 11
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/widgets/pageContents/FavoritesContent.tsx",
            lineNumber: 60,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/widgets/pageContents/FavoritesContent.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
});
const __TURBOPACK__default__export__ = FavoritesContent;
}}),
"[project]/widgets/pageContents/ShoppingCartContent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/observer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx/dist/mobx.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/globalVariables.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$fakeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/fakeData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/DataStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/api/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/ShoppingCartStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$sections$2f$ProductsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/sections/ProductsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$text$2d$mask$2f$dist$2f$reactTextMask$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-text-mask/dist/reactTextMask.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/Loading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/detectIOS.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// Компонент всплывающего окна для отображения ошибок формы
const FormErrorModal = ({ message, onClose, onRetry })=>{
    if (!message) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "error-modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "error-modal",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "error-modal-close",
                    onClick: onClose,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}close-icon.svg`,
                        alt: "Закрыть"
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "error-modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "error-modal-title",
                            children: "Ошибка"
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "error-modal-message",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "error-modal-buttons",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "error-modal-button",
                                    onClick: onClose,
                                    children: "Закрыть"
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "error-modal-button error-modal-retry",
                                    onClick: onRetry,
                                    children: "Повторить"
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
};
const SuccessModal = ({ onClose, orderResponse, orderProducts, onPay })=>{
    const paymentDescription = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.PAYMENT_SYSTEM_INSERT_TEXT_description || "";
    const paymentExtraInfo = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.PAYMENT_SYSTEM_INSERT_TEXT_extra_field_1 || "";
    const isOfflinePayment = orderResponse?.payment_type === "delivery"; // Предполагаем, что orderResponse содержит тип оплаты
    const deliveryPrice = parseFloat(isOfflinePayment ? __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.cart_delivery_price_offline_value : __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.cart_delivery_price_value) || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "error-modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "error-modal order-success-modal",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "error-modal-close",
                    onClick: onClose,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}close-icon.svg`,
                        alt: "Закрыть"
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "success-modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "success-top-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: paymentDescription
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                orderResponse?.order_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-id",
                                    children: [
                                        "Заказ: № ",
                                        orderResponse.order_id
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "order-products-container",
                            children: orderProducts.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-product-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-product-image",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: product.selectedColor?.image || product.images[0].Image_URL,
                                                alt: product.Product_Name
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-product-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "order-product-name",
                                                    children: product.Product_Name
                                                }, void 0, false, {
                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this),
                                                product.parameters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "order-product-size",
                                                    children: [
                                                        product.parameters.name === "Размер обуви" ? "Размер" : product.parameters.name,
                                                        ": ",
                                                        product.parameters.parameter_string
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, this),
                                                product.selectedColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "order-product-color",
                                                    children: [
                                                        "Цвет: ",
                                                        product.selectedColor.name,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "color-dot",
                                                            style: {
                                                                backgroundColor: product.selectedColor.code || "#ccc"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "order-product-price",
                                                    children: [
                                                        product.final_price || product.parameters.price,
                                                        " ₽"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-product-quantity",
                                            children: [
                                                "x",
                                                product.quantity || 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "order-total",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-total-text",
                                    children: "Итого:"
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-total-price",
                                    children: [
                                        orderProducts.reduce((sum, product)=>sum + product.parameters.price * (product.quantity || 1), 0) + deliveryPrice,
                                        " ",
                                        "₽"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        orderResponse?.payment_link && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "payment-link-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "payment-link-label",
                                    children: "Ваша ссылка на оплату:"
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: orderResponse.payment_link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "payment-link-button",
                                    onClick: onPay,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "payment-link-text",
                                        children: "ОПЛАТИТЬ"
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "payment-link-help",
                                    children: "Если ссылка не открылась автоматически, пожалуйста, нажмите на неё повторно."
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            dangerouslySetInnerHTML: {
                                __html: paymentExtraInfo
                            },
                            className: "payment-extra-info"
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
};
// Модальное окно для оформления заказа напрямую через менеджера
const ContactManagerModal = ({ onClose, orderResponse, orderProducts, managerContact, onContactClick })=>{
    const paymentDescription = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.PAYMENT_SYSTEM_INSERT_TEXT_description || "";
    const deliveryPrice = parseFloat(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.cart_delivery_price_offline_value) || 0;
    // Получаем настройки контакта менеджера
    const managerButtonText = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.manager_button_text || "Связаться с менеджером";
    const managerDisplayContact = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.manager_display_contact || managerContact;
    // Определяем тип контакта (telegram, whatsapp, vk и т.д.)
    const getContactUrl = (contact)=>{
        if (!contact) return "#";
        // Удаляем @ если есть
        const cleanContact = contact.replace(/^@/, "");
        // Определяем тип по началу строки
        if (contact.startsWith("@") || contact.includes("t.me/")) {
            return `https://t.me/${cleanContact}`;
        } else if (contact.includes("wa.me/") || contact.includes("whatsapp")) {
            return `https://wa.me/${cleanContact.replace(/\D/g, "")}`;
        } else if (contact.includes("vk.com")) {
            return `https://vk.com/${cleanContact.replace("vk.com/", "")}`;
        } else {
            // Пробуем определить по формату
            const isPhone = /^[+\d\s()-]{10,}$/.test(contact);
            if (isPhone) {
                return `https://wa.me/${cleanContact.replace(/\D/g, "")}`;
            }
            // По умолчанию считаем Telegram
            return `https://t.me/${cleanContact}`;
        }
    };
    const contactUrl = getContactUrl(managerContact);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "error-modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "error-modal order-success-modal",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "error-modal-close",
                    onClick: onClose,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}close-icon.svg`,
                        alt: "Закрыть"
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "success-modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "success-top-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: paymentDescription
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this),
                                orderResponse?.order_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-id",
                                    children: [
                                        "Заказ: № ",
                                        orderResponse.order_id
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "order-products-container",
                            children: orderProducts.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-product-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-product-image",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: product.selectedColor?.image || product.images[0].Image_URL,
                                                alt: product.Product_Name
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 277,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                            lineNumber: 276,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-product-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "order-product-name",
                                                    children: product.Product_Name
                                                }, void 0, false, {
                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this),
                                                product.parameters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "order-product-size",
                                                    children: [
                                                        product.parameters.name === "Размер обуви" ? "Размер" : product.parameters.name,
                                                        ": ",
                                                        product.parameters.parameter_string
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 21
                                                }, this),
                                                product.selectedColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "order-product-color",
                                                    children: [
                                                        "Цвет: ",
                                                        product.selectedColor.name,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "color-dot",
                                                            style: {
                                                                backgroundColor: product.selectedColor.code || "#ccc"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "order-product-price",
                                                    children: [
                                                        product.final_price || product.parameters.price,
                                                        " ₽"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-product-quantity",
                                            children: [
                                                "x",
                                                product.quantity || 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "order-total",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-total-text",
                                    children: "Итого:"
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 320,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-total-price",
                                    children: [
                                        orderProducts.reduce((sum, product)=>sum + (product.final_price || product.parameters?.price || 0) * (product.quantity || 1), 0) + deliveryPrice,
                                        " ",
                                        "₽"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contact-manager-container",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "contact-manager-text",
                                    children: "Для оплаты заказа свяжитесь с менеджером:"
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: contactUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "contact-manager-button",
                                    onClick: onContactClick,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-manager-telegram-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "25",
                                                height: "24",
                                                viewBox: "0 0 25 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        clipPath: "url(#a)",
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M24.5 12c0-6.628-5.372-12-12-12S.5 5.372.5 12s5.372 12 12 12 12-5.372 12-12",
                                                                fill: "url(#b)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "m5.666 11.297 7.797-3.238c.77-.338 3.381-1.417 3.381-1.417s1.205-.473 1.105.675c-.034.472-.302 2.124-.57 3.912l-.836 5.295s-.067.776-.636.911-1.506-.472-1.673-.607c-.134-.101-2.51-1.619-3.38-2.36-.235-.203-.503-.608.033-1.08a129 129 0 0 0 3.514-3.373c.402-.405.804-1.35-.87-.203l-4.719 3.205s-.535.337-1.54.033c-1.003-.303-2.175-.708-2.175-.708s-.803-.506.57-1.045z",
                                                                fill: "#fff"
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                                id: "b",
                                                                x1: "55.831",
                                                                y1: "13.231",
                                                                x2: "34.179",
                                                                y2: "61.344",
                                                                gradientUnits: "userSpaceOnUse",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        stopColor: "#37AEE2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                        lineNumber: 371,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                        offset: "1",
                                                                        stopColor: "#1E96C8"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                        lineNumber: 372,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 363,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                                id: "a",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fill: "#fff",
                                                                    d: "M.5 0h24v24H.5z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                    lineNumber: 375,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 374,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 362,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 345,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "contact-manager-text",
                                            children: managerDisplayContact
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 337,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "contact-manager-instructions",
                                    children: "Укажите номер заказа при общении с менеджером для быстрой обработки."
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
            lineNumber: 256,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
};
// Модальное окно для Softpay
const SoftpayPaymentModal = ({ onClose, orderResponse, orderProducts, onConfirm })=>{
    const paymentDescriptionHtml = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.PAYMENT_SYSTEM_INSERT_TEXT_description || '<p class="cart-link-popup-imitator-container-thanksForOrder">Спасибо за заказ!</p>'; // Исправлено
    const paymentInstructionsHtml = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.PAYMENT_SYSTEM_INSERT_TEXT_extra_field_1 || "";
    const deliveryPrice = parseFloat(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.cart_delivery_price_value // Softpay обычно онлайн
    ) || 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "error-modal-overlay",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "error-modal order-success-modal softpay-modal",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "error-modal-close",
                    onClick: onClose,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}close-icon.svg`,
                        alt: "Закрыть"
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                        lineNumber: 426,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                    lineNumber: 425,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "success-modal-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "success-top-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: paymentDescriptionHtml
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 431,
                                    columnNumber: 13
                                }, this),
                                orderResponse?.order_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-id",
                                    children: [
                                        "Заказ № ",
                                        orderResponse.order_id
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 430,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "order-products-container",
                            children: orderProducts.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-product-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-product-image",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: product.selectedColor?.image || product.images[0].Image_URL,
                                                alt: product.Product_Name
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 441,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                            lineNumber: 440,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-product-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "order-product-name",
                                                    children: product.Product_Name
                                                }, void 0, false, {
                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 19
                                                }, this),
                                                product.parameters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "order-product-size",
                                                    children: [
                                                        product.parameters.name === "Размер обуви" ? "Размер" : product.parameters.name,
                                                        ": ",
                                                        product.parameters.parameter_string
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                    lineNumber: 454,
                                                    columnNumber: 21
                                                }, this),
                                                product.selectedColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "order-product-color",
                                                    children: [
                                                        "Цвет: ",
                                                        product.selectedColor.name,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "color-dot",
                                                            style: {
                                                                backgroundColor: product.selectedColor.code || "#ccc"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                            lineNumber: 464,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "order-product-price",
                                                    children: [
                                                        product.final_price || product.parameters.price,
                                                        " ₽"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                    lineNumber: 472,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                            lineNumber: 449,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "order-product-quantity",
                                            children: [
                                                "x",
                                                product.quantity || 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                            lineNumber: 476,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 439,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "order-total",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-total-text",
                                    children: "Итого:"
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 484,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "order-total-price",
                                    children: [
                                        orderProducts.reduce((sum, product)=>sum + product.parameters.price * (product.quantity || 1), 0) + deliveryPrice,
                                        " ",
                                        "₽"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "payment-instructions-softpay",
                            dangerouslySetInnerHTML: {
                                __html: paymentInstructionsHtml
                            }
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 495,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "error-modal-button softpay-confirm-button",
                            onClick: onConfirm,
                            children: "Хорошо"
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                            lineNumber: 500,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                    lineNumber: 429,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
            lineNumber: 421,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
        lineNumber: 420,
        columnNumber: 5
    }, this);
};
const ShoppingCartContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observer"])(()=>{
    const [typePaymentId, setTypePaymentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [allowPostPayment, setAllowPostPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showErrorModal, setShowErrorModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccessModal, setShowSuccessModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isIOS, setIsIOS] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("pending");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [orderResponse, setOrderResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [orderProducts, setOrderProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentOrderData, setCurrentOrderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fio, setFio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [fioError, setFioError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [phoneError, setPhoneError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [cityError, setCityError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [houseError, setHouseError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [apartmentError, setApartmentError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [commentError, setCommentError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [promocodeError, setPromocodeError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [formError, setFormError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [house, setHouse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [apartment, setApartment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [comment, setComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [promocode, setPromocode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [productsLimit, setProductsLimit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(2);
    // Маска для номера телефона в формате +7 (XXX) XXX XX-XX
    const phoneMask = [
        "+",
        "7",
        " ",
        "(",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        ")",
        " ",
        /[0-9]/,
        /[0-9]/,
        /[0-9]/,
        " ",
        /[0-9]/,
        /[0-9]/,
        "-",
        /[0-9]/,
        /[0-9]/
    ];
    const validateFio = (value)=>{
        const onlyLettersRegex = /^[а-яА-ЯёЁa-zA-Z\s-]+$/;
        if (!value) {
            setFioError("");
            return true;
        }
        if (!onlyLettersRegex.test(value)) {
            setFioError("Только буквы, пробелы и дефисы");
            return false;
        } else {
            setFioError("");
            return true;
        }
    };
    const validatePhone = (value)=>{
        if (!value) {
            setPhoneError("");
            return false;
        }
        if (value.includes("_") || value.length < 18) {
            setPhoneError("Введите полный номер телефона");
            return false;
        } else {
            setPhoneError("");
            return true;
        }
    };
    const handleFioChange = (e)=>{
        const value = e.target.value;
        const onlyLettersRegex = /^[а-яА-ЯёЁa-zA-Z\s-]*$/;
        if (onlyLettersRegex.test(value)) {
            setFio(value);
            if (fioError) {
                setFioError("");
            }
        } else {
            setFioError("Только буквы и пробелы");
        }
    };
    const handlePhoneChange = (e)=>{
        const value = e.target.value;
        setPhone(value);
        validatePhone(value);
    };
    const handleCityChange = (e)=>{
        const value = e.target.value;
        setCity(value);
        if (!value.trim()) {
            setCityError("Введите город и улицу");
        } else {
            setCityError("");
        }
    };
    const handleHouseChange = (e)=>{
        const value = e.target.value;
        setHouse(value);
        if (!value.trim()) {
            setHouseError("Введите номер дома");
        } else {
            setHouseError("");
        }
    };
    const resetForm = ()=>{
        setFio("");
        setPhone("");
        setCity("");
        setHouse("");
        setApartment("");
        setAddress("");
        setComment("");
        setPromocode("");
        setFioError("");
        setPhoneError("");
        setCityError("");
        setHouseError("");
        setApartmentError("");
        setCommentError("");
        setPromocodeError("");
        setFormError("");
    };
    const updateProductsLimit = ()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    };
    const getTotalOrderPrice = ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items.reduce((acc, item)=>acc + item.parameters.price * (item.quantity || 1), 0);
    };
    // Получаем скидочные параметры из API
    const actions = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters_actions || [];
    const discountAction = actions.find((a)=>a.action_type === "p23");
    const discount10 = discountAction ? Number(discountAction.extra_field_1) : 0;
    const discount15 = discountAction ? Number(discountAction.extra_field_2) : 0;
    const getSalePrice = ()=>{
        // Определяем количество товаров с учётом quantity
        const itemCount = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items.reduce((acc, item)=>acc + (item.quantity || 1), 0);
        if (!discountAction || itemCount < 2) {
            return 0;
        } else if (itemCount === 2) {
            return Math.ceil(getTotalOrderPrice() * (discount10 / 100));
        } else {
            return Math.ceil(getTotalOrderPrice() * (discount15 / 100));
        }
    };
    const getProductsCountText = ()=>{
        const totalQuantity = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items.reduce((acc, item)=>acc + (item.quantity || 1), 0);
        if (totalQuantity === 0) {
            return "Товары в корзине отсутствуют";
        } else if (totalQuantity === 1) {
            return "товар";
        } else if (totalQuantity > 1 && totalQuantity < 5) {
            return "товара";
        } else {
            return "товаров";
        }
    };
    const recommendedProducts = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$fakeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectData"]?.products?.filter((product)=>product.OnMain === true).slice(0, 4);
    const stopPropagation = (e)=>{
        e.preventDefault();
        e.stopPropagation();
    };
    const removeFromLocalStorage = (productId, productTitle, colorId)=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    };
    const removeSpecificProductFromCart = (productId, productName, parameterString, colorId)=>{
        // Удаляем товар из локального хранилища
        removeFromLocalStorage(productId, parameterString || "", colorId);
        // Удаляем конкретный товар из корзины
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
            const initialCount = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items.length;
            __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items.filter((item)=>{
                // Проверяем, не совпадает ли товар с тем, который нужно удалить
                const matchesProduct = item.Product_ID === productId;
                const matchesParam = !parameterString || item.parameters?.parameter_string === parameterString;
                const matchesColor = !colorId || item.selectedColor?.id === colorId;
                // Результат проверки
                const shouldRemove = matchesProduct && matchesParam && matchesColor;
                // Оставляем товар, если он не соответствует условиям удаления
                return !shouldRemove;
            });
        });
        const colorInfo = colorId ? ` и цветом ID: ${colorId}` : "";
    };
    const validateForm = ()=>{
        let isValid = true;
        let errorFields = [];
        setFioError("");
        setPhoneError("");
        setCityError("");
        setHouseError("");
        setFormError("");
        if (!fio.trim()) {
            setFioError("error");
            isValid = false;
            errorFields.push("ФИО");
        }
        if (!phone || phone.includes("_") || phone.length < 18) {
            setPhoneError("error");
            isValid = false;
            errorFields.push("Телефон");
        }
        if (!city.trim()) {
            setCityError("error");
            isValid = false;
            errorFields.push("Город и улица");
        }
        if (!house.trim()) {
            setHouseError("error");
            isValid = false;
            errorFields.push("Дом");
        }
        // Если товаров в корзине нет, то заказ оформить нельзя
        if (__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items.length === 0) {
            setFormError("Корзина пуста. Добавьте товары для оформления заказа.");
            setShowErrorModal(true);
            isValid = false;
        } else if (errorFields.length > 0) {
            // Показываем сообщение о незаполненных полях
            setFormError(`Пожалуйста, заполните следующие поля: ${errorFields.join(", ")}`);
            setShowErrorModal(true);
        }
        return isValid;
    };
    const handlePayment = ()=>{
        // Только после нажатия на кнопку оплаты очищаем корзину и форму
        resetForm();
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].clearCart();
        clearLocalStorageExceptFirst3();
        setShowSuccessModal(false);
    };
    const handleSoftpayConfirm = ()=>{
        // Действия после подтверждения оплаты Softpay
        // (например, очистка корзины, формы, localStorage)
        resetForm();
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].clearCart();
        clearLocalStorageExceptFirst3();
        setShowSuccessModal(false); // Закрываем модальное окно Softpay
    };
    const handleContactClick = ()=>{
        // Очищаем корзину, форму и localStorage при клике на ссылку менеджера
        resetForm();
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].clearCart();
        clearLocalStorageExceptFirst3();
        setShowSuccessModal(false);
        // Вместо использования window.Telegram.WebApp
        try {
            // Проверяем, существует ли объект Telegram
            if (window.Telegram && window.Telegram.WebApp) {
                // Безопасно пытаемся вызвать метод
                const managerContact = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.telegram_manager_contact_value;
                if (managerContact) {
                    const cleanContact = managerContact.replace(/^@/, "");
                    window.Telegram.WebApp.openLink(`https://t.me/${cleanContact}`);
                    return false; // Предотвращаем стандартное поведение ссылки
                }
            }
        } catch (error) {
        // Ошибки не останавливают выполнение
        }
    };
    const getCurrentDeliveryPrice = ()=>{
        const isOffline = allowPostPayment && typePaymentId === 2;
        return parseFloat(isOffline ? __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.cart_delivery_price_offline_value : __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.cart_delivery_price_value) || 0;
    };
    // Функция для обработки размещения заказа
    const handleMakeOrder = async ()=>{
        if (!validateForm()) {
            return;
        }
        setIsSubmitting(true);
        // Фильтруем айтемы для заказа
        const itemsForOrder = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items.filter((item)=>item.quantity && item.quantity > 0).map((item)=>{
            // Базовая цена товара
            const basePrice = item.parameters?.price || item.Price || 0;
            // Скидка на цвет если есть
            const colorDiscount = item.selectedColor?.discount || 0;
            // Финальная цена с учетом скидки (абсолютное значение)
            const finalPrice = Math.max(0, basePrice - colorDiscount);
            return {
                ID: item.Product_ID,
                name: item.Name,
                price: finalPrice,
                quantity: item.quantity || 0,
                parameter: item.parameters?.parameter_string || "",
                color: item.selectedColor ? {
                    name: item.selectedColor.name,
                    code: item.selectedColor.code
                } : null
            };
        });
        // Преобразуем телефон, убирая все нецифровые символы
        const phoneValue = phone ? phone.replace(/[^\d+]/g, "") : "";
        // Создаем массив продуктов для API
        const productsForApi = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items.map((item)=>{
            // Базовая информация о товаре
            const productData = {
                product_id: item.Product_ID,
                parameter_id: item.parameters?.Parameter_ID || 0,
                quantity: item.quantity || 1
            };
            // Добавляем цвет только если он выбран
            if (item.selectedColor?.id) {
                productData.color = item.selectedColor.id;
            }
            return productData;
        });
        // Создаем объект заказа с только необходимыми данными
        const orderData = {
            tg_user_id: window.Telegram?.WebApp?.initDataUnsafe?.user?.id || 749991691,
            fio: fio,
            phone: phoneValue,
            city: city,
            house: house,
            apartment: apartment,
            payment_type: allowPostPayment && typePaymentId === 2 ? "delivery" : "online",
            promocode: promocode || "",
            products: productsForApi
        };
        // Сохраняем данные текущего заказа для возможности повторной отправки
        setCurrentOrderData(orderData);
        try {
            // Устанавливаем состояние загрузки
            setIsLoading(true);
            // Отправляем заказ на API
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$api$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiInstance"].post("/order", orderData);
            // Сохраняем информацию о товарах заказа для отображения в модальном окне
            const productsForOrder = [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items
            ];
            setOrderProducts(productsForOrder);
            // Сохраняем ответ от API
            setOrderResponse(response.data);
            // Очищаем корзину после успешного размещения заказа
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items = [];
                localStorage.removeItem("addedSettingItems");
            });
            // Показываем модальное окно успеха
            setShowSuccessModal(true);
            // По завершении процесса заказа
            setIsLoading(false);
            setIsSubmitting(false);
        } catch (error) {
            // Получаем сообщение об ошибке из ответа API (если есть)
            let errorMessage = "Не удалось отправить заказ. Пожалуйста, попробуйте позже.";
            const axiosError = error;
            if (axiosError.response) {
                // Ошибка от сервера
                if (axiosError.response.data && typeof axiosError.response.data === "object" && "message" in axiosError.response.data) {
                    errorMessage = axiosError.response.data.message;
                } else if (axiosError.response.status === 400) {
                    errorMessage = "Некорректные данные заказа. Пожалуйста, проверьте введенную информацию.";
                } else if (axiosError.response.status === 401) {
                    errorMessage = "Необходима авторизация для оформления заказа.";
                } else if (axiosError.response.status === 500) {
                    errorMessage = "Внутренняя ошибка сервера. Пожалуйста, попробуйте позже.";
                }
            } else if (axiosError.request) {
                // Запрос был отправлен, но нет ответа
                errorMessage = "Сервер не отвечает. Пожалуйста, проверьте ваше соединение с интернетом.";
            }
            // Устанавливаем сообщение об ошибке и показываем модальное окно
            setFormError(errorMessage);
            setShowErrorModal(true);
            setIsLoading(false);
            setIsSubmitting(false);
        }
    };
    const clearLocalStorageExceptFirst3 = ()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    };
    const closeErrorModal = ()=>{
        setShowErrorModal(false);
    };
    const closeSuccessModal = ()=>{
        setShowSuccessModal(false);
    };
    // Функция для повторной отправки заказа
    const retryOrder = async ()=>{
        if (!currentOrderData) {
            setFormError("Не удалось повторить отправку заказа. Попробуйте снова заполнить форму.");
            setShowErrorModal(true);
            return;
        }
        setIsSubmitting(true);
        setShowErrorModal(false);
        try {
            // Отправляем заказ на API повторно
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("https://noxer-ai.ru/api/orders", currentOrderData);
            // Сохраняем ответ от API
            setOrderResponse(response.data);
            // Очищаем корзину после успешного размещения заказа
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2f$dist$2f$mobx$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runInAction"])(()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items = [];
                localStorage.removeItem("addedSettingItems");
            });
            // Показываем модальное окно успеха
            setShowSuccessModal(true);
            // По завершении процесса заказа
            setIsLoading(false);
            setIsSubmitting(false);
            // Очищаем данные текущего заказа
            setCurrentOrderData(null);
        } catch (error) {
            // Обработка ошибок осталась такой же, как в основной функции handleMakeOrder
            let errorMessage = "Не удалось отправить заказ. Пожалуйста, попробуйте позже.";
            const axiosError = error;
            if (axiosError.response) {
                if (axiosError.response.data && typeof axiosError.response.data === "object" && "message" in axiosError.response.data) {
                    errorMessage = axiosError.response.data.message;
                } else if (axiosError.response.status === 400) {
                    errorMessage = "Некорректные данные заказа. Пожалуйста, проверьте введенную информацию.";
                } else if (axiosError.response.status === 401) {
                    errorMessage = "Необходима авторизация для оформления заказа.";
                } else if (axiosError.response.status === 500) {
                    errorMessage = "Внутренняя ошибка сервера. Пожалуйста, попробуйте позже.";
                }
            } else if (axiosError.request) {
                errorMessage = "Сервер не отвечает. Пожалуйста, проверьте ваше соединение с интернетом.";
            }
            setFormError(errorMessage);
            setShowErrorModal(true);
            setIsLoading(false);
            setIsSubmitting(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        updateProductsLimit();
        window.addEventListener("resize", updateProductsLimit);
        const postPaymentAllowed = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.cart_allow_post_payment_value === "yes";
        setAllowPostPayment(postPaymentAllowed);
        if (!postPaymentAllowed) {
            setTypePaymentId(1);
        }
        return ()=>{
            window.removeEventListener("resize", updateProductsLimit);
        };
    }, [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data
    ]); // Добавляем dataStore.data в зависимости
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items.length === 0) setIsLoading(false);
        else setIsLoading(true);
    }, [
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        "data-page": "cart",
        className: `mt-[15px] px-[10px] w-full shoppingCart-main ${isIOS ? "shoppingCart-main--ios" : ""}`,
        children: [
            showErrorModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormErrorModal, {
                message: formError,
                onClose: closeErrorModal,
                onRetry: currentOrderData ? retryOrder : undefined
            }, void 0, false, {
                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                lineNumber: 1172,
                columnNumber: 9
            }, this),
            showSuccessModal && __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.PAYMENT_SYSTEM_value === "yokassa" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SuccessModal, {
                onClose: closeSuccessModal,
                orderResponse: orderResponse,
                orderProducts: orderProducts,
                onPay: handlePayment
            }, void 0, false, {
                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                lineNumber: 1182,
                columnNumber: 11
            }, this),
            showSuccessModal && __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.PAYMENT_SYSTEM_value === "no" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactManagerModal, {
                onClose: closeSuccessModal,
                orderResponse: orderResponse,
                orderProducts: orderProducts,
                managerContact: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.telegram_manager_contact_value,
                onContactClick: handleContactClick
            }, void 0, false, {
                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                lineNumber: 1193,
                columnNumber: 11
            }, this),
            showSuccessModal && __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.PAYMENT_SYSTEM_value === "softpay" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SoftpayPaymentModal, {
                onClose: closeSuccessModal,
                orderResponse: orderResponse,
                orderProducts: orderProducts,
                onConfirm: handleSoftpayConfirm
            }, void 0, false, {
                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                lineNumber: 1208,
                columnNumber: 11
            }, this),
            isLoading === "pending" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                lineNumber: 1217,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    isLoading === true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shoppingCart-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "shoppingCart-header-title",
                                children: "Корзина"
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                lineNumber: 1222,
                                columnNumber: 15
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].clearCart();
                                    clearLocalStorageExceptFirst3();
                                },
                                className: "shoppingCart-header-button",
                                children: "Очистить корзину"
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                lineNumber: 1225,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                        lineNumber: 1221,
                        columnNumber: 13
                    }, this),
                    isLoading === false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `empty-cart  
                ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectIOS"])() ? "empty-cart--ios" : ""}
                `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "empty-cart-text",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "empty-cart-message",
                                        children: "Корзина пуста"
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                        lineNumber: 1245,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "empty-cart-suggestion",
                                        children: [
                                            "Воспользуйтесь каталогом ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1247,
                                                columnNumber: 44
                                            }, this),
                                            " или поиском для выбора товаров"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                        lineNumber: 1246,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                lineNumber: 1244,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "recommended-products",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "recommended-title",
                                        children: "Рекомендуем"
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                        lineNumber: 1252,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "limited-products-grid",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$sections$2f$ProductsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            isFavorites: false,
                                            limit: productsLimit,
                                            importanceFilter: true
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                            lineNumber: 1254,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                        lineNumber: 1253,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                lineNumber: 1251,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                        lineNumber: 1239,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shoppingCart-productsContainer",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items?.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
                                        to: `/product/${product.Product_ID}`,
                                        className: "shoppingCart-product",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: stopPropagation,
                                                className: "shoppingCart-product-image-container",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    className: "shoppingCart-product-image",
                                                    src: product.selectedColor?.image || product.images[0].Image_URL,
                                                    alt: ""
                                                }, void 0, false, {
                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                    lineNumber: 1275,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1271,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shoppingCart-product-info",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "shoppingCart-product-nameSize",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "shoppingCart-product-name",
                                                                children: product.Product_Name
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1287,
                                                                columnNumber: 25
                                                            }, this),
                                                            product.parameters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "shoppingCart-product-size",
                                                                children: [
                                                                    product.parameters.name === "Размер обуви" ? "Размер" : product.parameters.name,
                                                                    ": ",
                                                                    product.parameters.parameter_string
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1292,
                                                                columnNumber: 27
                                                            }, this),
                                                            product.selectedColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "shoppingCart-product-color",
                                                                children: [
                                                                    "Цвет:",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "color-name",
                                                                        children: product.selectedColor.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                        lineNumber: 1303,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "color-dot",
                                                                        style: {
                                                                            backgroundColor: product.selectedColor.code || "#ccc"
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                        lineNumber: 1306,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1301,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1286,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "shoppingCart-product-priceQuantity",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "shoppingCart-product-priceWrapper",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "shoppingCart-product-price",
                                                                        children: [
                                                                            product.final_price || product.parameters.price,
                                                                            " ₽"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                        lineNumber: 1319,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    product.selectedColor?.discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "shoppingCart-product-oldPrice",
                                                                        children: [
                                                                            product.parameters.price,
                                                                            " ₽"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                        lineNumber: 1324,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1318,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "shoppingCart-product-quantityControl",
                                                                onClick: stopPropagation,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].decreaseQuantity(product.Product_ID, product.parameters?.parameter_string, product.selectedColor?.id),
                                                                        className: "shoppingCart-product-quantityControl-button",
                                                                        children: "-"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                        lineNumber: 1334,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "shoppingCart-product-quantityControl-value",
                                                                        children: product.quantity || 1
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                        lineNumber: 1348,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].increaseQuantity(product.Product_ID, product.parameters?.parameter_string, product.selectedColor?.id),
                                                                        className: "shoppingCart-product-quantityControl-button",
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                        lineNumber: 1352,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1330,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1317,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1285,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    removeSpecificProductFromCart(product.Product_ID, product.Product_Name, product.parameters?.parameter_string, product.selectedColor?.id);
                                                },
                                                className: "shoppingCart-product-delete",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}close-icon.svg`,
                                                    alt: "",
                                                    className: "shoppingCart-product-delete-icon"
                                                }, void 0, false, {
                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                    lineNumber: 1383,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1369,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                        lineNumber: 1266,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                lineNumber: 1264,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "shoppingCart-form",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shoppingCart-form-contactInfo",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "shoppingCart-form-contactInfo-title",
                                                children: "Контактная информация"
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1394,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shoppingCart-form-contactInfo-fieldsContainer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "input-wrapper",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "ФИО",
                                                            value: fio,
                                                            onChange: handleFioChange,
                                                            className: `shoppingCart-form-contactInfo-fieldsContainer-input ${fioError ? "input-error" : ""}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                            lineNumber: 1400,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1399,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "input-wrapper",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$text$2d$mask$2f$dist$2f$reactTextMask$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            mask: phoneMask,
                                                            placeholder: "+7 (___) ___ __-__",
                                                            guide: true,
                                                            value: phone,
                                                            onChange: handlePhoneChange,
                                                            type: "tel",
                                                            className: `shoppingCart-form-contactInfo-fieldsContainer-input ${phoneError ? "input-error" : ""}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                            lineNumber: 1410,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1409,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1398,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                        lineNumber: 1393,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shoppingCart-form-deliveryInfo",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "shoppingCart-form-deliveryInfo-title",
                                                children: "Способ доставки"
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1424,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "shoppingCart-form-deliveryInfo-cdekButton",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "shoppingCart-form-deliveryInfo-cdekButton-top",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}cdek-icon.svg`,
                                                                alt: ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1433,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "shoppingCart-form-deliveryInfo-cdekButton-top-text",
                                                                children: "(выбор 97% клиентов)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1435,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1432,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "shoppingCart-form-deliveryInfo-cdekButton-text",
                                                        children: 'Доставка осуществляется транспортной компанией CDEK по тарифам компании. Нажмите "Выбрать адрес" и выберите пункт выдачи на карте'
                                                    }, void 0, false, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1440,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}payment-choiced-icon.svg`,
                                                        alt: "",
                                                        className: "shoppingCart-form-deliveryInfo-cdekButton-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1446,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1428,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "shoppingCart-form-deliveryInfo-addressTitle",
                                                children: "Адрес доставки (или СДЕК)"
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1453,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shoppingCart-form-deliveryInfo-addressInputsContainer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Город и улица",
                                                        value: city,
                                                        onChange: handleCityChange,
                                                        className: `shoppingCart-form-deliveryInfo-fullWidthInput ${cityError ? "input-error" : ""}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1458,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "shoppingCart-form-deliveryInfo-inputsRow",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "input-wrapper",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "Дом",
                                                                    value: house,
                                                                    onChange: handleHouseChange,
                                                                    className: `shoppingCart-form-deliveryInfo-halfWidthInput ${houseError ? "input-error" : ""}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                    lineNumber: 1468,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1467,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "Квартира",
                                                                value: apartment,
                                                                onChange: (e)=>setApartment(e.target.value),
                                                                className: "shoppingCart-form-deliveryInfo-halfWidthInput"
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1476,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1466,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1457,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Комментарий к заказу",
                                                onChange: (e)=>setComment(e.target.value),
                                                className: "shoppingCart-form-deliveryInfo-commentField"
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1488,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                        lineNumber: 1423,
                                        columnNumber: 17
                                    }, this),
                                    allowPostPayment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shoppingCart-form-paymentType",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "shoppingCart-form-paymentType-title",
                                                children: "Тип оплаты"
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1498,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shoppingCart-form-paymentType-buttons",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setTypePaymentId(1),
                                                        className: `shoppingCart-form-paymentType-button ${typePaymentId === 1 && "shoppingCart-form-paymentType-button--active"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "shoppingCart-form-paymentType-text",
                                                                children: "Оплата онлайн в приложении"
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1508,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "shoppingCart-form-paymentType-checkbox",
                                                                children: typePaymentId === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}payment-choiced-icon.svg`,
                                                                    alt: "",
                                                                    className: "shoppingCart-form-paymentType-icon"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                    lineNumber: 1514,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1512,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1503,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setTypePaymentId(2),
                                                        className: `shoppingCart-form-paymentType-button ${typePaymentId === 2 && "shoppingCart-form-paymentType-button--active"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "shoppingCart-form-paymentType-text",
                                                                children: "Оплата при получении"
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1528,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "shoppingCart-form-paymentType-checkbox",
                                                                children: typePaymentId === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}payment-choiced-icon.svg`,
                                                                    alt: "",
                                                                    className: "shoppingCart-form-paymentType-icon"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                    lineNumber: 1534,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1532,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1523,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1502,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                        lineNumber: 1497,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shoppingCart-form-paymentInfo",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "shoppingCart-form-paymentInfo-title",
                                                children: "Форма оплаты"
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1547,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "shoppingCart-form-paymentInfo-sbpButton",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "shoppingCart-form-paymentInfo-sbpButton-top",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "shoppingCart-form-paymentInfo-sbpButton-top-text",
                                                                children: "Оплата по СБП"
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1553,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}sbp-icon.svg`,
                                                                alt: ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1557,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1552,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "shoppingCart-form-paymentInfo-sbpButton-text",
                                                        children: "После оформления заказа вы сможете получить реквизиты для оплаты по системе СБП"
                                                    }, void 0, false, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1560,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}payment-choiced-icon.svg`,
                                                        alt: "",
                                                        className: "shoppingCart-form-paymentInfo-sbpButton-icon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1565,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1551,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                        lineNumber: 1546,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shoppingCart-form-totalInfo",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "shoppingCart-form-totalInfo-title",
                                                children: "Промокод"
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1574,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Введите промокод",
                                                onChange: (e)=>setPromocode(e.target.value),
                                                className: "shoppingCart-form-totalInfo-input"
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1578,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shoppingCart-form-totalInfo-pricesContainer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "shoppingCart-form-totalInfo-pricesContainer-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "shoppingCart-form-totalInfo-pricesContainer-item-text",
                                                                children: "Сумма заказа"
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1587,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "shoppingCart-form-totalInfo-pricesContainer-item-text",
                                                                children: [
                                                                    getTotalOrderPrice(),
                                                                    " ₽"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1591,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1586,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "shoppingCart-form-totalInfo-pricesContainer-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "shoppingCart-form-totalInfo-pricesContainer-item-text",
                                                                children: "Доставка"
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1597,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "shoppingCart-form-totalInfo-pricesContainer-item-text",
                                                                children: [
                                                                    getCurrentDeliveryPrice(),
                                                                    " ₽"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1601,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1596,
                                                        columnNumber: 21
                                                    }, this),
                                                    getSalePrice() > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "shoppingCart-form-totalInfo-pricesContainer-item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "shoppingCart-form-totalInfo-pricesContainer-item-text",
                                                                children: "Скидка"
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1607,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "shoppingCart-form-totalInfo-pricesContainer-item-text",
                                                                children: [
                                                                    "-",
                                                                    getSalePrice(),
                                                                    " ₽"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1610,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1606,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1585,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shoppingCart-form-totalInfo-summary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "shoppingCart-form-totalInfo-summary-top",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "shoppingCart-form-totalInfo-summary-top-text",
                                                                children: "Итого"
                                                            }, void 0, false, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1619,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "shoppingCart-form-totalInfo-summary-top-text",
                                                                children: [
                                                                    allowPostPayment && typePaymentId === 2 ? getCurrentDeliveryPrice() : getTotalOrderPrice() - getSalePrice() + getCurrentDeliveryPrice(),
                                                                    " ",
                                                                    "₽"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                                lineNumber: 1623,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1618,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "shoppingCart-form-totalInfo-summary-count",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].items.reduce((acc, item)=>acc + (item.quantity || 1), 0),
                                                            " ",
                                                            getProductsCountText()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                        lineNumber: 1633,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                                lineNumber: 1617,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                        lineNumber: 1573,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleMakeOrder,
                                        className: `shoppingCart-form-makeOrderButton click-effect-block 
                    ${showSuccessModal ? "button-behind-modal" : ""}
                    ${isIOS ? "ios-button" : ""}
                    `,
                                        disabled: isSubmitting,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "shoppingCart-form-makeOrderButton-text",
                                            children: isSubmitting ? "Оформление заказа..." : "Оплатить заказ"
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                            lineNumber: 1652,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                        lineNumber: 1643,
                                        columnNumber: 17
                                    }, this),
                                    formError && !showErrorModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shoppingCart-form-error",
                                        children: formError
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                        lineNumber: 1657,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
                                lineNumber: 1392,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/widgets/pageContents/ShoppingCartContent.tsx",
        lineNumber: 1167,
        columnNumber: 5
    }, this);
});
const __TURBOPACK__default__export__ = ShoppingCartContent;
}}),
"[project]/entities/VideoReview.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
function VideoReview({ video }) {
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handlePlayOnClick = ()=>{
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            video.play().catch((error)=>{
                console.error("Video play failed:", error);
            });
        } else {
            video.pause();
        }
    };
    return video.Video_URL ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "Video-review",
        className: "video-review-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "video-review-title",
                children: "Видеообзор"
            }, void 0, false, {
                fileName: "[project]/entities/VideoReview.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "video-review-wrapper",
                onClick: handlePlayOnClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "video-review-helper-block"
                    }, void 0, false, {
                        fileName: "[project]/entities/VideoReview.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        src: video.Video_URL,
                        poster: video.Poster_URL || "",
                        controls: true,
                        playsInline: true,
                        preload: video.Poster_URL ? "none" : "auto",
                        className: "video-review-content"
                    }, void 0, false, {
                        fileName: "[project]/entities/VideoReview.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/entities/VideoReview.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/entities/VideoReview.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this) : null;
}
const __TURBOPACK__default__export__ = VideoReview;
}}),
"[project]/widgets/pageContents/ProductContent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mobx-react-lite/es/observer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/globalVariables.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/DataStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/ShoppingCartStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$FavoritesStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/FavoritesStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/Slider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/Loading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/detectIOS.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getTagBackground$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/getTagBackground.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getTagLabel$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/getTagLabel.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$entities$2f$VideoReview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/entities/VideoReview.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const ProductContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mobx$2d$react$2d$lite$2f$es$2f$observer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["observer"])(()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigate"])();
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    // Получаем ID продукта из хэша URL
    const [productId, setProductId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (params.productId) {
            setProductId(params.productId);
        }
    }, [
        params
    ]);
    const descriptionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const specsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [targetProduct, setTargetProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isError, setIsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentSettingsItems, setCurrentSettingsItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [addedSettingItems, setAddedSettingItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedParams, setSelectedParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mainImageUrl, setMainImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [totalPrice, setTotalPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedParameterType, setSelectedParameterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Размер");
    const [isDescriptionOpen, setIsDescriptionOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSpecsOpen, setIsSpecsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAddingToCart, setIsAddingToCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAddToCartEnabled, setIsAddToCartEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [colorRequiredPopup, setColorRequiredPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const infoCards = [
        {
            title: "Наши гарантии на товар",
            image: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}warranty-icon.svg`
        },
        {
            title: "О нашем магазине",
            image: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}about-icon.svg`
        },
        {
            title: "Как можно вернуть товар?",
            image: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}refund-icon.svg`
        },
        {
            title: "Доставка и оплата товара",
            image: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}delivery-icon.svg`
        }
    ];
    function toggleHandler(refCurrent, isOpen, setIsOpen) {
        if (isOpen) {
            setIsOpen(false);
            refCurrent.style.marginTop = `0px`;
            refCurrent.style.maxHeight = `0px`;
        } else {
            setIsOpen(true);
            refCurrent.style.marginTop = `15px`;
            refCurrent.style.maxHeight = `${refCurrent.scrollHeight}px`;
        }
    }
    function addSettingItem(settingItem, paramName) {
        if (!settingItem) return;
        // Если это параметр с именем "Цвет", но не из массива colors,
        // проверим, есть ли у него extra_field_image или extra_field_color
        if (paramName.toLowerCase() === "цвет" && !targetProduct.colors?.length) {
            const fullParam = targetProduct.parameters.find((p)=>p.Parameter_ID === settingItem.id);
            if (fullParam?.extra_field_image) {
                setMainImageUrl(fullParam.extra_field_image);
            }
        }
        // Новый объект параметров с очищенным полем parameters, но сохраненным color
        const updatedParams = {
            Color: selectedParams.Color
        };
        // Добавляем новый выбранный параметр
        updatedParams[paramName] = settingItem;
        // Устанавливаем выбранный тип параметра
        setSelectedParameterType(paramName);
        // Обновляем состояние
        setSelectedParams(updatedParams);
        setCurrentSettingsItems([
            settingItem
        ]);
        // Проверяем, есть ли в корзине товар с таким параметром
        updateAddingToCartState(targetProduct.Product_ID, settingItem?.id, selectedColor?.Color_ID);
    }
    function selectColor(color) {
        if (!color) return;
        if (selectedColor === color) {
            setSelectedColor(null);
            // При отмене выбора цвета сбрасываем mainImageUrl, чтобы показать слайдер
            setMainImageUrl(null);
            return;
        }
        // Сохраняем текущий выбранный цвет
        setSelectedColor(color);
        // Если у цвета есть изображение, устанавливаем его как основное
        if (color.Color_image) {
            setMainImageUrl(color.Color_image);
        } else {
            // Иначе сбрасываем mainImageUrl для отображения слайдера
            setMainImageUrl(null);
        }
        // Сохраняем текущие выбранные параметры, а не сбрасываем их
        const updatedParams = {
            ...selectedParams
        };
        // Добавляем или обновляем цвет
        updatedParams.Color = {
            id: color.Color_ID,
            title: color.Color_Name,
            colorCode: color.Color_Code,
            colorImage: color.Color_image,
            discount: color.discount || 0
        };
        // Обновляем состояние
        setSelectedParams(updatedParams);
        // Проверяем, есть ли в корзине товар с выбранным параметром и цветом
        const currentParam = currentSettingsItems[0];
        updateAddingToCartState(targetProduct.Product_ID, currentParam?.id, color.Color_ID);
    }
    function toggleDescriptionHandler() {
        if (descriptionRef.current) toggleHandler(descriptionRef.current, isDescriptionOpen, setIsDescriptionOpen);
    }
    function toggleSpecsHandler() {
        if (specsRef.current) toggleHandler(specsRef.current, isSpecsOpen, setIsSpecsOpen);
    }
    function handleAddToCart() {
        if (!targetProduct?.Product_ID) return;
        if (isAddingToCart) {
            // Для большей надежности можно установить хэш вручную
            window.location.hash = "#/shoppingcart";
            // Если выше не сработает, то используем navigate
            setTimeout(()=>{
                navigate("/shoppingcart");
            }, 100);
            return;
        }
        // Проверяем наличие параметров и цветов в товаре
        const hasParameters = targetProduct.parameters?.length > 0;
        const hasColors = targetProduct.colors?.length > 0;
        // Получаем выбранный параметр из массива parameters
        let selectedParam = null;
        for(const key in selectedParams){
            if (key !== "Color" && selectedParams[key]) {
                selectedParam = selectedParams[key];
                break;
            }
        }
        // Получаем выбранный цвет
        const selectedColorParam = selectedParams.Color;
        // Если есть массив colors и не выбран цвет, показываем предупреждение
        if (hasColors && !selectedColorParam) {
            setErrorMessage("Пожалуйста, выберите цвет товара");
            setTimeout(()=>{
                setErrorMessage(null);
            }, 3000); // Скрыть сообщение через 3 секунды
            return;
        }
        // Проверяем, что выбраны необходимые параметры (только если они есть)
        if (hasParameters && !selectedParam) {
            setErrorMessage("Пожалуйста, выберите параметр товара");
            setTimeout(()=>{
                setErrorMessage(null);
            }, 3000); // Скрыть сообщение через 3 секунды
            return;
        }
        // Создаем данные для добавления в корзину
        const cartData = {
            paramId: selectedParam?.id,
            paramTitle: selectedParam?.title,
            colorId: selectedColorParam?.id,
            colorName: selectedColorParam?.title,
            colorCode: selectedColorParam?.colorCode,
            colorImage: selectedColorParam?.colorImage,
            discount: selectedColorParam?.discount || 0
        };
        // Добавляем товар в корзину
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$ShoppingCartStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shoppingCartStore"].addToCart(targetProduct.Product_ID, cartData);
        // Сохраняем информацию о выбранном параметре для отслеживания состояния кнопки
        const selectedParamData = {
            id: selectedParam?.id || null,
            productId: targetProduct.Product_ID,
            title: selectedParam?.title || null,
            colorId: selectedColorParam?.id,
            colorName: selectedColorParam?.title,
            colorImage: selectedColorParam?.colorImage
        };
        setAddedSettingItems([
            ...addedSettingItems,
            selectedParamData
        ]);
        localStorage.setItem("addedSettingItems", JSON.stringify([
            ...addedSettingItems,
            selectedParamData
        ]));
        setIsAddingToCart(true);
    }
    function handleViewAllReviews() {
        const reviewsLink = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.reviews_link_value;
        if (reviewsLink) {
            window.open(reviewsLink, "_blank");
        }
    }
    function openLinkTeletype(link) {
        const tg = window.Telegram.WebApp;
        if (tg) {
            tg.openLink(link, {
                try_instant_view: true
            });
        } else {
            window.open(link, "_blank");
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (Object.keys(selectedParams).length > 0) {
            // Базовая цена из выбранных параметров
            let newTotalPrice = Object.values(selectedParams).reduce((sum, param)=>{
                // Проверяем, что параметр существует
                if (!param) return sum;
                // Проверяем, что это не цвет из массива colors
                // В этом случае у него будет свойство colorCode
                if (param.colorCode) return sum;
                return sum + (param?.price || 0);
            }, 0);
            // Вычитаем абсолютную скидку цвета, если есть
            if (selectedParams.Color && selectedParams.Color.discount) {
                newTotalPrice = Math.max(0, newTotalPrice - selectedParams.Color.discount);
            }
            setTotalPrice(newTotalPrice);
        } else {
            // Если нет выбранных параметров, устанавливаем цену 0
            setTotalPrice(0);
        }
    }, [
        selectedParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (Object.entries(targetProduct).length) {
            // Всегда начинаем с новых выбранных параметров
            let newSelectedParams = {};
            // НЕ устанавливаем изображение как основное автоматически
            // Пусть пользователь сначала увидит слайдер
            setMainImageUrl(null);
            // НЕ инициализируем цвет автоматически, пользователь должен выбрать его сам
            setSelectedColor(null);
            // Инициализируем параметры из массива parameters если они есть
            if (targetProduct.parameters?.length > 0) {
                // Ищем параметр с chosen=true или берем первый
                const chosenParam = targetProduct.parameters.find((p)=>p.chosen);
                const paramToUse = chosenParam || targetProduct.parameters[0];
                if (paramToUse) {
                    // Добавляем выбранный параметр в общий объект
                    newSelectedParams[paramToUse.name] = {
                        id: paramToUse.Parameter_ID,
                        index: 0,
                        title: paramToUse.parameter_string,
                        price: paramToUse.price || 0,
                        old_price: paramToUse.old_price || null
                    };
                    // Устанавливаем тип параметра
                    setSelectedParameterType(paramToUse.name);
                    // Устанавливаем текущий выбранный параметр
                    setCurrentSettingsItems([
                        {
                            id: paramToUse.Parameter_ID,
                            index: 0,
                            title: paramToUse.parameter_string,
                            price: paramToUse.price || 0,
                            old_price: paramToUse.old_price || null
                        }
                    ]);
                }
            }
            // Устанавливаем все выбранные параметры сразу
            if (Object.keys(newSelectedParams).length > 0) {
                setSelectedParams(newSelectedParams);
            }
        }
    }, [
        targetProduct
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedItems = localStorage.getItem("addedSettingItems");
        if (savedItems) {
            try {
                setAddedSettingItems(JSON.parse(savedItems));
            } catch (error) {
                setAddedSettingItems([]);
            }
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (addedSettingItems.length > 0) {
            localStorage.setItem("addedSettingItems", JSON.stringify(addedSettingItems));
        }
    }, [
        addedSettingItems
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (currentSettingsItems.length > 0 && targetProduct?.Product_ID) {
            // Получаем цвет, если он выбран
            const selectedColorId = selectedColor?.Color_ID;
            // Проверяем, есть ли текущий параметр с текущим цветом в корзине
            const isCurrentSettingInCart = addedSettingItems.some((item)=>{
                // Проверка параметра
                const paramMatch = item?.id === currentSettingsItems[0]?.id && item?.productId === targetProduct.Product_ID;
                // Проверка цвета
                const colorMatch = !selectedColorId || item?.colorId === selectedColorId;
                return paramMatch && (selectedColorId ? colorMatch : true);
            });
            setIsAddingToCart(isCurrentSettingInCart);
        }
    }, [
        currentSettingsItems,
        targetProduct?.Product_ID,
        addedSettingItems,
        selectedColor
    ]);
    // Проверяем, можно ли добавить товар в корзину (выбраны все обязательные параметры)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Проверяем наличие параметров и цветов в товаре
        const hasParameters = targetProduct?.parameters?.length > 0;
        const hasColors = targetProduct?.colors?.length > 0;
        // Проверяем, что выбраны все необходимые параметры
        let canAddToCart = true;
        if (hasParameters) {
            // Ищем параметр, который не является цветом
            const hasSelectedParam = Object.keys(selectedParams).some((key)=>key !== "Color");
            if (!hasSelectedParam) {
                canAddToCart = false;
            }
        }
        if (hasColors) {
            if (!selectedParams.Color) {
                canAddToCart = false;
            }
        }
        setIsAddToCartEnabled(canAddToCart);
    }, [
        targetProduct,
        selectedParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsLoading(true);
        try {
            const product = __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.products?.find((product)=>product?.Product_ID === Number(productId));
            if (!product) {
                setIsError(true);
            } else {
                setIsError(false);
                setTargetProduct(product);
                setIsLoading(false);
            }
        } catch (error) {
            setIsError(true);
        }
    }, [
        productId,
        __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data
    ]);
    // Вспомогательная функция для обновления состояния isAddingToCart
    function updateAddingToCartState(productId, paramId, colorId) {
        const isCurrentItemInCart = addedSettingItems.some((item)=>{
            const productMatch = item?.productId === productId;
            const paramMatch = !paramId || item?.id === paramId;
            const colorMatch = !colorId || item?.colorId === colorId;
            return productMatch && paramMatch && colorMatch;
        });
        setIsAddingToCart(isCurrentItemInCart);
    }
    function scrollToVideo() {
        const e = document.getElementById("Video-review");
        if (e) e.scrollIntoView({
            behavior: "smooth"
        });
    }
    // Функция для показа попапа при клике на заблокированную кнопку
    function showColorRequiredPopup() {
        // Если кнопка заблокирована из-за отсутствия выбранного цвета
        if (targetProduct.colors?.length > 0 && !selectedColor) {
            setColorRequiredPopup(true);
            // Скрываем попап через 3 секунды
            setTimeout(()=>{
                setColorRequiredPopup(false);
            }, 3000);
        }
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: `main-container ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectIOS"])() ? "main-container--ios" : ""}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center w-full h-full min-h-[60vh]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                    lineNumber: 520,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                lineNumber: 519,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
            lineNumber: 516,
            columnNumber: 7
        }, this);
    }
    if (isError || !targetProduct?.Product_ID) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: `main-container ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectIOS"])() ? "main-container--ios" : ""}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center w-full h-full min-h-[60vh]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl",
                    children: "Произошла ошибка при загрузке товара или товар не найден."
                }, void 0, false, {
                    fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                    lineNumber: 532,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                lineNumber: 531,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
            lineNumber: 528,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "jsx-223c3f72d602c327" + " " + `main-container ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectIOS"])() ? "main-container--ios" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "223c3f72d602c327",
                children: ".swiper-pagination-bullet{margin:0 4px;opacity:.7!important;background:#999!important;width:8px!important;height:8px!important}.swiper-pagination-bullet-active{opacity:1!important;background:#333!important}.swiper-slide{opacity:1!important;justify-content:center!important;align-items:center!important;width:100%!important;display:flex!important}.swiper-slide-content{justify-content:center;align-items:center;width:100%;height:100%;display:flex}.product-image-item{object-fit:contain;max-width:100%;max-height:100%}.swiper-pagination{z-index:10!important;bottom:10px!important}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-223c3f72d602c327" + " " + "product-image-container",
                children: [
                    targetProduct.marks?.length > 0 && targetProduct.marks[0]?.Mark_Name ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-223c3f72d602c327" + " " + `product-tag ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getTagBackground$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTagBackground"])(targetProduct.marks[0].Mark_Name)}`,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$getTagLabel$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTagLabel"])(targetProduct.marks[0].Mark_Name)
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 583,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$FavoritesStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favoritesStore"].toggleFavorite(targetProduct.Product_ID),
                        className: "jsx-223c3f72d602c327" + " " + "product-favorite",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "25",
                            height: "25",
                            viewBox: "0 0 18 16",
                            fill: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$FavoritesStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favoritesStore"].favoritesIds.some((item)=>item === targetProduct.Product_ID) ? "#FE646F" : "transparent",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "jsx-223c3f72d602c327" + " " + "cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9.30663 14.7267L9.30662 14.7267L9.30029 14.7289C9.24983 14.7467 9.14099 14.7668 8.99996 14.7668C8.85893 14.7668 8.75009 14.7467 8.69963 14.7289L8.69964 14.7289L8.69329 14.7267C7.57825 14.346 5.71238 13.3333 4.13388 11.716C2.56322 10.1067 1.31663 7.94228 1.31663 5.24183C1.31663 3.02277 3.10364 1.2335 5.29996 1.2335C6.60123 1.2335 7.75317 1.86153 8.47812 2.8377C8.60075 3.00282 8.79429 3.10016 8.99996 3.10016C9.20563 3.10016 9.39917 3.00282 9.5218 2.8377C10.2464 1.86206 11.4064 1.2335 12.7 1.2335C14.8963 1.2335 16.6833 3.02277 16.6833 5.24183C16.6833 7.94228 15.4367 10.1067 13.866 11.716C12.2875 13.3333 10.4217 14.346 9.30663 14.7267Z",
                                stroke: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$FavoritesStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["favoritesStore"].favoritesIds.some((item)=>item === targetProduct.Product_ID) ? "#FE646F" : "#6C6C6C",
                                strokeWidth: "1.3",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "jsx-223c3f72d602c327"
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 610,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                            lineNumber: 596,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 590,
                        columnNumber: 9
                    }, this),
                    mainImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-223c3f72d602c327" + " " + "product-image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-223c3f72d602c327" + " " + "swiper-slide-content",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: mainImageUrl,
                                alt: `Изображение товара ${targetProduct.Product_Name || "Товар"}`,
                                onError: (e)=>{
                                    e.currentTarget.src = "/placeholder-image.jpg";
                                    // Если изображение цвета не загрузилось, сбрасываем mainImageUrl
                                    setMainImageUrl(null);
                                },
                                className: "jsx-223c3f72d602c327" + " " + "product-image-item"
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 630,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                            lineNumber: 629,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 628,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-223c3f72d602c327" + " " + "product-image",
                        children: (()=>{
                            try {
                                // Преобразуем Proxy объекты в обычные
                                const rawProduct = JSON.parse(JSON.stringify(targetProduct));
                                // Собираем все изображения
                                let allImages = [
                                    ...rawProduct.images || []
                                ];
                                // Добавляем изображения из параметров
                                if (rawProduct.parameters) {
                                    rawProduct.parameters.forEach((param)=>{
                                        if (param.extra_field_image) {
                                            allImages.push({
                                                Image_ID: `param-${param.Parameter_ID}`,
                                                Image_URL: param.extra_field_image,
                                                MainImage: false,
                                                Product_ID: rawProduct.Product_ID,
                                                from_parameter: true,
                                                parameter_name: param.parameter_string
                                            });
                                        }
                                    });
                                }
                                // Если нет изображений, показываем заглушку
                                if (allImages.length === 0) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-223c3f72d602c327" + " " + "swiper-slide-content",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/placeholder-image.jpg",
                                            alt: "Изображение товара отсутствует",
                                            className: "jsx-223c3f72d602c327" + " " + "product-image-item"
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                            lineNumber: 672,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                        lineNumber: 671,
                                        columnNumber: 21
                                    }, this);
                                }
                                // Если есть только одно изображение, показываем его без слайдера
                                if (allImages.length === 1) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-223c3f72d602c327" + " " + "swiper-slide-content",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: allImages[0].Image_URL,
                                            alt: `Изображение товара ${rawProduct.Product_Name || "Товар"}`,
                                            onError: (e)=>{
                                                e.currentTarget.src = "/placeholder-image.jpg";
                                            },
                                            className: "jsx-223c3f72d602c327" + " " + "product-image-item"
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                            lineNumber: 685,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                        lineNumber: 684,
                                        columnNumber: 21
                                    }, this);
                                }
                                // Если несколько изображений, используем Swiper
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                                    modules: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                                    ],
                                    spaceBetween: 10,
                                    slidesPerView: 1,
                                    pagination: {
                                        clickable: true
                                    },
                                    className: "product-slider",
                                    onInit: (swiper)=>{
                                        setTimeout(()=>swiper.update(), 100);
                                    },
                                    children: allImages.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-223c3f72d602c327" + " " + "swiper-slide-content",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: image.Image_URL,
                                                    alt: `Изображение товара ${rawProduct.Product_Name || "Товар"} ${image.from_parameter ? `(${image.parameter_name})` : ""}`,
                                                    onError: (e)=>{
                                                        e.currentTarget.src = "/placeholder-image.jpg";
                                                    },
                                                    className: "jsx-223c3f72d602c327" + " " + "product-image-item"
                                                }, void 0, false, {
                                                    fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                                    lineNumber: 716,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                                lineNumber: 715,
                                                columnNumber: 25
                                            }, this)
                                        }, `slide-${index}-${image.Image_ID || Math.random()}`, false, {
                                            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                            lineNumber: 712,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                    lineNumber: 699,
                                    columnNumber: 19
                                }, this);
                            } catch (error) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-223c3f72d602c327" + " " + "swiper-slide-content",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/placeholder-image.jpg",
                                        alt: "Ошибка загрузки изображений",
                                        className: "jsx-223c3f72d602c327" + " " + "product-image-item"
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                        lineNumber: 732,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                    lineNumber: 731,
                                    columnNumber: 19
                                }, this);
                            }
                        })()
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 643,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                lineNumber: 580,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-223c3f72d602c327" + " " + "product-details",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "jsx-223c3f72d602c327" + " " + "product-title",
                        children: targetProduct.Product_Name || "Неизвестный товар"
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 746,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-223c3f72d602c327" + " " + "price-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-223c3f72d602c327" + " " + "current-price",
                                children: [
                                    totalPrice || 0,
                                    " ₽"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 751,
                                columnNumber: 11
                            }, this),
                            selectedColor?.discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-223c3f72d602c327" + " " + "old-price",
                                children: [
                                    totalPrice + selectedColor.discount,
                                    " ₽"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 754,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 750,
                        columnNumber: 9
                    }, this),
                    targetProduct.parameters?.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-223c3f72d602c327" + " " + "parameters-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-223c3f72d602c327" + " " + "parameters-title",
                                children: selectedParameterType
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 761,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-223c3f72d602c327" + " " + "parameters-content",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    height: "38px",
                                    between: "5px",
                                    children: targetProduct.parameters.map((param)=>{
                                        // Получаем ключ параметра
                                        const paramKey = param.name;
                                        // Проверяем, выбран ли данный параметр
                                        const isActive = selectedParams[paramKey]?.id === param.Parameter_ID;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>addSettingItem({
                                                    id: param.Parameter_ID,
                                                    index: 0,
                                                    title: param.parameter_string,
                                                    price: param.price || 0,
                                                    old_price: param.old_price
                                                }, param.name),
                                            className: "jsx-223c3f72d602c327" + " " + `parameters-item ${isActive ? "parameters-item--active" : ""}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-223c3f72d602c327" + " " + "parameters-text",
                                                children: param.parameter_string || "Без названия"
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                                lineNumber: 789,
                                                columnNumber: 23
                                            }, this)
                                        }, `param-${param.Parameter_ID || Math.random()}`, false, {
                                            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                            lineNumber: 773,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                    lineNumber: 763,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 762,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 760,
                        columnNumber: 11
                    }, this),
                    targetProduct.colors?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-223c3f72d602c327" + " " + "color-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-223c3f72d602c327" + " " + "parameters-title",
                                children: "Цвет"
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 803,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-223c3f72d602c327" + " " + "color-options",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    height: "42px",
                                    between: "5px",
                                    children: targetProduct.colors.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>selectColor(color),
                                            className: "jsx-223c3f72d602c327" + " " + `color-option ${selectedColor?.Color_ID === color.Color_ID ? "color-option--active" : ""}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        backgroundColor: color.Color_Code || "#ccc"
                                                    },
                                                    className: "jsx-223c3f72d602c327" + " " + "color-circle"
                                                }, void 0, false, {
                                                    fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                                    lineNumber: 812,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "jsx-223c3f72d602c327" + " " + "color-name",
                                                    children: color.Color_Name
                                                }, void 0, false, {
                                                    fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, `color-${color.Color_ID || Math.random()}`, true, {
                                            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                            lineNumber: 807,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                    lineNumber: 805,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 804,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 802,
                        columnNumber: 11
                    }, this),
                    targetProduct.reviews_video?.length > 0 && targetProduct.reviews_video[0]?.Video_URL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: scrollToVideo,
                        className: "jsx-223c3f72d602c327" + " " + "video-button",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-223c3f72d602c327" + " " + "video-button-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}video-link-icon.svg`,
                                        alt: "Видео",
                                        onError: (e)=>{
                                            e.currentTarget.src = "/placeholder-icon.svg";
                                        },
                                        className: "jsx-223c3f72d602c327"
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                        lineNumber: 829,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-223c3f72d602c327" + " " + "video-button-text",
                                        children: "Смотреть видео-обзор"
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                        lineNumber: 837,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 828,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}dark-expand-icon.svg`,
                                alt: "Смотерть",
                                onError: (e)=>{
                                    e.currentTarget.src = "/placeholder-icon.svg";
                                },
                                className: "jsx-223c3f72d602c327" + " " + "expand-icon"
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 840,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 827,
                        columnNumber: 13
                    }, this),
                    targetProduct.extras?.length > 0 && targetProduct.extras[0]?.Characteristics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-223c3f72d602c327" + " " + `description-block ${isDescriptionOpen ? "description-block--open" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: toggleDescriptionHandler,
                                className: "jsx-223c3f72d602c327" + " " + "description-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-223c3f72d602c327" + " " + "description-title",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.product_page_accordeon_item_header_12_value || "Описание"
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                        lineNumber: 860,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleDescriptionHandler,
                                        className: "jsx-223c3f72d602c327" + " " + "description-expand-button cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}dark-expand-icon.svg`,
                                            alt: "Развернуть",
                                            onError: (e)=>{
                                                e.currentTarget.src = "/placeholder-icon.svg";
                                            },
                                            className: "jsx-223c3f72d602c327" + " " + "description-expand-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                            lineNumber: 869,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                        lineNumber: 865,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 856,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                ref: descriptionRef,
                                className: "jsx-223c3f72d602c327" + " " + "description-text",
                                children: targetProduct.extras[0].Characteristics
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 880,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 853,
                        columnNumber: 13
                    }, this),
                    targetProduct.extras?.length > 0 && targetProduct.extras[0]?.Kit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-223c3f72d602c327" + " " + `specs-block ${isSpecsOpen ? "specs-block--open" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: toggleSpecsHandler,
                                className: "jsx-223c3f72d602c327" + " " + "specs-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "jsx-223c3f72d602c327" + " " + "specs-title",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters?.product_page_accordeon_item_header_34_value || "Характеристики"
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                        lineNumber: 891,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleSpecsHandler,
                                        className: "jsx-223c3f72d602c327" + " " + "specs-expand-button cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}dark-expand-icon.svg`,
                                            alt: "Развернуть",
                                            onError: (e)=>{
                                                e.currentTarget.src = "/placeholder-icon.svg";
                                            },
                                            className: "jsx-223c3f72d602c327" + " " + "specs-expand-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                            lineNumber: 901,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                        lineNumber: 897,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 890,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                ref: specsRef,
                                className: "jsx-223c3f72d602c327" + " " + "specs-text",
                                children: targetProduct.extras[0].Kit
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 912,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 887,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data?.special_project_parameters_badges?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-223c3f72d602c327" + " " + "info-cards ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            height: "100%",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data.special_project_parameters_badges.slice(0, Math.min(4, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$DataStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dataStore"].data.special_project_parameters_badges.length)).map((badge, index)=>{
                                const cardInfo = index < infoCards.length ? infoCards[index] : {
                                    title: "Информация",
                                    image: `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$globalVariables$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconsBaseLink"]}about-icon.svg`
                                };
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>openLinkTeletype(badge.url || "#"),
                                    className: "jsx-223c3f72d602c327" + " " + "info-card click-effect-block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-223c3f72d602c327" + " " + "info-text",
                                            children: cardInfo.title
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                            lineNumber: 944,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: cardInfo.image,
                                            alt: cardInfo.title,
                                            onError: (e)=>{
                                                e.currentTarget.src = "/placeholder-icon.svg";
                                            },
                                            className: "jsx-223c3f72d602c327" + " " + "info-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                            lineNumber: 946,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, badge.id || index, true, {
                                    fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                    lineNumber: 939,
                                    columnNumber: 21
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                            lineNumber: 920,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 919,
                        columnNumber: 11
                    }, this),
                    targetProduct.reviews?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-223c3f72d602c327" + " " + "reviews-block",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-223c3f72d602c327" + " " + "reviews-title",
                                children: "Отзывы"
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 963,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                                modules: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                                ],
                                spaceBetween: 10,
                                slidesPerView: 1,
                                pagination: {
                                    clickable: true
                                },
                                className: "reviews-content",
                                style: {
                                    width: "100%",
                                    height: "100%"
                                },
                                children: targetProduct.reviews.map((review)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-223c3f72d602c327" + " " + "swiper-slide-content",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: review.Photo_URL || "/placeholder-review.jpg",
                                                alt: "Отзыв пользователя",
                                                onError: (e)=>{
                                                    e.currentTarget.src = "/placeholder-review.jpg";
                                                },
                                                className: "jsx-223c3f72d602c327"
                                            }, void 0, false, {
                                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                                lineNumber: 976,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                            lineNumber: 975,
                                            columnNumber: 19
                                        }, this)
                                    }, review.Photo_ID || Math.random(), false, {
                                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                        lineNumber: 974,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 965,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleViewAllReviews,
                                className: "jsx-223c3f72d602c327" + " " + "view-all-button",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-223c3f72d602c327" + " " + "view-all-text",
                                    children: "Смотреть все отзывы"
                                }, void 0, false, {
                                    fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                    lineNumber: 989,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                                lineNumber: 988,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 962,
                        columnNumber: 11
                    }, this),
                    targetProduct.reviews_video?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$entities$2f$VideoReview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        video: targetProduct.reviews_video[0]
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 995,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (!isAddToCartEnabled || targetProduct.colors?.length > 0 && !selectedColor) {
                                showColorRequiredPopup();
                            } else {
                                handleAddToCart();
                            }
                        },
                        className: "jsx-223c3f72d602c327" + " " + `add-to-cart-button click-effect-block 
            ${isAddingToCart ? "add-to-cart-button--added" : ""}
            ${!isAddToCartEnabled || targetProduct.colors?.length > 0 && !selectedColor ? "add-to-cart-button--disabled" : ""}
            ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$detectIOS$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detectIOS"])() ? "add-to-cart-button--ios" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "jsx-223c3f72d602c327" + " " + "add-to-cart-text",
                            children: isAddingToCart ? "В корзину" : "Добавить в корзину"
                        }, void 0, false, {
                            fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                            lineNumber: 1014,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                        lineNumber: 998,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                lineNumber: 745,
                columnNumber: 7
            }, this),
            errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-223c3f72d602c327" + " " + "error-popup",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "jsx-223c3f72d602c327",
                    children: errorMessage
                }, void 0, false, {
                    fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                    lineNumber: 1023,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                lineNumber: 1022,
                columnNumber: 9
            }, this),
            colorRequiredPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-223c3f72d602c327" + " " + "color-required-popup",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "jsx-223c3f72d602c327",
                    children: "Пожалуйста, выберите цвет товара"
                }, void 0, false, {
                    fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                    lineNumber: 1030,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/widgets/pageContents/ProductContent.tsx",
                lineNumber: 1029,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/widgets/pageContents/ProductContent.tsx",
        lineNumber: 541,
        columnNumber: 5
    }, this);
});
const __TURBOPACK__default__export__ = ProductContent;
}}),
"[project]/utils/ScrollToTop.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScrollToTop": (()=>ScrollToTop),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
;
;
const ScrollToTop = ({ children })=>{
    const location = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [
        location.pathname
    ]);
    return children || null;
};
const __TURBOPACK__default__export__ = ScrollToTop;
}}),
"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-router-dom/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$PageWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/PageWrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$pageContents$2f$HomePageContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/pageContents/HomePageContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$pageContents$2f$CatalogContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/pageContents/CatalogContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$pageContents$2f$FavoritesContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/pageContents/FavoritesContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$pageContents$2f$ShoppingCartContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/pageContents/ShoppingCartContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$pageContents$2f$ProductContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/widgets/pageContents/ProductContent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/Loading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$ScrollToTop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/ScrollToTop.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsClient(true);
    }, []);
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$Loading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 25,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HashRouter"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$ScrollToTop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$PageWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Routes"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Route"], {
                            path: "/",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$pageContents$2f$HomePageContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 35,
                                columnNumber: 38
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Route"], {
                            path: "/catalog",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$pageContents$2f$CatalogContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 36,
                                columnNumber: 45
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Route"], {
                            path: "/favorites",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$pageContents$2f$FavoritesContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 37,
                                columnNumber: 47
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Route"], {
                            path: "/shoppingcart",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$pageContents$2f$ShoppingCartContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 38,
                                columnNumber: 50
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Route"], {
                            path: "/product/:productId",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$widgets$2f$pageContents$2f$ProductContent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 39,
                                columnNumber: 56
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Route"], {
                            path: "*",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navigate"], {
                                to: "/",
                                replace: true
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 40,
                                columnNumber: 38
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__940fa9ee._.js.map