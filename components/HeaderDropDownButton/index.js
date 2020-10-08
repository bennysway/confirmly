import Link from 'next/link'
import styles from './style.module.css'

export default function HeaderDropDownButton({ dropDrowItem }) {
    const menus = []
    for (let index = 0; index < dropDrowItem.items.length; index++) {
        const element = dropDrowItem.items[index];
        if (typeof element.func !== 'undefined') {
            element.func = dropDrowItem.items[index].func
            menus.push(<div key={element.text} onClick={element.func} className={styles.dropdownItem}>{element.text}</div>)
        } else {
            menus.push(<Link key='`element.text`' href={element.href}><div key={element.text} className={styles.dropdownItem}>{element.text}</div></Link>)
        }

    }
    return (
        <div className={styles.dropdown}>
            <div className={styles.button}>{dropDrowItem.title}</div>
            <div className={styles.dropdownContent}>{menus}</div>
        </div>
    )
}