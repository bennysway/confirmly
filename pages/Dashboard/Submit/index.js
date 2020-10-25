import Head from 'next/head'
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
                                    <div className="col-2">
                                        <div className="form-group">
                                            <label className="control-label mb-1">Sex:</label>
                                            <input id="cc-exp" name="cc-exp" type="tel" className="form-control" />
                                            <span className="help-block" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <label className="control-label mb-1">Date of death:</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button id="payment-button" type="submit" className="btn btn-lg btn-info btn-block">
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
                            <form action="true" method="post">
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
                            <form action="true" method="post">
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