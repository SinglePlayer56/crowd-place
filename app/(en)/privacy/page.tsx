import {BreadCrumbs, HTag, PTag} from "@/components";
import styles from './Privacy.module.css';
import cn from 'classnames';
import Link from 'next/link';

const Privacy = () => {
    const paramsBreadCrumbs = [
        {name: 'Main', href: ''},
        {name: 'Privacy', href: 'privacy'},
    ];

    return (
        <>
            <BreadCrumbs paramsPath={paramsBreadCrumbs}/>
            <section className={styles.privacy}>
                <div className={'container'}>
                    <HTag className={styles.privacy__title} tag={'h1'}>
                        Privacy Policy for crowd-place.com
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        At Crowdfunding Platforms Hub crowd-place.com, we are committed to maintaining the privacy and
                        security of our users. This Privacy Policy outlines how we collect, use, and protect your
                        personal information when you access our platform. By using our services, you agree to the terms
                        and practices described in this policy.
                    </PTag>
                    <HTag tag={'h3'} className={cn('container-1200', styles.subtitle)}>
                        1. Information We Collect:
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        1.1 Personal Information: When you create an account with Crowdfunding Platforms Hub, we collect
                        certain personal information such as your name, email address, postal address, and payment
                        details. This information is necessary to provide you with our services and facilitate
                        crowdfunding activities.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        1.2 User Content: We collect any user-generated content, including project descriptions,
                        campaign details, images, and videos that you voluntarily submit on our platform.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        1.3 Usage Information: We may collect information about your interactions and activities on the
                        Crowdfunding Platforms Hub, such as your device type, IP address, browser type, pages visited,
                        and referral source. This information helps us improve our services and website functionality.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        1.4 Cookies and Similar Technologies: We use cookies and other tracking technologies to enhance
                        your browsing experience and provide personalized features. These technologies collect data like
                        your preferences, session durations, and device information.
                    </PTag>

                    <HTag tag={'h3'} className={cn('container-1200', styles.subtitle)}>
                        2. Use of Information:
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        2.1 Provide Services: We use your personal information to verify your identity, process
                        payments, enable project creation and administration, and maintain communication with you
                        regarding your crowdfunding campaigns.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        2.2 Improve User Experience: We may use your information to personalize your experience,
                        understand user preferences, and offer tailored recommendations and promotions for projects and
                        services that may interest you.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        2.3 Communication: We may use your contact information to communicate important updates related
                        to your projects, account status, security alerts, and respond to your inquiries.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        2.4 Marketing: With your consent, we may use your personal information to send promotional
                        materials and newsletters about new offers, features, and partner services that we believe may
                        be relevant to you.
                    </PTag>

                    <HTag tag={'h3'} className={cn('container-1200', styles.subtitle)}>
                        3. Information Sharing:
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        3.1 Project and Backer Information: Information provided in crowdfunding projects, including
                        creator profiles, descriptions, and updates, is made publicly accessible on our platform.
                        Backers' names and pledge amounts may be showcased as supporting the project. Please be aware
                        that any information shared in this manner may be viewed by others.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        3.2 Service Providers and Partners: We may share your personal information with trusted
                        third-party service providers to assist with processing payments, storing data, verifying
                        information, and performing other business-related functions. Our partners may have access to
                        your information to provide specific services necessary for our operations.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        3.3 Legal Compliance: We may disclose your personal information if required by law, legal
                        process, or government request to comply with applicable regulations, protect intellectual
                        property rights, and ensure the safety and security of our platform and users.
                    </PTag>

                    <HTag tag={'h3'} className={cn('container-1200', styles.subtitle)}>
                        4. Data Security:
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        We take appropriate measures to protect your personal information from unauthorized access,
                        alteration, disclosure, or destruction. We use secure servers, encryption, firewalls, and
                        regular security audits to safeguard your data. However, no online platform can guarantee
                        complete data security, and you understand and accept this risk.
                    </PTag>

                    <HTag tag={'h3'} className={cn('container-1200', styles.subtitle)}>
                        5. Your Privacy Choices:
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        5.1 Account Settings: You have the option to review, update, and correct your personal
                        information by accessing your account settings.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        5.2 Subscription Preferences: You can control whether you want to receive promotional emails,
                        newsletters, and marketing communications from us. You may opt out of these communications at
                        any time by following the instructions provided in the email or contacting us directly.
                    </PTag>

                    <HTag tag={'h3'} className={cn('container-1200', styles.subtitle)}>
                        6. Children's Privacy:
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        Our services are not intended for individuals under the age of 18. We do not knowingly collect
                        personal information from children. If you believe we have inadvertently collected information
                        from a child, please contact us immediately, and we will take steps to delete the information
                        from our records.
                    </PTag>

                    <HTag tag={'h3'} className={cn('container-1200', styles.subtitle)}>
                        7. Changes to the Privacy Policy:
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        We reserve the right to update or modify this Privacy Policy at any time. When we make
                        significant changes, we will notify you through prominent notice on our website or via email. By
                        continuing to use our services after such changes, you consent to the revised Privacy Policy.
                    </PTag>

                    <HTag tag={'h3'} className={cn('container-1200', styles.subtitle)}>
                        8. Contact Us:
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        If you have any questions, concerns, or feedback regarding our Privacy Policy or data practices,
                        please <Link className={'link'} href={'/contacts/'}>contact us</Link>.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        Last Updated: August 31, 2023.
                    </PTag>
                </div>
            </section>
        </>
    );
};

export default Privacy;
