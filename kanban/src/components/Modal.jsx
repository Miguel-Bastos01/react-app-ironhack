import React from "react"

export const Modal = () => {

    return (
    <>
      {<div className="modal-container">
            <div className="modal">
                <div className="modal-header">
                <p className="close">✖</p>
                </div>
                <div className="modal-content">
                    <h1>Modal title</h1>
                    <p>Modal description</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-submit">
                        Submit
                    </button>
                    <button className="btn btn-cancel">
                        Cancel
                    </button>
                </div>
            </div>
        </div>}
    </>
    )
}