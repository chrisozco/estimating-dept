import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/LayoutV2/Layout';
import Header from 'components/Header';
import Section from 'components/SectionV2';
import Container from 'components/Container';
import HomeNav from 'components/HomeNav/HomeNav';

import styles from 'styles/pages/Home.module.scss'
import Image from 'next/image';

export default function Home({ posts, pagination }) {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />

      <Section>
        <div className={styles.bgImg}>
          <Image 
            src='/images/plans-bg.jpg'
            alt='Construction Plans Background'
            fill={true}
            style={{objectFit: "cover"}}
          />
        </div>
        <Container>
        <HomeNav />
        </Container>
      </Section>
    </Layout>
  );
}
