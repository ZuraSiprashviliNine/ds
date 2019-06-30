
import React from 'react';

import {
    Link
} from 'react-router-dom';

export class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-desktop-10 offset-desktop-1 col-laptop-12">
                                <div className="header-content-wrap">
                                    <div className="header-content-title">
                                        <div className="header-content-title-text">
                                            Hello World
                                        </div>
                                        <div className="header-content-title-text">
                                            Sample Project
                                        </div>
                                    </div>
                                    <div className="header-content-text">
                                        Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                                    </div>
                                    <div className="header-content-button-wrap">
                                        <Link 
                                            to="/about"
                                            className="header-content-button">
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://www.nzte.govt.nz/-/media/NZTE/Images/Contact-us/International-offices-banner/united-states-new-york966x504.jpg?h=504&la=en&w=966&hash=E1CF6E7991FB41A97A663A3921BB5064EDE7DD68" className="header-image"/>
            </header>
        )
    }
}