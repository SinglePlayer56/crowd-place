import {BreadCrumbs, CustomList, HTag, PTag} from "@/components";
import styles from './Terms.module.css';
import cn from 'classnames';

const Terms = () => {
    const paramsBreadCrumbs = [
        {name: 'Main', href: ''},
        {name: 'Terms', href: '_terms'},
    ];

    return (
        <>
            <BreadCrumbs paramsPath={paramsBreadCrumbs}/>
            <section className={styles.terms}>
                <div className={'container'}>
                    <HTag className={styles.terms__title} tag={'h1'}>
                        Terms
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        Impact investing is one of the emerging yet steady trends in the crowdfunding sector. It’s
                        becoming increasingly widespread for investors to be interested not only in the possible returns
                        but the collateral social or environmental impact. In other words people want their investment
                        choices to be aligned with their values. There are many real estate crowdfunding platforms in
                        Europe which you can explore and start investing in property. However, do your own due
                        dilligence when it comes to property investing. Investors register on <a href={'#'}
                                                                                                 className={'link'}
                                                                                                 target={'_blank'}>crowdfunding
                        websites</a> and
                        choose a project or a campaign to invest in. Depending on the platform’s business model, if it’s
                        equity, P2P, or even donation-based crowdfunding, investors receive either some regular returns
                        or partial ownership of the companies.
                    </PTag>
                    <PTag fontSize={'20px'} className={'container-1200'}>
                        The crowdfunding market in Switzerland is developing rapidly, and funding rates are growing
                        exponentially. With the average income level of the population and the number of private
                        investors, this is not surprising. Moreover, the existing regulation contributes to such growth.
                        The Swiss crowdfunding market is an important part of the global crowdfunding market,
                        crowd-investing in Switzerland is worth a <a href={'#'} target={'_blank'} className={'link'}>closer
                        look</a>.
                    </PTag>

                    <CustomList
                        as={'ul'}
                        title={'Impact investing emerging'}
                    >
                        <li>Steady trends in the crowdfunding sector</li>
                        <li>Widespread for investors</li>
                        <li>Possible returns but the collateral social or environmental impact.</li>
                        <li>Investment choices to be aligned with their values</li>
                        <li>Real estate crowdfunding platforms in Europe</li>
                        <li>Start investing in property</li>
                    </CustomList>

                    <CustomList
                        as={'ol'}
                        title={'Real estate crowdfunding platforms'}
                    >
                        <li>Steady trends in the crowdfunding sector</li>
                        <li>Widespread for investors</li>
                        <li>Possible returns but the collateral social or environmental impact</li>
                    </CustomList>
                </div>
            </section>
        </>
    );
};

export default Terms;
