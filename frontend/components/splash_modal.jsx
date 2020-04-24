import React from 'react';
import SplashSearchContainer from './splash_search_container';
import SearchBar from './search_bar';

const SplashModal = (props) => {
    if (!props.modal) {
        return null;
    }
    return (
        <div className="splash-modal">
            <div className="modal-screen" onClick={props.closeModal}>
            </div>
            <SplashSearchContainer />

        </div>
    );
};

export default SplashModal;