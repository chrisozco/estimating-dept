import Link from "next/link";
import Image from "next/image";
import styles from './HomeNav.module.scss'

const HomeNav = () => {
    return (
        <div className={styles.homeHeader}>
            <div className={styles.headerSectionOne}>
                <Link href="/">
                    <Image src="/images/ms-logo.png" alt="Estimating Dept Logo" width={100} height={100} className={styles.sectionOneImg}/>
                </Link>
            </div>
            <div className={styles.headerSectionTwo}>
                <ul className={styles.headerNavList}>
                    <li className={styles.headerNavOptions}><Link href="/posts">Blog</Link></li>
                    <li className={styles.headerNavOptions}><Link href="/about-me">About Me</Link></li>
                    <li className={styles.headerNavOptions}><Link href="/404">Connect</Link></li>
                </ul>
            </div>
            <div className={styles.headerSectionThree}>
                <Link href="/" className={styles.sectionThreeText}>
                    The Estimating Dept.
                </Link>
            </div>
            <div className={styles.headerSectionFour}>
                <div className={styles.sheetCallout}>
                    <h3 id={styles.sheetCalloutNames}>Sheet:</h3>
                </div>
                <div className={styles.sheetName}>
                    <h3 id={styles.sheetCalloutNames}>Home Page</h3>
                </div>
            </div>
            <div className={styles.headerSectionFive}>
                <div className={styles.sheetNumCallout}>
                    <h3 id={styles.sheetCalloutNames}>Sheet Num:</h3>
                </div>
                <div className={styles.sheetNumName}>
                    <h3 id={styles.sheetCalloutNames}>MS 001</h3>
                </div>
            </div>
        </div>
    )
}

export default HomeNav;