import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IFilterField {
    options: ICheckboxValues[];
    placeholder: string;
    type: FilterType;
}

export interface ICheckboxValues {
    title: string;
    checked: boolean;
    slug: string;
}

export interface ISelectedFilter {
    final: string[];
    middle: string[];
}

export interface IFiltersState {
    filtersFields: IFilterField[],
    investmentType: ISelectedFilter,
    industry: ISelectedFilter,
    country: ISelectedFilter,
    yearFounded: ISelectedFilter,
    licenseNumber: ISelectedFilter,
}

export type FilterType = 'investmentType' | 'industry' | 'country' | 'yearFounded' | 'licenseNumber';

export interface IPayloadFilterField {
    type: FilterType,
    value: string
}


const initialState: IFiltersState = {
    filtersFields: [
        {
            options: [
                {title: 'Equity', checked: false, slug: 'equity'},
                {title: 'Debt', checked: false, slug: 'debt'},
                {title: 'P2P lending', checked: false, slug: 'p2p-lending'},
                {title: 'Reward', checked: false, slug: 'reward'},
                {title: 'Donation', checked: false, slug: 'donation'},
                {title: 'Buy-to-let', checked: false, slug: 'buy-to-let'},
                {title: 'Mini-bonds', checked: false, slug: 'mini-bonds'}
            ],
            placeholder: 'Select investment type',
            type: "investmentType"
        },
        {
            options: [
                {title: 'Real estate', checked: false, slug: 'real-estate'},
                {title: 'Startups', checked: false, slug: 'startups'},
                {title: 'SME', checked: false, slug: 'sme'},
                {title: 'Sustainability', checked: false, slug: 'sustainability'},
                {title: 'Litigation', checked: false, slug: 'litigation'},
                {title: 'Green energy', checked: false, slug: 'green-energy'},
                {title: 'Health & Science', checked: false, slug: 'health-science'},
                {title: 'Logistics', checked: false, slug: 'logistics'},
                {title: 'Personal loans', checked: false, slug: 'personal-loans'},
                {title: 'Art', checked: false, slug: 'art'},
                {title: 'Mortgages', checked: false, slug: 'mortgages'},
                {title: 'Social cause', checked: false, slug: 'social-cause'},
                {title: 'Education', checked: false, slug: 'education'},
                {title: 'Farming', checked: false, slug: 'farming'},
                {title: 'Sport', checked: false, slug: 'sport'},
                {title: 'Maritime', checked: false, slug: 'maritime'}
            ]
            ,
            placeholder: 'Select industry',
            type: "industry"
        },
        {
            options: [
                {title: 'Andorra', checked: false, slug: 'andorra'},
                {title: 'Albania', checked: false, slug: 'albania'},
                {title: 'Austria', checked: false, slug: 'austria'},
                {title: 'Belgium', checked: false, slug: 'belgium'},
                {title: 'Bulgaria', checked: false, slug: 'bulgaria'},
                {title: 'Croatia', checked: false, slug: 'croatia'},
                {title: 'Cyprus', checked: false, slug: 'cyprus'},
                {title: 'Czech Republic', checked: false, slug: 'czech-republic'},
                {title: 'Denmark', checked: false, slug: 'denmark'},
                {title: 'Estonia', checked: false, slug: 'estonia'},
                {title: 'Finland', checked: false, slug: 'finland'},
                {title: 'France', checked: false, slug: 'france'},
                {title: 'Germany', checked: false, slug: 'germany'},
                {title: 'Greece', checked: false, slug: 'greece'},
                {title: 'Hungary', checked: false, slug: 'hungary'},
                {title: 'Iceland', checked: false, slug: 'iceland'},
                {title: 'Ireland', checked: false, slug: 'ireland'},
                {title: 'Israel', checked: false, slug: 'israel'},
                {title: 'Italy', checked: false, slug: 'italy'},
                {title: 'Latvia', checked: false, slug: 'latvia'},
                {title: 'Liechtenstein', checked: false, slug: 'liechtenstein'},
                {title: 'Lithuania', checked: false, slug: 'lithuania'},
                {title: 'Luxembourg', checked: false, slug: 'luxembourg'},
                {title: 'Macedonia', checked: false, slug: 'macedonia'},
                {title: 'Malta', checked: false, slug: 'malta'},
                {title: 'Moldova', checked: false, slug: 'moldova'},
                {title: 'Monaco', checked: false, slug: 'monaco'},
                {title: 'Netherlands', checked: false, slug: 'netherlands'},
                {title: 'Norway', checked: false, slug: 'norway'},
                {title: 'Poland', checked: false, slug: 'poland'},
                {title: 'Portugal', checked: false, slug: 'portugal'},
                {title: 'Romania', checked: false, slug: 'romania'},
                {title: 'Turkey', checked: false, slug: 'turkey'},
                {title: 'Serbia', checked: false, slug: 'serbia'},
                {title: 'Slovakia', checked: false, slug: 'slovakia'},
                {title: 'Slovenia', checked: false, slug: 'slovenia'},
                {title: 'Spain', checked: false, slug: 'spain'},
                {title: 'Sweden', checked: false, slug: 'sweden'},
                {title: 'Switzerland', checked: false, slug: 'switzerland'},
                {title: 'United Kingdom', checked: false, slug: 'united-kingdom'},
                {title: 'Ukraine', checked: false, slug: 'ukraine'}
            ],
            placeholder: 'Select country of operation',
            type: "country"
        },
        {
            options: [
                {title: '1 year', checked: false, slug: '1-year'},
                {title: '2-3 years', checked: false, slug: '2-3-years'},
                {title: '4-5 years', checked: false, slug: '4-5-years'},
                {title: 'more than 5', checked: false, slug: 'more-than-5'}
            ]
            ,
            placeholder: 'Years on market',
            type: "yearFounded"
        },
        {
            options: [
                {title: 'Yes', checked: false, slug: 'yes'}
            ],
            placeholder: 'ECSP license',
            type: "licenseNumber"
        },
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
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        toggleCheckbox: (state, action: PayloadAction<IPayloadFilterField>) => {
            const findValue = state[action.payload.type].middle.find((value) => value === action.payload.value);

            const currentFieldIndex: number = state.filtersFields.findIndex((field) => field.type === action.payload.type);
            const currentOptionIndex: number = state.filtersFields[currentFieldIndex].options.findIndex((option) => option.title === action.payload.value);

            if (!findValue) {
                state[action.payload.type].middle.push(action.payload.value);
                if (currentOptionIndex !== -1) {
                    state.filtersFields[currentFieldIndex].options[currentOptionIndex].checked = true;
                }
            }
            if (findValue) {
                state[action.payload.type].middle = state[action.payload.type].middle.filter((item) => item !== findValue);
                if (currentOptionIndex !== -1) {
                    state.filtersFields[currentFieldIndex].options[currentOptionIndex].checked = false;
                }
            }
        },
        acceptSelectFilterType: (state, action: PayloadAction<FilterType>) => {
            state[action.payload].final = [...state[action.payload].middle];
        },
        addMiddleFilter: (state, action: PayloadAction<{ type: FilterType, valueArray: string[] }>) => {
            state[action.payload.type].middle = [...action.payload.valueArray];
        },
        clearSelectFilterType: (state, action: PayloadAction<FilterType>) => {
            state[action.payload].middle = [];

            const currentFilterIndex = state.filtersFields.findIndex((filter) => filter.type === action.payload);
            if (currentFilterIndex !== -1) {
                state.filtersFields[currentFilterIndex].options = state.filtersFields[currentFilterIndex].options.map((item) => ({...item, checked: false}));
            }
        },
        addServerState: (state, action: PayloadAction<IFiltersState>) => {
            return {...state, ...action.payload}
        },
        addServerOptions: (state, action: PayloadAction<{ type: FilterType, options: ICheckboxValues[] }>) => {
            const currentIndex = state.filtersFields.findIndex((field) => field.type === action.payload.type);

            if (currentIndex !== -1){
                state.filtersFields[currentIndex].options = [...action.payload.options];
            }
        },
        removeFilter: (state, action: PayloadAction<{type: FilterType, value: string}>) => {

        },
        resetFilters: (state) => {
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

            state.filtersFields = state.filtersFields.map((filterField) => {
                return {
                    ...filterField,
                    options: filterField.options.map((option) => ({...option, checked: false}))
                }
            })
        }
    }
})

export const {
    acceptSelectFilterType,
    clearSelectFilterType,
    resetFilters,
    toggleCheckbox,
    addMiddleFilter,
    addServerState,
    addServerOptions
} = filtersSlice.actions;

export default filtersSlice.reducer;
