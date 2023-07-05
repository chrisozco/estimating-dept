import Link from 'next/link';
import { Helmet } from 'react-helmet';
import Image from 'next/image';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';

import styles from 'styles/pages/about-me.module.scss';

export default function AboutMe() {
    return (
        <Layout>
            <Helmet>
                <title>Who is This Guy?</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <Section>
                <Container className={styles.center}>
                    <div className={styles.titleContainer}>
                        <h1 id={styles.title}>Who is this Guy?</h1>
                    </div>
                    <div className={styles.sectionOne}>
                        <p className={styles.sectionOneText}>I grew up in a North Seattle neighborhood. I spent most of my early childhood and teen years in a craftsman style house built in 1907. Growing up in an old house with lots of character sparked an early interest in how things are built. All through middle and high school I worked for a general contractor, who was a family friend, doing residential remodels around the North Seattle area.</p>
                        <Image 
                        className={styles.aboutMeImgOne}
                        src='/images/sexauer_portrait.jpg'
                        width={460}
                        height={300}
                        alt='Mark Portrait Image'
                        />
                    </div>
                    <div className={styles.sectionTwo}>
                        <Image 
                        className={styles.aboutMeImgTwo}
                        src='/images/ms-army-img.jpg'
                        width={500}
                        height={300}
                        alt='Mark Portrait Image'
                        />
                        <div className={styles.sectionTwoText}>
                            <p>After a tour in Iraq in 2003/2004 and a stint in the bar/restaurant industry I embraced my early passion for working in construction.</p>
                            <p>Growing frustrated with contentious contractor vs homeowner relationships I decided to help spread awareness to improve these conditions. Content is intended for anyone interested in construction. From first-time homeowners to seasoned contractors and even developers.</p>
                        </div>
                    </div>
                    <div className={styles.sectionThree}>
                        <p>When not at work I love spending time in my craftsman style house in West Seattle, gardening, baking bread and cooking for my wife and kids. Oh and skiing during the season!</p>
                    </div>
                    <div className={styles.sectionFour}>
                        <Link href="/" className={styles.linkHome}>Back Home</Link>
                        <Link href="/posts/" className={styles.linkBlog}>Read It</Link>
                    </div>
                </Container>
            </Section>
        </Layout>
    );
}

// Next.js method to ensure a static page gets rendered
export async function getStaticProps() {
    return {
        props: {},
    };
}