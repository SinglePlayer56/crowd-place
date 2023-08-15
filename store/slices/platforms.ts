import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPlatform} from "@/types";

const initialState: {count: number, rows: IPlatform[]} = {
    count: 0,
    rows: [
        {
            name: '',
            slug: '',
            industry: [''],
            investmentType: [''],
            autoInvest: false,
            signupBonus: false,
            secondaryMarket: false,
            publicStatistics: false,
            reviews: '',
            country: [''],
            buybackGuarantee: false,
            licenseNumber: '',
            languages: [''],
            logo: '',
            advertisedReturn: '',
            averageLoanDuration: '',
            description: '',
            investors: '',
            website: '',
            minimumInvestment: '',
            regulated: false,
            yearFounded: '',
            paymentOptions: [''],
            totalFundingVolume: '',
            whoCanInvest: ''
        }
    ]
}

const PlatformsSlice = createSlice({
    name: 'platforms',
    initialState,
    reducers: {
        setPlatforms: (state, action: PayloadAction<{count: number, rows: IPlatform[]}>) => {
            state.count = action.payload.count;
            state.rows = action.payload.rows;
        }
    }
})


export const {setPlatforms} = PlatformsSlice.actions;

export default PlatformsSlice.reducer;
