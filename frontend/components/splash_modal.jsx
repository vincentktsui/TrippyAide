import React from 'react';
import SplashSearch from './splash_search'

const SplashModal = (props) => {
    if (!props.modal) {
        return null;
    }
    return (
        <div className="splash-modal">
            <div className="modal-screen" onClick={props.closeModal}>
            </div>
            <SplashSearch />

        </div>
    );
};

export default SplashModal;