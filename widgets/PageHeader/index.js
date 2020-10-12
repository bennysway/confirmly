import { useRef } from 'react'
import Router from 'next/router'
import useUser from '../../providers/useUser'
import HeaderButton from '../../components/HeaderButton'
import HeaderDropDownButton from '../../components/HeaderDropDownButton'
import styles from './style.module.css'
import fetchJson from "../../providers/fetchJson";

export default function PageHeader({user}) {
    const headerRef = useRef(null)
    const { mutateUser } = useUser({});
    async function handleLogout(e) {
        e.preventDefault();

        const body = {
            email: "email",
            password: "password",
        };

        try {
            await mutateUser(
                fetchJson("/api/logout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                })
            );
            Router.reload(window.location.pathname);
        } catch (error) {
            console.log("An unexpected error happened:", error);

        }
    }

    const accountDropDown = {
        title: "account",
        items: [{ text: `Login`, href: "/Account/Login" }, { text: "Sign Up", href: "/Account/SignUp" },]
    }
    const loggedAccountDropDown = {
        title: "account",
        items: [{ text: `Dashboard`, href: "/Dashboard" }, { text: "Settings", href: "/Account/Settings" }, { text: "Log Out", href: "", func: handleLogout },]
    }

    return (
        <>
            <div ref={headerRef} id="header" className={styles.header}>
                <h2>Confirmly</h2>
                <HeaderButton buttonText="about" href="/Home/About" />
                <HeaderButton buttonText="contact" href="/Home/Contact" />
                <HeaderButton buttonText="partners" href="/Home/Partners" />
                <HeaderButton buttonText="services" href="/Home/Services" />
                <HeaderButton buttonText="pricing" href="/Home/Pricing" />
                <HeaderDropDownButton dropDrowItem={user.isLoggedIn ? loggedAccountDropDown : accountDropDown} />
            </div>
        </>
    )
}