import useScript from '../../hooks/useScript'
import styles from './style.module.scss'

export default function WidePictureSlide() {

    useScript('widePictureSlide.js')
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.slideshows}>
                    <div className={styles.slideshow+ ' '+ styles['slideshow--hero']}>
                        <div className={styles.slides}>
                            <div className={styles.slide + ' ' + styles.slide1}></div>
                            <div className={styles.slide + ' ' + styles.slide2}></div>
                            <div className={styles.slide + ' ' + styles.slide3}></div>
                        </div>
                    </div>
                    <div className={styles.slideshow + ' ' + styles['slideshow--contrast']+ ' '+  styles['slideshow--contrast--before']}>
                        <div className={styles.slides}>
                            <div className={styles.slide + ' ' + styles.slide1}></div>
                            <div className={styles.slide + ' ' + styles.slide2}></div>
                            <div className={styles.slide + ' ' + styles.slide3}></div>
                        </div>
                    </div>
                    <div className={styles.slideshow + ' '  + styles['slideshow--contrast'] + ' ' + styles['slideshow--contrast--after']}>
                        <div className={styles.slides}>
                            <div className={styles.slide +' ' + styles.slide1}></div>
                            <div className={styles.slide +' ' + styles.slide2}></div>
                            <div className={styles.slide +' ' + styles.slide3}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}