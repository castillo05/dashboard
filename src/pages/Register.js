import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class Register extends React.Component {
    state = { 
        form:{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            c_password:''
        },
        loading:false,
        error:null,
        alert,
        isRegister:false
     }

    //  url='https://gentle-shelf-08563.herokuapp.com/';
        url='http://localhost:2000/'
    handleChange=(e)=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }

    // Registro de Usuario

    userRegister= async({firstName, lastName, email, password})=>{
        return await Axios.post(this.url+'singup',{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password
        },{
            headers:{'Content-Type': 'application/json'}
        });


    }

    handleSubmit=e=>{
        e.preventDefault();
            
        try {

            if(this.state.form.password === this.state.form.c_password){
                this.userRegister(this.state.form).then((result)=>{
                  console.log(result);
                  if(result.data.message){
                      this.setState({
                          error:true,
                          alert:result.data.message
                      })
                      setTimeout(()=>{
                          this.setState({
                              error:false
                          })
                      },3000)
                  }else if(!result){
                      this.setState({
                          error:true,
                          alert:'Error interno del servidor!!!'
                      })
                  }else{
                      this.setState({
                          error:true,
                          alert:result.data.message
                      })
                  }

                  
              }).catch((error)=>{
                  console.log(error);
                  if(error.response.data.message){
                    return this.setState({
                      error:true,
                      alert:error.response.data.message
                    })
                  }
              })
            }else{
              console.log('Password do not match');
              this.setState({
                error:true,
                alert:'Password do not match'
              })
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    


    render() { 
        return ( 
           <section id="wrapper" className="login-register login-sidebar">
               {this.state.error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{this.state.alert}</strong>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                }
  <div className="login-box card">
    <div className="card-body">
      <form onSubmit={this.handleSubmit} className="form-horizontal form-material" id="loginform">
        <a className="text-center db"><img src="../assets/images/logo-icon.png" alt="Home" /><br /><img src="../assets/images/logo-text.png" alt="Home" /></a>
        <h3 className="box-title m-t-40 m-b-0">Register Now</h3><small>Create your account and enjoy</small>
        <div className="form-group m-t-20">
          <div className="col-xs-12">
            <input onChange={this.handleChange} name="firstName" className="form-control" type="text" required placeholder="Name" />
          </div>
        </div>
        <div className="form-group m-t-20">
          <div className="col-xs-12">
            <input onChange={this.handleChange} name="lastName" className="form-control" type="text" required placeholder="LastName" />
          </div>
        </div>
        <div className="form-group ">
          <div className="col-xs-12">
            <input onChange={this.handleChange} name="email" className="form-control" type="text" required placeholder="Email" />
          </div>
        </div>
        <div className="form-group ">
          <div className="col-xs-12">
            <input onChange={this.handleChange} name="password" className="form-control" type="password" required placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <input onChange={this.handleChange} name="c_password" className="form-control" type="password" required placeholder="Confirm Password" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <div className="checkbox checkbox-primary p-t-0">
              <input id="checkbox-signup" type="checkbox" />
              <label htmlFor="checkbox-signup"> I agree to all <a href="#">Terms</a></label>
            </div>
          </div>
        </div>
        <div className="form-group text-center m-t-20">
          <div className="col-xs-12">
            <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light">Sign Up</button>
          </div>
        </div>
        <div className="form-group m-b-0">
          <div className="col-sm-12 text-center">
            <p>Already have an account? <Link to="/" className="text-info m-l-5"><b>Sign In</b></Link></p>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

          
         );
    }
}
 
export default Register;