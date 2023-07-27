import {CrowdfundingCardValues} from "@/consts";
import {BlogCard, CrowdfundingCard, CustomButton, Filter, HTag, PTag, Tag} from "@/components";

const Main = () => {
    const option = ['123', '456']

    return (
        <div className={'container'}>
            <div className={'test-container'}>
                <Filter options={option} placeholder={'Select investment type'} />
            </div>
        </div>
    );
};

export default Main;
