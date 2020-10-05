import Link from 'next/link'
import styles from './style.module.css'

export default function HeaderButton({ buttonText, href }) {
    return (
        <>
            <Link href={href}>
                <div className={styles.button} onClick>{buttonText}</div>
            </Link>
        </>
    )
}