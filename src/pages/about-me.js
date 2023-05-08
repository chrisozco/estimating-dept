import Link from 'next/link';
import { Helmet } from 'react-helmet';

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
                    <h1>Mark Sexauer</h1>
                    <p className={styles.errorCode}>The Guy Who Builds The Blog</p>
                    <p>
                        <Link href="/">Go back home</Link>
                    </p>
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