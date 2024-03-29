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
                {title: 'New', checked: false, slug: 'new'},
                {title: '1-3 years', checked: false, slug: '1-3-years'},
                {title: '4-5 years', checked: false, slug: '4-5-years'},
                {title: 'More than 5', checked: false, slug: 'more-than-5'}
            ]
            ,
            placeholder: 'Years on market',
            type: "yearFounded"
        },
        {
            options: [
                {title: 'Yes', checked: false, slug: 'yes'},
                {title: 'No', checked: false, slug: 'no'},
            ],
            placeholder: 'Regulated?',
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
        clearSelectFilterType: (state, action: PayloadAction<FilterType>) => {
            state[action.payload].middle = [];

            const currentFilterIndex = state.filtersFields.findIndex((filter) => filter.type === action.payload);
            if (currentFilterIndex !== -1) {
                state.filtersFields[currentFilterIndex].options = state.filtersFields[currentFilterIndex].options.map((item) => ({
                    ...item,
                    checked: false
                }));
            }
        },
        addTag: (state, action: PayloadAction<string[] >) => {
            const currentFilterIndex = state.filtersFields.findIndex((filter) => {
                const isNull = filter.options.findIndex((option) => option.slug === action.payload[0]);
                return isNull !== -1;
            })
            const currentType = state.filtersFields[currentFilterIndex].type;

            const updateFilter = state.filtersFields[currentFilterIndex].options.map((option) => {
                if (action.payload.includes(option.slug)) {
                    return {...option, checked: true}
                } else {
                    return option
                }
            });

            const optionsValues = updateFilter
                .filter((option) => action.payload.includes(option.slug))
                .map((option) => option.title);

            state.filtersFields[currentFilterIndex].options = updateFilter;
            state[currentType].middle = optionsValues;
            state[currentType].final = optionsValues;
        },
        removeFilter: (state, action: PayloadAction<{ type: string, value: string }>) => {
            switch (action.payload.type) {
                case 'Investment type': {
                    const filterIndex = state.filtersFields.findIndex((options) => options.type === 'investmentType');
                    const currentOption = state.filtersFields[filterIndex].options.findIndex((option) => option.title === action.payload.value);
                    state.filtersFields[filterIndex].options[currentOption].checked = false;

                    state.investmentType.middle = state.investmentType.middle.filter((value) => value !== action.payload.value);
                    state.investmentType.final = state.investmentType.final.filter((value) => value !== action.payload.value);
                    break;
                }
                case 'Industry': {
                    const filterIndex = state.filtersFields.findIndex((options) => options.type === 'industry');
                    const currentOption = state.filtersFields[filterIndex].options.findIndex((option) => option.title === action.payload.value);
                    state.filtersFields[filterIndex].options[currentOption].checked = false;

                    state.industry.middle = state.industry.middle.filter((value) => value !== action.payload.value);
                    state.industry.final = state.industry.final.filter((value) => value !== action.payload.value);
                    break;
                }
                case 'Country': {
                    const filterIndex = state.filtersFields.findIndex((options) => options.type === 'country');
                    const currentOption = state.filtersFields[filterIndex].options.findIndex((option) => option.title === action.payload.value);
                    state.filtersFields[filterIndex].options[currentOption].checked = false;

                    state.country.middle = state.country.middle.filter((value) => value !== action.payload.value);
                    state.country.final = state.country.final.filter((value) => value !== action.payload.value);
                    break;
                }
                case 'Years on market': {
                    const filterIndex = state.filtersFields.findIndex((options) => options.type === 'yearFounded');
                    const currentOption = state.filtersFields[filterIndex].options.findIndex((option) => option.title === action.payload.value);
                    state.filtersFields[filterIndex].options[currentOption].checked = false;

                    state.yearFounded.middle = state.yearFounded.middle.filter((value) => value !== action.payload.value);
                    state.yearFounded.final = state.yearFounded.final.filter((value) => value !== action.payload.value);
                    break;
                }
                case 'Regulated?': {
                    const filterIndex = state.filtersFields.findIndex((options) => options.type === 'licenseNumber');
                    const currentOption = state.filtersFields[filterIndex].options.findIndex((option) => option.title === action.payload.value);
                    state.filtersFields[filterIndex].options[currentOption].checked = false;

                    state.licenseNumber.middle = state.licenseNumber.middle.filter((value) => value !== action.payload.value);
                    state.licenseNumber.final = state.licenseNumber.final.filter((value) => value !== action.payload.value);
                    break;
                }
            }
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
    removeFilter,
    addTag
} = filtersSlice.actions;

export default filtersSlice.reducer;
