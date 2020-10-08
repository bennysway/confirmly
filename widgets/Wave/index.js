import styles from './style.module.scss'

export default function Wave() {

    return (
        <div className={styles.container}>
            <div className={styles.ocean}>
                <div className={styles.wave}></div>
                <div className={styles.wave}></div>
            </div>
            <style>
                {`
                body{overflow-x: hidden}
                `}
            </style>
        </div>
    )
}