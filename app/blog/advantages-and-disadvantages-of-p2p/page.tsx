import styles from '../blog.module.css'
import {ArticleImage, HTag, InterestingPosts, PTag, Tag} from "@/components";
import {Metadata} from "next";
import {getPost} from "@/helpers";

// export const metadata: Metadata = {
//     title: `Advantages and Disadvantages of Peer-to-Peer (P2P) Lending | ${process.env.NAME_WEBSITE}`,
//     description: ' Pros and Cons of Peer-to-Peer (P2P) lending in 2023 for investors and individuals who want to borrow.',
//     alternates: {
//         canonical: `${process.env.DOMAIN} /blog/advantages-and-disadvantages-of-p2p/`
//     }
// }

export async function generateMetadata(): Promise<Metadata> {
    const post = await getPost('advantages-and-disadvantages-of-p2p');

    return {
        title: `${post.title} | ${process.env.NAME_WEBSITE}`,
        description: post.description,
        alternates: {
            canonical: `${process.env.DOMAIN}/blog/${post.slugHref}/`
        }
    }
}

const ArticlePage = async () => {
    const post = await getPost('advantages-and-disadvantages-of-p2p');

    return (
        <>
            <> </>
            <section className={styles.article}>
                <div className={'container'}>
                    <div className={'container-1200'}>
                        <HTag className={styles.head__title} tag={'h1'}>
                            Advantages and Disadvantages of peer-to-peer lending
                        </HTag>
                        <div className={styles.article__data}>
                            <span className={styles.article__date}>{post.date}</span>
                            <div className={styles.article__tags}>
                                <Tag href={'blog'} title={post.category} />
                            </div>
                        </div>
                        <section className={styles.article__section}>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Peer-to-peer (P2P) lending is an alternative investment discovered by more and more
                                investors. <i>Through P2P lending platforms, it is possible to lend your assets and receive
                                returns on them.</i> This way of earning returns can be done in a very simple way and is
                                suitable for both experienced investors. Investing in P2P lending comes with both advantages
                                and disadvantages.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                As an investor, it is good to know both the advantages and disadvantages of P2P lending so
                                that you can avoid the disadvantages or take them into account. By paying close attention to
                                the disadvantages, you can achieve better returns as an investor. Beginning investors in
                                particular look mainly at the advantages without considering the possible risks. Prevention
                                is better than cure and therefore in this article, you can discover the advantages of
                                peer-to-peer lending, but also the disadvantages of this form of investment.
                            </PTag>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                Why is peer-to-peer lending risky?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                There are several risks associated with peer-to-peer lending, and it is wise to factor these
                                risks into your investment strategy. This way, you can mitigate the risks early and avoid
                                losses. For example, as an investor, it is important to consider loan repayments. <i>If a
                                borrower repays too early or too late, you may make less profit than you initially
                                expected.</i>
                                If a loan is repaid early by the borrower, you again have funds available to invest in new
                                loans. However, there is a chance that you may not be able to lend at the same interest
                                rate, making your return lower than expected.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                In addition, there is always the risk that the P2P lending platform will go bankrupt.
                                Therefore, never invest money that you cannot afford to lose, so that you are less
                                emotionally involved in investing and, in addition, do not get into financial trouble when a
                                platform goes bankrupt. <i>To ensure that you can minimize this risk as much as possible, it
                                is
                                important to research a P2P lending platform carefully.</i> Before you get started with P2P
                                lending, it is important to know where a platform is registered and the team behind the
                                company.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Also, check if the P2P lending platform is being regulated. If a P2P platform is regulated
                                by the Financial Conduct Authority (FCA), like most P2P lending platforms in the UK, then as
                                an investor you already have more security. This is because the FCA requires P2P lending
                                platforms to keep lenders' money separate from their accounts.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Who bears risk in P2P lending?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Without risk, there is also no return, so investors are at risk while investing. <i>Not only
                                do
                                investors take risks with P2P lending, but the platforms themselves also face certain
                                risks.</i>
                                If a borrower is unable to repay the loan, the lending platform or the investor will suffer
                                the consequences. As an investor, it is wise to look for a P2P lending platform that will
                                solve problems with defaulters and pay for the costs.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                When a person or company applies for a loan on a P2P lending platform but is unable to repay
                                it, it is called a default. To make sure you do not run this risk, it is advisable to study
                                the default rate of a P2P platform. The higher this percentage is, the higher the default
                                rate. In addition, pay attention to any contingency funds or commission funds that a P2P
                                platform may have. These funds are designed to pay out lenders when the borrower cannot meet
                                this obligation. These funds vary from platform to platform, so it is important to research
                                carefully what is covered so you know in advance what any risks are.
                            </PTag>
                            <ArticleImage src={'/articleImage/advantages-and-disadvantages-of-p2p-first.png'}/>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                What are the advantages and disadvantages of peer-to-peer lending?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                In investing, risk and return go hand in hand, and for peer-to-peer lending, the same is the
                                case. Both factors bring different advantages and disadvantages. By knowing both well, you
                                as an investor can avoid potential problems or, on the contrary, make the most of the
                                advantages of P2P lending. In this article, you can discover the pros and cons of
                                peer-to-peer lending so that you, as an investor, are fully aware of all the important
                                aspects of P2P lending. Let's start with the benefits of P2P lending!
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                An easy method of investing
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                P2P lending platforms are often very easy to use. Both the application process and lending
                                are often done in a matter of minutes, and these platforms are very straightforward,
                                allowing both activities to be performed by virtually any Internet user. As a result, P2P
                                lending is a lot faster than borrowing and lending through traditional financial
                                institutions.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Also, P2P lending is a convenient way of investing because it takes little time. After all,
                                you don't have to check the investment daily, as many investors have to do with stocks or
                                cryptocurrencies, for example. This also ensures that investing in P2P lending is an
                                attractive way to diversify without spending a lot of time on this process. Once you have
                                found a reliable platform, you only need to look for suitable loans a few times a year.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Higher returns with P2P lending
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                The appeal of P2P lending is that the returns are relatively high. Investors can achieve
                                higher returns on their investments through P2P lending than through traditional savings or
                                investment options. <i>Several P2P lending platforms can demonstrate that they have been
                                successfully bringing borrowers and lenders together for many years without any payment
                                problems.</i> In addition, there are a lot of platforms that have an emergency fund and can
                                accommodate borrowers in this way, when a defaulting borrower fails to meet their
                                obligations. This ensures that P2P lending can yield very high returns, while the risk is
                                relatively low.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Flexible way of investing
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                On several levels, P2P lending platforms can be very flexible. For example, these platforms
                                often offer a range of loan terms and repayment options, so there is a suitable solution for
                                every lender. <i>You can often filter the projects on a platform so that you are only
                                presented
                                with the projects that interest you.</i> This way you can find suitable projects faster and
                                spend less time investing.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                In addition, a lot of P2P lending platforms also have a secondary market, where you can sell
                                loans made to other investors. This makes investing in loans, which often have terms of
                                months to years, a lot more flexible. For example, you can sell your committed loan if you
                                need liquidity because you see new opportunities or want to do something else with the
                                money.
                            </PTag>
                            <ArticleImage src={'/articleImage/advantages-and-disadvantages-of-p2p-second.png'}/>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                What are the disadvantages of P2P lending?
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                In addition to the many advantages of P2P lending, there are also some disadvantages of this
                                form of investment. <i>As an investor, it is good to know what the advantages and
                                disadvantages
                                are so that you can anticipate them.</i> Thus, it is possible to avoid some of the
                                disadvantages
                                or to set up your investment strategy in such a way that you will be little affected by the
                                possible risks. In this way, you can achieve higher average returns and grow your portfolio.
                                Let's go over the disadvantages of P2P lending with you so you can guard against
                                disadvantages early on.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Default risk
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Default risk came up earlier in this article and is a risk you need to consider. <i>When
                                borrowers cannot pay off their loans, it can lead to potential losses for investors.</i> You
                                can
                                mitigate this disadvantage in several ways. For example, as an investor, you can invest in
                                several loans so that a default does not make a big impact on your portfolio. In addition,
                                with preliminary research, you can avoid these problems. Research whether a P2P lending
                                platform has a contingency fund, which is designed to compensate lenders when a borrower
                                cannot pay. By choosing the right platform, default risk need not have a major impact on
                                your investments.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Lack of regulatory supervision
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Not every P2P lending platform is regulated or regulated at the same level as traditional
                                financial institutions. Therefore, it is important to pay close attention to this when
                                choosing your P2P lending platform. <i>Use a regulated lending platform at all times so that
                                your investments are less at risk.</i> P2P lending platforms that are regulated often have
                                the
                                amount invested by lenders in a separate account, making investing through these platforms
                                much safer.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Limited protection on P2P platforms
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                When you start investing in peer-to-peer lending, you don't enjoy the same protection as
                                with traditional financial institutions. It is important for investors to know the
                                differences. For example, P2P lending platforms do not have FDIC insurance for depositors,
                                which traditional financial institutions do. To mitigate this risk, you can choose to invest
                                in different markets to reduce this risk. This reduces your risk, which can be beneficial to
                                your returns.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Limited diversification
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                When an investor starts investing only in P2P lending, it limits itself in terms of
                                diversification. <i>Within the P2P lending sector, you can invest in different loans
                                intended
                                for different sectors and in different countries.</i> In this way, you can diversify within
                                the
                                P2P lending sector, but this form of diversification remains somewhat limited. To minimize
                                risk, it is wise to take on different loans within the P2P sector but also to look outside
                                this sector for suitable investments.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Limited availability
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Not every company has discovered the potential of P2P lending, so there is limited
                                availability for investors. As a result, you may not be able to find suitable projects.
                                Nevertheless, there are dozens of P2P lending platforms in the UK and the rest of Europe,
                                specializing in different sectors and operating in different countries. This leaves a wide
                                choice for investors, but, for example, the stock market and the crypto market have a wider
                                range. However, peer-to-peer lending is being discovered by more and more companies and
                                individuals, so in the future, this form of lending can become as popular an investment
                                method as other markets.
                            </PTag>
                            <HTag className={styles.article__section_subtitle} tag={'h3'}>
                                Fees
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                P2P lending platforms may charge fees for their services. After all, these platforms incur
                                costs for bringing supply and demand together and need to make a profit themselves to stay
                                in business. These costs can affect returns, but this is not the case in a lot of cases.
                                Similarly, it is common for the companies or individuals borrowing to pay certain fees, or
                                for the P2P lending platform to work with fixed returns and keep part of the returns for
                                itself. <i>When looking for a suitable P2P lending platform, it is important that you
                                research
                                whether there are fees involved in investing in loans.</i> In addition, you can check the
                                platform to see what the returns are and you can compare these returns with other P2P
                                lending providers.
                            </PTag>
                        </section>
                        <section className={styles.article__section}>
                            <HTag className={styles.article__section_title} tag={'h2'}>
                                Good research helps with the pros and cons of peer-to-peer lending
                            </HTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Although this form of lending has been around for several years, P2P lending is still seen
                                as an emerging form of investing. Because supply and demand can come together simply, this
                                is a great success for many investors and borrowers. Borrowers do not have to visit a bank
                                and investors can earn good returns. P2P lending brings both advantages and disadvantages,
                                and it is a good idea to examine both factors carefully before you start P2P lending.
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                P2P lending involves several risks, which you can minimize by doing good research beforehand
                                and investing with a plan. For example, if you're dealing with a defaulter, you may suffer a
                                loss. However, by choosing the right P2P lending platform, you can avoid these losses
                                because the platform has an emergency fund for these situations. In addition, P2P lending
                                platforms can go bankrupt, so it is wise to research these platforms well in advance. <i>A
                                regulated platform that has been operating for many years and has a low default rate is a
                                lot more reliable than an unregulated P2P platform with a higher default rate.</i>
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                In addition to reducing the risks, it is also important to discover other disadvantages of
                                P2P lending. By doing so, you can avoid nasty surprises, which can be better for your
                                portfolio. For example, diversification with P2P lending is relatively limited and there are
                                fewer rules in the legal field than with traditional financial institutions. <i>By investing
                                in
                                different markets, you can diversify, and P2P lending can be a suitable part of this.</i>
                            </PTag>
                            <PTag className={styles.article__text} fontSize={'20px'}>
                                Besides all the risks and disadvantages, P2P lending also has many advantages. For example,
                                it is an easy way to invest and can also be done relatively passively. Good research
                                beforehand is required, but when you have invested in loans, you don't have to invest as
                                much time in this form of investment. P2P lending platforms are often very flexible
                                platforms, where you can even sell your loans on the secondary market. This allows you to
                                provide liquidity quickly, which is an advantage over the stock market. When you invest in
                                stocks and want to sell them because you need the money for something else, you may end up
                                selling them at a loss. Loans do not fluctuate in value, giving you more security and
                                flexibility.
                            </PTag>
                        </section>
                    </div>
                </div>
            </section>
            <InterestingPosts postsCategory={post.slugCategory}/>
        </>
    );
};

export default ArticlePage;
