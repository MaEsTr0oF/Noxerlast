module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/data/fakeData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchProductsData": (()=>fetchProductsData),
    "getProjectData": (()=>getProjectData),
    "projectData": (()=>projectData)
});
function validateProduct(product) {
    if (!product || typeof product !== "object") {
        console.error("Невалидные данные продукта:", product);
        return null;
    }
    if (!product.Product_ID || typeof product.Product_ID !== "number") {
        console.error("Продукт без валидного ID:", product);
        return null;
    }
    return {
        ...product,
        Product_Name: product.Product_Name || "Неизвестный товар",
        images: Array.isArray(product.images) ? product.images : [],
        categories: Array.isArray(product.categories) ? product.categories : [],
        marks: Array.isArray(product.marks) ? product.marks : [],
        parameters: Array.isArray(product.parameters) ? product.parameters : [],
        colors: Array.isArray(product.colors) ? product.colors.map((color)=>({
                Color_ID: color?.Color_ID || 0,
                Color_Name: color?.Color_Name || "",
                Color_Code: color?.Color_Code || "",
                Color_image: color?.Color_image || null,
                Product_ID: color?.Product_ID || product.Product_ID || 0,
                discount: color?.discount || null
            })) : [],
        extras: Array.isArray(product.extras) ? product.extras : [],
        reviews: Array.isArray(product.reviews) ? product.reviews : [],
        reviews_video: Array.isArray(product.reviews_video) ? product.reviews_video : []
    };
}
function validateProjectData(data) {
    if (!data || typeof data !== "object") {
        console.error("Невалидные данные проекта:", data);
        return {
            categories: [],
            product_marks: [],
            overall_product_tags_by_category: {},
            products: []
        };
    }
    // Заменяем все URL адреса в special_project_parameters
    const origin = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "";
    if (data.special_project_parameters) {
        for(const key in data.special_project_parameters){
            if (typeof data.special_project_parameters[key] === "string") {
                data.special_project_parameters[key] = data.special_project_parameters[key].replace(/https:\/\/noxer-ai\.ru/g, origin);
            }
        }
    }
    const validatedProducts = Array.isArray(data.products) ? data.products.map(validateProduct).filter(Boolean) : [];
    return {
        categories: Array.isArray(data.categories) ? data.categories : [],
        product_marks: Array.isArray(data.product_marks) ? data.product_marks : [],
        overall_product_tags_by_category: data.overall_product_tags_by_category || {},
        products: validatedProducts,
        special_project_parameters: data.special_project_parameters || {},
        special_project_parameters_actions: Array.isArray(data.special_project_parameters_actions) ? data.special_project_parameters_actions : [],
        special_project_parameters_badges: Array.isArray(data.special_project_parameters_badges) ? data.special_project_parameters_badges : [],
        status: data.status || ""
    };
}
async function fetchProductsData() {
    try {
        // Определяем базовый URL динамически
        const baseUrl = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : "";
        // Формируем полный URL для API запроса
        const apiUrl = `${baseUrl}/api/products`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return validateProjectData(data);
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        return {
            categories: [],
            product_marks: [],
            overall_product_tags_by_category: {},
            products: []
        };
    }
}
let cachedData = null;
let cacheTimestamp = 0;
const CACHE_LIFETIME = 5 * 60 * 1000;
async function getProjectData() {
    const now = Date.now();
    if (cachedData && now - cacheTimestamp < CACHE_LIFETIME) {
        return cachedData;
    }
    try {
        const freshData = await fetchProductsData();
        cachedData = freshData;
        cacheTimestamp = now;
        return freshData;
    } catch (error) {
        console.error("Ошибка при получении и кэшировании данных:", error);
        if (cachedData) {
            console.warn("Возвращаем устаревшие данные из кэша");
            return cachedData;
        }
        return {
            categories: [],
            product_marks: [],
            overall_product_tags_by_category: {},
            products: []
        };
    }
}
const projectData = {
    categories: [],
    product_marks: [],
    overall_product_tags_by_category: {},
    products: []
};
}}),
"[project]/features/Metrics.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$fakeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/fakeData.ts [app-ssr] (ecmascript)");
"use client";
;
;
const Metrics = ()=>{
    const footerText = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$fakeData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectData"]?.special_project_parameters?.project_footer_special_text_extra_field_1 || "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        dangerouslySetInnerHTML: {
            __html: footerText
        }
    }, void 0, false, {
        fileName: "[project]/features/Metrics.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Metrics;
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__81b9040c._.js.map