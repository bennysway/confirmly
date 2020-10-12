import styles from './style.module.css'

export default function PageFooter() {

    return (
        <>
            <footer className={styles["footer"]}>
                <nav className={styles["footer-inner"]}>
                    <section className={styles['footer-item']}>
                        <h1 className={styles['logo']}>Confirmly</h1>

                        <h2>A secure verification system <br />Reliable, quick and accesible.<br /><b className={styles['color']}>Be Verified, Now.</b></h2>
                    </section>

                    <section className={styles['footer-item']}>
                        <h3>Explore</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/Account/Login">About</a></li>
                            <li><a href="/Home/Contact">Contact</a></li>
                            <li><a href="/Home/Partners">Partners</a></li>
                            <li><a href="/Home/Services">Services</a></li>
                            <li><a href="/Home/Pricing">Pricing</a></li>
                            <li><a href="/Home/Capabilities">Capabilities</a></li>
                            <li><a href="/Carriers">Careers</a></li>
                        </ul>
                    </section>

                    <section className={styles['footer-item']}>
                        <h3>Visit</h3>
                        <a href="#">
                            <p>Tadeusza Czackirgo 2/10</p>
                            <p>Górna</p>
                            <p>Łódź, Poland 90-001</p>
                        </a>

                        <h3 className={styles['desktop']}>New Business</h3>
                        <p className={styles['desktop']}><a href="#">office@confirmlygh.com</a></p>
                        <p className={styles['desktop']}><a href="#">739-497-888</a></p>
                    </section>

                    <section className={styles['footer-item']}>
                        <h3>New Business</h3>
                        <p><a href="#">Email us</a></p>
                        <p><a href="#">759-458-856</a></p>
                    </section>

                    <section className={styles['footer-item']}>
                        <h3>Follow</h3>
                        <ul>
                            <li><a href="www.instagram.com">Instagram</a></li>
                            <li><a href="twitter.com">Twitter</a></li>
                            <li><a href="linkedin.com">LinkedIn</a></li>
                        </ul>
                    </section>

                    <section className={styles['footer-item']}>
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="/Home/TnC">Terms</a></li>
                            <li><a href="/Home/PrivacyPolicy">Privacy</a></li>
                        </ul>
                    </section>

                    <section className={styles['footer-item']}>
                        <a href="#" className={styles['footer-button']}>Get a Quote</a>
                    </section>
                </nav>
            </footer>
        </>

    )
}