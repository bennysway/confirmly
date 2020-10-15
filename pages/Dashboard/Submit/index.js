import Head from 'next/head'
import useScript from '../../../hooks/useScript'

export default function Submit() {

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
                <title>Submit a Document</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Submit a document into the Confirmly database" />
                <meta name="author" content="BennySway" />
                <meta name="keywords" content="submit ID"></meta>
            </Head>
            <div>
                {/* Fontfaces CSS*/}
                <base href="/" />
                <link href="css/font-face.css" rel="stylesheet" media="all" />
                <link href="vendor/font-awesome-5/css/fontawesome-all.min.css" rel="stylesheet" media="all" />
                <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all" />
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
                                <ul className="list-unstyled navbar__list">
                                    <li className="has-sub">
                                        <a className="js-arrow" href="#">
                                            <i className="fas fa-tachometer-alt" />Dashboard</a>
                                        <ul className="list-unstyled navbar__sub-list js-sub-list">
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
                                            <i className="fas fa-table" />Tables</a>
                                    </li>
                                    <li className="active">
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
                                        <ul className="list-unstyled navbar__sub-list js-sub-list">
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
                                        <ul className="list-unstyled navbar__sub-list js-sub-list">
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
                        {/* HEADER DESKTOP*/}
                        {/* MAIN CONTENT*/}
                        <div className="main-content">
                            <div className="section__content section__content--p30">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">Credit Card</div>
                                                <div className="card-body">
                                                    <div className="card-title">
                                                        <h3 className="text-center title-2">Pay Invoice</h3>
                                                    </div>
                                                    <hr />
                                                    <form action method="post" noValidate="novalidate">
                                                        <div className="form-group">
                                                            <label htmlFor="cc-payment" className="control-label mb-1">Payment amount</label>
                                                            <input id="cc-pament" name="cc-payment" type="text" className="form-control" aria-required="true" aria-invalid="false" defaultValue={100.00} />
                                                        </div>
                                                        <div className="form-group has-success">
                                                            <label htmlFor="cc-name" className="control-label mb-1">Name on card</label>
                                                            <input id="cc-name" name="cc-name" type="text" className="form-control cc-name valid" data-val="true" data-val-required="Please enter the name on card" autoComplete="cc-name" aria-required="true" aria-invalid="false" aria-describedby="cc-name-error" />
                                                            <span className="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="cc-number" className="control-label mb-1">Card number</label>
                                                            <input id="cc-number" name="cc-number" type="tel" className="form-control cc-number identified visa" defaultValue data-val="true" data-val-required="Please enter the card number" data-val-cc-number="Please enter a valid card number" autoComplete="cc-number" />
                                                            <span className="help-block" data-valmsg-for="cc-number" data-valmsg-replace="true" />
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="cc-exp" className="control-label mb-1">Expiration</label>
                                                                    <input id="cc-exp" name="cc-exp" type="tel" className="form-control cc-exp" defaultValue data-val="true" data-val-required="Please enter the card expiration" data-val-cc-exp="Please enter a valid month and year" placeholder="MM / YY" autoComplete="cc-exp" />
                                                                    <span className="help-block" data-valmsg-for="cc-exp" data-valmsg-replace="true" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <label htmlFor="x_card_code" className="control-label mb-1">Security code</label>
                                                                <div className="input-group">
                                                                    <input id="x_card_code" name="x_card_code" type="tel" className="form-control cc-cvc" defaultValue data-val="true" data-val-required="Please enter the security code" data-val-cc-cvc="Please enter a valid security code" autoComplete="off" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
                                                                <i className="fa fa-lock fa-lg" />&nbsp;
                                <span id="payment-button-amount">Pay $100.00</span>
                                                                <span id="payment-button-sending" style={{ display: 'none' }}>Sending…</span>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>Company</strong>
                                                    <small> Form</small>
                                                </div>
                                                <div className="card-body card-block">
                                                    <div className="form-group">
                                                        <label htmlFor="company" className=" form-control-label">Company</label>
                                                        <input type="text" id="company" placeholder="Enter your company name" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="vat" className=" form-control-label">VAT</label>
                                                        <input type="text" id="vat" placeholder="DE1234567890" className="form-control" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="street" className=" form-control-label">Street</label>
                                                        <input type="text" id="street" placeholder="Enter street name" className="form-control" />
                                                    </div>
                                                    <div className="row form-group">
                                                        <div className="col-8">
                                                            <div className="form-group">
                                                                <label htmlFor="city" className=" form-control-label">City</label>
                                                                <input type="text" id="city" placeholder="Enter your city" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-8">
                                                            <div className="form-group">
                                                                <label htmlFor="postal-code" className=" form-control-label">Postal Code</label>
                                                                <input type="text" id="postal-code" placeholder="Postal Code" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="country" className=" form-control-label">Country</label>
                                                        <input type="text" id="country" placeholder="Country name" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>Basic Form</strong> Elements
                        </div>
                                                <div className="card-body card-block">
                                                    <form action method="post" encType="multipart/form-data" className="form-horizontal">
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label className=" form-control-label">Static</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <p className="form-control-static">Username</p>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label htmlFor="text-input" className=" form-control-label">Text Input</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="text-input" name="text-input" placeholder="Text" className="form-control" />
                                                                <small className="form-text text-muted">This is a help text</small>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label htmlFor="email-input" className=" form-control-label">Email Input</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="email" id="email-input" name="email-input" placeholder="Enter Email" className="form-control" />
                                                                <small className="help-block form-text">Please enter your email</small>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label htmlFor="password-input" className=" form-control-label">Password</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="password" id="password-input" name="password-input" placeholder="Password" className="form-control" />
                                                                <small className="help-block form-text">Please enter a complex password</small>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label htmlFor="disabled-input" className=" form-control-label">Disabled Input</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="text" id="disabled-input" name="disabled-input" placeholder="Disabled" disabled className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label htmlFor="textarea-input" className=" form-control-label">Textarea</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <textarea name="textarea-input" id="textarea-input" rows={9} placeholder="Content..." className="form-control" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label htmlFor="select" className=" form-control-label">Select</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <select name="select" id="select" className="form-control">
                                                                    <option value={0}>Please select</option>
                                                                    <option value={1}>Option #1</option>
                                                                    <option value={2}>Option #2</option>
                                                                    <option value={3}>Option #3</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label htmlFor="selectLg" className=" form-control-label">Select Large</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <select name="selectLg" id="selectLg" className="form-control-lg form-control">
                                                                    <option value={0}>Please select</option>
                                                                    <option value={1}>Option #1</option>
                                                                    <option value={2}>Option #2</option>
                                                                    <option value={3}>Option #3</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label htmlFor="selectSm" className=" form-control-label">Select Small</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <select name="selectSm" id="SelectLm" className="form-control-sm form-control">
                                                                    <option value={0}>Please select</option>
                                                                    <option value={1}>Option #1</option>
                                                                    <option value={2}>Option #2</option>
                                                                    <option value={3}>Option #3</option>
                                                                    <option value={4}>Option #4</option>
                                                                    <option value={5}>Option #5</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label htmlFor="disabledSelect" className=" form-control-label">Disabled Select</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <select name="disabledSelect" id="disabledSelect" disabled className="form-control">
                                                                    <option value={0}>Please select</option>
                                                                    <option value={1}>Option #1</option>
                                                                    <option value={2}>Option #2</option>
                                                                    <option value={3}>Option #3</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label htmlFor="multiple-select" className=" form-control-label">Multiple select</label>
                                                            </div>
                                                            <div className="col col-md-9">
                                                                <select name="multiple-select" id="multiple-select" multiple className="form-control">
                                                                    <option value={1}>Option #1</option>
                                                                    <option value={2}>Option #2</option>
                                                                    <option value={3}>Option #3</option>
                                                                    <option value={4}>Option #4</option>
                                                                    <option value={5}>Option #5</option>
                                                                    <option value={6}>Option #6</option>
                                                                    <option value={7}>Option #7</option>
                                                                    <option value={8}>Option #8</option>
                                                                    <option value={9}>Option #9</option>
                                                                    <option value={10}>Option #10</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label className=" form-control-label">Radios</label>
                                                            </div>
                                                            <div className="col col-md-9">
                                                                <div className="form-check">
                                                                    <div className="radio">
                                                                        <label htmlFor="radio1" className="form-check-label ">
                                                                            <input type="radio" id="radio1" name="radios" defaultValue="option1" className="form-check-input" />Option 1
                                    </label>
                                                                    </div>
                                                                    <div className="radio">
                                                                        <label htmlFor="radio2" className="form-check-label ">
                                                                            <input type="radio" id="radio2" name="radios" defaultValue="option2" className="form-check-input" />Option 2
                                    </label>
                                                                    </div>
                                                                    <div className="radio">
                                                                        <label htmlFor="radio3" className="form-check-label ">
                                                                            <input type="radio" id="radio3" name="radios" defaultValue="option3" className="form-check-input" />Option 3
                                    </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label className=" form-control-label">Inline Radios</label>
                                                            </div>
                                                            <div className="col col-md-9">
                                                                <div className="form-check-inline form-check">
                                                                    <label htmlFor="inline-radio1" className="form-check-label ">
                                                                        <input type="radio" id="inline-radio1" name="inline-radios" defaultValue="option1" className="form-check-input" />One
                                  </label>
                                                                    <label htmlFor="inline-radio2" className="form-check-label ">
                                                                        <input type="radio" id="inline-radio2" name="inline-radios" defaultValue="option2" className="form-check-input" />Two
                                  </label>
                                                                    <label htmlFor="inline-radio3" className="form-check-label ">
                                                                        <input type="radio" id="inline-radio3" name="inline-radios" defaultValue="option3" className="form-check-input" />Three
                                  </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label className=" form-control-label">Checkboxes</label>
                                                            </div>
                                                            <div className="col col-md-9">
                                                                <div className="form-check">
                                                                    <div className="checkbox">
                                                                        <label htmlFor="checkbox1" className="form-check-label ">
                                                                            <input type="checkbox" id="checkbox1" name="checkbox1" defaultValue="option1" className="form-check-input" />Option 1
                                    </label>
                                                                    </div>
                                                                    <div className="checkbox">
                                                                        <label htmlFor="checkbox2" className="form-check-label ">
                                                                            <input type="checkbox" id="checkbox2" name="checkbox2" defaultValue="option2" className="form-check-input" /> Option 2
                                    </label>
                                                                    </div>
                                                                    <div className="checkbox">
                                                                        <label htmlFor="checkbox3" className="form-check-label ">
                                                                            <input type="checkbox" id="checkbox3" name="checkbox3" defaultValue="option3" className="form-check-input" /> Option 3
                                    </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label className=" form-control-label">Inline Checkboxes</label>
                                                            </div>
                                                            <div className="col col-md-9">
                                                                <div className="form-check-inline form-check">
                                                                    <label htmlFor="inline-checkbox1" className="form-check-label ">
                                                                        <input type="checkbox" id="inline-checkbox1" name="inline-checkbox1" defaultValue="option1" className="form-check-input" />One
                                  </label>
                                                                    <label htmlFor="inline-checkbox2" className="form-check-label ">
                                                                        <input type="checkbox" id="inline-checkbox2" name="inline-checkbox2" defaultValue="option2" className="form-check-input" />Two
                                  </label>
                                                                    <label htmlFor="inline-checkbox3" className="form-check-label ">
                                                                        <input type="checkbox" id="inline-checkbox3" name="inline-checkbox3" defaultValue="option3" className="form-check-input" />Three
                                  </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label htmlFor="file-input" className=" form-control-label">File input</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="file" id="file-input" name="file-input" className="form-control-file" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label htmlFor="file-multiple-input" className=" form-control-label">Multiple File input</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="file" id="file-multiple-input" name="file-multiple-input" multiple className="form-control-file" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary btn-sm">
                                                        <i className="fa fa-dot-circle-o" /> Submit
                          </button>
                                                    <button type="reset" className="btn btn-danger btn-sm">
                                                        <i className="fa fa-ban" /> Reset
                          </button>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>Inline</strong> Form
                        </div>
                                                <div className="card-body card-block">
                                                    <form action method="post" className="form-inline">
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputName2" className="pr-1  form-control-label">Name</label>
                                                            <input type="text" id="exampleInputName2" placeholder="Jane Doe" required className="form-control" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail2" className="px-1  form-control-label">Email</label>
                                                            <input type="email" id="exampleInputEmail2" placeholder="jane.doe@example.com" required className="form-control" />
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary btn-sm">
                                                        <i className="fa fa-dot-circle-o" /> Submit
                          </button>
                                                    <button type="reset" className="btn btn-danger btn-sm">
                                                        <i className="fa fa-ban" /> Reset
                          </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>Horizontal</strong> Form
                        </div>
                                                <div className="card-body card-block">
                                                    <form action method="post" className="form-horizontal">
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label htmlFor="hf-email" className=" form-control-label">Email</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="email" id="hf-email" name="hf-email" placeholder="Enter Email..." className="form-control" />
                                                                <span className="help-block">Please enter your email</span>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-3">
                                                                <label htmlFor="hf-password" className=" form-control-label">Password</label>
                                                            </div>
                                                            <div className="col-12 col-md-9">
                                                                <input type="password" id="hf-password" name="hf-password" placeholder="Enter Password..." className="form-control" />
                                                                <span className="help-block">Please enter your password</span>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary btn-sm">
                                                        <i className="fa fa-dot-circle-o" /> Submit
                          </button>
                                                    <button type="reset" className="btn btn-danger btn-sm">
                                                        <i className="fa fa-ban" /> Reset
                          </button>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>Normal</strong> Form
                        </div>
                                                <div className="card-body card-block">
                                                    <form action="true" method="post" className>
                                                        <div className="form-group">
                                                            <label htmlFor="nf-email" className=" form-control-label">Email</label>
                                                            <input type="email" id="nf-email" name="nf-email" placeholder="Enter Email.." className="form-control" />
                                                            <span className="help-block">Please enter your email</span>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="nf-password" className=" form-control-label">Password</label>
                                                            <input type="password" id="nf-password" name="nf-password" placeholder="Enter Password.." className="form-control" />
                                                            <span className="help-block">Please enter your password</span>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary btn-sm">
                                                        <i className="fa fa-dot-circle-o" /> Submit
                          </button>
                                                    <button type="reset" className="btn btn-danger btn-sm">
                                                        <i className="fa fa-ban" /> Reset
                          </button>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header">
                                                    Input
                          <strong>Grid</strong>
                                                </div>
                                                <div className="card-body card-block">
                                                    <form action method="post" className="form-horizontal">
                                                        <div className="row form-group">
                                                            <div className="col col-sm-3">
                                                                <input type="text" placeholder=".col-sm-3" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-sm-4">
                                                                <input type="text" placeholder=".col-sm-4" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-sm-5">
                                                                <input type="text" placeholder=".col-sm-5" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-sm-6">
                                                                <input type="text" placeholder=".col-sm-6" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-sm-7">
                                                                <input type="text" placeholder=".col-sm-7" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-sm-8">
                                                                <input type="text" placeholder=".col-sm-8" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-sm-9">
                                                                <input type="text" placeholder=".col-sm-9" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-sm-10">
                                                                <input type="text" placeholder=".col-sm-10" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-sm-11">
                                                                <input type="text" placeholder=".col-sm-11" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-sm-12">
                                                                <input type="text" placeholder=".col-sm-12" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary btn-sm">
                                                        <i className="fa fa-user" /> Login
                          </button>
                                                    <button type="reset" className="btn btn-danger btn-sm">
                                                        <i className="fa fa-ban" /> Reset
                          </button>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header">
                                                    Input
                          <strong>Sizes</strong>
                                                </div>
                                                <div className="card-body card-block">
                                                    <form action method="post" className="form-horizontal">
                                                        <div className="row form-group">
                                                            <div className="col col-sm-5">
                                                                <label htmlFor="input-small" className=" form-control-label">Small Input</label>
                                                            </div>
                                                            <div className="col col-sm-6">
                                                                <input type="text" id="input-small" name="input-small" placeholder=".form-control-sm" className="input-sm form-control-sm form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-sm-5">
                                                                <label htmlFor="input-normal" className=" form-control-label">Normal Input</label>
                                                            </div>
                                                            <div className="col col-sm-6">
                                                                <input type="text" id="input-normal" name="input-normal" placeholder="Normal" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-sm-5">
                                                                <label htmlFor="input-large" className=" form-control-label">Large Input</label>
                                                            </div>
                                                            <div className="col col-sm-6">
                                                                <input type="text" id="input-large" name="input-large" placeholder=".form-control-lg" className="input-lg form-control-lg form-control" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary btn-sm">
                                                        <i className="fa fa-dot-circle-o" /> Submit
                          </button>
                                                    <button type="reset" className="btn btn-danger btn-sm">
                                                        <i className="fa fa-ban" /> Reset
                          </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>Validation states</strong> Form
                        </div>
                                                <div className="card-body card-block">
                                                    <div className="has-success form-group">
                                                        <label htmlFor="inputIsValid" className=" form-control-label">Input is valid</label>
                                                        <input type="text" id="inputIsValid" className="is-valid form-control-success form-control" />
                                                    </div>
                                                    <div className="has-warning form-group">
                                                        <label htmlFor="inputIsInvalid" className=" form-control-label">Input is invalid</label>
                                                        <input type="text" id="inputIsInvalid" className="is-invalid form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>Validation states</strong> with optional icons
                          <em>(deprecated)</em>
                                                </div>
                                                <div className="card-body card-block">
                                                    <div className="has-success form-group">
                                                        <label htmlFor="inputSuccess2i" className=" form-control-label">Input with success</label>
                                                        <input type="text" id="inputSuccess2i" className="form-control-success form-control" />
                                                    </div>
                                                    <div className="has-warning form-group">
                                                        <label htmlFor="inputWarning2i" className=" form-control-label">Input with warning</label>
                                                        <input type="text" id="inputWarning2i" className="form-control-warning form-control" />
                                                    </div>
                                                    <div className="has-danger has-feedback form-group">
                                                        <label htmlFor="inputError2i" className=" form-control-label">Input with error</label>
                                                        <input type="text" id="inputError2i" className="form-control-danger form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>Icon/Text</strong> Groups
                        </div>
                                                <div className="card-body card-block">
                                                    <form action method="post" className="form-horizontal">
                                                        <div className="row form-group">
                                                            <div className="col col-md-12">
                                                                <div className="input-group">
                                                                    <div className="input-group-addon">
                                                                        <i className="fa fa-user" />
                                                                    </div>
                                                                    <input type="text" id="input1-group1" name="input1-group1" placeholder="Username" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-12">
                                                                <div className="input-group">
                                                                    <input type="email" id="input2-group1" name="input2-group1" placeholder="Email" className="form-control" />
                                                                    <div className="input-group-addon">
                                                                        <i className="far fa-envelope" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-12">
                                                                <div className="input-group">
                                                                    <div className="input-group-addon">
                                                                        <i className="fa fa-euro" />
                                                                    </div>
                                                                    <input type="text" id="input3-group1" name="input3-group1" placeholder=".." className="form-control" />
                                                                    <div className="input-group-addon">.00</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-success btn-sm">
                                                        <i className="fa fa-dot-circle-o" /> Submit
                          </button>
                                                    <button type="reset" className="btn btn-danger btn-sm">
                                                        <i className="fa fa-ban" /> Reset
                          </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>Buttons</strong> Groups
                        </div>
                                                <div className="card-body card-block">
                                                    <form action method="post" className="form-horizontal">
                                                        <div className="row form-group">
                                                            <div className="col col-md-12">
                                                                <div className="input-group">
                                                                    <div className="input-group-btn">
                                                                        <button className="btn btn-primary">
                                                                            <i className="fa fa-search" /> Search
                                    </button>
                                                                    </div>
                                                                    <input type="text" id="input1-group2" name="input1-group2" placeholder="Username" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-12">
                                                                <div className="input-group">
                                                                    <input type="email" id="input2-group2" name="input2-group2" placeholder="Email" className="form-control" />
                                                                    <div className="input-group-btn">
                                                                        <button className="btn btn-primary">Submit</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-12">
                                                                <div className="input-group">
                                                                    <div className="input-group-btn">
                                                                        <button className="btn btn-primary">
                                                                            <i className="fa fa-facebook" />
                                                                        </button>
                                                                    </div>
                                                                    <input type="text" id="input3-group2" name="input3-group2" placeholder="Search" className="form-control" />
                                                                    <div className="input-group-btn">
                                                                        <button className="btn btn-primary">
                                                                            <i className="fa fa-twitter" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-success btn-sm">
                                                        <i className="fa fa-dot-circle-o" /> Submit
                          </button>
                                                    <button type="reset" className="btn btn-danger btn-sm">
                                                        <i className="fa fa-ban" /> Reset
                          </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <strong>Dropdowns</strong> Groups
                        </div>
                                                <div className="card-body card-block">
                                                    <form className="form-horizontal">
                                                        <div className="row form-group">
                                                            <div className="col col-md-12">
                                                                <div className="input-group">
                                                                    <div className="input-group-btn">
                                                                        <div className="btn-group">
                                                                            <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-primary">Dropdown</button>
                                                                            <div tabIndex={-1} aria-hidden="true" role="menu" className="dropdown-menu">
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Action</button>
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Another Action</button>
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Something else here</button>
                                                                                <div tabIndex={-1} className="dropdown-divider" />
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Separated link</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <input type="text" id="input1-group3" name="input1-group3" placeholder="Username" className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-12">
                                                                <div className="input-group">
                                                                    <input type="email" id="input2-group3" name="input2-group3" placeholder="Email" className="form-control" />
                                                                    <div className="input-group-btn">
                                                                        <div className="btn-group">
                                                                            <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-primary">Dropdown</button>
                                                                            <div tabIndex={-1} aria-hidden="true" role="menu" className="dropdown-menu">
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Action</button>
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Another Action</button>
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Something else here</button>
                                                                                <div tabIndex={-1} className="dropdown-divider" />
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Separated link</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-12">
                                                                <div className="input-group">
                                                                    <div className="input-group-btn">
                                                                        <div className="btn-group">
                                                                            <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-primary">Action</button>
                                                                            <div tabIndex={-1} aria-hidden="true" role="menu" className="dropdown-menu">
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Action</button>
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Another Action</button>
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Something else here</button>
                                                                                <div tabIndex={-1} className="dropdown-divider" />
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Separated link</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <input type="text" id="input3-group3" name="input3-group3" placeholder=".." className="form-control" />
                                                                    <div className="input-group-btn">
                                                                        <div className="btn-group">
                                                                            <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-toggle btn btn-primary">Dropdown</button>
                                                                            <div tabIndex={-1} aria-hidden="true" role="menu" className="dropdown-menu">
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Action</button>
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Another Action</button>
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Something else here</button>
                                                                                <div tabIndex={-1} className="dropdown-divider" />
                                                                                <button type="button" tabIndex={0} className="dropdown-item">Separated link</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-success btn-sm">
                                                        <i className="fa fa-dot-circle-o" /> Submit
                          </button>
                                                    <button type="reset" className="btn btn-danger btn-sm">
                                                        <i className="fa fa-ban" /> Reset
                          </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    Use the grid for big devices!
                          <small>
                                                        <code>.col-lg-*</code>
                                                        <code>.col-md-*</code>
                                                        <code>.col-sm-*</code>
                                                    </small>
                                                </div>
                                                <div className="card-body card-block">
                                                    <form action method="post" className="form-horizontal">
                                                        <div className="row form-group">
                                                            <div className="col col-md-8">
                                                                <input type="text" placeholder=".col-md-8" className="form-control" />
                                                            </div>
                                                            <div className="col col-md-4">
                                                                <input type="text" placeholder=".col-md-4" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-7">
                                                                <input type="text" placeholder=".col-md-7" className="form-control" />
                                                            </div>
                                                            <div className="col col-md-5">
                                                                <input type="text" placeholder=".col-md-5" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-6">
                                                                <input type="text" placeholder=".col-md-6" className="form-control" />
                                                            </div>
                                                            <div className="col col-md-6">
                                                                <input type="text" placeholder=".col-md-6" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-5">
                                                                <input type="text" placeholder=".col-md-5" className="form-control" />
                                                            </div>
                                                            <div className="col col-md-7">
                                                                <input type="text" placeholder=".col-md-7" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col col-md-4">
                                                                <input type="text" placeholder=".col-md-4" className="form-control" />
                                                            </div>
                                                            <div className="col col-md-8">
                                                                <input type="text" placeholder=".col-md-8" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary btn-sm">Action</button>
                                                    <button className="btn btn-danger btn-sm">Action</button>
                                                    <button className="btn btn-warning btn-sm">Action</button>
                                                    <button className="btn btn-info btn-sm">Action</button>
                                                    <button className="btn btn-success btn-sm">Action</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    Input Grid for small devices!
                          <small>
                                                        <code>.col-*</code>
                                                    </small>
                                                </div>
                                                <div className="card-body card-block">
                                                    <form action method="post" className="form-horizontal">
                                                        <div className="row form-group">
                                                            <div className="col-4">
                                                                <input type="text" placeholder=".col-4" className="form-control" />
                                                            </div>
                                                            <div className="col-8">
                                                                <input type="text" placeholder=".col-8" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col-5">
                                                                <input type="text" placeholder=".col-5" className="form-control" />
                                                            </div>
                                                            <div className="col-7">
                                                                <input type="text" placeholder=".col-7" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col-6">
                                                                <input type="text" placeholder=".col-6" className="form-control" />
                                                            </div>
                                                            <div className="col-6">
                                                                <input type="text" placeholder=".col-6" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col-7">
                                                                <input type="text" placeholder=".col-5" className="form-control" />
                                                            </div>
                                                            <div className="col-5">
                                                                <input type="text" placeholder=".col-5" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="row form-group">
                                                            <div className="col-8">
                                                                <input type="text" placeholder=".col-8" className="form-control" />
                                                            </div>
                                                            <div className="col-4">
                                                                <input type="text" placeholder=".col-4" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary btn-sm">Action</button>
                                                    <button className="btn btn-danger btn-sm">Action</button>
                                                    <button className="btn btn-warning btn-sm">Action</button>
                                                    <button className="btn btn-info btn-sm">Action</button>
                                                    <button className="btn btn-success btn-sm">Action</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">Example Form</div>
                                                <div className="card-body card-block">
                                                    <form action method="post" className>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-addon">Username</div>
                                                                <input type="text" id="username3" name="username3" className="form-control" />
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-user" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-addon">Email</div>
                                                                <input type="email" id="email3" name="email3" className="form-control" />
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-envelope" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-addon">Password</div>
                                                                <input type="password" id="password3" name="password3" className="form-control" />
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-asterisk" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-actions form-group">
                                                            <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">Example Form</div>
                                                <div className="card-body card-block">
                                                    <form action method="post" className>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input type="text" id="username2" name="username2" placeholder="Username" className="form-control" />
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-user" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input type="email" id="email2" name="email2" placeholder="Email" className="form-control" />
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-envelope" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <input type="password" id="password2" name="password2" placeholder="Password" className="form-control" />
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-asterisk" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-actions form-group">
                                                            <button type="submit" className="btn btn-secondary btn-sm">Submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card">
                                                <div className="card-header">Example Form</div>
                                                <div className="card-body card-block">
                                                    <form action method="post" className>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-user" />
                                                                </div>
                                                                <input type="text" id="username" name="username" placeholder="Username" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-envelope" />
                                                                </div>
                                                                <input type="email" id="email" name="email" placeholder="Email" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="input-group">
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-asterisk" />
                                                                </div>
                                                                <input type="password" id="password" name="password" placeholder="Password" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="form-actions form-group">
                                                            <button type="submit" className="btn btn-success btn-sm">Submit</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
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