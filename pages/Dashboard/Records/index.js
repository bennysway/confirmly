import Head from 'next/head'
import useScript from '../../../hooks/useScript'
import SidebarNav from '../../../widgets/SidebarNav'
import TopAndSideBar from '../../../widgets/TopAndSideBars'
import styles from './style.module.css'

export default function Records() {

    var content = []
    content.push(
        <>
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

        </>
    )

    return (
        <>
            <Head>
                <title>Verify Document</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Verify Document in Confirmly" />
                <meta name="author" content="BennySway" />
                <meta name="keywords" content="Verification id verify"></meta>
            </Head>
            <TopAndSideBar content={content} />
        </>
    )
}