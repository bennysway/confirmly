import Head from 'next/head'
import UploadButton from '../../../components/UploadButton'
import TopAndSideBar from '../../../widgets/TopAndSideBars'

export default function Submit() {
    var content = []
    content.push(
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">Details</div>
                        <div className="card-body">
                            <div className="card-title">
                                <h3 className="text-center title-2">main form</h3>
                            </div>
                            <hr />
                            <form action method="post" noValidate="novalidate">
                                <div className="form-group">
                                    <label className="control-label mb-1">Deaceased name:</label>
                                    <input type="text" className="form-control" aria-required="true" aria-invalid="false" />
                                </div>
                                <div className="form-group has-success">
                                    <label className="control-label mb-1">Caused of death:</label>
                                    <input type="text" className="form-control valid" data-val-required="Please enter the cause of death" aria-required="true" aria-invalid="false" />
                                    <span className="help-block field-validation-valid" />
                                </div>
                                <div className="form-group">
                                    <label className="control-label mb-1">Facility officer in charge:</label>
                                    <input type="text" className="form-control" data-val-required="Please enter the officer in charge" />
                                    <span className="help-block" />
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label className="control-label mb-1">Sex:</label>
                                            <input type="tel" className="form-control" />
                                            <span className="help-block" />
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="form-group">
                                            <label className="control-label mb-1">Date of Death:</label>
                                            <input type="tel" className="form-control" />
                                            <span className="help-block" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label className="control-label mb-1">Age</label>
                                            <input type="tel" className="form-control" />
                                            <span className="help-block" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block" style={{ background: '#03bafc' }}>
                                        <i className="fa fa-check-circle fa-lg" />&nbsp;
                                                                    <span id="payment-button-amount">Submit</span>
                                        <span id="payment-button-sending" style={{ display: 'none' }}>Sending…</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">Upload Documents</div>
                        <div className="card-body card-block">
                            <div className="form-group">
                                <div className="form-group">
                                    <UploadButton />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            Details of the person who brought the deseased
                        </div>
                        <div className="card-body card-block">
                            <form action method="post" encType="multipart/form-data" className="form-horizontal">
                                <div className="row form-group">
                                    <div className="col col-md-3">
                                        <label htmlFor="text-input" className=" form-control-label">Name and Surname</label>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <input type="text" id="text-input" name="text-input" className="form-control" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3">
                                        <label htmlFor="email-input" className=" form-control-label">Email</label>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <input type="email" id="email-input" name="email-input" className="form-control" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3">
                                        <label htmlFor="password-input" className=" form-control-label">Phone Number</label>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col col-md-3">
                                        <label htmlFor="textarea-input" className=" form-control-label">Report on the Deseased</label>
                                    </div>
                                    <div className="col-12 col-md-9">
                                        <textarea name="textarea-input" id="textarea-input" rows={9} placeholder="Content..." className="form-control" defaultValue={""} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block" style={{ background: '#03bafc' }}>
                                <i className="fa fa-check-circle fa-lg" />&nbsp;
                                                                    <span id="payment-button-amount">Save</span>
                                <span id="payment-button-sending" style={{ display: 'none' }}>Sending…</span>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )


    return (
        <>
            <Head>
                <title>Submit a Document</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Submit a document into the Confirmly database" />
                <meta name="author" content="BennySway" />
                <meta name="keywords" content="submit ID"></meta>
            </Head>
            <TopAndSideBar content={content} />
        </>
    )
}