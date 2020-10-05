import { useRef } from 'react'
import HeaderButton from '../../components/HeaderButton'
import HeaderDropDownButton from '../../components/HeaderDropDownButton'
import styles from './style.module.css'

export default function PageHeader() {
    const headerRef = useRef(null)
    const accountDropDown = {
        title: "account",
        items: [{ text: "Login", href:"/Login" }, { text: "Sign Up", href:"/SignUp" },]
    }

    return (
        <>
            <div ref={headerRef} id="header" className={styles.header}>
                <h2>Confirmly</h2>
                <HeaderButton buttonText="about" href="/Account/Login"/>
                <HeaderButton buttonText="contact" href="/Account/Login" />
                <HeaderButton buttonText="partners" href="/Account/Login" />
                <HeaderButton buttonText="services" href="/Account/Login" />
                <HeaderButton buttonText="pricing" href="/Account/Login" />
                <HeaderDropDownButton dropDrowItem={accountDropDown} />
            </div>
        </>
    )
}