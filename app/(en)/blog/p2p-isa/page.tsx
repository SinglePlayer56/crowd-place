import styles from '../blog.module.css'
import {BreadCrumbs, CustomList, HTag, InterestingPosts, PTag, Tag} from "@/components";
import {Metadata} from "next";
import {generateLink} from "@/helpers";
import {getPost} from "@/helpers/fetch";

export async function generateMetadata(): Promise<Metadata> {
    const post = await getPost('p2p-isa');

    return {
        title: `${post.title} | ${process.env.NAME_WEBSITE}`,
        description: post.description,
        alternates: {
            canonical: `${process.env.DOMAIN}/blog/${post.slugHref}/`
        }
    }
}

const ArticlePage = async () => {
    const post = await getPost('p2p-isa');

    const paramsBreadCrumbs = [
        {name: 'Main', href: ''},
        {name: 'Blog', href: 'blog'},
        {name: 'Peer-to-peer (P2P) ISA Lending', href: post.slugHref},
    ];

    return (
        <>
            <> </>
            <BreadCrumbs paramsPath={paramsBreadCrumbs}/>
            <section className={styles.article}>
                <div className={'container'}>
                    <HTag className={styles.head__title} tag={'h1'}>
                        P2P ISA: How does it work?
                    </HTag>
                    <div className={styles.article__data}>
                        <span className={styles.article__date}>{post.date}</span>
                        <div className={styles.article__tags}>
                            <Tag href={generateLink(`/blog/`, post.category)} title={post.category}/>
                        </div>
                    </div>
                    <section className={styles.article__section}>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            More and more people are starting to invest and looking for alternative ways to grow their
                            wealth. A P2P ISA can be a suitable solution here, to achieve high returns in a tax-free
                            way. <i>ISA stands for Individual Savings Account and is therefore not an ordinary
                            account.</i> An
                            ISA doesn't even have to be a bank account. An ISA is a special account with a tax envelope
                            that allows you to invest money with valuable tax benefits. The gains you make through an
                            ISA are exempt from income and capital gains tax, leaving you with more money to spare.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Wondering if this alternative investment method is for you? In this article, you can
                            discover all about P2P ISAs. Find out exactly what P2P platforms and ISAs are and also
                            discover alternative ISAs. This way, you can discover which ISA suits your investment
                            strategy. <i>Whether you are a novice investor looking for an investment with a low entry
                            threshold, or an experienced investor looking to diversify your portfolio, P2P ISAs can be
                            of interest to everyone.</i> Find out all about this interesting way of making returns in
                            this
                            article.
                        </PTag>
                    </section>
                    <section className={styles.article__section}>
                        <HTag className={styles.article__section_title} tag={'h2'}>
                            What is P2P ISA?
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            A P2P ISA is an ISA account, which you can use to invest in various P2P loans. You can find
                            these ISAs under different names, such as Innovative Finance ISAs or IFISAs. <i>The
                            convenient
                            thing about this form of investment is that you don't have to pay taxes on the interest your
                            P2P investments earn.</i> Many investors use this form of investment because P2P ISAs often
                            outperform Cash ISAs and savings accounts, for example. The convenient thing about this
                            setup is that this investment has the potential to yield higher returns, thanks to the
                            tax-free system.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            As an investor, it is always important to consider the risks of investing. Where high
                            returns can be achieved often also means that the investment in question has a high risk.
                            Therefore, familiarize yourself well with the risks associated with different forms of
                            investment, so that you can prevent these risks from having a major impact on your
                            portfolio.
                        </PTag>
                    </section>
                    <section className={styles.article__section}>
                        <HTag className={styles.article__section_title} tag={'h2'}>
                            What does P2P mean in investment?
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            In investing, P2P stands for Peer-to-Peer and means that you are in direct contact with
                            other parties. <i>This investment method ensures that you do not have to use intermediaries,
                            such as a bank.</i> Being in direct contact with borrowers as an investor makes it
                            convenient to
                            use a P2P platform, where supply and demand come together. This revolutionary setup is
                            becoming increasingly popular among investors and borrowers, as loans can be arranged
                            quickly this way and investors can make lucrative returns.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            P2P lending is mostly used by individuals and small businesses looking for a loan for their
                            plans. They can apply for a loan on P2P lending platforms, providing the necessary
                            information so that lenders know what they are lending their money. Individual investors can
                            easily view all applications on a P2P lending platform and discover what the terms and plans
                            are for each application. On P2P platforms, the risks vary for each loan, but generally, the
                            returns are higher than on savings accounts or bonds.
                        </PTag>
                    </section>
                    <section className={styles.article__section}>
                        <HTag className={styles.article__section_title} tag={'h2'}>
                            How do peer-to-peer ISAs work?
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Peer-to-peer ISAs work the same way as other peer-to-peer investments, but an ISA has a
                            unique advantage. <i>Investing through an ISA provides additional tax advantages that you
                            won't
                            find with other P2P investments.</i> Also, peer-to-peer lending ISAs are P2P investments
                            where
                            you lend money to borrowers, and as a reward you receive interest on the loan. In addition,
                            you will also be repaid on the loan.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            This form of loan is the same as a normal loan, but the advantage of this form of loan is
                            that the bank does not act as an intermediary. This means that there are fewer costs
                            involved in the loan, so the return is also higher. However, borrowing through a bank is
                            less risky, making P2P lending more risky. In addition, interest rates in P2P lending are
                            target interest rates. These are yields that are expected to be achieved but are not yet
                            certain.
                        </PTag>
                    </section>
                    <section className={styles.article__section}>
                        <HTag className={styles.article__section_title} tag={'h2'}>
                            Is P2P lending legal in the UK?
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Since 2014, peer-to-peer (P2P) lending platforms have been regulated by the Financial
                            Conduct Authority (FCA) in the United Kingdom. This makes P2P lending completely legal in
                            the UK. <i>The regulations ensure that the industry is fairer and more transparent than
                            ever,
                            which is a positive development for investors.</i> Also, the regulations ensure that P2P
                            investors have access to the Financial Ombudsman's complaint service.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Also, the regulations ensure that investors can make better choices in terms of P2P
                            platforms. There are a huge number of P2P platforms in the UK, where investors can invest in
                            loans. Not every platform is regulated, so as an investor, you need to do good research on
                            the platform you are going to use. Through the FCA's registry, it is possible to research
                            whether a P2P lending platform is licensed, so you can be sure that a platform complies with
                            UK regulations.
                        </PTag>

                        <HTag className={styles.article__section_subtitle} tag={'h3'}>
                            Rules for regulated P2P platforms
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Regulated P2P lending platforms must comply with some rules to keep their license. For
                            example, these platforms must ring-fence customer funds that have not been assigned. This
                            way, those funds can be returned in the event of insolvency. Also, P2P platforms must give a
                            right of withdrawal to platform users. During this period, users can terminate their
                            agreement and this termination can be for various reasons.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Furthermore, P2P lending platforms must meet certain capital requirements. These
                            requirements are to ensure that the platforms are resilient and cannot simply get into
                            financial trouble. These capital requirements give more security to borrowers on the
                            platform, but the platform itself also has more security. All these rules together make the
                            P2P sector a lot more interesting for investors because you can make good returns in a
                            sector where reliability is improving.
                        </PTag>
                    </section>
                    <section className={styles.article__section}>
                        <HTag className={styles.article__section_title} tag={'h2'}>
                            Is P2P lending a good investment?
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Using P2P lending can be a very good investment, but it is important to consider the risks.
                            Therefore, invest in different loans and in projects that operate in different countries or
                            sectors. With a good spread of your portfolio, you can absorb the possible risks. Precisely
                            because it is possible to invest in so many different loans, P2P lending is a convenient way
                            to diversify.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            In addition, this investment is also a convenient way to be active as an investor in
                            different forms of investment. You can invest a portion in P2P lending in addition to
                            investing in stocks, cryptocurrencies, real estate, and bonds, so you can apply
                            diversification and make attractive returns. The convenient thing about P2P lending is that
                            this form of investment has a low barrier to entry. Through P2P lending platforms, it is
                            possible to invest relatively small amounts in different loans, allowing both novice and
                            experienced investors to diversify and earn returns on their assets. In this way, it is
                            possible to earn a passive income and compound profits.
                        </PTag>
                    </section>
                    <section className={styles.article__section}>
                        <HTag className={styles.article__section_title} tag={'h2'}>
                            Are peer-to-peer ISAs safe?
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Because P2P lending is relatively new, this form of investment often arouses some distrust.
                            The government is also aware of the rise of P2P lending and is working to regulate this form
                            of investment. Most P2P lending platforms in the UK are regulated by the Financial Conduct
                            Authority (FCA) and must comply with various rules so that platform users are protected.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            This means that Peer to Peer ISAs must abide by the rules and regulations set by the FCA. As
                            a result, users will be treated fairly and protected from platform mismanagement.
                            Nevertheless, it is still possible to lose money with P2P lending if you do not research
                            properly. It is important to study P2P lending platforms carefully so that you can maximize
                            your profits. Therefore, research whether a platform is approved by the FCA and whether it
                            has a contingency fund for users.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            The difference between P2P lending ISAs and other ISAs is that the latter category is
                            covered by the Financial Services Compensation Scheme (FSCS), while the P2P lending ISA is
                            not. The FSCS covers investors up to £85,000 if an investment provider goes bankrupt. This
                            rule provides additional security for ISAs, which the P2P variant does not fall under.
                        </PTag>
                    </section>
                    <section className={styles.article__section}>
                        <HTag className={styles.article__section_title} tag={'h2'}>
                            What are some alternatives to Peer to Peer ISAs?
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            In the field of P2P lending, there are various forms of investment, including P2P ISAs. You
                            can also divide P2P ISAs into different categories. These investments are suitable for
                            different investment strategies, so there are interesting ISAs for different investors. For
                            example, do you want to invest in stocks in a lucrative way? Or save for your child's future
                            plans? Different ISAs allow you to save for different purposes in a tax-free manner. The
                            different types of ISAs all benefit from the tax advantages offered by an ISA. Below we take
                            you through different ISAs.
                        </PTag>
                        <HTag className={styles.article__section_subtitle} tag={'h3'}>
                            Cash ISAs
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            A Cash ISA is a type of savings account but with the tax advantages of an ISA. This allows
                            you to keep all the interest you earn for yourself and not have to give up tax. To take
                            advantage of this arrangement, you must continue to abide by the terms of the account. An
                            ISA can also be a godsend for young investors. Over the age of 16, it is already possible to
                            open a Cash ISA and with this ISA you can get started from as little as £1.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            <i>There are two different types of Cash ISAs, Fixed Rate Cash ISAs and Variable Rate Cash
                                ISAs.</i> With a Fixed Rate, the interest rate remains the same during the term of your
                            Cash
                            ISA. With this type of ISA, keep in mind that there may be restrictions regarding
                            withdrawals. With a variable rate Cash ISA, you can withdraw more money. With this ISA, the
                            interest rate may change during the term of the ISA. The term and how much money you can
                            withdraw are the two main differences between the two Cash ISAs.
                        </PTag>
                        <HTag className={styles.article__section_subtitle} tag={'h3'}>
                            Junior ISAs (JISAs)
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            Another ISA suitable for young people is the Junior ISA. Indeed, the requirement to get this
                            ISA is that you are under 18. In addition, you must be resident in the United Kingdom. <i>It
                            is
                            only possible to get a Junior ISA if the child's parent is a Crown official and the child is
                            dependent on the parent's care.</i> In the 2023 to 2024 tax year, the savings limit for
                            Junior
                            ISAs is £9,000 and, of course, the interest earned on this savings account is tax-free. The
                            convenient thing about this ISA is that you can save tax-free for your child, so they can
                            use the funds in the future for their own home or studies.
                        </PTag>
                        <HTag className={styles.article__section_subtitle} tag={'h3'}>
                            Stocks and shares ISAs
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            To protect wealth from inflation, or save for fun purposes, people are increasingly turning
                            to investing. <i>ISAs can also be a convenient way to invest in the stock market. Funds,
                            shares, and other investment vehicles can be invested in through this alternative savings
                            account.</i> In the current tax year, you can invest up to £20,000. Unlike other investments
                            in
                            the stock market, you do not have to pay income/ or capital gains tax through a Shares ISA.
                            It is important to check the charges for these investments as they can vary and therefore
                            affect your returns. This way, you can avoid unnecessarily high costs and grow your wealth
                            in the best possible way.
                        </PTag>
                        <HTag className={styles.article__section_subtitle} tag={'h3'}>
                            Lifetime ISAs (LISAs)
                        </HTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            If you are 18 or older but under 40, opening a Lifetime ISA may be a suitable option for
                            you. You can use the money in this alternative savings account to buy your first home, for
                            example, or to build up a pension pot. With this ISA, it is possible to deposit up to £4,000
                            per year until the age of 50, making this ISA a long-term savings account. It is important
                            here that you make your first deposit before you are 40.
                        </PTag>
                        <PTag className={styles.article__text} fontSize={'20px'}>
                            <i>The convenient thing about this ISA is that the government gives you a 25% bonus on your
                                savings, with the limit being £1,000 per year.</i> After you turn 50, you can no longer
                            deposit
                            into your Lifetime ISA, nor are you entitled to the government's 25% bonus. However, your
                            account remains open, so you can still make returns and receive interest. This ISA is open
                            to any UK resident.
                        </PTag>
                    </section>
                </div>
            </section>
            <InterestingPosts excludeSlugPost={post.slugHref} postsCategory={post.slugCategory}/>
        </>
    );
};

export default ArticlePage;
