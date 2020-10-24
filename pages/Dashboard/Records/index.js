import Head from 'next/head'
import useScript from '../../../hooks/useScript'
import SidebarNav from '../../../widgets/SidebarNav'
import styles from './style.module.css'

export default function Records() {

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
            <Head>
                <title>Verify Document</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Verify Document in Confirmly" />
                <meta name="author" content="BennySway" />
                <meta name="keywords" content="Verification id verify"></meta>
            </Head>
            <div>
                <base href="/" />
                {/* Fontfaces CSS*/}
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
                                        <img src="images/icon/logo.png" alt="CoolAdmin" />
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
                                    <li>
                                        <a href="/Dashboard">
                                            <i className="fas fa-chart-bar" />Charts</a>
                                    </li>
                                    <li>
                                        <a href="chart.html">
                                            <i className="fas fa-chart-bar" />Charts</a>
                                    </li>
                                    <li>
                                        <a href="table.html">
                                            <i className="fas fa-table" />Tables</a>
                                    </li>
                                    <li>
                                        <a href="form.html">
                                            <i className="far fa-check-square" />Forms</a>
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
                                <img src="images/icon/logo.png" alt="Cool Admin" />
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
                                        <form className="form-header" action method="POST">
                                            <input className="au-input au-input--xl" type="text" name="search" placeholder="Search for datas & reports..." />
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
                                                    <span className="quantity">3</span>
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
                        {/* END HEADER DESKTOP*/}
                        {/* MAIN CONTENT*/}
                        <div className="main-content">
                            <div className="section__content section__content--p30">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="table-responsive table--no-card m-b-30">
                                                <table className="table table-borderless table-striped table-earning">
                                                    <thead>
                                                        <tr>
                                                            {/* hook table names */}
                                                            <th>Facility name:</th>
                                                            <th>Facility officer<br /> in charge:</th>
                                                            <th>Deaceased name:</th>
                                                            <th>Age<br /> Recorded:</th>
                                                            <th>Name and contact</th>
                                                            <th>Caused of death:</th>
                                                            <th>Date of death:</th>
                                                            <th>Sex</th>
                                                            <th>Any available<br /> identification card:</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* hook table items */}
                                                        <tr>
                                                            <td>FDW</td>
                                                            <td>Norah K.</td>
                                                            <td>Geffery Offson</td>
                                                            <td className="text-center">79</td>
                                                            <td>Johm Bollings</td>
                                                            <td>Cancer</td>
                                                            <td>20/05/2018</td>
                                                            <td className="text-right">Male</td>
                                                            <td className="text-right">None</td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            {/* USER DATA*/}
                                            <div className="user-data m-b-30">
                                                <h3 className="title-3 m-b-30">
                                                    <i className="zmdi zmdi-account-calendar" />Facilities Capacity</h3>
                                                <div className="filters m-b-45">
                                                    <div className="rs-select2--dark rs-select2--md m-r-10 rs-select2--border">
                                                        <select className="js-select2" name="property">
                                                            <option selected="selected">All Properties</option>
                                                            <option value>Products</option>
                                                            <option value>Services</option>
                                                        </select>
                                                        <div className="dropDownSelect2" />
                                                    </div>
                                                    <div className="rs-select2--dark rs-select2--sm rs-select2--border">
                                                        <select className="js-select2 au-select-dark" name="time">
                                                            <option selected="selected">All Time</option>
                                                            <option value>By Month</option>
                                                            <option value>By Day</option>
                                                        </select>
                                                        <div className="dropDownSelect2" />
                                                    </div>
                                                </div>
                                                <div className="table-responsive table-data">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <td>
                                                                    <label className="au-checkbox">
                                                                        <input type="checkbox" />
                                                                        <span className="au-checkmark" />
                                                                    </label>
                                                                </td>
                                                                <td>name</td>
                                                                <td>status</td>
                                                                <td>capacity</td>
                                                                <td />
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label className="au-checkbox">
                                                                        <input type="checkbox" />
                                                                        <span className="au-checkmark" />
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <div className="table-data__info">
                                                                        <h6>FDW</h6>
                                                                        <span>
                                                                            <a href="#">Dept 39</a>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="role admin">Active</span>
                                                                </td>
                                                                <td>
                                                                    <div className="rs-select2--trans rs-select2--sm">
                                                                        <select className="js-select2" name="property">
                                                                            <option selected="selected">Full</option>
                                                                            <option value>Half</option>
                                                                            <option value>Free</option>
                                                                        </select>
                                                                        <div className="dropDownSelect2" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="more">
                                                                        <i className="zmdi zmdi-more" />
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="au-checkbox">
                                                                        <input type="checkbox" defaultChecked="checked" />
                                                                        <span className="au-checkmark" />
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <div className="table-data__info">
                                                                        <h6>DHW</h6>
                                                                        <span>
                                                                            <a href="#">Dept 3</a>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="role user">In Use</span>
                                                                </td>
                                                                <td>
                                                                    <div className="rs-select2--trans rs-select2--sm">
                                                                        <select className="js-select2" name="property">
                                                                            <option value>Full</option>
                                                                            <option selected="selected">Half</option>
                                                                            <option value>Free</option>
                                                                        </select>
                                                                        <div className="dropDownSelect2" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="more">
                                                                        <i className="zmdi zmdi-more" />
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="au-checkbox">
                                                                        <input type="checkbox" />
                                                                        <span className="au-checkmark" />
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <div className="table-data__info">
                                                                        <h6>JSW</h6>
                                                                        <span>
                                                                            <a href="#">Dept 5</a>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="role user">In use</span>
                                                                </td>
                                                                <td>
                                                                    <div className="rs-select2--trans rs-select2--sm">
                                                                        <select className="js-select2" name="property">
                                                                            <option value>Full</option>
                                                                            <option value selected="selected">Half</option>
                                                                            <option value>Free</option>
                                                                        </select>
                                                                        <div className="dropDownSelect2" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="more">
                                                                        <i className="zmdi zmdi-more" />
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label className="au-checkbox">
                                                                        <input type="checkbox" />
                                                                        <span className="au-checkmark" />
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <div className="table-data__info">
                                                                        <h6>SIW</h6>
                                                                        <span>
                                                                            <a href="#">Dept 9</a>
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="role member">Inactive</span>
                                                                </td>
                                                                <td>
                                                                    <div className="rs-select2--trans rs-select2--sm">
                                                                        <select className="js-select2" name="property">
                                                                            <option selected="selected">Full</option>
                                                                            <option value>Half</option>
                                                                            <option value>Free</option>
                                                                        </select>
                                                                        <div className="dropDownSelect2" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="more">
                                                                        <i className="zmdi zmdi-more" />
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="user-data__footer">
                                                    <button className="au-btn au-btn-load">load more</button>
                                                </div>
                                            </div>
                                            {/* END USER DATA*/}
                                        </div>
                                        <div className="col-lg-6">
                                            {/* TOP CAMPAIGN*/}
                                            <div className="top-campaign">
                                                <h3 className="title-3 m-b-30">Cost Summary</h3>
                                                <div className="table-responsive">
                                                    <table className="table table-top-campaign">
                                                        <tbody>
                                                            <tr>
                                                                <td>Dept 1</td>
                                                                <td>$70,261.65</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dept 2</td>
                                                                <td>$46,399.22</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dept 3</td>
                                                                <td>$35,364.90</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dept 4</td>
                                                                <td>$20,366.96</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dept 5</td>
                                                                <td>$10,366.96</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dept 6</td>
                                                                <td>$35,364.90</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dept 7</td>
                                                                <td>$20,366.96</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dept 8</td>
                                                                <td>$10,366.96</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dept 9</td>
                                                                <td>$35,364.90</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dept 10</td>
                                                                <td>$20,366.96</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dept 11</td>
                                                                <td>$10,366.96</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Dept 12</td>
                                                                <td>$20,366.96</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/*  END TOP CAMPAIGN*/}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="copyright">
                                                <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href="https://colorlib.com">Colorlib</a>.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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