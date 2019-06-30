
import React from 'react';

import {connect} from 'react-redux';

import {
    INIT_INFO_STEP
} from '../../../Actions/Steps';

class Step_2 extends React.Component{
    componentDidMount(){
        alert(' not ready');
    }

    render(){
        return (
            <main className="step reg">
                <div className="container">
                    <div className="row">
                        <div className="col-desktop-8 offset-desktop-2 col-laptop-10 offset-laptop-1 col-phone-12">
                            <div className="step-wrap">
                                <h3>
                                    Information
                                </h3>
                                <div className="reg-form">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const Actions = dispatch => {
    return {
        initInfo: () => {
        }
    }
}

const States = store => {
    return {
    }
}

export default connect(States, Actions)(Step_2);