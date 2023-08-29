import {BreadCrumbs, CustomList, HTag, PTag} from "@/components";
import styles from './AboutUs.module.css';
import cn from 'classnames';

const AboutUs = () => {
    const paramsBreadCrumbs = [
        {name: 'Main', href: ''},
        {name: 'About us', href: 'about-us'},
    ];

    return (
        <>
            <BreadCrumbs paramsPath={paramsBreadCrumbs}/>
            <section className={styles.aboutUs}>
                <div className={'container'}>
                    <HTag className={cn(styles.aboutUs__title)} tag={'h1'}>
                        Welcome to Crowdfunding Platforms Hub - Crowd-Place.com!
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        At Crowd Place, we understand the power of collective funding and its ability to ignite dreams
                        and bring innovative ideas to life. Our platform serves as a comprehensive hub for all things
                        related to crowdfunding, connecting investors, entrepreneurs, and visionaries around the world.
                    </PTag>
                    <HTag className={styles.aboutUs__subtitle} tag={'h2'}>
                        Our Mission
                    </HTag>
                    <PTag fontSize={'20px'} className={cn(cn('container-1200', styles.paragraph), styles.paragraph)}>
                        Our mission is simple - to empower both individuals and organizations to turn their dreams into
                        reality through the power of crowdfunding. We believe that everyone deserves a chance to pursue
                        their passions and bring their ideas to fruition, regardless of financial constraints. By
                        providing a centralized hub of information and resources, we aim to level the playing field and
                        bridge the gap between innovators and backers.
                    </PTag>
                    <HTag className={styles.aboutUs__subtitle} tag={'h2'}>
                        What We Offer
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        At Crowd Place website, we offer a wide range of resources and services tailored to both backers
                        and project creators. For investors, our platform serves as a one-stop-shop for discovering
                        exciting investment opportunities in various industries. With our carefully curated list of
                        crowdfunding platforms, you can explore and compare different platforms to find the one that
                        best suits your investment preferences.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        For entrepreneurs and aspiring visionaries, our platform is an invaluable tool for showcasing
                        your project and attracting potential backers. By listing your crowdfunding platform on our hub,
                        you can increase its visibility and reach a larger audience of potential funders. We provide an
                        avenue to connect with individuals who are passionate about supporting innovative ideas and are
                        eager to provide the necessary financial backing.
                    </PTag>
                    <HTag className={styles.aboutUs__subtitle} tag={'h2'}>
                        What We Offer
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        We differentiate ourselves from other platforms through our commitment to excellence,
                        transparency, and inclusivity. We carefully vet and handpick the crowdfunding platforms listed
                        on our hub, ensuring that they maintain high-quality standards and prioritize the success of
                        both backers and creators. Our team is dedicated to providing unbiased and accurate information,
                        enabling you to make informed decisions when it comes to choosing a crowdfunding platform.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        Furthermore, we believe in fostering a sense of community within the crowdfunding ecosystem.
                        Through our platform, you can connect with like-minded individuals, share experiences, and learn
                        from the successes and challenges faced by others. We aim to create an environment that
                        encourages collaboration, learning, and growth, ultimately fueling the success of innovative
                        projects.
                    </PTag>
                    <HTag className={styles.aboutUs__subtitle} tag={'h2'}>
                        Join Us
                    </HTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        Whether you are an investor seeking alternative investment opportunities or a crowdfunding
                        platform looking to expand your reach, Crowd-Place.om is the ideal platform for you. Join our
                        vibrant community and embark on a journey of discovery, collaboration, and success.
                    </PTag>
                    <PTag fontSize={'20px'} className={cn('container-1200', styles.paragraph)}>
                        Together, let's unleash the power of crowdfunding and turn dreams into reality.
                    </PTag>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
