import React, { Fragment } from 'react';
import axios from 'axios';
import '../components/style/LoginForm.css';
import { Redirect} from 'react-router-dom'

class LoginForm extends React.Component{
    state={
            form:{
                 email:'',
                 password:''
            },
            loading:false,
            error:null,
            alert,
            isLogin:false
           
        }

    // url='https://gentle-shelf-08563.herokuapp.com/';
    url='http://localhost:2000/'
    loginUser=async ({email,password},gethash)=> {
        return await axios.post(this.url+'singin',{
            email:email,
            password:password,
            gethash:gethash
        },{
            headers:{'Content-Type': 'application/json'}
        });
    }

    getIdentity=()=>{
        const identity = JSON.stringify(localStorage.getItem('identity'));
        return identity;
    }

    handleSubmit= (e)=>{
        e.preventDefault();
        
        console.log('Button was clicked');

        try {
            // fetch(this.url+'singin/',{
            //     method:'POST',
            //     body: JSON.stringify(this.state),
            //     headers:{'Content-Type': 'application/json'}
            // }).then(res=>res.json())
            //   .then(response=>console.log('Success',response))
            this.loginUser(this.state.form).then((res)=>{
                console.log(res);
               
                if(!res.data.user){
                    return this.setState({
                        error:true,
                        alert:res.data.message
                    })
                }else if(res.status === 403){
                   return this.setState({
                        error:true,
                        alert:res.data.message
                    })
                }
                JSON.stringify(localStorage.setItem('identity',JSON.stringify(res.data.user)));
                this.setState({
                    loading:true
                })
            this.loginUser(this.state.form,true).then((result)=>{
                let token = result.data.token;
                if(token.length <= 0){
                    console.log('el token no se genero');
                }else{
                    localStorage.setItem('token',JSON.stringify(token));
                    console.log(result);
                    this.setState({
                        isLogin:true,
                        loading:false
                    }); 
                    
                }
                
            }).catch((error)=>{
                console.log(error);
            });
            }).catch((error)=>{
                console.log(error); 
                this.setState({
                    error:true,
                    alert:error.response.data.message
                })             
            });
           
        } catch (error) {
            console.log(error);
        }
        
    }

   

    handleChange=e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
            
        })
    }
    render(){
        console.log(this.state);
        return(
           
            <Fragment>
            {this.state.isLogin ? <Redirect
                from="/"
                to="/dashboard" 
            />: null}
            <section className="container-fluid">
            {this.state.error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{this.state.alert}</strong>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                }
                <div className="row">
                <div className="col-8">
                    <h1>Login Form</h1>
                </div>
               
                <div className="login-box">
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Correo Electronico</label>
                            <input onChange={this.handleChange} type="text" name="email" className="form-control" placeholder="example@example.com" />
                        </div>
                        <div className="form-group">
                            <label>Contraseña</label>
                            <input onChange={this.handleChange} type="password" name="password" className="form-control" placeholder="********" />
                        </div>
                        <button className="btn btn-primary">Login</button>
                     </form>
                     {this.state.loading && <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>}
                </div>
               
                </div>
            </section>
            </Fragment>
           
        )
    }
}

export default LoginForm;