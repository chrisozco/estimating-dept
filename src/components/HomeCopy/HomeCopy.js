import styles from './HomeCopy.module.scss';

const HomeCopy = () => {
  return (
    <div className={styles.pageHero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeadline}>Mark Sexauer</h1>
        <p className={styles.heroDescription}>
          I write about the construction industry for residential and multifamily projects. My goal is to connect
          clients and contractors by providing real life experiences and advice to inform decision making. Clients and
          contractors can have a beautiful relationship with the right communication and foresight. It doesn&apos;t have
          to be so hard!
        </p>
      </div>
    </div>
  );
};

export default HomeCopy;
