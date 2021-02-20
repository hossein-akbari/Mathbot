import React, { Component } from "react";

class Header extends Component {
    render () {
        return (
            <div className="header">
                <div className="container">
                   <div className="row">
                        <div className="col-md-5 col-xs-4"></div>
                            <div className="col-md-2 col-xs-4">
                                <a className="logo-button" href="/"><span className="logo-button-span">م</span>ث <span className="logo-button-span">ب</span>ات</a> <span style={{fontSize: "10px"}}>(پیش آلفا)</span>
                            </div>
                        <div className="col-md-5 col-xs-4"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;