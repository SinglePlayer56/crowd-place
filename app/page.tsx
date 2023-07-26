import {CrowdfundingCardValues} from "@/consts";
import {CrowdfundingCard} from "@/components";

const Main = () => {

    return (
        <div className={'container'}>
            <div className={'test-container'}>
                {CrowdfundingCardValues.map((card) => (
                    <CrowdfundingCard iconPath={card.iconPath} title={card.title} />
                ))}
            </div>
        </div>
    );
};

export default Main;
