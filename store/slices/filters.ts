import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IFilterField {
    options: ICheckboxValues[];
    placeholder: string;
    type: FilterType;
}

export interface ICheckboxValues {
    title: string;
    checked: boolean;
}

export interface ISelectedFilter {
    final: string[];
    middle: string[];
}

interface IFiltersState {
    filtersFields: IFilterField[],
    investmentType: ISelectedFilter,
    industry: ISelectedFilter,
    country: ISelectedFilter,
    years: ISelectedFilter,
    license: ISelectedFilter,
}

export type FilterType = 'investmentType' | 'industry' | 'country' | 'years' | 'license';

export interface IPayloadFilterField {
    type: FilterType,
    value: string
}


const initialState: IFiltersState = {
    filtersFields: [
        {
            options: [
                {title: 'Equity', checked: false},
                {title: 'Debt', checked: false},
                {title: 'P2P lending', checked: false},
                {title: 'Reward', checked: false},
                {title: 'Donation', checked: false},
                {title: 'Buy-to-let', checked: false},
                {title: 'Mini-bonds', checked: false}
            ],
            placeholder: 'Select investment type',
            type: "investmentType"
        },
        {
            options: [
                {title: 'Real estate', checked: false},
                {title: 'Startups', checked: false},
                {title: 'SME', checked: false},
                {title: 'Sustainability', checked: false},
                {title: 'Litigation', checked: false},
                {title: 'Green energy', checked: false},
                {title: 'Health & Science', checked: false},
                {title: 'Logistics', checked: false},
                {title: 'Personal loans', checked: false},
                {title: 'Art', checked: false},
                {title: 'Mortgages', checked: false},
                {title: 'Social cause', checked: false},
                {title: 'Education', checked: false},
                {title: 'Farming', checked: false},
                {title: 'Sport', checked: false},
                {title: 'Maritime', checked: false}
            ]
            ,
            placeholder: 'Select industry',
            type: "industry"
        },
        {
            options: [
                {title: 'Andorra', checked: false},
                {title: 'Albania', checked: false},
                {title: 'Austria', checked: false},
                {title: 'Belgium', checked: false},
                {title: 'Bulgaria', checked: false},
                {title: 'Croatia', checked: false},
                {title: 'Cyprus', checked: false},
                {title: 'Czech Republic', checked: false},
                {title: 'Denmark', checked: false},
                {title: 'Estonia', checked: false},
                {title: 'Finland', checked: false},
                {title: 'France', checked: false},
                {title: 'Germany', checked: false},
                {title: 'Greece', checked: false},
                {title: 'Hungary', checked: false},
                {title: 'Iceland', checked: false},
                {title: 'Ireland', checked: false},
                {title: 'Israel', checked: false},
                {title: 'Italy', checked: false},
                {title: 'Latvia', checked: false},
                {title: 'Liechtenstein', checked: false},
                {title: 'Lithuania', checked: false},
                {title: 'Luxembourg', checked: false},
                {title: 'Macedonia', checked: false},
                {title: 'Malta', checked: false},
                {title: 'Moldova', checked: false},
                {title: 'Monaco', checked: false},
                {title: 'Netherlands', checked: false},
                {title: 'Norway', checked: false},
                {title: 'Poland', checked: false},
                {title: 'Portugal', checked: false},
                {title: 'Romania', checked: false},
                {title: 'Turkey', checked: false},
                {title: 'Serbia', checked: false},
                {title: 'Slovakia', checked: false},
                {title: 'Slovenia', checked: false},
                {title: 'Spain', checked: false},
                {title: 'Sweden', checked: false},
                {title: 'Switzerland', checked: false},
                {title: 'United Kingdom', checked: false},
                {title: 'Ukraine', checked: false}
            ],
            placeholder: 'Select country of operation',
            type: "country"
        },
        {
            options: [
                {title: '1 year', checked: false},
                {title: '2-3 years', checked: false},
                {title: '4-5 years', checked: false},
                {title: 'more than 5', checked: false}
            ]
            ,
            placeholder: 'Years on market',
            type: "years"
        },
        {
            options: [
                {title: 'Yes', checked: false}
            ],
            placeholder: 'ECSP license',
            type: "license"
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
    years: {
        final: [],
        middle: []
    },
    license: {
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
        clearSelectFilterType: (state, action: PayloadAction<FilterType>) => {
            state[action.payload].middle = [];

            const currentFilterIndex = state.filtersFields.findIndex((filter) => filter.type === action.payload);
            if (currentFilterIndex !== -1) {
                state.filtersFields[currentFilterIndex].options = state.filtersFields[currentFilterIndex].options.map((item) => ({...item, checked: false}));
            }
        },
        resetFilters: (state) => {
            state.investmentType.middle = [];
            state.investmentType.final = [];

            state.industry.middle = [];
            state.industry.final = [];

            state.country.middle = [];
            state.country.final = [];

            state.years.middle = [];
            state.years.final = [];

            state.license.middle = [];
            state.license.final = [];

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
    toggleCheckbox
} = filtersSlice.actions;

export default filtersSlice.reducer;
