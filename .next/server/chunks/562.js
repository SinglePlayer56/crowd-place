"use strict";
exports.id = 562;
exports.ids = [562];
exports.modules = {

/***/ 4562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  aW: () => (/* binding */ getMetadataValues),
  oL: () => (/* binding */ getType),
  hb: () => (/* binding */ mailDataType)
});

// UNUSED EXPORTS: convertToObjectValue, createFilterObject, extractValuesByKeyArray, generateQueryParams, isActiveLink, searchTypeFilter, sendMail

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(64980);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(42527);
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
function mailDataType(data) {
    return data["Platform name"] !== undefined;
}
async function sendMail(data) {
    const response = await fetch(`/api/send-mail`, {
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


/***/ })

};
;