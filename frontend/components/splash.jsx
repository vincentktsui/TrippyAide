import React from 'react';
import SplashModal from './splash_modal'

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {modal: false}
    }
    componentdidMount() {
        
    }
    openModal() {
        this.setState({modal: true})
    }
    closeModal() {
        this.setState({modal: false})
    }
    render () {
        return (
            <div>
                <SplashModal modal={this.state.modal} closeModal={this.closeModal.bind(this)}/>
                <header className='splash-top'>
                    <div onClick={this.openModal.bind(this)}>Where to? <span className="fa fa-chevron-down"></span></div>
                </header>
            </div>
        )
    }
}

export default Splash;