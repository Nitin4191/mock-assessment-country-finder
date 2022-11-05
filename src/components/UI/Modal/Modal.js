import { Fragment } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

function Backdrop(props) {
    return (
        <div className={classes.backdrop} onCLick={props.onClose}></div>
    );
}

function ModalOverlay(props) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

const portalElement = document.getElementById('overlay');

export default function Modal(props) {
    return (
        <Fragment>
            {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
}