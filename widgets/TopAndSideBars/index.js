import useScript from '../../hooks/useScript'
import SidebarNav from '../../widgets/SidebarNav'
import styles from './style.module.css'

export default function TopAndSideBar({content}) {

    /* Jquery JS*/
    useScript("https://code.jquery.com/jquery-3.5.1.slim.min.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.5.0/perfect-scrollbar.min.js")
    /* Bootstrap JS*/
    useScript("https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js")
    useScript("https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-progressbar/0.9.0/bootstrap-progressbar.min.js")
    /* Vendor JS */
    useScript("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/animsition/4.0.2/js/animsition.min.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.bundle.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js")
    useScript("https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js")
    useScript("dashboard/main.js")

    return (
        <>
            <div>
                {/* Fontfaces CSS*/}
                <base href="/" />
                <link href="css/font-face.css" rel="stylesheet" media="all" />
                <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all" />
                <link href="vendor/font-awesome-5/css/fontawesome-all.min.css" rel="stylesheet" media="all" />
                <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all" />
                {/* Bootstrap CSS*/}
                <link href="vendor/bootstrap-4.1/bootstrap.min.css" rel="stylesheet" media="all" />
                {/* Vendor CSS*/}
                <link href="vendor/animsition/animsition.min.css" rel="stylesheet" media="all" />
                <link href="vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css" rel="stylesheet" media="all" />
                <link href="vendor/wow/animate.css" rel="stylesheet" media="all" />
                <link href="vendor/css-hamburgers/hamburgers.min.css" rel="stylesheet" media="all" />
                <link href="vendor/slick/slick.css" rel="stylesheet" media="all" />
                <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all" />
                <link href="vendor/perfect-scrollbar/perfect-scrollbar.css" rel="stylesheet" media="all" />
                {/* Main CSS*/}
                <link href="css/theme.css" rel="stylesheet" media="all" />
                <div className="page-wrapper">
                    {/* HEADER MOBILE*/}
                    <header className="header-mobile d-block d-lg-none">
                        <div className="header-mobile__bar">
                            <div className="container-fluid">
                                <div className="header-mobile-inner">
                                    <a className="logo" href="index.html">
                                    <h2 className={styles.logo}>Confirmly</h2>
                                    </a>
                                    <button className="hamburger hamburger--slider" type="button">
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar-mobile">
                            <div className="container-fluid">
                                <ul className="navbar-mobile__list list-unstyled">
                                    <li className="has-sub">
                                        <a className="js-arrow" href="#">
                                            <i className="fas fa-tachometer-alt" />Dashboard</a>
                                        <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                            <li>
                                                <a href="index.html">Dashboard 1</a>
                                            </li>
                                            <li>
                                                <a href="index2.html">Dashboard 2</a>
                                            </li>
                                            <li>
                                                <a href="index3.html">Dashboard 3</a>
                                            </li>
                                            <li>
                                                <a href="index4.html">Dashboard 4</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="chart.html">
                                            <i className="fas fa-chart-bar" />Charts</a>
                                    </li>
                                    <li>
                                        <a href="table.html">
                                            <i className="fas fa-table" />Records</a>
                                    </li>
                                    <li>
                                        <a href="/Dashboard/Submit">
                                            <i className="far fa-check-square" />Submit</a>
                                    </li>
                                    <li>
                                        <a href="calendar.html">
                                            <i className="fas fa-calendar-alt" />Calendar</a>
                                    </li>
                                    <li>
                                        <a href="map.html">
                                            <i className="fas fa-map-marker-alt" />Maps</a>
                                    </li>
                                    <li className="has-sub">
                                        <a className="js-arrow" href="#">
                                            <i className="fas fa-copy" />Pages</a>
                                        <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                            <li>
                                                <a href="login.html">Login</a>
                                            </li>
                                            <li>
                                                <a href="register.html">Register</a>
                                            </li>
                                            <li>
                                                <a href="forget-pass.html">Forget Password</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-sub">
                                        <a className="js-arrow" href="#">
                                            <i className="fas fa-desktop" />UI Elements</a>
                                        <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                            <li>
                                                <a href="button.html">Button</a>
                                            </li>
                                            <li>
                                                <a href="badge.html">Badges</a>
                                            </li>
                                            <li>
                                                <a href="tab.html">Tabs</a>
                                            </li>
                                            <li>
                                                <a href="card.html">Cards</a>
                                            </li>
                                            <li>
                                                <a href="alert.html">Alerts</a>
                                            </li>
                                            <li>
                                                <a href="progress-bar.html">Progress Bars</a>
                                            </li>
                                            <li>
                                                <a href="modal.html">Modals</a>
                                            </li>
                                            <li>
                                                <a href="switch.html">Switchs</a>
                                            </li>
                                            <li>
                                                <a href="grid.html">Grids</a>
                                            </li>
                                            <li>
                                                <a href="fontawesome.html">Fontawesome Icon</a>
                                            </li>
                                            <li>
                                                <a href="typo.html">Typography</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    {/* END HEADER MOBILE*/}
                    {/* MENU SIDEBAR*/}
                    <aside className="menu-sidebar d-none d-lg-block">
                        <div className="logo">
                            <a href="#">
                            <h2 className={styles.logo}>Confirmly</h2>
                            </a>
                        </div>
                        <div className="menu-sidebar__content js-scrollbar1">
                            <nav className="navbar-sidebar">
                                <SidebarNav />
                                </nav>
                        </div>
                    </aside>
                    {/* END MENU SIDEBAR*/}
                    {/* PAGE CONTAINER*/}
                    <div className="page-container">
                        {/* HEADER DESKTOP*/}
                        <header className="header-desktop">
                            <div className="section__content section__content--p30">
                                <div className="container-fluid">
                                    <div className="header-wrap">
                                        <form className="form-header" action="true" method="POST">
                                            <input className="au-input au-input--xl" type="text" name="search" placeholder="Search for documents..." />
                                            <button className="au-btn--submit" type="submit">
                                                <i className="zmdi zmdi-search" />
                                            </button>
                                        </form>
                                        <div className="header-button">
                                            <div className="noti-wrap">
                                                <div className="noti__item js-item-menu">
                                                    <i className="zmdi zmdi-comment-more" />
                                                    <span className="quantity">1</span>
                                                    <div className="mess-dropdown js-dropdown">
                                                        <div className="mess__title">
                                                            <p>You have 2 news message</p>
                                                        </div>
                                                        <div className="mess__item">
                                                            <div className="image img-cir img-40">
                                                                <img src="images/icon/avatar-06.jpg" alt="Michelle Moreno" />
                                                            </div>
                                                            <div className="content">
                                                                <h6>Michelle Moreno</h6>
                                                                <p>Have sent a photo</p>
                                                                <span className="time">3 min ago</span>
                                                            </div>
                                                        </div>
                                                        <div className="mess__item">
                                                            <div className="image img-cir img-40">
                                                                <img src="images/icon/avatar-04.jpg" alt="Diane Myers" />
                                                            </div>
                                                            <div className="content">
                                                                <h6>Diane Myers</h6>
                                                                <p>You are now connected on message</p>
                                                                <span className="time">Yesterday</span>
                                                            </div>
                                                        </div>
                                                        <div className="mess__footer">
                                                            <a href="#">View all messages</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="noti__item js-item-menu">
                                                    <i className="zmdi zmdi-email" />
                                                    <span className="quantity">1</span>
                                                    <div className="email-dropdown js-dropdown">
                                                        <div className="email__title">
                                                            <p>You have 3 New Emails</p>
                                                        </div>
                                                        <div className="email__item">
                                                            <div className="image img-cir img-40">
                                                                <img src="images/icon/avatar-06.jpg" alt="Cynthia Harvey" />
                                                            </div>
                                                            <div className="content">
                                                                <p>Meeting about new dashboard...</p>
                                                                <span>Cynthia Harvey, 3 min ago</span>
                                                            </div>
                                                        </div>
                                                        <div className="email__item">
                                                            <div className="image img-cir img-40">
                                                                <img src="images/icon/avatar-05.jpg" alt="Cynthia Harvey" />
                                                            </div>
                                                            <div className="content">
                                                                <p>Meeting about new dashboard...</p>
                                                                <span>Cynthia Harvey, Yesterday</span>
                                                            </div>
                                                        </div>
                                                        <div className="email__item">
                                                            <div className="image img-cir img-40">
                                                                <img src="images/icon/avatar-04.jpg" alt="Cynthia Harvey" />
                                                            </div>
                                                            <div className="content">
                                                                <p>Meeting about new dashboard...</p>
                                                                <span>Cynthia Harvey, April 12,,2018</span>
                                                            </div>
                                                        </div>
                                                        <div className="email__footer">
                                                            <a href="#">See all emails</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="noti__item js-item-menu">
                                                    <i className="zmdi zmdi-notifications" />
                                                    <span className="quantity">1</span>
                                                    <div className="notifi-dropdown js-dropdown">
                                                        <div className="notifi__title">
                                                            <p>You have 3 Notifications</p>
                                                        </div>
                                                        <div className="notifi__item">
                                                            <div className="bg-c1 img-cir img-40">
                                                                <i className="zmdi zmdi-email-open" />
                                                            </div>
                                                            <div className="content">
                                                                <p>You got a email notification</p>
                                                                <span className="date">April 12, 2018 06:50</span>
                                                            </div>
                                                        </div>
                                                        <div className="notifi__item">
                                                            <div className="bg-c2 img-cir img-40">
                                                                <i className="zmdi zmdi-account-box" />
                                                            </div>
                                                            <div className="content">
                                                                <p>Your account has been blocked</p>
                                                                <span className="date">April 12, 2018 06:50</span>
                                                            </div>
                                                        </div>
                                                        <div className="notifi__item">
                                                            <div className="bg-c3 img-cir img-40">
                                                                <i className="zmdi zmdi-file-text" />
                                                            </div>
                                                            <div className="content">
                                                                <p>You got a new file</p>
                                                                <span className="date">April 12, 2018 06:50</span>
                                                            </div>
                                                        </div>
                                                        <div className="notifi__footer">
                                                            <a href="#">All notifications</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="account-wrap">
                                                <div className="account-item clearfix js-item-menu">
                                                    <div className="image">
                                                        <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                                    </div>
                                                    <div className="content">
                                                        <a className="js-acc-btn" href="#">john doe</a>
                                                    </div>
                                                    <div className="account-dropdown js-dropdown">
                                                        <div className="info clearfix">
                                                            <div className="image">
                                                                <a href="#">
                                                                    <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                                                </a>
                                                            </div>
                                                            <div className="content">
                                                                <h5 className="name">
                                                                    <a href="#">john doe</a>
                                                                </h5>
                                                                <span className="email">johndoe@example.com</span>
                                                            </div>
                                                        </div>
                                                        <div className="account-dropdown__body">
                                                            <div className="account-dropdown__item">
                                                                <a href="#">
                                                                    <i className="zmdi zmdi-account" />Account</a>
                                                            </div>
                                                            <div className="account-dropdown__item">
                                                                <a href="#">
                                                                    <i className="zmdi zmdi-settings" />Setting</a>
                                                            </div>
                                                            <div className="account-dropdown__item">
                                                                <a href="#">
                                                                    <i className="zmdi zmdi-money-box" />Billing</a>
                                                            </div>
                                                        </div>
                                                        <div className="account-dropdown__footer">
                                                            <a href="#">
                                                                <i className="zmdi zmdi-power" />Logout</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        {/* HEADER DESKTOP*/}
                        {/* MAIN CONTENT*/}
                        <div className="main-content">
                            <div className="section__content section__content--p30">
                                <div className="container-fluid">
                                    {content}
                                </div>
                            </div>
                        </div>
                        {/* END MAIN CONTENT*/}
                        {/* END PAGE CONTAINER*/}
                    </div>
                </div>
                {/* Jquery JS*/}
                {/* Bootstrap JS*/}
                {/* Vendor JS       */}
                {/* Main JS*/}
                {/* end document*/}
            </div>
        </>
    )
}