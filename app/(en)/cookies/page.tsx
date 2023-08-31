import {BreadCrumbs, CustomList, HTag, PTag} from "@/components";
import styles from './Cookies.module.css';
import cn from 'classnames';
import Link from 'next/link';

const Cookies = () => {
    const paramsBreadCrumbs = [
        {name: 'Main', href: ''},
        {name: 'Cookies', href: 'cookies'},
    ];
    return (
        <>
            <BreadCrumbs paramsPath={paramsBreadCrumbs}/>
            <section className={styles.cookies}>
                <div className={'container'}>
                    <HTag className={styles.cookies__title} tag={'h1'}>
                        Cookies Policy for crowd-place.com
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        Last updated: August 31, 2023.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        This Cookies Policy explains how crowd-place.com ("we," "us," or "our") uses cookies and similar
                        tracking technologies on our website. By using our website, you consent to the use of cookies as
                        described in this policy.
                    </PTag>
                    <HTag tag={'h3'} className={styles.subtitle}>
                        What are Cookies?
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        Cookies are small text files that are placed on your computer or mobile device by websites that
                        you visit. They are widely used to make websites work efficiently and improve the browsing
                        experience, as well as provide information to website owners. Cookies may be "session cookies"
                        (temporary cookies that are erased when you close your browser) or "persistent cookies" (cookies
                        that remain on your computer or mobile device until you delete them).
                    </PTag>

                    <HTag tag={'h3'} className={styles.subtitle}>
                        How We Use Cookies
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        We use cookies for the following purposes on our website:
                    </PTag>
                    <CustomList className={cn('container-1200', styles.list)} as={'ol'}>
                        <li>
                            Essential Cookies: These cookies are necessary for the operation of our website. They enable
                            you to navigate our website and access its features. Without these cookies, certain
                            functionality may be unavailable or limited.
                        </li>
                        <li>
                            Performance and Analytics Cookies: These cookies collect information about how visitors use
                            our website, such as which pages are visited most frequently or if any errors occur. We use
                            this information to improve the performance and functionality of our website and to analyze
                            website traffic patterns. The data collected is aggregated and anonymous.
                        </li>
                        <li>
                            Functionality Cookies: These cookies allow our website to remember choices you make (such as
                            your preferred language or region) and provide enhanced features and personalized content.
                            These cookies may also be used to remember changes you have made to text size, font, and
                            other parts of web pages that can be customized. The information collected by these cookies
                            is anonymized and cannot track your browsing activity on other websites.
                        </li>
                        <li>
                            Third-Party Cookies: Our website may also use cookies provided by third parties, including
                            social media platforms and advertising networks. These cookies may track your browsing
                            activity across different websites and may enable us to deliver targeted advertisements or
                            content based on your interests.
                        </li>
                    </CustomList>

                    <HTag tag={'h3'} className={styles.subtitle}>
                        Managing Cookies
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        By continuing to use our website, you consent to the placement of cookies on your device.
                        However, you have the option to manage or disable cookies through your browser settings. Please
                        note that disabling cookies may affect the functionality and usability of our website.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        Additionally, you can opt-out of certain third-party cookies used for advertising purposes by
                        visiting the Network Advertising Initiative (NAI) opt-out page or the Digital Advertising
                        Alliance (DAA) opt-out page. Please be aware that opting out does not mean you will no longer
                        receive online advertising. It only means that the network from which you opted out will no
                        longer deliver ads tailored to your preferences and usage patterns.
                    </PTag>

                    <HTag tag={'h3'} className={styles.subtitle}>
                        Changes to this Policy
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        We may update this Cookies Policy from time to time to reflect changes in technology, legal
                        requirements, or our privacy practices. Any updates will be posted on this page with a revised
                        "Last updated" date. We encourage you to review this policy periodically to stay informed about
                        how we use cookies.
                    </PTag>

                    <HTag tag={'h3'} className={styles.subtitle}>
                        Contact Us
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        If you have any questions, concerns, or requests regarding this Cookies Policy or our use of
                        cookies, please <Link className={'link'} href={'/contacts/'}>contact us</Link>.
                    </PTag>
                </div>
            </section>
        </>
    );
};

export default Cookies;
