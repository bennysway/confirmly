import { useRef } from 'react'
import useUser from '../../providers/useUser'
import HeaderButton from '../../components/HeaderButton'
import HeaderDropDownButton from '../../components/HeaderDropDownButton'
import styles from './style.module.css'

export default function PageHeader() {
    const headerRef = useRef(null)
    const { user } = useUser({ redirectTo: "/Account/Login" });
    var accountDropDown = {}
    if (!user || user.isLoggedIn === false) {
        accountDropDown = {
            title: "account",
            items: [{ text: `Login`, href:"/Account/Login" }, { text: "Sign Up", href:"/Account/SignUp" },]
        }
    } else {
        accountDropDown = {
            title: "account",
            items: [{ text: `Profile`, href:"/Account/Profile" }, { text: "Settings", href:"/Account/Settings" },  { text: "Log Out", href:"/Account/Logout" },]
        }
    }
    console.log(user)

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