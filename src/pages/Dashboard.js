import React, { Fragment } from 'react';
import {Redirect}  from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Grafica from '../components/Grafica';

class Dashboard extends React.Component {
       
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

    // Validar Identity
    verifiedIdentity=()=>{
        const identity = JSON.parse(localStorage.getItem('identity'));
        console.log(identity);
        if(!identity){
            this.setState({
                isLogout:true
            })
        }
        
    }

    componentDidMount(){
        this.verifiedIdentity();
    }
    render() { 
        
        return ( 
            <Fragment>
               
                {this.state.isLogout ? <Redirect from="/dashboard" to="/"></Redirect> : null}
                <div id="main-wrapper">
                    <Header logout={this.logout}/>
                    <Sidebar/>
                     <div className="page-wrapper">
                         <div className="container-fluid">
                         <Grafica></Grafica>
                         </div>
                     </div>   
                </div>
                
               
            </Fragment>
         );
    }
}
 
export default Dashboard;