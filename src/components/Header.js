import React from 'react';
import { render } from '@testing-library/react';

class Header extends React.Component {
    render(){
        return(
     
            <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                
                <div className="navbar-header">
                
                
                    <img src="assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
                    
                    <img src="assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                    <b></b>
                <span>
                    {/* dark Logo text */}
                    <img src="assets/images/logo-text.png" alt="homepage" className="dark-logo" />
                    {/* Light Logo text */}
                    <img src="assets/images/logo-light-text.png" className="light-logo" alt="homepage" /></span> 
                </div>
            
                <div className="navbar-collapse">
                
                <ul className="navbar-nav mr-auto">
                    {/* This is  */}
                    <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark"><i className="ti-menu" /></a> </li>
                    <li className="nav-item"> <a className="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark"><i className="ti-menu" /></a> </li>
                    <li className="nav-item hidden-sm-down" />
                </ul>
                
                <ul className="navbar-nav my-lg-0">
                
                    <li className="nav-item hidden-xs-down search-box"> <a className="nav-link hidden-sm-down waves-effect waves-dark" ><i className="ti-search" /></a>
                    <form className="app-search">
                        <input type="text" className="form-control" placeholder="Search & enter" /> <a className="srh-btn"><i className="ti-close" /></a> </form>
                    </li>
                
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle waves-effect waves-dark" id={2} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-email" />
                        <div className="notify"> <span className="heartbit" /> <span className="point" /> </div>
                    </a>
                    <div className="dropdown-menu mailbox dropdown-menu-right animated bounceInDown" aria-labelledby={2}>
                        <ul>
                        <li>
                            <div className="drop-title">You have 4 new messages</div>
                        </li>
                        <li>
                            <div className="message-center">
                            {/* Message */}
                            <a>
                                <div className="user-img"> <img src="assets/images/users/1.jpg" alt="user" className="img-circle" /> <span className="profile-status online pull-right" /> </div>
                                <div className="mail-contnet">
                                <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:30 AM</span> </div>
                            </a>
                            {/* Message */}
                            <a >
                                <div className="user-img"> <img src="assets/images/users/2.jpg" alt="user" className="img-circle" /> <span className="profile-status busy pull-right" /> </div>
                                <div className="mail-contnet">
                                <h5>Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you at</span> <span className="time">9:10 AM</span> </div>
                            </a>
                            {/* Message */}
                            <a >
                                <div className="user-img"> <img src="assets/images/users/3.jpg" alt="user" className="img-circle" /> <span className="profile-status away pull-right" /> </div>
                                <div className="mail-contnet">
                                <h5>Arijit Sinh</h5> <span className="mail-desc">I am a singer!</span> <span className="time">9:08 AM</span> </div>
                            </a>
                            {/* Message */}
                            <a >
                                <div className="user-img"> <img src="assets/images/users/4.jpg" alt="user" className="img-circle" /> <span className="profile-status offline pull-right" /> </div>
                                <div className="mail-contnet">
                                <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                            </a>
                            </div>
                        </li>
                        <li>
                            <a className="nav-link text-center" > <strong>See all e-Mails</strong> <i className="fa fa-angle-right" /> </a>
                        </li>
                        </ul>
                    </div>
                    </li>
                
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle waves-effect waves-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../assets/images/users/1.jpg" alt="user" className="profile-pic" /></a>
                    <div className="dropdown-menu dropdown-menu-right animated flipInY">
                        <ul className="dropdown-user">
                        <li>
                            <div className="dw-user-box">
                            <div className="u-img"><img src="assets/images/users/1.jpg" alt="user" /></div>
                            <div className="u-text">
                                <h4>Steave Jobs</h4>
                                <p className="text-muted">varun@gmail.com</p><a className="btn btn-rounded btn-danger btn-sm">View Profile</a></div>
                            </div>
                        </li>
                        <li role="separator" className="divider" />
                        <li><a onClick={this.props.logout}><i className="fa fa-power-off" /> Logout</a></li>
                        </ul>
                    </div>
                    </li>
                </ul>
                </div>
            </nav>
            </header>
        );
    }
    
    
}

export default Header;