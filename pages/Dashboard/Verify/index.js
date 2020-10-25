import DashScripts from "../../../providers/mainDashboardScript";
import TopAndSideBar from "../../../widgets/TopAndSideBars";
import Head from 'next/head'


export default function Verify() {

    var content = []
    content.push
        (
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">Verify</div>
                        <div className="card-body">
                            <div className="card-title">
                                <h3 className="text-center title-2">Open Document Details</h3>
                            </div>
                            <hr />
                            <form action="true" method="post" noValidate="novalidate">
                                <div className="form-group">
                                    <label className="control-label mb-1">Deaceased name:</label>
                                    <input type="text" className="form-control" aria-required="true" aria-invalid="false" />
                                </div>
                                <div className="form-group">
                                    <label className="control-label mb-1">Identification Number</label>
                                    <input type="text" className="form-control" data-val-required="Please enter the officer in charge" />
                                    <span className="help-block" />
                                </div>
                                <div>
                                    <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
                                        <i className="fa fa-check-circle fa-lg" />&nbsp;
                                                                    <span id="payment-button-amount">Find</span>
                                        <span id="payment-button-sending" style={{ display: 'none' }}>Sending…</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    DashScripts()
    return (
        <>
        <Head>
                <title>Verify a Document</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Verify a document in the Confirmly database" />
                <meta name="author" content="BennySway" />
                <meta name="keywords" content="verify ID"></meta>
            </Head>
            <TopAndSideBar content={content} />
        </>
    )
}