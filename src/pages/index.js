import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/LayoutV2/Layout';
import Section from 'components/SectionV2';
import Container from 'components/ContainerV2';
import HomeNav from 'components/HomeNav/HomeNav';
import HomeCopy from 'components/HomeCopy/HomeCopy';

import styles from 'styles/pages/Home.module.scss'
import Image from 'next/image';

export default function Home() {
  const { metadata = {} } = useSite();
  const { title, description } = metadata;

  return (
    <Layout>
      <WebsiteJsonLd siteTitle={title} />

      <Section>
          <Image
            id={styles.bgImg}
            src='/images/plans-bg.jpg'
            alt='Construction Plans Background'
            fill={true}
            style={{objectFit: "cover"}}
          />
        <Container>
          <HomeNav />
          <HomeCopy />
        </Container>
      </Section>
    </Layout>
  );
}
