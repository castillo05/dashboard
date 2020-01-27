import React, { Fragment } from 'react';
import Header from './Header'
import Sidebar from './Sidebar';
class Layout extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            isLogout:false
        }
        
    }
    // logout
    logout=()=>{
        localStorage.removeItem('identity')
        localStorage.removeItem('token');
        localStorage.clear();
        this.setState({
            isLogout:true
        })
    }


    render(){
        return(
            <Fragment>
                <Header logout={this.logout}/>
                <Sidebar/>
                {this.props.children}
            </Fragment>
        )
    }
    
}

export default Layout;