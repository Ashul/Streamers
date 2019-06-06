import React from 'react';
import ReactDOM from 'react-dom';

const Modal =(props)=>{
    return ReactDOM.createPortal(
        <div>
            <div className="card">
            <div className="card-header">{props.title}</div>
            <div className="card-body">{props.desc}</div>
            <div className="card-footer">Footer</div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}
export default Modal;