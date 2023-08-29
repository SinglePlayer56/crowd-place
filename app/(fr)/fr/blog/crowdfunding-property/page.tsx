import styles from '../blog.module.css'
import {ArticleImage, HTag, InterestingPosts, PTag, Tag} from "@/components";
import {Metadata} from "next";
import {generateLink, getPost} from "@/helpers";

// export const metadata: Metadata = {
//     title: `Best Crowdfunding Property Platforms | ${process.env.NAME_WEBSITE}`,
//     description: 'Crowdfunding for Real Estate: Is it possible to purchase a property using crowdfunding platforms for real estate?',
//     alternates: {
//         canonical: `${process.env.DOMAIN}/blog/crowdfunding-property/`
//     }
// }

export async function generateMetadata(): Promise<Metadata> {
    const post = await getPost('crowdfunding-property');

    return {
        title: `${post.title} | ${process.env.NAME_WEBSITE}`,
        description: post.description,
        alternates: {
            canonical: `${process.env.DOMAIN}/blog/${post.slugHref}/`
        }
    }
}

const ArticlePage = async () => {
    const post = await getPost('crowdfunding-property');

    return (
        <>
            <> </>
            <section className={styles.article}>
                <div className={'container'}>
                    <div className={'container-1200'}>
                        <HTag className={styles.head__title} tag={'h1'}>
                            Crowdfunding property
                        </HTag>
                        <div className={styles.article__data}>
                            <span className={styles.article__date}>{post.date}</span>
                            <div className={styles.article__tags}>
                                <Tag href={generateLink(`/fr/blog/`, post.category)} title={post.category} />
                            </div>
                        </div>
                        <section className={styles.article__section}>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                More and more investors are discovering the benefits of property crowdfunding and are using
                                this way of investing to diversify their portfolios. <i>Through property crowdfunding, it is
                                possible to increase your assets by investing in loans.</i> You receive interest on the
                                loan,
                                allowing you to make a return on your investment. Together with other investors, you can
                                finance a project or buy property.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                To grow your wealth with property crowdfunding, it is important to do the proper research
                                beforehand. In this article, you can discover several points to look out for. Discover the
                                different pros and cons of property crowdfunding and see which crowdfunding platforms in the
                                UK are suitable options. <i>Doing proper research will help you make more returns and avoid
                                mistakes, making this article a good start to your property crowdfunding plans.</i>
                            </PTag>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                What is property crowdfunding?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Property crowdfunding is a relatively new way of real estate financing, where supply and
                                demand meet on a crowdfunding platform. Real estate developers or buyers can ask for a loan
                                for their projects on these platforms, and investors can help with this financing. Here, it
                                is common for multiple investors to contribute to a loan, often allowing a borrower to
                                receive the amount needed quickly.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                These investors pool their investment and in this way can indirectly invest in different
                                types of real estate. <i>As an investor, you can invest in multiple loans, making it easy to
                                diversify and reduce risk.</i> Several platforms offer real estate crowdfunding, allowing
                                every
                                investor to find a suitable platform. Each platform is unique and offers loans in different
                                real estate industries, with maturities and returns also varied.
                            </PTag>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                Can I buy a property with crowdfunding?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                It is possible to buy a property through crowdfunding, but most crowdfunding platforms offer
                                a different set-up. <i>Investors on these platforms can lend their money to developers and
                                property buyers, thus indirectly investing in real estate.</i> Some platforms use REITs,
                                which
                                is a well-known way of indirectly investing in real estate.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                The convenient thing about indirect investing is that you have to deal with fewer costs and
                                can avoid risks, which real estate owners do bear. <i>If you want to invest in real estate
                                directly and use crowdfunding to do so, that is also possible.</i> Crowdfunding platforms
                                are
                                designed to bring supply and demand together, allowing you to be active both as an investor
                                and as a borrower on these platforms.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Can you crowdfund a house?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                In addition to investing in real estate directly, by applying for a loan through a
                                crowdfunding platform, you can also choose to buy real estate with a group. Crowdfunding is
                                known for having multiple investors helping to secure financing for a borrower, but
                                collectively it is also possible to invest in real estate this way. Crowdfunding makes real
                                estate investing a lot more flexible and allows for more options, which you can take
                                advantage of in many ways.
                            </PTag>
                            <ArticleImage src={'/articleImage/crowdfunding-property-first.png'}/>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                What are the risks of property crowdfunding?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                There are several risks associated with property crowdfunding. There are many investors who
                                want to diversify their portfolios to reduce risk. However, a lack of knowledge can be a
                                risk. Investors need to know the different types of risks of investing in real estate so
                                that they can be taken into account. <i>Investors investing in property crowdfunding need to
                                understand how the form of investment works.</i> For example, it is important to know when
                                the
                                repayment will take place and how it will be repaid. In addition, pay attention to the rules
                                of crowdfunding platforms so that you can be well prepared.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                In addition, the crowdfunding platform itself can also pose a risk. If a platform goes
                                bankrupt, it is important that your investments are protected. Property crowdfunding
                                investors do not have a lien on their investments, as investments are made in property deals
                                and not in the property itself. <i>When investing in crowdfunding, it is important to know
                                what
                                happens to your investment if a platform goes bankrupt.</i> Therefore, do research not only
                                about your investments but also about the platform you will be investing with. For example,
                                you can look at their last round of funding so you can find out how long they can survive
                                with this funding.
                            </PTag>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                Is crowdfunding Legal in the UK?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Crowdfunding platforms in the UK operate legally and in addition, property crowdfunding is
                                also a legal activity for investors. <i>Not all crowdfunding platforms are regulated, making
                                it
                                important to research a platform carefully beforehand.</i> As of April 1, 2014, the
                                Financial
                                Conduct Authority (FCA) began regulating some forms of crowdfunding in the United Kingdom.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Crowdfunding exists in various forms, with some forms being regulated by the FCA. It also
                                includes loan-based crowdfunding. Also known as peer-to-peer lending (P2P lending), this
                                method of funding allows businesses and individuals to easily secure their funding for
                                projects. Investment-based crowdfunding is also regulated by the FCA. This means investors
                                invest money in a company and receive shares or bonds in return.

                            </PTag>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                What is the disadvantage of real estate crowdfunding?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Investing in real estate crowdfunding can have a lot of advantages, but there are also some
                                disadvantages. As an investor, it is wise to study these potential disadvantages carefully
                                so that you can minimize or avoid them. When investing in real estate crowdfunding, it is
                                important that it fits within your investment plan. <i>Real estate investments tend to be
                                highly illiquid investments.</i> After all, it may take some time before the property in
                                question is sold and the duration of loans is relatively long. The duration can range from a
                                few months to several years. It is important to consider the term of the loan when
                                investing, so do not invest money that you cannot spare for a long time.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Furthermore, investing in property crowdfunding may yield lower returns than investing
                                directly in real estate. This is because the crowdfunding platform itself has to make money
                                to exist. Despite this potential disadvantage, the returns for property crowdfunding are
                                relatively high and you will receive more returns than with bonds or a savings account, for
                                example. In addition, you run less risk than when investing directly in property because you
                                are not responsible for the property, but only help the developer with financing.
                            </PTag>
                            <ArticleImage src={'/articleImage/crowdfunding-property-second.png'}/>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                Which crowdfunding platform is best UK?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                In the UK, there are several crowdfunding platforms where investors can invest. There are
                                also several options in the real estate field for investors who want to use crowdfunding
                                platforms in the UK. <i>The crowdfunding industry is an emerging market, with more and more
                                platforms entering the market.</i> All of these platforms are unique and have their
                                advantages
                                and disadvantages.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                To discover the best crowdfunding platform in the UK, it is important to look at several
                                aspects. Research how reliable a platform is and whether the platform is regulated by the UK
                                government. In addition, look at the default rate and what the potential returns are.
                                Furthermore, it is important to know how long the loans can run, so you can take this into
                                account in your investment strategy.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Because crowdfunding in real estate is a relatively new form of investing, it is important
                                to do good research beforehand. This will allow you as an investor to differentiate yourself
                                and take advantage of the opportunities crowdfunding can provide. To get you started with
                                real estate crowdfunding, we researched several crowdfunding platforms. <i>Our research has
                                shown that these 5 real estate crowdfunding platforms are reliable and offer attractive
                                returns.</i> Discover the 5 best crowdfunding platforms in the UK below!
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                1. Fundrise
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Fundrise makes it possible for investors to quickly get started with property crowdfunding.
                                Through this platform, it is possible to buy both residential and commercial properties, by
                                collaborating with other investors. <i>Different investors provide the necessary finances
                                and
                                this amount is pooled into REITs.</i> In this way, properties such as land, real estate, and
                                private real estate deals are bought.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Fundrise's website is very user-friendly, making the real estate investment process on this
                                platform very approachable. When investing through Fundrise, it is good to know that this
                                form of loan is particularly attractive to long-term investors. Investments in real estate
                                are usually relatively illiquid, and this is also the case with property crowdfunding. The
                                convenient thing about this is that you can do good research in advance and make targeted
                                investments. This reduces the amount of time you have to spend on this investment for a long
                                time, allowing you to focus on other investments.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                2. CrowdStreet
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Perhaps the most well-known real estate crowdfunding website is CrowdStreet. This
                                crowdfunding platform allows accredited investors to invest in commercial real estate
                                projects. <i>These investments can yield high returns, making them popular among a wide
                                range
                                of investors.</i> CrowdStreet also offers minimal due diligence for investors, by providing
                                background and reference checks performed on developers applying for loans on the platform.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Despite the platform's focus on real estate crowdfunding, for investors the offerings on
                                CrowdStreet are varied. For example, it is possible to invest in funds, which contain a
                                variety of real estate projects. In addition, you can also invest in individual properties.
                                It is good to know that for many investments the minimum amount is $25,000, which makes this
                                platform less suitable for novice investors who want to start with a small amount. This
                                platform is also a good investment for long-term investors.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                3. RealtyMogul
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                It is possible for both non-accredited and accredited investors to invest in real estate.
                                This crowdfunding platform focuses on commercial real estate investments and individual
                                properties. <i>Through this platform it is possible to invest in various REITs, allowing you
                                to
                                apply diversification on the platform itself.</i> This allows you to reduce the risk of
                                investing by not putting your entire capital into one project.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Investors who want to start property crowdfunding on RealtyMogul can start with about
                                $5,000. It is important to pay attention to the platform's fees, as they can vary by
                                investment vehicle. RealtyMogul is a versatile platform where different investment
                                strategies can be used. For example, it is possible to invest in projects that yield high
                                returns, but it is important to consider the risks here as well.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                4. Yieldstreet
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Through Yieldstreet, investors can choose from a variety of privately structured deals
                                backed by assets. This keeps the principal protected, giving investors relatively more
                                security and less risk. If a borrower cannot meet their payment obligations, Yieldstreet can
                                help in this case. This extra protection can be very convenient for investors, as the
                                platform acts as a safety net in this case.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Yieldstreet focuses largely on accredited investors, making it possible to crowdfund real
                                estate financing. Here, the loan is financed and the investor does not own a home or
                                commercial property, so as an investor, you have less risk. <i>Non-accredited investors
                                looking
                                to invest a minimum of $1,000 can invest in passive income-generating opportunities through
                                Yieldstreet.</i> The platform offers loans ranging from 6 months to 5 years, making this
                                platform suitable for a variety of investors.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                5. EquityMultiple
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                EquityMultiple is a real estate crowdfunding platform where investors can invest in
                                privately managed commercial holdings. Here, investors can invest in different types of real
                                estate such as office spaces, hotels, data centers, and residential facilities. Like
                                RealtyMogul, the minimum investment amount at EquityMultiple is $5,000.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Accredited investors can also invest in crowdfunding through EquityMultiple. The minimum
                                amount for these investors can range between $10,000 to $40,000. The investments here are
                                also very varied, allowing you to invest in projects with terms ranging from 6 months to 10
                                years or even more. This makes EquityMultiple a platform with possibilities, where wealthy
                                investors in particular have a wide choice.
                            </PTag>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                Do good research before you start property crowdfunding
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Property crowdfunding offers more and more investors an attractive opportunity to diversify
                                their portfolios and increase their wealth by investing in loans for real estate projects.
                                However, this relatively new form of property financing comes with both benefits and risks.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                The benefits of property crowdfunding are numerous. It allows investors to invest indirectly
                                in various real estate projects with lower costs and less risk, allowing for diversification
                                of investments. Crowdfunding platforms in the UK operate legally and offer investors various
                                options to participate in property investments.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                To make the most of property crowdfunding, investors should be aware of the illiquidity of
                                real estate investments and focus on a long-term strategy. <i>Although the returns for property
                                crowdfunding can be relatively high, one must consider the cost of the platform that can
                                affect the returns.</i> Choosing the best platform requires thorough research on reliability,
                                returns, and loan terms.
                            </PTag>
                        </section>
                    </div>
                </div>
            </section>
            <InterestingPosts excludeSlugPost={post.slugHref} postsCategory={post.slugCategory}/>
        </>
    );
};

export default ArticlePage;
