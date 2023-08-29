import styles from '../blog.module.css'
import {CustomList, HTag, InterestingPosts, PTag, Tag} from "@/components";
import {Metadata} from "next";
import {generateLink, getPost} from "@/helpers";

// export const metadata: Metadata = {
//     title: `Alternative property investments | ${process.env.NAME_WEBSITE}`,
//     description: ' Investors who want to diversify their portfolio, or invest in real estate in a more passive way, can take alternatives to property investments. Each sector has unique advantages and risks, so investing in various alternatives can be a good move.',
//     alternates: {
//         canonical: `${process.env.DOMAIN}/blog/alternative-property-investments/`
//     }
// }

export async function generateMetadata(): Promise<Metadata> {
    const post = await getPost('alternative-property-investments');

    return {
        title: `${post.title} | ${process.env.NAME_WEBSITE}`,
        description: post.description,
        alternates: {
            canonical: `${process.env.DOMAIN}/blog/${post.slugHref}/`
        }
    }
}

const ArticlePage = async () => {
    const post = await getPost('alternative-property-investments');

    return (
        <>
            <> </>
            <section className={styles.article}>
                <div className={'container'}>
                    <div className={'container-1200'}>
                        <HTag className={styles.head__title} tag={'h1'}>
                            Alternatives to property investment
                        </HTag>
                        <div className={styles.article__data}>
                            <span className={styles.article__date}>{post.date}</span>
                            <div className={styles.article__tags}>
                                <Tag href={generateLink(`/fr/blog/`, post.category)} title={post.category} />
                            </div>
                        </div>
                        <section className={styles.article__section}>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                There are countless opportunities for investors to make returns on their assets, but some
                                investments are above average for most investors. The real estate market is one of these
                                investments, and many investors even call real estate an indispensable part of an investment
                                portfolio. <i>However, not every investor is eager to invest in real estate in a direct
                                way.</i> In
                                addition, it is important to diversify your portfolio and invest in different sectors so
                                that you can protect your capital from different market conditions.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Investors who want to diversify their portfolio, or invest in real estate in a more passive
                                way, can take advantage of several other investment opportunities. <i>Each sector has unique
                                advantages and risks, so investing in various alternatives can be a good move.</i> In this
                                article, you can explore various real estate investment alternatives and we'll also take a
                                look at investment opportunities outside the real estate market.
                            </PTag>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                What can I invest instead of real estate?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                There are a vast number of ways to invest, providing plenty of alternatives to real estate.
                                Real estate is among the investments that have been used by investors for many years, but
                                precious metals have also proven their value over the years. <i>Especially in economically
                                uncertain times, gold and silver can be a valuable addition to one's portfolio due to their
                                stable value.</i>
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Equities are also investments that have proven themselves over the years. In times of
                                inflation, stocks can do very well and this form of investment can be used for the short and
                                long term. Nowadays, cryptocurrencies are booming and these coins are seen as shares of
                                companies that build on blockchain technology.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                In addition, works of art are an investment that you can use to armor your portfolio against
                                inflation. Art is a very broad category, which includes paintings and antique statues, for
                                example. The advantage of these investments is that you can also hang them on the wall or
                                give them a place in your living room, making this investment a nice investment for the eye
                                as well. <i>With the advent of non-fungible tokens (NFTs), it is now also possible to invest
                                in
                                digital art.</i> However, this market is a lot riskier than the other forms of art because
                                the
                                market has only been around for a few years and is partly dependent on the price of the
                                crypto market.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Several opportunities within alternative investments
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Loans can also be a suitable investment when looking for forms of investment other than real
                                estate. For example, there are several P2P lending platforms where you can lend your assets
                                and receive interest in return. In addition, you can buy government bonds, lending money to
                                the government. <i>All real estate investing alternatives have different investment options
                                that you can consider in your investment strategy.</i> For example, there are defensive
                                options,
                                such as gold and paintings, as well as risky investments like cryptocurrencies and growth
                                stocks. Generally speaking, more risk also means more return, so managing your portfolio is
                                important to protect your assets.
                            </PTag>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                What are the 4 types of investments?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                There are a huge number of different investments you can make money with, but broadly
                                speaking, investments are classified into four types. Most experienced investors invest in
                                these different types of investments because a varied portfolio can help protect your
                                wealth. This way, it is possible to protect your wealth from market fluctuations and you run
                                less risk. Let's take a closer look at the 4 types of investments.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                1. Cash
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Despite people using less and less cash, this type of investment remains an important one.
                                In recent years, the demand for digital money has been growing and the International
                                Monetary Fund (IMF) has indicated that most central banks are working on it. Whether cash
                                will be available in paper or digital form remains to be seen, but cash will always have a
                                place in the economy.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Investments in cash are more than just physical bills. Everyday bank accounts and savings
                                accounts also belong in this category. <i>The way you keep your cash is a personal choice,
                                but
                                it is always prudent to have cash on hand.</i> Many investors find this a difficult choice
                                because this form of investing provides the least return. Due to high inflation, investing
                                in cash provides little return, and in addition, money becomes worth less when inflation
                                increases.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                2. Fixed interest rate
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                The second category is fixed-rate investments, known as bond investments. A bond is a loan
                                made to the government. In exchange, the government promises to repay this loan at a fixed
                                interest rate. Especially in the United States, government bonds are a popular investment,
                                particularly suitable for the long term. In fact, U.S. government bonds, also called
                                treasury bonds, have maturities between 10 and 30 years.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                <i>Investing in bonds is considered a defensive investment.</i> This is because this type of
                                investment carries little risk and because of this, the return is also relatively low. When
                                you invest in bonds you are assured of a fixed return and you are working with a very
                                reliable partner, making this form of investment more secure.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Over the past 40 years, interest rates on U.S. and U.K. government bonds have had huge peaks
                                and troughs. For example, there have been periods when interest rates have been over 15%,
                                while there have also been periods with interest rates below 2%. These rates apply to both
                                economic powerhouses, showing that macroeconomic conditions affect the level of government
                                bond yields.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                3. Real Estate
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Real estate is also among the 4 types of investments. This sector is often dismissed as
                                risky, but it can also be a relatively stable investment. <i>In recent years, home values
                                have
                                increased tremendously, which has allowed real estate investors to earn good
                                returns.</i> Not
                                only did property values rise, but rents are rising along with them. Investing in cash and
                                real estate creates balance in your portfolio because both investments react differently to
                                inflation.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Besides buying and renting houses, you can also choose to invest in real estate in an
                                indirect way. This is possible, for example, by investing in real estate investment trusts
                                (REITs). REITs generally specialize in a particular real estate sector, such as office
                                buildings, homes or retail stores. <i>Over the past 20 years, U.S. REITs have produced an
                                average annualized return of about 12.7%.</i> This annual return shows that indirect real
                                estate
                                investing can also provide nice returns and, in this case, let inflation work in your favor.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                4. Shares
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                The fourth type of investment is stocks, and for many investors, this category is
                                indispensable in their portfolio. <i>Like real estate, the stock market benefits from high
                                inflation as more money comes into the market.</i> There are a lot of different stocks to be
                                found in the stock markets, so you can diversify in this market and in this way better
                                manage your risk. Stock markets are considered volatile markets, where you can invest in
                                both safe and risky stocks.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                For example, shares of large companies like Microsoft and Apple are seen as relatively safe
                                investments, but you can also invest in riskier growth stocks, where returns can be higher.
                                In addition, some companies pay periodic dividends to their shareholders. Dividends are a
                                portion of a company's profits that is shared with investors, allowing you to make
                                additional returns. <i>Most people invest in the stock market for the long term because this
                                market has proven to be a lucrative investment over the years.</i> Since the founding of the
                                NASDAQ, the largest stock market today, the exchange has produced an average annual return
                                of 9.7%. The NASDAQ was established in 1971, so the average return is based on 52 years of
                                price history.
                            </PTag>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                Is the property an alternative investment?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                There are many ways to invest in property, which also makes the property an alternative
                                investment. <i>Depending on the asset class being invested in, investing in property can be
                                very low risk.</i> For example, single-family homes and multifamily properties can generate
                                high
                                returns and stable income, making them good additions to an investment portfolio. When the
                                economy is down, income from alternative property investments can protect your portfolio.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Property can be an alternative investment because this investment meets the requirements of
                                many investors. Investing is a passive way to earn returns and property makes this
                                possible. <i>Property can provide a stable income and by increasing the value of property
                                provide
                                additional returns.</i> Investing in real property does not always have to be done in a
                                direct way, but the property industry has a lot of alternative options.
                            </PTag>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                Where to invest instead of buy to let?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Buying property and renting it out has been a reliable investment method for decades, where
                                a lot of investors have been able to benefit from rising home prices and rents. Investing in
                                real estate for rent can be a time-consuming job, involving a lot of paperwork and
                                maintenance costs. In addition, the real estate market is not as attractive to a lot of
                                investors right now, as home prices and mortgage rates are relatively high.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                For many investors, these are reasons to look for alternative ways to invest in real estate.
                                Within the real estate industry, there are several ways to invest in real estate in an
                                indirect way, giving investors plenty of alternatives. Most alternatives are providing loans
                                or buying shares, but there are also distinctions within this form of investment. Discover
                                below the various options in real estate investment.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Property crowdfunding
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                If you don't want to invest in property in a direct way, you can opt for real estate
                                crowdfunding. <i>You can carry out this form of real estate investment through platforms
                                where
                                supply and demand are brought together.</i> Through crowdfunding platforms, it is possible
                                for
                                property developers and property buyers to obtain loans, while investors can provide these
                                loans.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                In this form of investing, investors contribute a small portion of the total loan, allowing
                                several investors to provide financing for a real estate project. The convenient thing about
                                this is that property crowdfunding allows you to invest in different loans, so you have less
                                risk. Another advantage is that it allows you to invest in projects that might not otherwise
                                be possible.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Thanks to the low entry threshold, this form of investing can be a good start for novice
                                investors. For lending money, you receive interest in return. This interest usually comes
                                from rental income from a property or any increases in value that are monetized when the
                                property is sold.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Property bonds
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Several old forms of financial products have passed in this article, and property bonds also
                                fall into this category. This alternative investment method is designed to provide investors
                                with regular interest payments, while you get back the lent amount at the end. Property
                                bonds are issued with a fixed term and have a maturity date, so you know when you will
                                receive your money back. Typically, property bonds have terms of two to five years.
                                Borrowers use a target return, which is paid to the investor quarterly or annually.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Property bonds are a form of corporate bonds, also known as loan notes. Interest rates on UK
                                property bonds, for example, can range from 4% to 15%. As a result, this alternative
                                investment has the potential to outperform inflation, allowing you to protect your assets.
                                Property bonds are a relatively safe investment due to the bond's underlying value. As a
                                result, returns may be slightly lower than, say, stocks, since the risk of property bonds is
                                a lot lower.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                In addition to making a return and protecting your assets, property bonds can also make a
                                social impact. Because there is an increasing demand for housing, you can contribute to
                                solving this demand. In addition, you can invest in local projects that provide more housing
                                or facilities in the area. As a result, this form of investing has common ground with
                                buy-to-let, but investing in property bonds is a lot more passive.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Real estate investment trusts (REITs)
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                A very popular way to invest in real estate in an indirect way is through Real Estate
                                Investment Trusts (REITs). <i>These are companies that often own different types of real
                                estate, such as commercial or residential properties.</i> They derive their profits from the
                                rental income generated by the real estate. It is possible for investors to buy shares in
                                REITs. REITs are usually publicly traded, making it easy to buy and sell. As a result, this
                                form of investment is highly liquid and REITs are very popular among investors.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                The capital a REIT raises through investors is used to invest in real estate. An added
                                benefit of investing in REITs is that you receive dividends. <i>These trusts are required to
                                distribute 90% of taxable profits in dividends to shareholders.</i> The convenient thing
                                about
                                these dividend payments is that you can reinvest this extra return. This allows you to build
                                your portfolio and invest in different markets with the profits, allowing you to diversify
                                more and better protect your assets.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Peer-to-peer lending
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Through a REIT, you can contribute to real estate financing in an indirect way, but through
                                peer-to-peer (P2P) lending, you can also do so in a direct way. P2P lending platforms allow
                                you to make returns by issuing loans. These loans can be made through online platforms to
                                individuals or businesses, with the platform itself being the intermediary that brings
                                supply and demand together.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Compared to bonds and savings accounts, for example, P2P lending can be a very lucrative
                                form of investment. <i>The risk with this form of investment is relatively high, which means
                                the returns are also higher.</i> However, P2P lending allows you to invest in different
                                loans,
                                which means you have less risk. When you start investing in P2P lending, it is wise to
                                research the different lending platforms. This way you can find out early on how reliable a
                                platform is, what the average return is, and what the loans are for.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                <i>On average, investing in P2P loans yields 8% to 10%.</i> This is because the safest loans
                                yield
                                about 6% in returns, while the riskiest loans can generate tens of percent in returns. By
                                investing in a mix of loans, with high and low risk, you can better manage these risks and
                                achieve higher returns this way.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Shares in property companies
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                This alternative way of investing in real estate involves buying shares of listed real
                                estate companies. For investors who like to invest in the stock market, this is a very
                                convenient option. Investing in real estate shares is done with a view to a future increase
                                in value, but when companies perform well a dividend payment is also among the
                                possibilities. In this way, you can make returns in two ways, making this method similar to
                                buy-to-let in terms of income. <i>Investing in real estate shares is a lot more passive and
                                therefore suitable for investors who want to spend little time investing.</i>
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Both buy-to-let and real estate shares do well when inflation increases. <i>The advantage of
                                real estate shares is that shares can be publicly traded and are therefore much more
                                liquid.</i>
                                Also, when you want to sell part of your investment, owning real estate shares is a lot more
                                advantageous. After all, you can sell part of your shares within minutes, whereas with
                                buy-to-let this is a lot more difficult. In addition, with shares you don't have to deal
                                with maintenance costs, which again confirms the amount of advantages over buy-to-let.
                            </PTag>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                Ensure diversification in your portfolio
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                <i>Investing is not only about making a profit, but also about protecting your
                                    capital.</i> There
                                are several ways you can do this, but making sure you diversify your portfolio is an
                                important step. You can do this by investing in a variety of sectors, which react
                                differently to economic situations. For example, money in your savings account can be a good
                                investment to accumulate returns with little risk. You can potentially use this return when,
                                for example, the stock markets experience a sharp price correction.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Money in your savings account can come in handy when the economy gets worse. During these
                                economic conditions, stock markets drop and property values fall, allowing the interest rate
                                on the savings account to absorb this drop. In this way, you can protect your assets and
                                have extra capital to take advantage of favorable market conditions.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Within the investment sectors themselves, one can also diversify. Throughout this article,
                                you have been able to discover the different investment opportunities in real estate, but
                                within each market, there are high-risk and low-risk investments. When you invest in stocks,
                                you can do so by buying certain stocks or by investing in an index fund. In addition, there
                                are stocks that pay periodic dividends and there are risky stocks that have the potential
                                for large returns. By adding these different stocks to your portfolio, you are adding
                                diversification to your portfolio.
                            </PTag>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                Alternatives on property investment can provide a diversified portfolio
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Investors looking for property investment alternatives have very many options to choose
                                from. <i>Not only is real estate a traditional investment, but gold, bonds, and stocks have
                                also proven to be very attractive investments over the years.</i> Each investment sector
                                brings
                                unique advantages and risks, making it important for an investor to research different
                                markets.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                There are also several alternatives for investors who do not want to invest directly in the
                                real estate market but would like to have real estate in their portfolio. There are also
                                different benefits and risks within a sector, so take your time to research the sectors
                                carefully.
                            </PTag>
                            <CustomList className={styles.article__list} as={'ul'}>
                                <li>Property Crowdfunding</li>
                                <li>Property bonds</li>
                                <li>Real Estate Investment Trusts (REITs)</li>
                                <li>Peer-to-Peer loans</li>
                                <li>Shares in property companies</li>
                            </CustomList>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                <i>To protect your capital, applying diversification is an important part of portfolio
                                    management, which ensures that your investments carry less risk.</i> You can do this by
                                investing in different sectors, but also by diversifying within them. In addition to
                                protecting your capital, making returns is also important. Therefore, research economic
                                conditions and what may happen in the coming months or years in the economic field so that
                                you can respond to this with your investments.
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
