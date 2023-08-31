import styles from '../blog.module.css'
import {BreadCrumbs, CustomList, HTag, InterestingPosts, PTag, Tag} from "@/components";
import {Metadata} from "next";
import {generateLink} from "@/helpers";
import {getPost} from "@/helpers/fetch";

export async function generateMetadata(): Promise<Metadata> {
    const post = await getPost('property-development-investment');

    return {
        title: `${post.title} | ${process.env.NAME_WEBSITE}`,
        description: post.description,
        alternates: {
            canonical: `${process.env.DOMAIN}/blog/${post.slugHref}/`
        }
    }
}

const ArticlePage = async () => {
    const post = await getPost('property-development-investment');

    const paramsBreadCrumbs = [
        {name: 'Main', href: ''},
        {name: 'Blog', href: 'blog'},
        {name: 'Property development investment', href: post.slugHref},
    ];

    return (
        <>
            <> </>
            <BreadCrumbs paramsPath={paramsBreadCrumbs}/>
            <section className={styles.article}>
                <div className={'container'}>
                    <HTag className={styles.head__title} tag={'h1'}>
                        Property development investment
                    </HTag>
                    <div className={styles.article__data}>
                        <span className={styles.article__date}>{post.date}</span>
                        <div className={styles.article__tags}>
                            <Tag href={generateLink(`/blog/`, post.category)} title={post.category}/>
                        </div>
                    </div>
                    <section className={styles.article__section}>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            There are several ways to invest in real estate, and property development is one of these
                            investments. <i>Property development can ensure that you make big profits, either by
                            developing
                            new buildings or increasing the value of existing properties thanks to renovations.</i> Most
                            property development projects focus on apartment complexes or building single-family homes
                            on pieces of land, but this real estate industry is much broader than just these examples.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Besides investing directly, you can also indirectly invest in real estate development. In
                            this article, you can discover different direct and indirect investment opportunities so
                            that you can explore for yourself which investment opportunities suit you. As an investor,
                            diversification is a useful tactic to reduce risk, so combining different ways to invest in
                            property development can be a wise choice.
                        </PTag>
                    </section>
                    <section className={styles.article__section}>
                        <HTag className={styles.article__section_title} tag={'h2'}>
                            Is there good money in property development?
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            You can make a lot of money with property development, but these returns cannot be taken for
                            granted. Risk and return always go together, so high returns also mean high risk. It is
                            therefore important that you minimize the risks of property development. When you do proper
                            research beforehand and get started with a thoughtful approach, property development can be
                            a very profitable way to make money from real estate. To avoid mistakes and minimize your
                            risk, it is important to get plenty of advice from property development specialists.
                        </PTag>
                    </section>
                    <section className={styles.article__section}>
                        <HTag className={styles.article__section_title} tag={'h2'}>
                            How do you get money for property development?
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Most people get into property development because it can bring a lot of returns, but how can
                            you make money with property development? There are several factors that affect how much
                            money you make with property development. <i>In order to earn a high return on property
                            development, the location of the property is very important.</i> Therefore, research which
                            regions and neighborhoods are sought-after places to live or work and find out if it is
                            possible to build or renovate real estate in these areas. It is easier to sell real estate
                            in sought-after locations because the demand for the property is higher and any value
                            increases can also generate more returns.
                        </PTag>
                    </section>
                    <section className={styles.article__section}>
                        <HTag className={styles.article__section_title} tag={'h2'}>
                            How to get into property development with little money?
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Even with little money, you can get started in the world of property development. Starting
                            property development in a direct way costs more money than starting to invest in this real
                            estate sector in an indirect way. There are several ways to invest in property development
                            indirectly, allowing you to diversify your investments. Below we take you through some
                            examples of property development investments where you can get started with little money.
                        </PTag>
                        <HTag className={styles.article__section_subtitle} tag={'h3'}>
                            REIT
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            If you want to invest in property development but do not yet have the finances to start a
                            project yourself, you can invest in REITs. This is a low-threshold way to start investing in
                            real estate, where you can invest in the companies in question. <i>A REIT (real estate
                            investment trust) is a company that invests in real estate and issues stock.</i> This allows
                            investors to invest in the company and receive interest on this investment. This type of
                            investment is considered low-risk because a REIT must share 90% of its rental profits with
                            shareholders. In addition, the company's leases provide additional security because they are
                            long-term leases.
                        </PTag>
                        <HTag className={styles.article__section_subtitle} tag={'h3'}>
                            Peer-to-peer lending (P2P lending)
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Another way to start investing in real estate is through peer-to-peer lending (P2P lending).
                            Due to this investment opportunity, you invest directly in real estate projects or companies
                            that need financing for real estate. Through a P2P lending platform, supply and demand are
                            brought together, allowing you to search these platforms for suitable projects, which match
                            your investment strategy.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            The convenience of P2P real estate lending is that the lender and borrower do not have to
                            work with a bank. As a result, the returns are significantly higher because the costs are a
                            lot lower. A P2P platform may charge fees, but these fees are lower than what a bank would
                            charge for the loan. <i>When investing in real estate through a P2P lending platform, it is
                            important to research the platform carefully first.</i> For example, investigate whether the
                            platform is regulated by the government and examine its track record.
                        </PTag>
                        <HTag className={styles.article__section_subtitle} tag={'h3'}>
                            Property crowdfunding
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            An investment method similar to P2P lending is crowdfunding property development. Some
                            novice real estate investors confuse crowdfunding and peer-to-peer lending when they are
                            very different investment methods. Where the two investment channels differ is that
                            peer-to-peer lending puts you in the position of the mortgage lender, while crowdfunding
                            property development gives you an equity stake.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            <i>P2P allows for short-term lending, while crowdfunding is usually for the longer
                                term.</i> This
                            makes P2P lending a lot more flexible and allows you to have more liquidity at your
                            disposal, compared to crowdfunding. In addition, investments in crowdfunding tend to be
                            larger than in P2P lending, where investors often put small amounts into multiple loans.
                        </PTag>
                    </section>
                    <section className={styles.article__section}>
                        <HTag className={styles.article__section_title} tag={'h2'}>
                            How much deposit do you need for property development?
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Exactly how much money you need for property development depends on several aspects. For
                            example, the type of financing, the cost of the project, and the type of real estate affect
                            how much money you need for property development. For real estate, location is very
                            important and location also plays an important role in property development. In the UK,
                            financing for property development often involves new construction projects, repurposing old
                            buildings, or renovating existing properties.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Different loan forms can be used here, with the down payment varying for each loan form. For
                            example, if a buy-to-let mortgage is used, the down payment for financing will be a minimum
                            of 25%. With these mortgages, often only the interest on the loan is paid, leaving the
                            mortgage to be paid in full at the end of the term.
                        </PTag>
                        <HTag className={styles.article__section_subtitle} tag={'h3'}>
                            Renovation mortgage
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            In addition to the buy-to-let mortgage, the remodeling mortgage can also occur in property
                            development. With the remodeling mortgage, lenders must consider the purchase price and
                            future value of the property in order to determine the loan amount. The down payment with
                            this type of loan is 25% of the appraised value, making a good estimate essential to borrow
                            the right amount.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            For example, if you buy a property for £400,000 and spend £50,000 on remodeling the
                            property, this remodeling can provide an increase in the value of the property, so improving
                            the property provides an increase in value of £100,000. This brings the new value to
                            £500,000, allowing a lender to provide 75%, which in this example is £375,000. The down
                            payment on this is £125,000, or the 25% that is not provided as credit.
                        </PTag>
                    </section>
                    <section className={styles.article__section}>
                        <HTag className={styles.article__section_title} tag={'h2'}>
                            The 5 best ways to make money with property development investment
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            There are several ways to make money with property development investment. To get you
                            started in choosing the right investment strategy, we have prepared the 5 best ways for you.
                            According to our experience, these are the strategies suitable for different property
                            investors. Each way has its unique advantages and risks, which you can discover in these top
                            5.
                        </PTag>
                        <HTag className={styles.article__section_subtitle} tag={'h3'}>
                            1. Buying a residential property to renovate
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Many start-up developers are often attracted to homes that are in outdated condition. These
                            homes are in obvious need of refurbishment and this refurbishment can be very beneficial to
                            the value of the property in question. This way of investing in property development is seen
                            as an excellent start for beginning property developers. In this way, it is possible to
                            start investing and in the meantime build up knowledge and experience so that you can
                            improve yourself as a property developer.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            When you start buying properties in need of renovation, it is important to make sure you
                            have a good profit margin. Make sure you have a minimum profit margin of 20%. This profit is
                            determined right at the beginning of the process because the purchase price plays a big
                            role. The lower the purchase price, the greater the potential profit. You decide how high
                            this purchase price is and the market will determine what the right selling price is for the
                            property in question.
                        </PTag>
                        <HTag className={styles.article__section_subtitle} tag={'h3'}>
                            2. Buying a commercial property to convert to residential
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            To create more living space, buying commercial real estate is a concept that is becoming
                            increasingly popular. <i>The demand for commercial real estate has declined in recent years,
                            creating a demand to redevelop this large amount of square footage.</i> In addition, the
                            demand
                            for housing is skyrocketing, making buying commercial real estate and converting it into
                            housing an ideal solution. Commercial real estate is any building that is used for business
                            purposes, such as office spaces, stores, and industrial halls.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            This type of real estate development is popular with both central and local governments.
                            This is because these governments are eager to do something about vacancy rates, which is
                            positive for developers. Governments like to think along with real estate developers and, as
                            a result, there are fewer obstacles to building permits and other legal obligations. Also,
                            buying commercial property and converting it to housing allows for greater opportunities, as
                            more housing can be created. This is because commercial properties are in most cases larger
                            than average homes, allowing more residential spaces to be developed.
                        </PTag>
                        <HTag className={styles.article__section_subtitle} tag={'h3'}>
                            3. Purchase land to get planning permission and sell on to another developer
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            This way of investing in property development is seen as a bold strategy that has the
                            potential to make high returns. These significant returns can potentially be achieved
                            because developers are constantly looking for locations for new construction projects, on
                            which they can build property in the future. <i>Because land is scarce and the demand for
                            real
                            estate is increasing, buying land and selling it to a developer can be a lucrative
                            investment.</i>
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Before investing in land, it is wise to check whether possible building permits can be
                            arranged for the land in question. Once you have purchased a plot of land, it can take quite
                            a while for building permits to be arranged. Sometimes this means waiting several months for
                            a permit, but in the most negative scenario, it can even take years. While you have to wait
                            for the necessary permits, you do have to deal with financing costs, which can make buying
                            land a risky investment.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Local governments play an important role in obtaining building permits. After all, they must
                            be willing to grant these permits, and this decision can be greatly influenced by local
                            politics. Therefore, before buying land, research what the views of local politics are and
                            whether local decision-makers will support you in this. Governments prepare local and
                            regional plans and this information can help you further in your research for the right
                            investment.
                        </PTag>
                        <HTag className={styles.article__section_subtitle} tag={'h3'}>
                            4. Building a second home on your property
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            If you own real estate and you have the space, you can choose to build an additional home on
                            your property. This investment can be useful if you have a yard that is larger than an
                            average yard. This often involves looking at gardens that are three times the size of the
                            property in question. <i>If you have the space and plan to build a second home, it is wise
                            to
                            investigate whether this will affect the value of your existing home.</i> The development of
                            a
                            second home mustn't have a major impact on the home value so that the property plans will
                            not affect any future sales.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            The convenient thing about this type of property development investment is that you do not
                            have to purchase land. This allows you to save a large sum of money and use this money for
                            second home development. In addition, utility companies need to perform fewer services
                            because your home already has existing utilities. This eliminates the need to dig to access
                            water and gas lines, for example. Even with this investment, it is wise to research in
                            advance whether a building permit is possible for these plans.
                        </PTag>
                        <HTag className={styles.article__section_subtitle} tag={'h3'}>
                            5. Purchase land to do a ground-up development
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            For many developers with a rich imagination, there is nothing better than a vacant lot
                            suitable for real estate. These developers are able to visualize their real estate plans and
                            already envision an apartment complex or multiple luxury homes. These plans are accompanied
                            by promising profit potential, making ground-up development a lucrative investment.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            When getting started with property development, this option can be an ambitious one. The
                            potential profits are high with these projects, which means the risk is also relatively
                            high. Not only does a novice developer face risk with this setup, but the lender also sees
                            these risks. The risks will be considered by the lender and may affect the amount of the
                            loan or payment obligations.
                        </PTag>
                    </section>
                </div>
            </section>
            <InterestingPosts excludeSlugPost={post.slugHref} postsCategory={post.slugCategory}/>
        </>
    );
};

export default ArticlePage;
