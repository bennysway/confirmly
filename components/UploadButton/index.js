import useScript from '../../hooks/useScript'

export default function UploadButton() {

    //useScript("scripts/uploadButton.js")

    return (
        <>
            <div>
                {/* Upload  */}
                <form id="file-upload-form" className="uploader">
                    <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
                    <label htmlFor="file-upload" id="file-drag">
                        <img id="file-image" src="#" alt="Preview" className="hidden" />
                        <div id="start">
                            <i className="fa fa-download" aria-hidden="true" />
                            <br/>
                            <div>Select a file...</div>
                            <div id="notimage" className="hidden">Please select a file</div>
                            <span id="file-upload-btn" className="btn btn-primary">Select a file</span>
                        </div>
                        <div id="response" className="hidden">
                            <div id="messages" />
                            <progress className="progress" id="file-progress" value={0}>
                                <span>0</span>%
              </progress>
                        </div>
                    </label>
                </form>
            </div>
            <style jsx>{`
            @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);
            @import url("https://fonts.googleapis.com/css?family=Roboto");
            html,
            body,
            * {
                box-sizing: border-box;
                font-size: 16px;
            }
            
            html,
            body {
                height: 100%;
                text-align: center;
            }
            
            body {
                padding: 2rem;
                background: #f8f8f8;
            }
            
            h2 {
                font-family: "Roboto", sans-serif;
                font-size: 26px;
                line-height: 1;
                color: #03bafc;
                margin-bottom: 0;
            }
            
            p {
                font-family: "Roboto", sans-serif;
                font-size: 18px;
                color: #5f6982;
            }
            
            .uploader {
                display: block;
                clear: both;
                margin: 0 auto;
                width: 100%;
                max-width: 600px;
            }
            .uploader label {
                float: left;
                clear: both;
                width: 100%;
                padding: 2rem 1.5rem;
                text-align: center;
                background: #fff;
                border-radius: 7px;
                border: 3px solid #eee;
                -webkit-transition: all 0.2s ease;
                transition: all 0.2s ease;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            .uploader label:hover {
                border-color: #03bafc;
            }
            .uploader label.hover {
                border: 3px solid #03bafc;
                box-shadow: inset 0 0 0 6px #eee;
            }
            .uploader label.hover #start i.fa {
                -webkit-transform: scale(0.8);
                transform: scale(0.8);
                opacity: 0.3;
            }
            .uploader #start {
                float: left;
                clear: both;
                width: 100%;
            }
            .uploader #start.hidden {
                display: none;
            }
            .uploader #start i.fa {
                font-size: 50px;
                margin-bottom: 1rem;
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
            }
            .uploader #response {
                float: left;
                clear: both;
                width: 100%;
            }
            .uploader #response.hidden {
                display: none;
            }
            .uploader #response #messages {
                margin-bottom: 0.5rem;
            }
            .uploader #file-image {
                display: inline;
                margin: 0 auto 0.5rem auto;
                width: auto;
                height: auto;
                max-width: 180px;
            }
            .uploader #file-image.hidden {
                display: none;
            }
            .uploader #notimage {
                display: block;
                float: left;
                clear: both;
                width: 100%;
            }
            .uploader #notimage.hidden {
                display: none;
            }
            .uploader progress,
            .uploader .progress {
                display: inline;
                clear: both;
                margin: 0 auto;
                width: 100%;
                max-width: 180px;
                height: 8px;
                border: 0;
                border-radius: 4px;
                background-color: #eee;
                overflow: hidden;
            }
            .uploader .progress[value]::-webkit-progress-bar {
                border-radius: 4px;
                background-color: #eee;
            }
            .uploader .progress[value]::-webkit-progress-value {
                background: -webkit-gradient(linear, left top, right top, from(#393f90), color-stop(50%, #03bafc));
                background: linear-gradient(to right, #393f90 0%, #03bafc 50%);
                border-radius: 4px;
            }
            .uploader .progress[value]::-moz-progress-bar {
                background: linear-gradient(to right, #393f90 0%, #03bafc 50%);
                border-radius: 4px;
            }
            .uploader input[type="file"] {
                display: none;
            }
            .uploader div {
                margin: 0 0 0.5rem 0;
                color: #5f6982;
            }
            .uploader .btn {
                display: inline-block;
                margin: 0.5rem 0.5rem 1rem 0.5rem;
                clear: both;
                font-family: inherit;
                font-weight: 700;
                font-size: 14px;
                text-decoration: none;
                text-transform: initial;
                border: none;
                border-radius: 0.2rem;
                outline: none;
                padding: 0 1rem;
                height: 36px;
                line-height: 36px;
                color: #fff;
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
                box-sizing: border-box;
                background: #03bafc;
                border-color: #03bafc;
                cursor: pointer;
            }
            
            `}</style>
        </>
    )
}